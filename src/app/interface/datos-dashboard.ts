export interface DatosDashboard {
  cursosPorAño: { [año: number]: number };
  tecnologiasPorProyecto: { [tecnologia: number]: number };
  evolucionCarreras: { [año: string]: string };
  distribucionSkills: { categoria: string; count: number }[];
}
