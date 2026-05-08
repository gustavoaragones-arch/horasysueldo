import Link from "next/link";
import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/responsible-ai";

const TITLE = "Política de IA responsable | Albor Digital LLC";
const DESCRIPTION =
  "Principios de Albor Digital LLC para diseñar y gobernar productos SaaS con inteligencia artificial.";

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

const h3Style = {
  fontSize: "1rem",
  fontWeight: 700,
  marginTop: "1rem",
  marginBottom: "0.4rem",
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

const inlineLinkStyle = {
  color: "inherit",
  textDecoration: "underline",
};

export default function ResponsibleAiPage() {
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
            <h1 style={h1Style}>Política de IA responsable</h1>
            <p style={metaStyle}>
              <strong>Albor Digital LLC</strong> · Última actualización: 2026
            </p>
          </header>

          <section aria-labelledby="rai-purpose">
            <h2 id="rai-purpose" style={h2Style}>
              Finalidad
            </h2>
            <p style={pStyle}>
              Esta política describe cómo Albor Digital LLC diseña, despliega y gobierna productos
              SaaS con capacidades de inteligencia artificial. El objetivo es promover un uso seguro,
              transparente y acotado de la IA, reduciendo riesgos legales, regulatorios y operativos.
            </p>
          </section>

          <section aria-labelledby="rai-scope">
            <h2 id="rai-scope" style={h2Style}>
              Alcance
            </h2>
            <p style={pStyle}>
              Aplica a todos los productos de Albor Digital que incorporen IA, incluyendo —
              entre otros — HR Buddy y Rental.Health, así como cualquier nueva marca SaaS públicamente
              anunciada. Cubre diseño, datos, límites de las salidas e interacción con personas
              usuarias.
            </p>
          </section>

          <section aria-labelledby="rai-principles">
            <h2 id="rai-principles" style={h2Style}>
              Principios de IA responsable
            </h2>
            <ul style={listStyle}>
              <li>
                <strong>Sólo fines informativos:</strong> las salidas tienen naturaleza educativa y de
                apoyo a decisiones —no equivalen formalmente por sí mismas asesoría profesional
                cualificada.
              </li>
              <li>
                <strong>Humano involucrado:</strong> la persona usuaria conserva responsabilidad plena
                por decisiones y acciones aplicadas después.
              </li>
              <li>
                <strong>Capacidad acotada:</strong> se restringen o redirigen situaciones de alto riesgo
                o muy sensibles, conforme políticas públicas declaradas por el producto.
              </li>
              <li>
                <strong>Transparencia:</strong> cuando el diseño del producto lo permita, las salidas se
                identifican como generadas mediante IA con indicadores de confianza o incertidumbre
                razonables.
              </li>
              <li>
                <strong>Minimización de datos:</strong> se desaconseja enviar datos personales muy
                sensibles salvo cuando resulte imprescindible para la función publicada expresamente.
              </li>
              <li>
                <strong>Supervisión continua:</strong> modelos, indicaciones (“prompts”) y barreras
                se revisan y actualizan conforme cambien regulaciones u operación práctica razonable.
              </li>
            </ul>
          </section>

          <section aria-labelledby="rai-appendix">
            <h2 id="rai-appendix" style={h2Style}>
              Anexo de alineación regulatoria
            </h2>

            <h3 style={h3Style}>Principios de la OCDE sobre IA</h3>
            <p style={pStyle}>
              Albor Digital promueve transparencia, robustez, rendición de cuentas y valores
              centrados en las personas. Los sistemas pretenden ampliar comprensión sin sustituir
              juicio profesional competente donde legalmente proceda.
            </p>

            <h3 style={h3Style}>Marco de gestión de riesgos de IA del NIST (AI RMF)</h3>
            <p style={pStyle}>
              El enfoque incorpora identificación de riesgos, mitigación mediante barreras y
              gobernanza mediante documentación y revisión continuas del comportamiento frente a
              escenarios representativos razonables.
            </p>

            <h3 style={h3Style}>EU AI Act — encuadre de riesgo limitado (versión resumida)</h3>
            <p style={pStyle}>
              Cuando sea viable en el diseño, los productos se orientan hacia categorías de riesgo
              limitado o mínimo, con avisos de transparencia y evitando decisiones automatizadas de
              alto impacto sin base contractual y regulatoria clara para ese producto.
            </p>
          </section>

          <section aria-labelledby="rai-eo">
            <h2 id="rai-eo" style={h2Style}>
              Reducción de riesgo y seguros (E&amp;O)
            </h2>
            <p style={pStyle}>
              <strong>Controles de reducción de riesgo:</strong> descargos de responsabilidad, barreras
              técnicas y acciones de rechazo limitan exposición a reclamos por confianza indebida,
              tergiversación o ejercicio indebido de prácticas profesionales reservadas.
            </p>
            <p style={pStyle}>
              <strong>Alineación con seguros de errores y omisiones (E&amp;O):</strong> definir las
              salidas de IA como meramente informativas, divulgar incertidumbre y evitar instrucciones
              prescriptivas indebidas reduce en la práctica probabilidad y gravedad de reclamos de
              E&amp;O conforme evaluación razonable de riesgos.
            </p>
            <p style={pStyle}>
              <strong>Señales para suscripción:</strong> la política demuestra gobernanza proactiva,
              mitigación continua y alineación con estándares reconocidos internacionalmente —factores
              relevantes para evaluación de suscripción favorable cuando exista cobertura contratada.
            </p>
          </section>

          <section aria-labelledby="rai-contact">
            <h2 id="rai-contact" style={h2Style}>
              Más información
            </h2>
            <p style={pStyle}>
              Consultas generales:{` `}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>. Ver también{" "}
              <Link href="/disclaimer" style={inlineLinkStyle}>
                descargo de responsabilidad
              </Link>
              {" "}y{" "}
              <Link href="/privacy" style={inlineLinkStyle}>
                política de privacidad
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
