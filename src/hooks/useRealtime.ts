import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase/client.js';
import { protaxChannel } from '@/components/client/protaxChannel.js';
import { realtimeService } from '../services/realtime/realtimeService.js';
import { useNotificationStore } from '../lib/store.js';

export interface PresenceState {
  [key: string]: { online_at: string; user_id: string }; // Replace `any` with a specific type
}

export interface PresenceData {
  user_id: string;
  online_at: string;
  [key: string]: unknown; // Add additional fields if necessary
}

export interface UseRealtimeReturn {
  presence: PresenceState;
  isConnected: boolean;
  sendMessage: (message: string, data?: Record<string, unknown>) => Promise<void>;
  updatePresence: (data: PresenceData) => Promise<void>;
  testConnection: () => Promise<boolean>;
}

export function useRealtime(): UseRealtimeReturn {

  const [presence, setPresence] = useState<PresenceState>({});
  const [isConnected, setIsConnected] = useState(false);
  const { addNotification } = useNotificationStore();
  async function testConnection(): Promise<boolean> {
    // implementation
    return true; // or false based on the actual connection status
  }
  useEffect(() => {
    let mounted = true;

    const setupRealtime = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        const subscription = protaxChannel
          .on('presence', { event: 'sync' }, () => {
            if (mounted) {
              const rawPresenceState = protaxChannel.presenceState();
              const transformedPresenceState: PresenceState = Object.keys(rawPresenceState).reduce((acc, key) => {
                const presenceArray = rawPresenceState[key];
                if ((presenceArray ?? []).length > 0) {
                  acc[key] = {
                    online_at: (presenceArray[0] as { online_at: string })?.online_at || '',
                    user_id: (presenceArray?.[0]?.presence_ref) ?? ''
                  };
                }
                return acc;
              }, {} as PresenceState);
              setPresence(transformedPresenceState);
              setIsConnected(true);
            }
          })
          .subscribe(async (status: string) => {
            if (status === 'SUBSCRIBED' && user) {
              await protaxChannel.track({
                online_at: new Date().toISOString(),
                user_id: user.id
              });
            }
          });

        return () => {
          mounted = false;
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Realtime setup error:', error);
        addNotification('Failed to connect to realtime service', 'error');
        return () => {}; // Return a no-op cleanup function in case of error
      };
    };

    setupRealtime();

    return () => {
      mounted = false;
    };
  }, []);

  const sendMessage = async (message: string, data?: Record<string, unknown>) => {
    try {
      await realtimeService.sendMessage(message, data);
    } catch (error) {
      console.error('Failed to send message:', error);
      addNotification('Failed to send message', 'error');
    }
  };

  const updatePresence = async (data: PresenceData) => {
    try {
      await realtimeService.updatePresence(data);
    } catch (error) {
      console.error('Failed to update presence:', error);
      addNotification('Failed to update presence', 'error');
    }
  };

  return {
    presence,
    isConnected,
    sendMessage,
    updatePresence,
    testConnection
  };
}