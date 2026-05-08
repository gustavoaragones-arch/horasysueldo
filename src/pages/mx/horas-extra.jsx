import SeoHead from "@/components/SeoHead";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const CANONICAL = "https://horasysueldo.com/mx/horas-extra";

const PAGE_TITLE = "Cómo Calcular Horas Extra en México";
const PAGE_DESCRIPTION =
  "Aprende cómo funcionan las horas extra en México y calcula cuánto deberías ganar.";

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
  marginBottom: "0.75rem",
};

const introStyle = {
  fontSize: "0.95rem",
  lineHeight: 1.55,
  marginBottom: "1.25rem",
  color: "var(--foreground)",
  maxWidth: "42rem",
};

const HORAS_EXTRA_PARAGRAPHS = [
  "Las horas extra en México se pagan de forma distinta dependiendo de cuántas horas adicionales trabajes durante la semana.",
  "Las primeras 9 horas extra suelen pagarse al doble del salario por hora.",
  "Después de esas 9 horas, las horas adicionales normalmente se pagan al triple.",
  "Esta calculadora te ayuda a estimar cuánto deberías ganar incluyendo horas extra.",
];

const HORAS_EXTRA_FAQ = [
  {
    question: "¿Cuántas horas extra se pueden trabajar en México?",
    answer:
      "La Ley Federal del Trabajo establece límites y pagos especiales para horas extra semanales.",
  },
  {
    question: "¿Las horas extra siempre se pagan al doble?",
    answer:
      "No. Después de cierto límite semanal, normalmente se pagan al triple.",
  },
  {
    question: "¿La calculadora reemplaza asesoría legal?",
    answer:
      "No. Es una herramienta informativa y de estimación.",
  },
];

export default function HorasExtraPage() {
  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={CANONICAL}
        ogTitle={PAGE_TITLE}
        ogDescription={PAGE_DESCRIPTION}
        faqItems={HORAS_EXTRA_FAQ}
      />

      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>
            Cómo calcular horas extra en México
          </h1>
          <p style={introStyle}>
            Introduce tu horario, descansos y pago por hora para obtener una estimación rápida
            que incluye horas al doble y al triple según tu jornada semanal.
          </p>
        </section>

        <section style={sectionStyle}>
          <CalculatorSection />
        </section>

        <section style={{ ...sectionStyle, marginBottom: 0 }}>
          <SeoContentBlock
            title="Cómo funcionan las horas extra en México"
            paragraphs={HORAS_EXTRA_PARAGRAPHS}
            faqItems={HORAS_EXTRA_FAQ}
          />
        </section>
      </main>
    </>
  );
}
