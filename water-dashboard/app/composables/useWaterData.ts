import { ref as dbRef, onValue } from 'firebase/database';
import { ref as vueRef } from 'vue';
import type { WaterRealTimeData, WaterHistoricalData, WaterStatsData } from '~/types/water';
import { useFirebase } from './useFirebase';

export const useWaterData = () => {
    const { db } = useFirebase();

    const realTimeData = vueRef<WaterRealTimeData>({
        nivel_tinaco: { porcentaje: 0, volumen_litros: 0 },
        consumo_hoy: 0,
        flujo_actual: { caudal: 0, estado: false }
    });

    const historicalData = vueRef<WaterHistoricalData>({
        ultimos_7_dias: [0, 0, 0, 0, 0, 0, 0],
        mes_actual: 0
    });

    const statsData = vueRef<WaterStatsData>({
        promedio_diario: 0,
        hora_pico: "00:00"
    });

    const isLoading = vueRef(true);
    const isLoadingHistory = vueRef(true);

    const listenToRealTimeData = () => {
        onValue(dbRef(db, 'tiempo_real'), (snapshot) => {
            if (snapshot.exists()) realTimeData.value = snapshot.val();
            isLoading.value = false;
        });

        onValue(dbRef(db, 'historico'), (snapshot) => {
            if (snapshot.exists()) historicalData.value = snapshot.val();
            isLoadingHistory.value = false;
        });

        onValue(dbRef(db, 'estadisticas'), (snapshot) => {
            if (snapshot.exists()) statsData.value = snapshot.val();
        });
    };

    return { realTimeData, historicalData, statsData, isLoading, isLoadingHistory, listenToRealTimeData };
};