import Link from "next/link";
import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/disclaimer";

const TITLE = "Descargo de responsabilidad | Albor Digital LLC";
const DESCRIPTION =
  "Avisos generales, uso informativo, IA y límites de responsabilidad para productos digitales operados por Albor Digital LLC.";

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

const highlightStyle = {
  ...pStyle,
  fontWeight: 600,
};

const inlineLinkStyle = {
  color: "inherit",
  textDecoration: "underline",
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
            <p style={metaStyle}>
              <strong>Albor Digital LLC</strong> · Vigencia: 1 de enero de 2026
            </p>
            <p style={highlightStyle}>
              Esta herramienta ofrece estimaciones informativas y no constituye asesoría legal,
              laboral o financiera.
            </p>
          </header>

          <section aria-labelledby="d-gen">
            <h2 id="d-gen" style={h2Style}>
              1. Descargo general
            </h2>
            <p style={pStyle}>
              Los productos, herramientas, datos y contenidos ofrecidos por Albor Digital LLC tienen
              fines prácticos e <strong>informativos</strong>. Nos esforzamos por la utilidad de la
              información, pero no declaramos ni garantizamos —explícita o implícitamente— la
              integridad, exactitud, fiabilidad o conveniencia de cualquier contenido para un fin
              concreto. El uso es bajo su propio riesgo.
            </p>
          </section>

          <section aria-labelledby="d-pro">
            <h2 id="d-pro" style={h2Style}>
              2. Sin asesoría profesional
            </h2>
            <p style={pStyle}>
              Nada de lo que proporcionan nuestros productos sustituye asesoría legal, financiera,
              médica, fiscal, laboral-certificada o de cualquier profesión regulada respecto del producto en
              cuestión. Incluye salidas automatizadas o “de calculadora”: verifique ante un profesional
              calificado antes de decidir conforme dichas salidas.
            </p>
          </section>

          <section aria-labelledby="d-ai">
            <h2 id="d-ai" style={h2Style}>
              3. Salidas automatizadas e IA (cuando aplique)
            </h2>
            <p style={pStyle}>
              Cuando un producto incorpore inteligencia artificial u otros sistemas probabilísticos,
              las salidas pueden contener errores u omisiones; reflejan patrones estadísticos o
              reglas del sistema y{' '}
              <strong>
                no constituyen hechos verificados, opiniones profesionales ni postura oficial de Albor
                Digital LLC
              </strong>
              . Usted evalúa y verifica el contenido antes de actuar en consecuencia.
              Los principios generales están en nuestra página de{" "}
              <Link href="/responsible-ai" style={inlineLinkStyle}>
                IA responsable
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="d-data">
            <h2 id="d-data" style={h2Style}>
              4. Información estadística de mercados o externos
            </h2>
            <p style={pStyle}>
              Cualquier dato público compilado puede estar incompleto, desfasado o contener errores.
              No garantizamos la exactitud de fuentes externas ni decisiones adoptadas sólo sobre esa
              base.
            </p>
          </section>

          <section aria-labelledby="d-ext">
            <h2 id="d-ext" style={h2Style}>
              5. Enlaces externos
            </h2>
            <p style={pStyle}>
              Los enlaces a sitios externos no implican endoso; Albor Digital LLC no controla su
              contenido ni disponibilidad.
            </p>
          </section>

          <section aria-labelledby="d-liability">
            <h2 id="d-liability" style={h2Style}>
              6. Limitación de responsabilidad
            </h2>
            <p style={pStyle}>
              En la medida máxima permitida por la ley, Albor Digital LLC y su titular no serán
              responsables por daños derivados del uso del producto, ni por errores, interrupciones o
              inexactitudes en el contenido. Los límites contractuales adicionales constan en los{' '}
              <Link href="/terms" style={inlineLinkStyle}>
                términos del servicio
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="d-jur">
            <h2 id="d-jur" style={h2Style}>
              7. Alcance territorial
            </h2>
            <p style={pStyle}>
              Los servicios pueden operarse desde Canadá y Estados Unidos sin representación automática de
              adecuación en todas las jurisdicciones del mundo. Quien accede desde otras regiones debe
              asegurar el cumplimiento local aplicable voluntariamente.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
