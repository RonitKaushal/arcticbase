import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: 'Ronit via Arctic Base <onboarding@resend.dev>',
      to: ['yourgmail@gmail.com'], // Replace with your Gmail
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    let errorMessage = 'Unexpected error';

    if (err instanceof Error) {
      errorMessage = err.message;
    }

    return new Response(
      JSON.stringify({ message: 'Failed to send message', error: errorMessage }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
