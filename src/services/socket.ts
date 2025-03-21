import io, { Socket } from 'socket.io-client';

class SocketService {
  private socket: typeof Socket | null = null;
  private socketUrl = 'http://localhost:3000';

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

  emit(event: string, data: unknown) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  on(event: string, callback: (data: unknown) => void) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
}

export const socketService = new SocketService();