import { protaxChannel } from '../../lib/supabase/client';
export const realtimeService = {
    async sendMessage(message, data = {}) {
        return protaxChannel.send({
            type: 'broadcast',
            event: 'message',
            payload: { message, data }
        });
    },
    async updatePresence(presenceData) {
        return protaxChannel.track(presenceData);
    },
    getPresence() {
        return protaxChannel.presenceState();
    },
    async unsubscribe() {
        return protaxChannel.unsubscribe();
    }
};
