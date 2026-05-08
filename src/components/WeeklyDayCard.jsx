export default function WeeklyDayCard({ dayLabel, values, onChange }) {
  const isActive = Boolean(values.activo);

  return (
    <article className="card weekly-day-card">
      <div className="weekly-day-card__header">
        <h3 className="weekly-day-card__title">{dayLabel}</h3>
        <button
          type="button"
          className="weekly-day-card__toggle"
          onClick={() => onChange("activo", !isActive)}
          aria-pressed={isActive}
        >
          {isActive ? "Activo" : "Descanso"}
        </button>
      </div>

      {isActive ? (
        <div className="weekly-day-card__inputs">
          <div className="field-group">
            <label className="field-label" htmlFor={`${dayLabel}-entrada`}>
              Hora de entrada
            </label>
            <input
              id={`${dayLabel}-entrada`}
              className="form-input"
              type="time"
              value={values.hora_entrada}
              onChange={(e) => onChange("hora_entrada", e.target.value)}
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor={`${dayLabel}-salida`}>
              Hora de salida
            </label>
            <input
              id={`${dayLabel}-salida`}
              className="form-input"
              type="time"
              value={values.hora_salida}
              onChange={(e) => onChange("hora_salida", e.target.value)}
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor={`${dayLabel}-descanso`}>
              Descanso (minutos)
            </label>
            <input
              id={`${dayLabel}-descanso`}
              className="form-input"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={values.descanso_minutos}
              onChange={(e) =>
                onChange("descanso_minutos", Number(e.target.value) || 0)
              }
            />
          </div>
        </div>
      ) : (
        <p className="weekly-day-card__collapsed">
          Día inactivo. Activa el día para registrar horario.
        </p>
      )}
    </article>
  );
}
