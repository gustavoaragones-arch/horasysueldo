import SeoHead from "@/components/SeoHead";
import CalculatorHero from "@/components/CalculatorHero";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const CANONICAL = "https://horasysueldo.com/mx/calculadora-horas-excel";

const PAGE_TITLE = "Calculadora de Horas Trabajadas sin Excel";
const PAGE_DESCRIPTION =
  "Alternativa rápida y simple a Excel para calcular horas trabajadas y sueldo.";

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

      <main className="shell">
        <CalculatorHero />
        <CalculatorSection />
        <section className="section-gap">
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
