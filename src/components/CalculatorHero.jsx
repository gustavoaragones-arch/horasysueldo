export default function CalculatorHero({
  title = "Calcula cuánto ganaste hoy",
  subtitle = "Descubre tus horas trabajadas, horas extra y sueldo estimado en segundos.",
  note,
}) {
  return (
    <section className="section-gap">
      <h1>{title}</h1>
      <p className="hero-lead">{subtitle}</p>
      {note ? <p className="hero-note">{note}</p> : null}
    </section>
  );
}
