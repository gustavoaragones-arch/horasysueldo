function formatHours(n) {
  const rounded = Math.round(n * 100) / 100;
  return Number.isFinite(rounded) ? rounded.toLocaleString("es-MX") : "0";
}

function formatMoneyLine(n) {
  if (!Number.isFinite(n)) return "$0.00 MXN";
  const nStr = n.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `$${nStr} MXN`;
}

export default function ResultsPanel({ results }) {
  const { total_hours, overtime_2x, overtime_3x, sueldo_total } = results;
  const horasExtra = overtime_2x + overtime_3x;

  return (
    <section className="results-panel" aria-live="polite">
      <p className="results-panel__eyebrow">Esto podrías haber ganado</p>
      <p className="results-panel__total">{formatMoneyLine(sueldo_total)}</p>
      <div className="results-panel__row">
        <div className="results-panel__stat">
          <span className="results-panel__stat-label">Horas registradas</span>
          <span className="results-panel__stat-value">
            {formatHours(total_hours)}
          </span>
        </div>
        <div className="results-panel__stat" style={{ textAlign: "right" }}>
          <span className="results-panel__stat-label">Horas extra</span>
          <span className="results-panel__stat-value">
            {formatHours(horasExtra)}
          </span>
        </div>
      </div>
      <p className="results-panel__helper">
        Las horas extra se estiman automáticamente según el modo seleccionado.
      </p>
      <p className="results-panel__disclaimer">
        Estimación informativa para trabajadores en México
      </p>
    </section>
  );
}
