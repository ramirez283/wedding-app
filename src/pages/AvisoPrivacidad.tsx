import { Link } from 'react-router-dom'

export default function AvisoPrivacidad() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDFAF9', padding: '80px 24px 64px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        {/* Encabezado */}
        <Link to="/" style={{ color: '#9F7A33', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← Volver al inicio
        </Link>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#213F99', marginBottom: '8px' }}>
          Aviso de Privacidad
        </h1>
        <p style={{ color: '#9F7A33', fontSize: '14px', marginBottom: '40px' }}>Última actualización: julio de 2026</p>

        <div style={{ borderTop: '2px solid #F2D4D6', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '32px', color: '#374151', lineHeight: '1.8', fontSize: '15px' }}>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>1. Responsable del tratamiento de datos</h2>
            <p>
              <strong>My Invitia</strong> (en adelante "el Responsable") es la empresa responsable del uso y protección de sus datos personales.
              Con domicilio en México y sitio web <strong>myinvitia.mx</strong>.
            </p>
            <p style={{ marginTop: '8px' }}>Contacto: <a href="mailto:contacto@myinvitia.mx" style={{ color: '#213F99' }}>contacto@myinvitia.mx</a></p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>2. Datos personales que recabamos</h2>
            <p>Para la prestación de nuestros servicios podemos recabar los siguientes datos:</p>
            <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información relacionada con el evento (fecha, lugar, nombres de los novios)</li>
              <li>Fotografías proporcionadas voluntariamente para la invitación</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>3. Finalidades del tratamiento</h2>
            <p>Sus datos serán utilizados para:</p>
            <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Crear y personalizar su invitación digital</li>
              <li>Enviar confirmaciones y actualizaciones del servicio</li>
              <li>Atender consultas y soporte al cliente</li>
              <li>Facturación (cuando aplique)</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              <strong>No compartimos sus datos con terceros</strong> salvo que sea necesario para la prestación del servicio (ej. pasarela de pago) o por mandato legal.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>4. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales (derechos ARCO),
              conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <p style={{ marginTop: '8px' }}>
              Para ejercer estos derechos envíe un correo a <a href="mailto:contacto@myinvitia.mx" style={{ color: '#213F99' }}>contacto@myinvitia.mx</a> con
              el asunto "Derechos ARCO" indicando su nombre y la solicitud específica. Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>5. Cookies y tecnologías de rastreo</h2>
            <p>
              Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario y analizar el tráfico.
              Estas cookies no recaban datos personales sensibles. Puede desactivarlas desde la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>6. Cambios al aviso de privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar este aviso en cualquier momento. Los cambios serán publicados en esta misma página
              con la fecha de actualización correspondiente.
            </p>
          </section>

        </div>

        <div style={{ marginTop: '48px', padding: '24px', borderRadius: '16px', backgroundColor: '#F2D4D6', textAlign: 'center' }}>
          <p style={{ color: '#213F99', fontSize: '14px' }}>
            ¿Tienes dudas sobre tu privacidad? Escríbenos a{' '}
            <a href="mailto:contacto@myinvitia.mx" style={{ color: '#9F7A33', fontWeight: '600' }}>contacto@myinvitia.mx</a>
          </p>
        </div>

      </div>
    </div>
  )
}
