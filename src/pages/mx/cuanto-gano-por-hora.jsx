import SeoHead from "@/components/SeoHead";
import CalculatorHero from "@/components/CalculatorHero";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const CANONICAL = "https://horasysueldo.com/mx/cuanto-gano-por-hora";

const PAGE_TITLE = "Calcula Cuánto Ganas por Hora";
const PAGE_DESCRIPTION =
  "Descubre cuánto ganas por hora según tus horas trabajadas y pago por hora.";

const CUANTO_GANO_PARAGRAPHS = [
  "Muchas personas en México quieren saber cuánto realmente ganan por hora trabajada.",
  "Esta calculadora permite estimar ingresos según horas trabajadas, descansos y pago por hora.",
  "También puedes verificar si las horas extra cambian el total ganado.",
  "El cálculo funciona tanto para trabajos formales como informales.",
];

const CUANTO_GANO_FAQ = [
  {
    question: "¿Cómo saber cuánto gano por hora?",
    answer:
      "Divide el dinero ganado entre las horas trabajadas o utiliza esta calculadora para hacerlo automáticamente.",
  },
  {
    question: "¿La calculadora incluye descansos?",
    answer:
      "Sí. Puedes descontar minutos de descanso antes de calcular el total.",
  },
  {
    question: "¿Funciona para turnos nocturnos?",
    answer:
      "Sí. También puede calcular jornadas que cruzan medianoche.",
  },
];

export default function CuantoGanoPorHoraPage() {
  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={CANONICAL}
        ogTitle={PAGE_TITLE}
        ogDescription={PAGE_DESCRIPTION}
        faqItems={CUANTO_GANO_FAQ}
      />

      <main className="shell">
        <CalculatorHero />
        <CalculatorSection />
        <section className="section-gap">
          <SeoContentBlock
            title="Calcula cuánto ganas por hora"
            paragraphs={CUANTO_GANO_PARAGRAPHS}
            faqItems={CUANTO_GANO_FAQ}
          />
        </section>
      </main>
    </>
  );
}
