import SeoHead from "@/components/SeoHead";
import CalculatorHero from "@/components/CalculatorHero";
import CalculatorSection from "@/components/CalculatorSection";
import SeoContentBlock from "@/components/SeoContentBlock";

const HOME_TITLE =
  "Horas y Sueldo | Calculadora de horas trabajadas en México";
const HOME_DESCRIPTION =
  "Calcula horas trabajadas, horas extra y estimación de sueldo en México. Herramienta en línea, rápida y sin registro.";

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

export default function Home() {
  return (
    <>
      <SeoHead
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        canonical="https://horasysueldo.com/"
        ogTitle={HOME_TITLE}
        ogDescription={HOME_DESCRIPTION}
        faqItems={SEO_FAQ}
      />
      <main className="shell">
        <CalculatorHero />
        <CalculatorSection />
        <section className="section-gap">
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
