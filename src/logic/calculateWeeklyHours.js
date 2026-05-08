function timeStringToDecimalHours(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return 0;
  const parts = timeStr.split(":");
  const h = Number(parts[0]) || 0;
  const m = Number(parts[1]) || 0;
  return h + m / 60;
}

function calculateDailyHours(entry) {
  let entrada = timeStringToDecimalHours(entry.hora_entrada);
  let salida = timeStringToDecimalHours(entry.hora_salida);
  if (salida < entrada) salida += 24;
  return (salida - entrada) - ((Number(entry.descanso_minutos) || 0) / 60);
}

export function calculateWeeklyHours(dayEntries) {
  const activeDays = dayEntries.filter((entry) => Boolean(entry.activo));
  const worked_days = activeDays.length;

  const total_hours = activeDays.reduce((sum, entry) => {
    return sum + calculateDailyHours(entry);
  }, 0);

  const overtime_2x = Math.min(Math.max(total_hours - 48, 0), 9);
  const overtime_3x = Math.max(total_hours - 57, 0);

  const defaultRate = Number(activeDays[0]?.pago_por_hora) || 0;
  const rate = Number.isFinite(defaultRate) ? defaultRate : 0;
  const legalOvertime =
    activeDays.length > 0 ? Boolean(activeDays[0].aplicar_horas_extra_legales) : true;

  let total_pay;
  if (legalOvertime) {
    const regular_hours = Math.min(total_hours, 48);
    total_pay =
      regular_hours * rate +
      overtime_2x * rate * 2 +
      overtime_3x * rate * 3;
  } else {
    total_pay = total_hours * rate;
  }

  return {
    total_hours,
    overtime_2x,
    overtime_3x,
    total_pay,
    worked_days,
  };
}
