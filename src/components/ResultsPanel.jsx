function formatHours(n) {
  const rounded = Math.round(n * 100) / 100;
  return Number.isFinite(rounded) ? rounded.toLocaleString("es-MX") : "0";
}

function formatMoney(n) {
  if (!Number.isFinite(n)) return "$0 MXN";
  return (
    "$" +
    n.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) +
    " MXN"
  );
}

export default function ResultsPanel({ results }) {
  const { total_hours, overtime_2x, overtime_3x, sueldo_total } = results;
  const horasExtra = overtime_2x + overtime_3x;

  const rowStyle = {
    marginBottom: "0.75rem",
    fontSize: "1rem",
    lineHeight: 1.4,
  };

  const ganasteStyle = {
    marginTop: "1rem",
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.2,
  };

  return (
    <section style={{ width: "100%" }} aria-live="polite">
      <p style={rowStyle}>
        Horas trabajadas: {formatHours(total_hours)}
      </p>
      <p style={rowStyle}>Horas extra: {formatHours(horasExtra)}</p>
      <p style={ganasteStyle}>Ganaste: {formatMoney(sueldo_total)}</p>
    </section>
  );
}
