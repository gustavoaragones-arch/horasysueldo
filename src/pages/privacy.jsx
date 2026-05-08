import Link from "next/link";
import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/privacy";

const TITLE = "Política de privacidad | Albor Digital LLC";
const DESCRIPTION =
  "Cómo Albor Digital LLC recopila, usa y protege la información cuando utiliza Horas y Sueldo y otros productos digitales de la marca.";

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

const inlineLinkStyle = {
  color: "inherit",
  textDecoration: "underline",
};

export default function PrivacyPage() {
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
            <h1 style={h1Style}>Política de privacidad</h1>
            <p style={metaStyle}>
              <strong>Albor Digital LLC</strong> · Vigencia: 1 de enero de 2026 · Última
              actualización: 1 de enero de 2026 · Aplica a productos digitales operados por Albor
              Digital (incluido <cite>horasysueldo.com</cite> / Horas y Sueldo).
            </p>
          </header>

          <section aria-labelledby="pp-1">
            <h2 id="pp-1" style={h2Style}>
              1. Introducción
            </h2>
            <p style={pStyle}>
              Albor Digital LLC (“nosotros”) respeta su privacidad. Esta política describe cómo
              recopilamos, usamos, divulgamos y protegemos la información cuando utiliza cualquier
              producto u operación digital de Albor Digital. Al usar nuestros productos,{' '}
              <strong>acepta estas prácticas</strong>.
            </p>
          </section>

          <section aria-labelledby="pp-2">
            <h2 id="pp-2" style={h2Style}>
              2. Información que recopilamos
            </h2>
            <ul style={listStyle}>
              <li>
                <strong>Usted nos la proporciona:</strong> nombre, correo electrónico, datos de pago u
                otra información al crear cuenta, suscribirse o contactarnos (cuando esas funciones
                existan en el producto).
              </li>
              <li>
                <strong>Datos de uso:</strong> páginas vistas, funciones usadas, tiempo en el sitio,
                tipo de dispositivo, navegador, dirección IP y URL de referencia.
              </li>
              <li>
                <strong>Cookies y similares:</strong> véase el{" "}
                <Link href="/cookies" style={inlineLinkStyle}>
                  aviso de cookies
                </Link>
                .
              </li>
              <li>
                <strong>Interacciones con IA (cuando aplique):</strong> indicaciones o entradas en
                funciones impulsadas por IA; pueden usarse para mejorar funcionalidades según esta
                política y políticas específicas del producto.
              </li>
            </ul>
          </section>

          <section aria-labelledby="pp-3">
            <h2 id="pp-3" style={h2Style}>
              3. Finalidades del tratamiento
            </h2>
            <ul style={listStyle}>
              <li>(a) operar y mantener productos;</li>
              <li>(b) procesar pagos y suscripciones;</li>
              <li>(c) atender soporte;</li>
              <li>(d) envío de comunicaciones transaccionales;</li>
              <li>(e) mejorar y desarrollar productos;</li>
              <li>(f) detectar fraude o abuso;</li>
              <li>(g) cumplir obligaciones legales.</li>
            </ul>
            <p style={pStyle}>
              <strong>No vendemos</strong> su información personal a terceros ni la usamos para
              publicidad dirigida de terceros en el sentido comercial habitual de cesión contra pago de
              listas identificables.
            </p>
          </section>

          <section aria-labelledby="pp-4">
            <h2 id="pp-4" style={h2Style}>
              4. Base legal (RGPD / EEE)
            </h2>
            <p style={pStyle}>
              Si está en el Espacio Económico Europeo, las bases pueden incluir: ejecución de
              contrato, cumplimiento legal, intereses legítimos para operar y mejorar los productos, y —
              donde proceda — <strong>consentimiento</strong>.
            </p>
          </section>

          <section aria-labelledby="pp-5">
            <h2 id="pp-5" style={h2Style}>
              5. Compartición de información
            </h2>
            <ul style={listStyle}>
              <li>
                (a) proveedores que ayudan a operar el producto (hosting, pagos, analítica),
                habitualmente sujetos a acuerdos de confidencialidad;
              </li>
              <li>(b) autoridades cuando la ley lo exija;</li>
              <li>
                (c) un sucesor en caso de fusión, adquisición o venta de activos relacionados al
                producto.
              </li>
            </ul>
          </section>

          <section aria-labelledby="pp-6">
            <h2 id="pp-6" style={h2Style}>
              6. Conservación
            </h2>
            <p style={pStyle}>
              Conservamos datos personales el tiempo necesario para las finalidades aquí indicadas o
              el que exija la ley. Los datos de cuenta se conservan durante la vigencia de la cuenta y
              un período razonable posterior. Puede solicitar eliminación según derechos aplicables.
            </p>
          </section>

          <section aria-labelledby="pp-7">
            <h2 id="pp-7" style={h2Style}>
              7. Sus derechos
            </h2>
            <p style={pStyle}>
              Según su jurisdicción, pueden existir derechos de acceso, rectificación,
              supresión, oposición o restricción del tratamiento, retiro del consentimiento y
              portabilidad. Para ejercerlos, escriba a{' '}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>. Contestaremos dentro de{' '}
              <strong>30 días</strong> salvo prolongación permitida por ley.
            </p>
          </section>

          <section aria-labelledby="pp-8">
            <h2 id="pp-8" style={h2Style}>
              8. Privacidad infantil
            </h2>
            <p style={pStyle}>
              Los productos no están dirigidos a menores de <strong>13 años</strong>. Si detectamos datos
              de menores recopilados sin fundamento válido, procuramos eliminarlos con prontitud.
            </p>
          </section>

          <section aria-labelledby="pp-9">
            <h2 id="pp-9" style={h2Style}>
              9. Seguridad
            </h2>
            <p style={pStyle}>
              Implementamos salvaguardas administrativas, técnicas y físicas razonables.{' '}
              <strong>Ningún método por internet es totalmente seguro</strong>; no podemos garantizar
              seguridad absoluta.
            </p>
          </section>

          <section aria-labelledby="pp-10">
            <h2 id="pp-10" style={h2Style}>
              10. Transferencias internacionales
            </h2>
            <p style={pStyle}>
              Su información puede procesarse fuera de su país de residencia, incluso en{' '}
              <strong>Estados Unidos y Canadá</strong>. Cuando aplique normativa aplicable sobre
              transferencias internacionales, adoptamos salvaguardas proporcionadas.
            </p>
          </section>

          <section aria-labelledby="pp-11">
            <h2 id="pp-11" style={h2Style}>
              11. Enlaces de terceros
            </h2>
            <p style={pStyle}>
              Los productos pueden contener enlaces a sitios que no controlamos y cuyas prácticas de
              privacidad pueden diferir.
            </p>
          </section>

          <section aria-labelledby="pp-12">
            <h2 id="pp-12" style={h2Style}>
              12. Cambios de esta política
            </h2>
            <p style={pStyle}>
              Podemos actualizar la política; la versión con nueva fecha prevalecerá desde su
              publicación razonable. El uso continuado tras cambios puede implicar la aceptación de la
              política revisada donde proceda conforme derecho aplicable.
            </p>
          </section>

          <section aria-labelledby="pp-13">
            <h2 id="pp-13" style={h2Style}>
              13. Contacto
            </h2>
            <p style={pStyle}>
              Consultas sobre privacidad y solicitudes relacionadas:{` `}
              <a href="mailto:contact@albor.digital">contact@albor.digital</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
