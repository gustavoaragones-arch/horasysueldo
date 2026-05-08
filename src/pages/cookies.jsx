import Link from "next/link";
import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/cookies";

const TITLE = "Aviso de cookies | Albor Digital LLC";
const DESCRIPTION =
  "Uso de cookies y tecnologías similares en productos digitales operados por Albor Digital LLC.";

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

const tableWrap = {
  overflowX: "auto",
  marginBottom: "1rem",
};

const thtd = {
  fontSize: "0.9rem",
  padding: "0.5rem 0.65rem",
  border: "1px solid rgba(127,127,127,0.35)",
  textAlign: "left",
  verticalAlign: "top",
};

const inlineLinkStyle = {
  color: "inherit",
  textDecoration: "underline",
};

export default function CookiesPage() {
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
            <h1 style={h1Style}>Aviso de cookies</h1>
            <p style={metaStyle}>
              <strong>Albor Digital LLC</strong> · Vigencia: 1 de enero de 2026
            </p>
          </header>

          <section aria-labelledby="ck-1">
            <h2 id="ck-1" style={h2Style}>
              1. ¿Qué son las cookies?
            </h2>
            <p style={pStyle}>
              Las cookies son pequeños archivos de texto almacenados en su dispositivo al visitar un
              sitio. Ayudan a que una web funcione, recuerdan preferencias y permiten obtener
              información analítica al operador. Tecnologías similares —almacenamiento local, sesión,
              pixeles de seguimiento— pueden tener funciones parecidas.
            </p>
          </section>

          <section aria-labelledby="ck-2">
            <h2 id="ck-2" style={h2Style}>
              2. Para qué usamos cookies y similares
            </h2>
            <p style={pStyle}>
              Albor Digital LLC puede usar cookies y tecnologías similares para:{' '}
              <strong>a)</strong> asegurar el funcionamiento (cookies estrictamente necesarias);{' '}
              <strong>b)</strong> recordar preferencias o ajustes;{' '}
              <strong>c)</strong> analizar uso agregado del producto para mejorarlo;{' '}
              <strong>d)</strong> en productos con publicidad, apoyar anuncios y medir rendimiento cuando
              esas funciones estén habilitadas.
            </p>
          </section>

          <section aria-labelledby="ck-3">
            <h2 id="ck-3" style={h2Style}>
              3. Tipos de cookies habituales
            </h2>
            <div style={tableWrap}>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                  <tr>
                    <th scope="col" style={thtd}>
                      Tipo
                    </th>
                    <th scope="col" style={thtd}>
                      Finalidad habitual
                    </th>
                    <th scope="col" style={thtd}>
                      Duración orientativa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={thtd}>Estrictamente necesarias</td>
                    <td style={thtd}>Funciones esenciales, sesión y seguridad</td>
                    <td style={thtd}>Sesión</td>
                  </tr>
                  <tr>
                    <td style={thtd}>Funcionales</td>
                    <td style={thtd}>Preferencias, idioma, estados guardados</td>
                    <td style={thtd}>Hasta ~1 año</td>
                  </tr>
                  <tr>
                    <td style={thtd}>Analíticas</td>
                    <td style={thtd}>Uso agregado mediante herramientas como Google Analytics o similares; datos anonimizados cuando fuera viable</td>
                    <td style={thtd}>Hasta ~2 años</td>
                  </tr>
                  <tr>
                    <td style={thtd}>Publicidad</td>
                    <td style={thtd}>En productos con anuncios, relevancia y métricas de campaña</td>
                    <td style={thtd}>Hasta ~2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="ck-4">
            <h2 id="ck-4" style={h2Style}>
              4. Cookies de terceros
            </h2>
            <p style={pStyle}>
              Ciertas herramientas colocadas por terceros —analítica, pagos y redes— tienen políticas propias de cookies. Como ejemplos genéricos, Albor puede integrar servicios como Google Analytics o Stripe donde publiquemos esos módulos. Revise también la{" "}
              <Link href="/privacy" style={inlineLinkStyle}>
                política de privacidad
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="ck-5">
            <h2 id="ck-5" style={h2Style}>
              5. Tus opciones
            </h2>
            <p style={pStyle}>
              Control de cookies mediante el navegador; mecanismo de exclusión donde el tercero lo
              ofrezca y paneles de preferencias dentro del producto cuando existan.{' '}
              <strong>Inhabilitar cookies estrictamente necesarias puede afectar el funcionamiento.</strong>
            </p>
          </section>

          <section aria-labelledby="ck-6">
            <h2 id="ck-6" style={h2Style}>
              6. Señales “Do Not Track”
            </h2>
            <p style={pStyle}>
              Algunos navegadores ofrecen DNT; nuestros productos{' '}
              <strong>pueden no responder a esa señal</strong>, al no haber estándar de industria
              uniforme, y estamos pendientes evoluciones.
            </p>
          </section>

          <section aria-labelledby="ck-7">
            <h2 id="ck-7" style={h2Style}>
              7. Actualizaciones
            </h2>
            <p style={pStyle}>
              El aviso puede actualizarse; la fecha de revisión aparecerá al publicarlo en esta página.
            </p>
          </section>

          <section aria-labelledby="ck-8">
            <h2 id="ck-8" style={h2Style}>
              8. Contacto
            </h2>
            <p style={pStyle}>
              Preguntas sobre cookies:{` `}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
