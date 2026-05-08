import Link from "next/link";
import SeoHead from "@/components/SeoHead";

const HOME_TITLE =
  "Horas y Sueldo | Calculadora de horas trabajadas en México";
const HOME_DESCRIPTION =
  "Calcula horas trabajadas, horas extra y estimación de sueldo en México. Herramienta en línea, rápida y sin registro.";

const mainStyle = {
  width: "100%",
  maxWidth: "28rem",
  margin: "0 auto",
  padding: "1.25rem 1rem 2rem",
  minHeight: "100vh",
};

const h1Style = {
  fontSize: "1.35rem",
  fontWeight: 700,
  lineHeight: 1.25,
  marginBottom: "0.75rem",
};

const pStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.55,
  marginBottom: "1.25rem",
};

const linkStyle = {
  display: "inline-block",
  fontSize: "1rem",
  fontWeight: 600,
  color: "var(--foreground)",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

export default function Home() {
  return (
    <>
      <SeoHead
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        canonical="https://horasysueldo.com/"
        ogTitle={HOME_TITLE}
        ogDescription={HOME_DESCRIPTION}
      />
      <main style={mainStyle}>
        <h1 style={h1Style}>Horas y Sueldo</h1>
        <p style={pStyle}>
          Estimaciones de horas trabajadas, horas extra y ganancias por hora,
          pensadas para trabajadores en México.
        </p>
        <p style={pStyle}>
          <Link
            href="/mx/calculadora-horas-trabajadas"
            style={linkStyle}
          >
            Abrir calculadora de horas trabajadas
          </Link>
        </p>
      </main>
    </>
  );
}
