export const TWILIO_CONFIG = {
    accountSid: 'your_account_sid',
    authToken: 'your_auth_token',
    phoneNumber: 'your_phone_number',
    whatsappNumber: 'your_whatsapp_number'
};
class TwilioService {
    static instance;
    constructor() { }
    static getInstance() {
        if (!TwilioService.instance) {
            TwilioService.instance = new TwilioService();
        }
        return TwilioService.instance;
    }
    async sendSMS(to, message) {
        try {
            const response = await fetch('/.netlify/functions/send-sms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to,
                    message,
                    accountSid: TWILIO_CONFIG.accountSid,
                    authToken: TWILIO_CONFIG.authToken,
                    from: TWILIO_CONFIG.phoneNumber
                })
            });
            if (!response.ok)
                throw new Error('Failed to send SMS');
            return await response.json();
        }
        catch (error) {
            console.error('SMS sending error:', error);
            throw error;
        }
    }
    async sendWhatsApp(to, message) {
        try {
            const response = await fetch('/.netlify/functions/send-whatsapp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: `whatsapp:${to}`,
                    from: `whatsapp:${TWILIO_CONFIG.whatsappNumber}`,
                    message,
                    accountSid: TWILIO_CONFIG.accountSid,
                    authToken: TWILIO_CONFIG.authToken
                })
            });
            if (!response.ok)
                throw new Error('Failed to send WhatsApp message');
            return await response.json();
        }
        catch (error) {
            console.error('WhatsApp sending error:', error);
            throw error;
        }
    }
}
export const twilioService = TwilioService.getInstance();
