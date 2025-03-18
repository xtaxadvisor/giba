class EmailService {
    static instance;
    defaultFrom = 'info@protaxadvisors.tax';
    constructor() { }
    static getInstance() {
        if (!EmailService.instance) {
            EmailService.instance = new EmailService();
        }
        return EmailService.instance;
    }
    async sendEmail(to, subject, body, options = {}) {
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to,
                    from: options.from || this.defaultFrom,
                    subject,
                    body,
                    html: options.html,
                    attachments: options.attachments
                })
            });
            if (!response.ok)
                throw new Error('Failed to send email');
            return await response.json();
        }
        catch (error) {
            console.error('Email sending error:', error);
            throw error;
        }
    }
    async sendTemplate(to, templateId, templateData, options = {}) {
        try {
            const response = await fetch('/.netlify/functions/send-template-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to,
                    from: options.from || this.defaultFrom,
                    templateId,
                    templateData
                })
            });
            if (!response.ok)
                throw new Error('Failed to send template email');
            return await response.json();
        }
        catch (error) {
            console.error('Template email sending error:', error);
            throw error;
        }
    }
}
export const emailService = EmailService.getInstance();
