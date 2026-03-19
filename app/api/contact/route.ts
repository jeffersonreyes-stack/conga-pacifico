import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message } = body;

    // Validar datos
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Enviar email a Conga
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'proyectos@congapacifico.com',
      replyTo: email,
      subject: `Nueva solicitud de contacto - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Nueva Solicitud de Contacto
          </h2>
          
          <div style="margin: 20px 0; background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Empresa:</strong> ${company}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1e40af;">Mensaje:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">
              ${message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Este es un mensaje automático del formulario de contacto de CONGA PACIFICO.</p>
            <p>Fecha: ${new Date().toLocaleString('es-CO')}</p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Error en Resend:', result.error);
      return NextResponse.json(
        { error: 'Error al enviar el correo' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Correo enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
