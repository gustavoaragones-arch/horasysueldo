import SeoHead from "@/components/SeoHead";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const CANONICAL = "https://horasysueldo.com/mx/calculadora-horas-excel";

const PAGE_TITLE = "Calculadora de Horas Trabajadas sin Excel";
const PAGE_DESCRIPTION =
  "Alternativa rápida y simple a Excel para calcular horas trabajadas y sueldo.";

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

const EXCEL_PARAGRAPHS = [
  "Muchas personas usan hojas de Excel para calcular horas trabajadas y sueldo semanal.",
  "Esta herramienta simplifica el proceso y permite calcular horas y pagos directamente desde el navegador.",
  "No necesitas fórmulas complicadas ni conocimientos técnicos.",
  "La calculadora funciona mejor en celular y permite resultados instantáneos.",
];

const EXCEL_FAQ = [
  {
    question: "¿Es mejor que usar Excel?",
    answer:
      "Para cálculos rápidos y móviles, suele ser más simple y rápido que una hoja manual.",
  },
  {
    question: "¿Necesito descargar algo?",
    answer: "No. Todo funciona directamente en línea.",
  },
  {
    question: "¿La calculadora guarda mis datos?",
    answer:
      "No. Los cálculos funcionan localmente y no requieren cuenta.",
  },
];

export default function CalculadoraHorasExcelPage() {
  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={CANONICAL}
        ogTitle={PAGE_TITLE}
        ogDescription={PAGE_DESCRIPTION}
        faqItems={EXCEL_FAQ}
      />

      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h1 style={heroTitleStyle}>
            Calculadora de horas trabajadas sin Excel
          </h1>
          <p style={introStyle}>
            Obtén tus horas netas y un estimado de sueldo en segundos, sin armar macros ni copiar
            fórmulas: solo entra tus horarios desde el navegador o tu celular.
          </p>
        </section>

        <section style={sectionStyle}>
          <CalculatorSection />
        </section>

        <section style={{ ...sectionStyle, marginBottom: 0 }}>
          <SeoContentBlock
            title="Alternativa simple a Excel para calcular horas trabajadas"
            paragraphs={EXCEL_PARAGRAPHS}
            faqItems={EXCEL_FAQ}
          />
        </section>
      </main>
    </>
  );
}
