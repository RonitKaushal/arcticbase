import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ message: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

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

    const recipients = ['ronitkaushal445@gmail.com', 'hetjani818@gmail.com'];

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        'Arctic Base Contact Form <onboarding@resend.dev>',
      to: recipients,
      subject: `New Contact Form Submission from ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      throw new Error(error.message);
    }

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unexpected error';
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
