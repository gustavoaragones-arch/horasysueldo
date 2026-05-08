import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/disclaimer";

const TITLE = "Descargo de responsabilidad | Horas y Sueldo";
const DESCRIPTION =
  "Descargo de responsabilidad de Horas y Sueldo. Estimaciones informativas, sin asesoría legal, laboral ni financiera.";

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

const highlightStyle = {
  ...pStyle,
  fontWeight: 600,
};

export default function DisclaimerPage() {
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
            <h1 style={h1Style}>Descargo de responsabilidad</h1>
            <p style={highlightStyle}>
              Esta herramienta ofrece estimaciones informativas y no constituye asesoría legal,
              laboral o financiera.
            </p>
          </header>

          <section aria-labelledby="d1">
            <h2 id="d1" style={h2Style}>
              Limitación general
            </h2>
            <p style={pStyle}>
              La información y los resultados numéricos presentados en{' '}
              <cite>horasysueldo.com</cite> (marca <strong>Horas y Sueldo</strong>) se ofrecen
              únicamente con fines generales de orientación. <strong>Albor Digital LLC</strong>, en
              su carácter de operador, no garantiza exactitud absoluta frente a contratos
              individuales, políticas internas de empleo, convenios colectivos, interpretaciones
              administrativas o cambios normativos posteriores.
            </p>
          </section>

          <section aria-labelledby="d2">
            <h2 id="d2" style={h2Style}>
              Relación con patrón, autoridades o terceros
            </h2>
            <p style={pStyle}>
              Ningún resultado generado por la calculadora sustituye dictamen pericial, resolución
              de autoridad laboral, acuerdo contractual o asesoría profesional personalizada. Las
              reglas de horas extra y demás supuestos laborales en México son complejos; la
              herramienta simplifica parámetros que usted introduce voluntariamente y no verifica
              hechos externos.
            </p>
          </section>

          <section aria-labelledby="d3">
            <h2 id="d3" style={h2Style}>
              Uso bajo su propio riesgo
            </h2>
            <p style={pStyle}>
              Usted es responsable de las decisiones que tome con base en las estimaciones. El
              Operador no asume responsabilidad por daños directos o indirectos derivados del uso o
              la imposibilidad de uso del sitio, salvo que la ley imperativa aplicable disponga lo
              contrario de modo inderogable.
            </p>
          </section>

          <section aria-labelledby="d4">
            <h2 id="d4" style={h2Style}>
              Cambios al descargo
            </h2>
            <p style={pStyle}>
              Este texto puede actualizarse. La versión publicada vigente prevalecerá sobre
              versiones anteriores desde su publicación razonable en el mismo sitio.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
