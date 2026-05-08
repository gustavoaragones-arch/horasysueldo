const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  marginBottom: "1rem",
};

const inputStyle = {
  width: "100%",
  maxWidth: "100%",
  padding: "0.65rem 0.75rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

export default function CalculatorForm({
  hora_entrada,
  hora_salida,
  descanso_minutos,
  pago_por_hora,
  aplicar_horas_extra_legales,
  onChange,
}) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ width: "100%" }}
      aria-label="Datos de jornada"
    >
      <div style={fieldStyle}>
        <label htmlFor="hora_entrada">Hora de entrada</label>
        <input
          id="hora_entrada"
          type="time"
          value={hora_entrada}
          onChange={(e) => onChange("hora_entrada", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="hora_salida">Hora de salida</label>
        <input
          id="hora_salida"
          type="time"
          value={hora_salida}
          onChange={(e) => onChange("hora_salida", e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="descanso_minutos">Descanso (minutos)</label>
        <input
          id="descanso_minutos"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={descanso_minutos}
          onChange={(e) =>
            onChange("descanso_minutos", Number(e.target.value) || 0)
          }
          style={inputStyle}
        />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="pago_por_hora">Pago por hora</label>
        <input
          id="pago_por_hora"
          type="number"
          inputMode="decimal"
          min={0}
          step="0.01"
          value={pago_por_hora}
          onChange={(e) =>
            onChange("pago_por_hora", Number(e.target.value) || 0)
          }
          style={inputStyle}
        />
      </div>
      <div
        style={{
          ...fieldStyle,
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: 0,
        }}
      >
        <input
          id="aplicar_horas_extra_legales"
          type="checkbox"
          checked={aplicar_horas_extra_legales}
          onChange={(e) =>
            onChange("aplicar_horas_extra_legales", e.target.checked)
          }
          style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0 }}
        />
        <label
          htmlFor="aplicar_horas_extra_legales"
          style={{ marginBottom: 0, fontWeight: 500 }}
        >
          Aplicar horas extra legales
        </label>
      </div>
    </form>
  );
}
