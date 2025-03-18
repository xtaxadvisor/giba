import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
export class AWSEmailService {
    static instance;
    sesClient;
    defaultSender = 'info@protaxadvisors.tax';
    constructor() {
        this.sesClient = new SESClient({
            region: 'us-east-1',
            credentials: {
                accessKeyId: '6073-9277-5096',
                secretAccessKey: 'yAKIAY223OHO4DH34ZU5J'
            }
        });
    }
    static getInstance() {
        if (!AWSEmailService.instance) {
            AWSEmailService.instance = new AWSEmailService();
        }
        return AWSEmailService.instance;
    }
    async sendEmail(to, subject, body, options = {}) {
        try {
            const command = new SendEmailCommand({
                Source: this.defaultSender,
                Destination: {
                    ToAddresses: [to]
                },
                Message: {
                    Subject: { Data: subject },
                    Body: {
                        Text: { Data: body },
                        ...(options.html && { Html: { Data: options.html } })
                    }
                },
                ...(options.replyTo && { ReplyToAddresses: [options.replyTo] })
            });
            await this.sesClient.send(command);
            return true;
        }
        catch (error) {
            console.error('Email sending error:', error);
            throw error;
        }
    }
    async sendBookingConfirmation(to, bookingDetails) {
        const subject = 'Booking Confirmation - ProTaXAdvisors';
        const html = `
      <h2>Booking Confirmation</h2>
      <p>Thank you for booking with ProTaXAdvisors. Here are your booking details:</p>
      <ul>
        <li>Service: ${bookingDetails.service}</li>
        <li>Date: ${bookingDetails.date}</li>
        <li>Time: ${bookingDetails.time}</li>
        <li>Professional: ${bookingDetails.professional}</li>
        <li>Price: $${bookingDetails.price.toFixed(2)}</li>
      </ul>
      <p>If you need to reschedule or cancel, please contact us at least 24 hours before your appointment.</p>
    `;
        return this.sendEmail(to, subject, '', { html });
    }
}
export const awsEmailService = AWSEmailService.getInstance();
