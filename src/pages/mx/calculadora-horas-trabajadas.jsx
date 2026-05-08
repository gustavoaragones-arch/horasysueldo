import SeoHead from "@/components/SeoHead";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const CANONICAL =
  "https://horasysueldo.com/mx/calculadora-horas-trabajadas";

const PAGE_TITLE =
  "Calculadora de Horas Trabajadas en México | Horas y Sueldo";
const PAGE_DESCRIPTION =
  "Calcula horas trabajadas, horas extra y sueldo total en México de forma rápida y sencilla.";

const mainStyle = {
  width: "100%",
  maxWidth: "28rem",
  margin: "0 auto",
  padding: "1.25rem 1rem 2rem",
  minHeight: "100vh",
};

const sectionStyle = {
  marginBottom: "1.75rem",
};

const heroTitleStyle = {
  fontSize: "1.35rem",
  fontWeight: 700,
  lineHeight: 1.25,
  marginBottom: "0.5rem",
};

const SEO_PARAGRAPHS = [
  "Calcula tus horas trabajadas y descubre cuánto ganaste según tu pago por hora en México.",
  "Esta calculadora permite estimar horas normales, horas extra y sueldo total de manera rápida y sencilla.",
  "Puedes usar el modo simple o aplicar horas extra legales según la Ley Federal del Trabajo.",
];

const SEO_FAQ = [
  {
    question: "¿Cómo se calculan las horas extra en México?",
    answer:
      "En México, las primeras 9 horas extra semanales suelen pagarse al doble y las adicionales al triple.",
  },
  {
    question: "¿La calculadora funciona para trabajos informales?",
    answer:
      "Sí. También puedes usarla como una estimación simple multiplicando horas trabajadas por pago por hora.",
  },
  {
    question: "¿Necesito registrarme?",
    answer:
      "No. La calculadora funciona instantáneamente y no requiere cuenta.",
  },
];

export default function CalculadoraHorasTrabajadasPage() {
  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={CANONICAL}
        ogTitle={PAGE_TITLE}
        ogDescription={PAGE_DESCRIPTION}
        faqItems={SEO_FAQ}
      />

      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>
            Calcula tus horas trabajadas y cuánto ganaste
          </h1>
        </section>

        <section style={sectionStyle}>
          <CalculatorSection />
        </section>

        <section style={{ ...sectionStyle, marginBottom: 0 }}>
          <SeoContentBlock
            title="Calculadora de horas trabajadas en México"
            paragraphs={SEO_PARAGRAPHS}
            faqItems={SEO_FAQ}
          />
        </section>
      </main>
    </>
  );
}
