import { useMemo, useState } from "react";
import SeoHead from "@/components/SeoHead";
import SeoContentBlock from "@/components/SeoContentBlock";
import WeeklyDayCard from "@/components/WeeklyDayCard";
import WeeklySummary from "@/components/WeeklySummary";
import { calculateWeeklyHours } from "@/logic/calculateWeeklyHours";

const PAGE_TITLE = "Calculadora semanal de horas trabajadas";
const PAGE_DESCRIPTION =
  "Esta calculadora semanal permite estimar horas trabajadas y sueldo total en México.";
const CANONICAL = "https://horasysueldo.com/semana";

const DAY_LABELS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const SEO_PARAGRAPHS = [
  "Esta calculadora semanal permite estimar horas trabajadas y sueldo total en México.",
  "Puedes registrar horarios diarios y calcular horas extra automáticamente.",
  "La herramienta funciona tanto para trabajos formales como informales.",
];

const SEO_FAQ = [
  {
    question: "¿Puedo calcular toda mi semana?",
    answer: "Sí. Puedes registrar horarios para cada día trabajado.",
  },
  {
    question: "¿La calculadora incluye horas extra?",
    answer: "Sí. Las horas extra semanales se estiman automáticamente.",
  },
  {
    question: "¿Funciona para turnos nocturnos?",
    answer: "Sí. También soporta jornadas que cruzan medianoche.",
  },
];

function defaultDay(activo) {
  return {
    hora_entrada: "09:00",
    hora_salida: "18:00",
    descanso_minutos: 60,
    activo,
  };
}

export default function SemanaPage() {
  const [pagoPorHora, setPagoPorHora] = useState(0);
  const [aplicarHorasExtraLegales, setAplicarHorasExtraLegales] = useState(true);
  const [days, setDays] = useState([
    defaultDay(true),
    defaultDay(true),
    defaultDay(true),
    defaultDay(true),
    defaultDay(true),
    defaultDay(false),
    defaultDay(false),
  ]);

  const updateDay = (index, field, value) => {
    setDays((prev) =>
      prev.map((day, dayIndex) =>
        dayIndex === index ? { ...day, [field]: value } : day
      )
    );
  };

  const summary = useMemo(() => {
    const entries = days.map((day) => ({
      ...day,
      pago_por_hora: pagoPorHora,
      aplicar_horas_extra_legales: aplicarHorasExtraLegales,
    }));
    return calculateWeeklyHours(entries);
  }, [days, pagoPorHora, aplicarHorasExtraLegales]);

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
      <main className="shell">
        <section className="section-gap">
          <h1>Descubre cuánto debiste ganar esta semana</h1>
          <p className="hero-lead">
            Registra tus turnos y estima tu pago semanal en minutos.
          </p>
        </section>

        <section className="section-gap">
          <div className="card">
            <div className="field-group">
              <label className="field-label" htmlFor="weekly-rate">
                Pago por hora
              </label>
              <input
                id="weekly-rate"
                className="form-input"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={pagoPorHora}
                onChange={(e) => setPagoPorHora(Number(e.target.value) || 0)}
              />
            </div>
            <div className="field-group">
              <div className="field-label" id="weekly-mode-label">
                Modo de cálculo
              </div>
              <div
                className="segment"
                role="radiogroup"
                aria-labelledby="weekly-mode-label"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={!aplicarHorasExtraLegales}
                  className="segment-btn"
                  onClick={() => setAplicarHorasExtraLegales(false)}
                >
                  Pago simple
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={aplicarHorasExtraLegales}
                  className="segment-btn"
                  onClick={() => setAplicarHorasExtraLegales(true)}
                >
                  Pago con horas extra
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gap weekly-stack">
          {DAY_LABELS.map((label, index) => (
            <WeeklyDayCard
              key={label}
              dayLabel={label}
              values={days[index]}
              onChange={(field, value) => updateDay(index, field, value)}
            />
          ))}
        </section>

        <section className="section-gap">
          <div className="card">
            <WeeklySummary summary={summary} />
          </div>
        </section>

        <section className="section-gap">
          <SeoContentBlock
            title="Calculadora semanal de horas trabajadas"
            paragraphs={SEO_PARAGRAPHS}
            faqItems={SEO_FAQ}
          />
        </section>
      </main>
    </>
  );
}
