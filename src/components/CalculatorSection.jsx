import { useMemo, useState, useCallback } from "react";
import CalculatorForm from "@/components/CalculatorForm";
import ResultsPanel from "@/components/ResultsPanel";
import { calculateHours } from "@/logic/calculateHours";

function timeStringToDecimalHours(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return 0;
  const parts = timeStr.split(":");
  const h = Number(parts[0]) || 0;
  const m = Number(parts[1]) || 0;
  return h + m / 60;
}

export default function CalculatorSection() {
  const [hora_entrada, setHora_entrada] = useState("09:00");
  const [hora_salida, setHora_salida] = useState("18:00");
  const [descanso_minutos, setDescanso_minutos] = useState(60);
  const [pago_por_hora, setPago_por_hora] = useState(0);
  const [aplicar_horas_extra_legales, setAplicar_horas_extra_legales] =
    useState(true);

  const handleChange = useCallback((field, value) => {
    if (field === "hora_entrada") setHora_entrada(value);
    else if (field === "hora_salida") setHora_salida(value);
    else if (field === "descanso_minutos") setDescanso_minutos(value);
    else if (field === "pago_por_hora") setPago_por_hora(value);
    else if (field === "aplicar_horas_extra_legales")
      setAplicar_horas_extra_legales(value);
  }, []);

  const results = useMemo(() => {
    let entrada = timeStringToDecimalHours(hora_entrada);
    let salida = timeStringToDecimalHours(hora_salida);
    if (salida < entrada) salida += 24;

    return calculateHours({
      hora_entrada: entrada,
      hora_salida: salida,
      descanso_minutos,
      pago_por_hora,
      aplicar_horas_extra_legales,
    });
  }, [
    hora_entrada,
    hora_salida,
    descanso_minutos,
    pago_por_hora,
    aplicar_horas_extra_legales,
  ]);

  return (
    <section
      style={{ width: "100%" }}
      aria-label="Calculadora de horas y sueldo"
    >
      <CalculatorForm
        hora_entrada={hora_entrada}
        hora_salida={hora_salida}
        descanso_minutos={descanso_minutos}
        pago_por_hora={pago_por_hora}
        aplicar_horas_extra_legales={aplicar_horas_extra_legales}
        onChange={handleChange}
      />
      <ResultsPanel results={results} />
    </section>
  );
}
