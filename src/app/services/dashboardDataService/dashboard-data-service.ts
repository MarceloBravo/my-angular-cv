import { Injectable } from '@angular/core';
import { CursoProcesado } from '../../interface/curso-procesado';
import { Experiencia } from '../../interface/experiencia';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';
import { JobInterface } from '../../interface/job-interface';
import { Skills } from '../../interface/skills';
import { SkillCategorizado } from '../../interface/skill-categorizado';
// @ts-ignore
import { cursosSence, otrosCursos } from '../../data/courses.js';
// @ts-ignore
import { jobs } from '../../data/jobs.js'
// @ts-ignore
import { data as skills } from '../../data/skills.js'
// @ts-ignore
import { portfolio } from '../../data/portfolio.js'
import { PortfolioInterface } from '../../interface/portfolio-interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  
  transformarCursos(): CursoProcesado[]{
    let result: CursoProcesado[] = [];

    cursosSence.forEach((item: SenceCoursesInterface) => {
          result.push({
          nombre: item.name,
          plataforma: 'Sence',
          institucion_capacitadora: item.institute,
          fecha: new Date(item.lblEndDate),
          duracion: parseFloat(item.lblDuration),
          tecnologia: ['']
        })
    });

    otrosCursos.forEach((item: OtherCoursesInterface) => {
      result.push({
        nombre: item.name,
        plataforma: 'Sence',
        institucion_capacitadora: item.institution,
        fecha: new Date(item.lblEndDate),
        duracion: item.lblDuration ? parseFloat(item.lblDuration) : 0,
        tecnologia: ['']
      })
    })

    return result;
  }


  extraerTecnologias(): string[]{
    let tecnologias: string[] = [];

    cursosSence.contents.forEach((element: string) => {
      if(element && !tecnologias.includes(element)){
        tecnologias.push(element);
      }
    });

    otrosCursos.contents.forEach((element: string) => {
      if(element && !tecnologias.includes(element)){
        tecnologias.push(element);
      }
    });

    return tecnologias;
  }

  calcularExperiencia(): Experiencia[]{
    let result: Experiencia[] = [];
    
    jobs.forEach((job: JobInterface) => {
      // Parsear fechas desde el string "Enero 2025 - Mayo 2025"
      const fechas = this.parsearFechas(job.years);
      
      result.push({
        empresa: job.company,
        posicion: job.position,
        fechaInicio: fechas.inicio,
        fechaTermino: fechas.termino,
        duracionMeses: this.calcularDuracionMeses(fechas.inicio, fechas.termino),
        descripcion: job.description,
        tecnologias: job.tecnologies || [],
        categoria: job.category || 'fullstack',
        esActual: !fechas.termino,
        anioExperiencia: fechas.inicio.getFullYear()
      });
    });
    
    return result.sort((a, b) => b.anioExperiencia - a.anioExperiencia);
  }

  private parsearFechas(rangoFechas: string): { inicio: Date; termino?: Date } {
    const meses: { [key: string]: number } = {
      'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5,
      'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };
    
    const partes = rangoFechas.split(' - ');
    const inicioStr = partes[0].trim();
    const terminoStr = partes[1]?.trim();
    
    // Parsear fecha inicio: "Enero 2025"
    const [mesInicio, anioInicio] = inicioStr.split(' ');
    const inicio = new Date(parseInt(anioInicio), meses[mesInicio.toLowerCase()] || 0, 1);
    
    // Parsear fecha término si existe
    let termino: Date | undefined;
    if (terminoStr) {
      const [mesTermino, anioTermino] = terminoStr.split(' ');
      termino = new Date(parseInt(anioTermino), meses[mesTermino.toLowerCase()] || 0, 1);
    }
    
    return { inicio, termino };
  }

  private calcularDuracionMeses(inicio: Date, termino?: Date): number {
    const fin = termino || new Date();
    return (fin.getFullYear() - inicio.getFullYear()) * 12 + (fin.getMonth() - inicio.getMonth());
  }

  categorizarSkills(): SkillCategorizado[] {
    const skillsCategorizados: SkillCategorizado[] = [];
    
    skills.forEach((skill: Skills) => {
      const categoria = this.determinarCategoria(skill.name);
      
      skillsCategorizados.push({
        nombre: skill.name,
        categoria: categoria,
        nivel: this.calcularNivel(skill.name),
        icono: skill.path || skill.img || null,
        proyectos: this.contarProyectosConSkill(skill.name),
        cursos: this.contarCursosConSkill(skill.name),
        experiencia: this.calcularExperienciaConSkill(skill.name)
      });
    });
    
    return skillsCategorizados;
  }

  private determinarCategoria(nombreSkill: string): 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'framework' | 'tool' | 'methodology' {
    const frontend = ['React', 'Angular', 'Vue', 'HTML', 'CSS', 'Bootstrap', 'Sass', 'JavaScript'];
    const backend = ['PHP', 'Node', 'Python', 'C#', 'Java', 'Laravel', 'Express'];
    const database = ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'SQL Server'];
    const devops = ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'CI/CD'];
    const mobile = ['React Native', 'Flutter', 'iOS', 'Android'];
    const framework = ['Laravel', 'Angular', 'React', 'Vue', 'Express', 'ASP.NET'];
    const tool = ['Git', 'GitHub', 'Jira', 'Webpack', 'Babel'];
    const methodology = ['Scrum', 'Kanban'];
    
    const nombre = nombreSkill.toLowerCase();
    
    if (frontend.some(f => nombre.includes(f.toLowerCase()))) return 'frontend';
    if (backend.some(b => nombre.includes(b.toLowerCase()))) return 'backend';
    if (database.some(d => nombre.includes(d.toLowerCase()))) return 'database';
    if (devops.some(d => nombre.includes(d.toLowerCase()))) return 'devops';
    if (mobile.some(m => nombre.includes(m.toLowerCase()))) return 'mobile';
    if (framework.some(f => nombre.includes(f.toLowerCase()))) return 'framework';
    if (tool.some(t => nombre.includes(t.toLowerCase()))) return 'tool';
    if (methodology.some(m => nombre.includes(m.toLowerCase()))) return 'methodology';
    
    return 'tool'; // valor por defecto
  }

  private calcularNivel(nombreSkill: string): number {
    // Lógica para calcular nivel basado en experiencia y proyectos
    const experiencia = this.calcularExperienciaConSkill(nombreSkill);
    const proyectos = this.contarProyectosConSkill(nombreSkill);
    
    if (experiencia >= 5 || proyectos >= 10) return 5;
    if (experiencia >= 3 || proyectos >= 5) return 4;
    if (experiencia >= 2 || proyectos >= 3) return 3;
    if (experiencia >= 1 || proyectos >= 1) return 2;
    return 1;
  }

  private contarProyectosConSkill(nombreSkill: string): number {
    // Lógica para contar proyectos que usan este skill
    const result = portfolio.reduce((acumulador: number, item: PortfolioInterface) => {
      if(
        item.description?.includes(nombreSkill.toLowerCase()) || 
        item.paragraph?.toLowerCase().includes(nombreSkill.toLowerCase())
      ){
        acumulador++;
      }
      return acumulador;
    }, 0);

    return result;
  }

  private contarCursosConSkill(nombreSkill: string): number {
    // Lógica para contar cursos relacionados
    let result = cursosSence.reduce((acumulador: number, item: SenceCoursesInterface) => {
      if(item.contents.includes(nombreSkill)){
        acumulador++;
      }
      return acumulador;
    }, 0);

    result += otrosCursos.reduce((acumulador: number, item: OtherCoursesInterface) => {
      if(item.contents.includes(nombreSkill)){
        acumulador++;
      }
      return acumulador;
    }, 0);

    return result;
  }

  private calcularExperienciaConSkill(nombreSkill: string): number {
    // Lógica para calcular años de experiencia
    const result = jobs.reduce((acumulador: number, item: JobInterface) => {
      if(item.tecnologies.includes(nombreSkill)){
        acumulador++;
      }
      return acumulador;
    }, 0);

    return result;
  }

}
