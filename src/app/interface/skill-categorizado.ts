export interface SkillCategorizado {
  nombre: string;              // Nombre del skill (ej: "PHP", "React")
  categoria: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'framework' | 'tool' | 'methodology';
  nivel?: number;             // Nivel de dominio 1-5 (opcional)
  icono?: string | null;     // SVG path o img path
  proyectos: number;           // Cantidad de proyectos que usan este skill
  cursos: number;              // Cantidad de cursos relacionados
  experiencia: number;         // Años de experiencia con este skill
}
