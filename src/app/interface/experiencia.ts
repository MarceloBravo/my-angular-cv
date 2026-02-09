export interface Experiencia {
  empresa: string;
  posicion: string;
  fechaInicio: Date;
  fechaTermino?: Date; // Opcional para trabajos actuales
  duracionMeses: number; // Calculado entre fechas
  descripcion: string;
  tecnologias: string[];
  categoria: 'frontend' | 'backend' | 'fullstack' | 'desktop' | 'freelance';
  esActual: boolean; // Para identificar trabajo actual
  anioExperiencia: number; // Año de inicio para ordenamiento
}
