import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/terms";

const TITLE =
  "Términos del servicio | Horas y Sueldo (Albor Digital LLC)";
const DESCRIPTION =
  "Términos de uso para sitios y productos digitales operados por Albor Digital LLC, incluido Horas y Sueldo.";

const mainStyle = {
  width: "100%",
  maxWidth: "48rem",
  margin: "0 auto",
  padding: "1.25rem 1rem 2rem",
  minHeight: "100vh",
};

const metaStyle = {
  fontSize: "0.9rem",
  lineHeight: 1.5,
  marginBottom: "1.25rem",
  opacity: 0.9,
};

const h1Style = {
  fontSize: "1.35rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
  lineHeight: 1.3,
};

const h2Style = {
  fontSize: "1.1rem",
  fontWeight: 700,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
  lineHeight: 1.35,
};

const pStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  marginBottom: "0.85rem",
};

const listStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  marginBottom: "0.85rem",
  paddingLeft: "1.25rem",
};

export default function TermsPage() {
  return (
    <>
      <SeoHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={CANONICAL}
        ogTitle={TITLE}
        ogDescription={DESCRIPTION}
      />
      <main style={mainStyle}>
        <article>
          <header>
            <h1 style={h1Style}>Términos del servicio</h1>
            <p style={metaStyle}>
              <strong>Albor Digital LLC</strong> · Vigencia: 1 de enero de 2026 · Última
              actualización: 1 de enero de 2026 · Canada &amp; EE.&nbsp;UU.
            </p>
          </header>

          <section aria-labelledby="tos-1">
            <h2 id="tos-1" style={h2Style}>
              1. Aceptación
            </h2>
            <p style={pStyle}>
              Al acceder o utilizar cualquier sitio web, aplicación web, aplicación móvil u
              herramienta digital de titularidad u operación de <strong>Albor Digital LLC</strong>{' '}
              (“Albor Digital”, “nosotros”), usted acepta estos Términos del servicio (“Términos”).
              Si no está de acuerdo, no utilice nuestros productos. Los Términos aplican a todos los
              productos y propiedades digitales bajo la marca Albor Digital, incluidos, entre otros,
              herramientas disponibles en <cite>albor.digital</cite> y subdominios, así como el
              presente sitio <cite>horasysueldo.com</cite> (“<strong>Horas y Sueldo</strong>”).
            </p>
          </section>

          <section aria-labelledby="tos-2">
            <h2 id="tos-2" style={h2Style}>
              2. Quiénes somos
            </h2>
            <p style={pStyle}>
              Albor Digital LLC es un estudio independiente de productos digitales constituido en el{' '}
              <strong>estado de Wyoming, Estados Unidos</strong>. Diseñamos, desarrollamos y
              operamos nuestros propios productos. <strong>No ofrecemos servicios para clientes</strong>
              {' '}ni consultoría ni desarrollo a medida para terceros.
            </p>
          </section>

          <section aria-labelledby="tos-3">
            <h2 id="tos-3" style={h2Style}>
              3. Productos y servicios
            </h2>
            <p style={pStyle}>
              Los productos pueden incluir aplicaciones utilitarias, SaaS, herramientas con
              publicidad y servicios asistidos con IA u otras tecnologías. Cada producto puede tener{' '}
              <strong>términos complementarios</strong> presentados en el punto de uso, incorporados a
              estos Términos por referencia.
            </p>
            <p style={pStyle}>
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier producto en
              cualquier momento sin previo aviso y sin responsabilidad frente a usted ni terceros.
            </p>
          </section>

          <section aria-labelledby="tos-4">
            <h2 id="tos-4" style={h2Style}>
              4. Elegibilidad
            </h2>
            <p style={pStyle}>
              Debe tener al menos <strong>13 años</strong>. Si tiene menos de 18, declara contar con
              consentimiento parental o del tutor. Al usar los servicios, declara cumplir estos
              requisitos.
            </p>
          </section>

          <section aria-labelledby="tos-5">
            <h2 id="tos-5" style={h2Style}>
              5. Cuentas
            </h2>
            <p style={pStyle}>
              Algunos productos pueden exigir crear una cuenta. Usted es responsable de mantener la
              confidencialidad de sus credenciales y de toda la actividad bajo su cuenta. Notifique
              de inmediato usos no autorizados a{' '}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>. Podemos suspender o
              terminar cuentas a nuestra discreción, inclusive por violación de estos Términos.
            </p>
          </section>

          <section aria-labelledby="tos-6">
            <h2 id="tos-6" style={h2Style}>
              6. Uso aceptable
            </h2>
            <p style={pStyle}>Se compromete a no utilizar nuestros productos para:</p>
            <ul style={listStyle}>
              <li>(a) violar leyes o normas aplicables;</li>
              <li>(b) vulnerar derechos de propiedad intelectual nuestra o de terceros;</li>
              <li>(c) transmitir contenido dañino, abusivo u ofensivo;</li>
              <li>(d) obtener acceso no autorizado a sistemas o cuentas de otros usuarios;</li>
              <li>
                (e) extraer o obtener datos mediante raspado u otros medios sin permiso por escrito;
              </li>
              <li>
                (f) fines comerciales sin nuestro consentimiento previo por escrito cuando así lo
                prohíban estos Términos;
              </li>
              <li>(g) interferir con la operación o integridad de nuestras plataformas.</li>
            </ul>
          </section>

          <section aria-labelledby="tos-7">
            <h2 id="tos-7" style={h2Style}>
              7. Propiedad intelectual
            </h2>
            <p style={pStyle}>
              Todo el contenido, diseño, código y materiales dentro de nuestros productos son propiedad
              exclusiva de Albor Digital LLC o sus licenciantes y están protegidos por las leyes
              aplicables. Se otorga una licencia revocable, limitada, no exclusiva e intransferible
              para acceder y usar los productos conforme estos Términos, típicamente con fines{' '}
              <strong>personales y no comerciales</strong>, salvo lo que se permita expresamente.
            </p>
          </section>

          <section aria-labelledby="tos-8">
            <h2 id="tos-8" style={h2Style}>
              8. Contenido del usuario
            </h2>
            <p style={pStyle}>
              Donde permita enviar contenido, usted concede a Albor Digital LLC una licencia no
              exclusiva, mundial y libre de regalías para usar, reproducir y mostrar ese contenido
              únicamente para proporcionar y mejorar el producto pertinente. Usted conserva la
              titularidad salvo pacto diverso y es el único responsable de su contenido.
            </p>
          </section>

          <section aria-labelledby="tos-9">
            <h2 id="tos-9" style={h2Style}>
              9. Suscripciones y pagos
            </h2>
            <p style={pStyle}>
              Si un producto se ofrece por suscripción, al suscribirse nos autoriza a cobrar según los
              términos mostrados al finalizar la compra. Las suscripciones pueden renovarse
              automáticamente hasta que las cancele según las instrucciones del producto. Las tarifas
              pueden indicarse en <strong>dólares estadounidenses</strong> y no son reembolsables salvo lo
              exija la ley aplicable.
            </p>
          </section>

          <section aria-labelledby="tos-10">
            <h2 id="tos-10" style={h2Style}>
              10. Servicios de terceros
            </h2>
            <p style={pStyle}>
              Los productos pueden integrar servicios de terceros (procesamiento de pagos,
              infraestructura, analítica, plataformas de IA). Esos terceros tienen sus propios términos y
              políticas de privacidad. Albor Digital LLC no responde por sus prácticas.
            </p>
          </section>

          <section aria-labelledby="tos-11">
            <h2 id="tos-11" style={h2Style}>
              11. Exención de garantías
            </h2>
            <p style={pStyle}>
              LOS PRODUCTOS SE OFRECEN{' '}
              <strong>TAL CUAL</strong> Y EN LA MEDIDA DISPONIBLE, SIN GARANTÍAS DE NINGÚN TIPO,
              EXPRESAS O IMPLÍCITAS, INCLUIDAS LAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN
              DETERMINADO O NO VIOLACIÓN. NO GARANTIZAMOS QUE LOS PRODUCTOS SEAN LIBRES DE ERRORES O
              ININTERRUMPIDOS O LIBRES DE COMPONENTES DAÑINOS.
            </p>
          </section>

          <section aria-labelledby="tos-12">
            <h2 id="tos-12" style={h2Style}>
              12. Limitación de responsabilidad
            </h2>
            <p style={pStyle}>
              EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, ALBOR DIGITAL LLC Y SU TITULAR NO
              SERÁN RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O
              EJEMPLARES DERIVADOS DEL USO DE LOS PRODUCTOS, AUN CUANDO SE HAYA ADVERTIDO DE SU
              POSIBILIDAD. LA RESPONSABILIDAD TOTAL POR RECLAMO NO EXCEDERÁ EL MAYOR DE (A){' '}
              <strong>LO QUE USTED NOS HAYA PAGADO EN LOS DOCE MESES PREVIOS AL RECLAMO</strong>, O (B){' '}
              <strong>USD $50</strong>.
            </p>
          </section>

          <section aria-labelledby="tos-13">
            <h2 id="tos-13" style={h2Style}>
              13. Indemnización
            </h2>
            <p style={pStyle}>
              Usted acepta defender e indemnizar a Albor Digital LLC y su titular frente a reclamos,
              daños, responsabilidades, costos u honorarios legales razonables que surjan de su uso de
              los productos, su incumplimiento de estos Términos o su violación de derechos de terceros.
            </p>
          </section>

          <section aria-labelledby="tos-14">
            <h2 id="tos-14" style={h2Style}>
              14. Ley aplicable y controversias
            </h2>
            <p style={pStyle}>
              Estos Términos se rigen por las leyes del <strong>estado de Wyoming, EE.&nbsp;UU.</strong>,
              sin dar efecto a normas sobre conflicto de leyes. Las controversias deben intentar
              resolverse en buena fe. Si no prospera, podrán someterse a <strong>arbitraje vinculante</strong>{' '}
              conforme las reglas de la <strong>American Arbitration Association</strong>. No obstante,
              Albor Digital LLC puede solicitar medidas cautelares en cualquier tribunal competente.
            </p>
          </section>

          <section aria-labelledby="tos-15">
            <h2 id="tos-15" style={h2Style}>
              15. Cambios
            </h2>
            <p style={pStyle}>
              Podemos actualizar estos Términos en cualquier momento publicándolos aquí con una nueva
              fecha de vigencia. El uso continuado tras los cambios implica la aceptación de los mismos.
            </p>
          </section>

          <section aria-labelledby="tos-16">
            <h2 id="tos-16" style={h2Style}>
              16. Contacto
            </h2>
            <p style={pStyle}>
              Consultas sobre estos Términos:{' '}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>
            </p>
            <p style={{ ...metaStyle, fontSize: "0.85rem", marginTop: "1.5rem" }}>
              Nota editorial: estos documentos constituyen rieles jurídicos estándar; no sustituyen
              asesoría de un abogado titulado. Albor Digital LLC recomienda revisión periódica por
              asesores calificados a medida que crece el portafolio.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
