export interface WaterRealTimeData {
    nivel_tinaco: {
        porcentaje: number;
        volumen_litros: number;
    };
    consumo_hoy: number;
    flujo_actual: {
        caudal: number;
        estado: boolean;
    };
}