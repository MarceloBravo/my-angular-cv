import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SkillCategorizado } from '../../interface/skill-categorizado';
import { ExperienciaInterface } from '../../interface/experiencia-interface';
import { CursoProcesado } from '../../interface/curso-procesado';
import { DashboardDataService } from '../../services/dashboardDataService/dashboard-data-service';
import { BarHorizontalGraph } from '../../components/Graphs/bar-horizontal-graph/bar-horizontal-graph';
import { PieChartGraph } from '../../components/Graphs/pie-chart-graph/pie-chart-graph';
import { NumberCardGraph } from '../../components/Graphs/number-card/number-card-grap';
import { ItemGraphInterface } from '../../interface/item-graph-interface';
import { AndvancedPieChartGraph } from '../../components/Graphs/andvanced-pie-chart-graph/andvanced-pie-chart-graph';
import { DataEducation } from '../../class/data-education';
import { Education } from '../../services/education/education';
import { AniosEstudiosInterface } from '../../interface/anios-estudios-interface';

@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule, BarHorizontalGraph, PieChartGraph, NumberCardGraph, AndvancedPieChartGraph],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  public skillsChartData: any[] = []; 
  public experienciaChartData: any[] = [];
  public horasPorCursoPieGridData: any[] = [];
  public educFormalChartData: any[] = [];
  public experienciaLaboralSkillsChartData: any[] = [];

  // Configuraciones de gráficos
  public skillsChartOptions: any = {}
  public experienciaChartOptions: any = {};
  public cursosChartOptions: any = {};
  
  // Datos de los gráficos
  public skillsSeries: any[] = [];
  public experienciaSeries: any[] = [];
  public cursosSeries: any[] = [];
  
  // Datos procesados
  public skillsData: SkillCategorizado[] = [];
  public experienciaData: ExperienciaInterface[] = [];
  public cursosData: CursoProcesado[] = [];
 
  constructor(
    private dashboardService: DashboardDataService,
    private educationService: Education
  ) {}
 
  ngOnInit(): void {
    this.cargarDatos();
  }
 
  cargarDatos() {
    // Obtener datos procesados
    this.skillsData = this.dashboardService.categorizarSkills();
    this.experienciaData = this.dashboardService.calcularExperiencia();
    this.cursosData = this.dashboardService.transformarCursos();


    this.DatosCursosPorTecnologia();

    this.DatosExperienciaLaboral();

    this.horasDeCapacitacionPorCurso();

    this.datosEducacionFormal();

    this.experienciaLaboralSkills();
    
  }

  private DatosCursosPorTecnologia(): void{
    this.skillsChartData = this.skillsData.map((elem: any) => {
      return {
        name: elem.nombre,
        value: elem.cursos,
      };
    }).filter((item: {name: string, value: number}) => item.value > 0)
    .sort((a, b) => b.value - a.value);
  }

  private DatosExperienciaLaboral(): void{
    this.experienciaChartData = this.experienciaData.map((elem: any) => {
      return {
        name: elem.empresa,
        value: elem.duracionMeses,
      };
    });
  }

  private experienciaLaboralSkills(): void{
    const tecnologias: {name: string, value: number}[] = [];
    this.experienciaData.forEach((item: ExperienciaInterface) => {

        item.tecnologias.forEach((tecnologia: string) => {
          const elem = tecnologias.find(t => t.name === tecnologia);
          if(!elem) {
            tecnologias.push({name: tecnologia, value: item.duracionMeses});
          }else{
            elem.value += item.duracionMeses;
          }
        });
    });

    this.experienciaLaboralSkillsChartData = tecnologias.sort((a, b) => b.value - a.value).filter((item: ItemGraphInterface, index: number) => index < 15);
  }

  private horasDeCapacitacionPorCurso(): void{
    const horasPorInstitucion = this.cursosData.map((item: CursoProcesado) => {
      return {
        name: item.institucion_capacitadora.includes('SENCE - Talento Digital') ? 'SENCE - Talento Digital': item.institucion_capacitadora,
        value: item.duracion,
        extra: item
      }
    }).reduce((acum: any, item: ItemGraphInterface) => {
      acum[item.name] = {
        name: item.name,
        value: (acum[item.name]?.value || 0) + item.value,
        extra: item.extra
      }
      return acum;
    }, {} as any)
    
    this.horasPorCursoPieGridData = Object.keys(horasPorInstitucion).map((item: string) => {
      return {name: item, value: horasPorInstitucion[item].value, extra: horasPorInstitucion[item].extra}
    }).filter((item: ItemGraphInterface) => item.value > 0)
    console.log('Pie Grid Data',this.horasPorCursoPieGridData)
  }

  private datosEducacionFormal(): void{
    this.educFormalChartData = this.educationService.aniosPorInstitucion()
    .map((item: AniosEstudiosInterface) => {
      return {
        name: item.label,
        value: item.duracion
      }
    });
  }
}

