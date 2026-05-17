import nodemailer from 'nodemailer';

// Use Node.js runtime for nodemailer (requires Node.js modules like 'stream')
export const runtime = 'edge';

// Create transporter using Gmail SMTP
// Note: Set GMAIL_APP_PASSWORD_RONIT in your .env.local file
// For production, use environment variables instead of hardcoded passwords
const createTransporter = () => {
  const appPassword = process.env.GMAIL_APP_PASSWORD_RONIT || 'iaob ozuz sakg lmkj';
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ronitkaushal445@gmail.com',
      pass: appPassword.replace(/\s/g, ''), // Remove spaces from app password
    },
  });
};

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      name,
      email,
      phone,
      service,
      message,
      acceptedTerms,
      company,
      useCase,
    } = await req.json();

    const transporter = createTransporter();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #e50914; border-bottom: 2px solid #e50914; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin-top: 20px;">
          <p><strong style="color: #333;">Name:</strong> ${name}</p>
          <p><strong style="color: #333;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong style="color: #333;">Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong style="color: #333;">Company:</strong> ${company || 'Not provided'}</p>
          <p><strong style="color: #333;">Use case:</strong> ${useCase || 'Not provided'}</p>
          <p><strong style="color: #333;">Service Required:</strong> ${service || 'Not specified'}</p>
          <p><strong style="color: #333;">Terms &amp; Conditions accepted:</strong> ${acceptedTerms ? 'Yes' : 'No'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #e50914;">
            <strong style="color: #333;">Message:</strong>
            <p style="margin-top: 10px; white-space: pre-wrap;">${(message || '').replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          This email was sent from the Arctic Base contact form.
        </p>
      </div>
    `;

    // Send email to both recipients: ronitkaushal445@gmail.com and hetjani818@gmail.com
    const recipients = ['ronitkaushal445@gmail.com', 'hetjani818@gmail.com'];
    
    const mailOptions = {
      from: 'Arctic Base Contact Form <ronitkaushal445@gmail.com>',
      to: recipients, // Send to both emails
      subject: `New Contact Form Submission from ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    
    console.log(`Email sent successfully to: ${recipients.join(', ')}`);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    let errorMessage = 'Unexpected error';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    console.error('Email sending error:', err);

    return new Response(
      JSON.stringify({ message: 'Failed to send message', error: errorMessage }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
