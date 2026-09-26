import { ref, watch } from 'vue';
import type { WaterRealTimeData } from '~/types/water';

export const useWaterAlerts = () => {
    const alertaNivel = ref<string | null>(null);
    const alertaFuga = ref<string | null>(null);

    let timerFuga: NodeJS.Timeout | null = null;
    // Para pruebas usaremos 10 segundos. En producción cámbialo a 30 * 60 * 1000 (30 min)
    const TIEMPO_LIMITE_FUGA_MS = 10000;

    const monitorearDatos = (datos: WaterRealTimeData) => {
        // 1. Regla de Nivel Crítico (< 15%)
        if (datos.nivel_tinaco.porcentaje <= 15) {
            alertaNivel.value = "¡Riesgo de desabasto! El nivel del tinaco es crítico.";
        } else {
            alertaNivel.value = null;
        }

        // 2. Regla de Detección de Fugas (Flujo constante prolongado)
        if (datos.flujo_actual.estado) {
            // Si el agua está corriendo y no hay temporizador, lo iniciamos
            if (!timerFuga) {
                timerFuga = setTimeout(() => {
                    alertaFuga.value = "¡Posible fuga detectada! El agua ha estado fluyendo sin interrupción.";
                }, TIEMPO_LIMITE_FUGA_MS);
            }
        } else {
            // Si el agua se detiene, limpiamos el temporizador y la alerta
            if (timerFuga) {
                clearTimeout(timerFuga);
                timerFuga = null;
            }
            alertaFuga.value = null;
        }
    };

    return {
        alertaNivel,
        alertaFuga,
        monitorearDatos
    };
};