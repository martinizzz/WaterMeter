export interface WaterRealTimeData {
    nivel_tinaco: { porcentaje: number; volumen_litros: number; };
    consumo_hoy: number;
    flujo_actual: { caudal: number; estado: boolean; };
}

export interface WaterHistoricalData {
    ultimos_7_dias: number[]; // Array de litros consumidos [Lun, Mar, Mie...]
    mes_actual: number; // m3
}

export interface WaterStatsData {
    promedio_diario: number;
    hora_pico: string;
}