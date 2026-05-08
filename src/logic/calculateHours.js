/**
 * @param {Object} params
 * @param {number} params.hora_entrada
 * @param {number} params.hora_salida
 * @param {number} params.descanso_minutos
 * @param {number} params.pago_por_hora
 * @param {boolean} params.aplicar_horas_extra_legales
 */
export function calculateHours({
  hora_entrada,
  hora_salida,
  descanso_minutos,
  pago_por_hora,
  aplicar_horas_extra_legales,
}) {
  const total_hours = (hora_salida - hora_entrada) - (descanso_minutos / 60);
  const regular_hours = Math.min(total_hours, 48);
  const overtime_2x = Math.min(Math.max(total_hours - 48, 0), 9);
  const overtime_3x = Math.max(total_hours - 57, 0);

  let sueldo_total;
  if (aplicar_horas_extra_legales) {
    sueldo_total =
      regular_hours * pago_por_hora +
      overtime_2x * pago_por_hora * 2 +
      overtime_3x * pago_por_hora * 3;
  } else {
    sueldo_total = total_hours * pago_por_hora;
  }

  return {
    total_hours,
    regular_hours,
    overtime_2x,
    overtime_3x,
    sueldo_total,
  };
}
