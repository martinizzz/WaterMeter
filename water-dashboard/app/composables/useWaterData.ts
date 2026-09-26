import { ref as dbRef, onValue } from 'firebase/database';
import { ref as vueRef } from 'vue';
import type { WaterRealTimeData } from '~/types/water';
import { useFirebase } from '~/composables/useFirebase';

export const useWaterData = () => {
    const { db } = useFirebase();

    // Estado reactivo inicial (valores por defecto)
    const realTimeData = vueRef<WaterRealTimeData>({
        nivel_tinaco: { porcentaje: 0, volumen_litros: 0 },
        consumo_hoy: 0,
        flujo_actual: { caudal: 0, estado: false }
    });

    const isLoading = vueRef(true);

    // Función para suscribirse a los nodos de la RTDB
    const listenToRealTimeData = () => {
        const dataRef = dbRef(db, 'tiempo_real');

        onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                // Mapeamos los datos para asegurarnos de que la estructura sea sólida
                realTimeData.value = {
                    nivel_tinaco: data.nivel_tinaco || { porcentaje: 0, volumen_litros: 0 },
                    consumo_hoy: data.consumo_hoy || 0,
                    flujo_actual: data.flujo_actual || { caudal: 0, estado: false }
                };
            }
            isLoading.value = false;
        }, (error) => {
            console.error("Error leyendo Firebase:", error);
            isLoading.value = false;
        });
    };

    return {
        realTimeData,
        isLoading,
        listenToRealTimeData
    };
};