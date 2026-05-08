import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/terms";

const TITLE = "Términos de uso | Horas y Sueldo";
const DESCRIPTION =
  "Términos de uso de Horas y Sueldo operado por Albor Digital LLC.";

const mainStyle = {
  width: "100%",
  maxWidth: "48rem",
  margin: "0 auto",
  padding: "1.25rem 1rem 2rem",
  minHeight: "100vh",
};

const h1Style = {
  fontSize: "1.35rem",
  fontWeight: 700,
  marginBottom: "1rem",
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
            <h1 style={h1Style}>Términos de uso</h1>
            <p style={pStyle}>
              El sitio <cite>horasysueldo.com</cite> y la experiencia de marca asociada{' '}
              <strong>Horas y Sueldo</strong> son operados por <strong>Albor Digital LLC</strong>{' '}
              (el &quot;Operador&quot;). Al acceder al sitio acepta estos términos. Si no está de
              acuerdo, no utilice el sitio.
            </p>
          </header>

          <section aria-labelledby="t1">
            <h2 id="t1" style={h2Style}>
              Naturaleza del servicio
            </h2>
            <p style={pStyle}>
              El sitio ofrece una calculadora en el navegador y contenido informativo relacionado
              con horas trabajadas y pagos por hora orientados a México. El funcionamiento se
              describe en el descargo de responsabilidad; no constituye obligación del Operador
              verificar la exactitud contextual de cada entrada hecha por usuarios.
            </p>
          </section>

          <section aria-labelledby="t2">
            <h2 id="t2" style={h2Style}>
              Uso permitido
            </h2>
            <p style={pStyle}>
              Podrá utilizar el sitio sólo de forma lícita y de acuerdo con la ley aplicable. Queda
              prohibido interferir con la seguridad del sitio; realizar acceso no autorizado;
              introducir código dañino; o realizar actividades que sobrecarguen de forma abusiva los
              sistemas o afecten la disponibilidad para otros usuarios.
            </p>
          </section>

          <section aria-labelledby="t3">
            <h2 id="t3" style={h2Style}>
              Propiedad intelectual
            </h2>
            <p style={pStyle}>
              Textos, marca, estructura y código del sitio están protegidos por leyes aplicables de
              propiedad intelectual. No se concede licencia más allá del uso razonable necesario
              para cargar el sitio en navegador conforme su finalidad pública. Para usos
              comerciales reproducir de forma sustancial se requiere permiso por escrito del
              Operador.
            </p>
          </section>

          <section aria-labelledby="t4">
            <h2 id="t4" style={h2Style}>
              Enlaces y terceros
            </h2>
            <p style={pStyle}>
              Referencias a otros sitios tienen finalidad informativa. El Operador no controla
              sitios de terceros y no responde por su contenido o políticas de privacidad propias.
            </p>
          </section>

          <section aria-labelledby="t5">
            <h2 id="t5" style={h2Style}>
              Modificaciones y ley aplicable
            </h2>
            <p style={pStyle}>
              Los términos pueden actualizarse publicando una nueva versión en esta página.
              El incumplimiento relevante puede llevar a restricción del acceso cuando la ley lo
              permita. La legislación y competencia para controversias dependerán de la relación
              jurídica concreta conforme el marco legal aplicable y políticas del Operador —
              consulte además el aviso de privacidad vigente.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
