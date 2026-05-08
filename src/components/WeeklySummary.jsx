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

export default function WeeklySummary({ summary }) {
  const horasExtra = summary.overtime_2x + summary.overtime_3x;

  return (
    <section className="results-panel" aria-live="polite">
      <p className="results-panel__eyebrow">Total semanal estimado</p>
      <p className="results-panel__total">{formatMoneyLine(summary.total_pay)}</p>
      <div className="results-panel__row">
        <div className="results-panel__stat">
          <span className="results-panel__stat-label">Horas trabajadas</span>
          <span className="results-panel__stat-value">
            {formatHours(summary.total_hours)}
          </span>
        </div>
        <div className="results-panel__stat" style={{ textAlign: "center" }}>
          <span className="results-panel__stat-label">Horas extra</span>
          <span className="results-panel__stat-value">
            {formatHours(horasExtra)}
          </span>
        </div>
        <div className="results-panel__stat" style={{ textAlign: "right" }}>
          <span className="results-panel__stat-label">Días trabajados</span>
          <span className="results-panel__stat-value">{summary.worked_days}</span>
        </div>
      </div>
      <p className="results-panel__disclaimer">
        Estimación informativa para trabajadores en México
      </p>
    </section>
  );
}
