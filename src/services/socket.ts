import io, { Socket } from 'socket.io-client';

class SocketService {
  private socket: typeof Socket | null = null;
  private socketUrl = 'http://localhost:3000';
  private socketOptions = { transports: ['websocket'] };
  private socketReconnectTimeout = 5000;
  private socketReconnectAttempts = 5;
  private socketReconnectDelay = 1000;
  private socketReconnectMaxDelay = 5000;
  private socketRandomizationFactor = 0.5;

  connect(consultationId: string) {
    if (this.socket) return;

    this.socket = io(this.socketUrl, {
      query: { consultationId },
      transports: ['websocket']
    });

    this.socket?.on('connect', () => {
      console.log('Connected to socket server');
    
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket() {
    return this.socket;
  }

  emit(event: string, data: any) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
}

export const socketService = new SocketService();