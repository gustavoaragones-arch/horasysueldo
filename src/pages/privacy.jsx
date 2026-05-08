import SeoHead from "@/components/SeoHead";

const CANONICAL = "https://horasysueldo.com/privacy";

const TITLE = "Aviso de privacidad | Horas y Sueldo";
const DESCRIPTION =
  "Aviso de privacidad de Horas y Sueldo operado por Albor Digital LLC.";

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
            <h1 style={h1Style}>Aviso de privacidad</h1>
            <p style={pStyle}>
              Responsable del tratamiento de los datos conforme al presente aviso:
              <strong> Albor Digital LLC</strong>, en su carácter de operador del sitio
              <strong> Horas y Sueldo </strong>(<cite>horasysueldo.com</cite>).
              Al usar este sitio, reconoce haber leído este documento.
            </p>
          </header>

          <section aria-labelledby="s1">
            <h2 id="s1" style={h2Style}>
              Alcance del servicio y datos tratados
            </h2>
            <p style={pStyle}>
              Esta plataforma ofrece una calculadora ejecutada en el navegador para estimar horas,
              pagos por hora y otros resultados relacionados conforme los datos ingresados
              voluntariamente por la persona usuaria en dispositivo local. No se requiere crear
              cuenta para utilizar la herramienta principal.
            </p>
            <p style={pStyle}>
              El sitio puede generar información técnica habitual en servicios web (por ejemplo,
              registros de servidor y datos mínimos de la solicitud HTTP) necesarios para operación,
              seguridad y diagnóstico, sujetos a las políticas de proveedores de alojamiento y
              distribución utilizados por el operador.
            </p>
          </section>

          <section aria-labelledby="s2">
            <h2 id="s2" style={h2Style}>
              Finalidades
            </h2>
            <p style={pStyle}>
              Los datos se tratan conforme aplicable para proporcionar los contenidos solicitados,
              mantener disponibilidad y rendimiento del sitio, proteger sistemas ante abuso técnico
              atendible y mejorar los servicios con base en estadísticas legítimas. No debe
              entenderse que operamos tratamientos de nomina formal de terceros a través del sitio:
              cualquier entrada en la calculadora es responsabilidad exclusiva del usuario como
              referencia puntual para autoestimaciones.
            </p>
          </section>

          <section aria-labelledby="s3">
            <h2 id="s3" style={h2Style}>
              Transferencias y terceros
            </h2>
            <p style={pStyle}>
              El contenido puede distribuirse mediante infraestructura de terceros con políticas de
              privacidad y ubicación jurídica propias. Cuando aplique normativa mexicana en materia
              de datos personales u homologables, aplicarán derechos conforme esa normativa ante el
              responsable designado mediante los canales oficiales.
            </p>
          </section>

          <section aria-labelledby="s4">
            <h2 id="s4" style={h2Style}>
              Derechos de las personas titulares
            </h2>
            <p style={pStyle}>
              Cuando la normativa aplicable reconozca derechos de acceso, rectificación,
              cancelación u oposición u homologables, el titular podrá ejercerlos conforme requisitos
              legales vigentes mediante solicitud dirigida por escrito al operador usando el medio
              de contacto proporcionado.
            </p>
          </section>

          <section aria-labelledby="s5">
            <h2 id="s5" style={h2Style}>
              Menores de edad y consentimiento regional
            </h2>
            <p style={pStyle}>
              El contenido tiene propósitos informativos generales dirigidos adultos capaces conforme derecho aplicable. No recolectamos de modo intencional datos de conocidos como menores
              sin facultad suficiente; si identifica comunicación inadvertida relacionada puede
              notificar mediante el contacto institucional.
            </p>
          </section>

          <section aria-labelledby="s6">
            <h2 id="s6" style={h2Style}>
              Vigencia de cambios y contacto legal
            </h2>
            <p style={pStyle}>
              Las modificaciones sustanciales a este aviso se publicarán actualizando la presente
              página cuando corresponda. Para derechos relacionados con datos personales, envíe una
              solicitud formal titulada Privacidad — Horas y Sueldo a los canales de contacto
              oficiales de <strong>Albor Digital LLC</strong>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
