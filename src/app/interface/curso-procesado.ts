export interface CursoProcesado {
  nombre: string;
  plataforma: string;
  institucion_capacitadora: string;
  fecha: Date | null;
  duracion: number;
  tecnologia: string[];
}
