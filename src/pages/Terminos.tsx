import { Link } from 'react-router-dom'

export default function Terminos() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDFAF9', padding: '80px 24px 64px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <Link to="/" style={{ color: '#9F7A33', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← Volver al inicio
        </Link>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#213F99', marginBottom: '8px' }}>
          Términos y Condiciones
        </h1>
        <p style={{ color: '#9F7A33', fontSize: '14px', marginBottom: '40px' }}>Última actualización: julio de 2026</p>

        <div style={{ borderTop: '2px solid #F2D4D6', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '32px', color: '#374151', lineHeight: '1.8', fontSize: '15px' }}>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>1. Aceptación de los términos</h2>
            <p>
              Al contratar cualquier servicio de <strong>My Invitia</strong> o utilizar el sitio web <strong>myinvitia.mx</strong>,
              usted acepta los presentes Términos y Condiciones en su totalidad. Si no está de acuerdo, le pedimos no usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>2. Descripción del servicio</h2>
            <p>My Invitia ofrece la creación de invitaciones digitales para bodas y eventos, que incluyen:</p>
            <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Diseño personalizado con información del evento</li>
              <li>Galería de fotografías</li>
              <li>Cuenta regresiva, itinerario y detalles del evento</li>
              <li>Liga (URL) única para compartir la invitación</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>3. Proceso de contratación</h2>
            <p>
              El cliente deberá proporcionar la información y fotografías necesarias para la creación de la invitación.
              My Invitia entregará un borrador para revisión. Se incluyen hasta <strong>2 revisiones</strong> sin costo adicional.
              Cambios adicionales podrán tener un costo extra acordado previamente.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>4. Pagos y reembolsos</h2>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>El pago se realiza <strong>antes de iniciar</strong> el diseño.</li>
              <li>Se acepta transferencia bancaria y otros métodos acordados.</li>
              <li><strong>No se realizan reembolsos</strong> una vez iniciado el proceso de diseño.</li>
              <li>Si My Invitia no puede entregar el servicio, se reembolsará el 100% del pago.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>5. Propiedad intelectual</h2>
            <p>
              Los diseños creados por My Invitia son propiedad de la empresa hasta que se liquide el pago total.
              Las fotografías proporcionadas por el cliente son de su exclusiva responsabilidad; al enviarlas,
              el cliente declara tener los derechos o permisos para su uso.
            </p>
            <p style={{ marginTop: '8px' }}>
              My Invitia se reserva el derecho de usar los diseños como portafolio o muestra, salvo solicitud expresa del cliente.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>6. Disponibilidad del servicio</h2>
            <p>
              Las invitaciones digitales estarán disponibles en línea mientras el cliente mantenga una suscripción activa o
              durante el período contratado. My Invitia no se responsabiliza por interrupciones derivadas de fuerza mayor o
              problemas de infraestructura de terceros (hosting, dominio, etc.).
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>7. Limitación de responsabilidad</h2>
            <p>
              My Invitia no será responsable por daños indirectos, pérdida de datos o perjuicios derivados del uso
              o imposibilidad de uso del servicio. La responsabilidad máxima se limita al monto pagado por el cliente.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#213F99', fontSize: '20px', marginBottom: '12px' }}>8. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de los <strong>Estados Unidos Mexicanos</strong>.
              Cualquier controversia se resolverá ante los tribunales competentes de la Ciudad de México o
              del estado donde el responsable tenga su domicilio fiscal.
            </p>
          </section>

        </div>

        <div style={{ marginTop: '48px', padding: '24px', borderRadius: '16px', backgroundColor: '#F2D4D6', textAlign: 'center' }}>
          <p style={{ color: '#213F99', fontSize: '14px' }}>
            ¿Tienes preguntas sobre el servicio? Escríbenos a{' '}
            <a href="mailto:contacto@myinvitia.mx" style={{ color: '#9F7A33', fontWeight: '600' }}>contacto@myinvitia.mx</a>
          </p>
        </div>

      </div>
    </div>
  )
}
