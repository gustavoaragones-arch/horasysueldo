export default function CalculatorForm({
  hora_entrada,
  hora_salida,
  descanso_minutos,
  pago_por_hora,
  aplicar_horas_extra_legales,
  onChange,
}) {
  return (
    <form className="form-stack" onSubmit={(e) => e.preventDefault()} aria-label="Datos de jornada">
      <div className="field-group">
        <label htmlFor="hora_entrada" className="field-label">
          Hora de entrada
        </label>
        <input
          id="hora_entrada"
          className="form-input"
          type="time"
          value={hora_entrada}
          onChange={(e) => onChange("hora_entrada", e.target.value)}
        />
      </div>
      <div className="field-group">
        <label htmlFor="hora_salida" className="field-label">
          Hora de salida
        </label>
        <input
          id="hora_salida"
          className="form-input"
          type="time"
          value={hora_salida}
          onChange={(e) => onChange("hora_salida", e.target.value)}
        />
      </div>
      <div className="field-group">
        <label htmlFor="descanso_minutos" className="field-label">
          Descanso (minutos)
        </label>
        <input
          id="descanso_minutos"
          className="form-input"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={descanso_minutos}
          onChange={(e) =>
            onChange("descanso_minutos", Number(e.target.value) || 0)
          }
        />
      </div>
      <div className="field-group">
        <label htmlFor="pago_por_hora" className="field-label">
          Pago por hora
        </label>
        <input
          id="pago_por_hora"
          className="form-input"
          type="number"
          inputMode="decimal"
          min={0}
          step="0.01"
          value={pago_por_hora}
          onChange={(e) =>
            onChange("pago_por_hora", Number(e.target.value) || 0)
          }
        />
      </div>
      <div className="field-group">
        <div className="field-label" id="calc-mode-label">
          Modo de cálculo
        </div>
        <div
          className="segment"
          role="radiogroup"
          aria-labelledby="calc-mode-label"
        >
          <button
            type="button"
            role="radio"
            aria-checked={!aplicar_horas_extra_legales}
            className="segment-btn"
            onClick={() =>
              onChange("aplicar_horas_extra_legales", false)
            }
          >
            Pago simple
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={aplicar_horas_extra_legales}
            className="segment-btn"
            onClick={() =>
              onChange("aplicar_horas_extra_legales", true)
            }
          >
            Pago con horas extra
          </button>
        </div>
      </div>
    </form>
  );
}
