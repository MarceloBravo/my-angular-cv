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
import { Courses as CoursesServices } from '../../services/courses/courses';
import { Education } from '../../services/education/education';
import { AniosEstudiosInterface } from '../../interface/anios-estudios-interface';
import { PieGridGraph } from '../../components/Graphs/pie-grid-graph/pie-grid-graph';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { VerticalBarGraph } from '../../components/Graphs/vertical-bar-graph/vertical-bar-graph';

@Component({
  selector: 'app-dashboard',
  imports: [
      NgApexchartsModule, 
      BarHorizontalGraph, 
      PieChartGraph, 
      NumberCardGraph, 
      AndvancedPieChartGraph, 
      PieGridGraph,
      VerticalBarGraph
    ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  public skillsChartData: any[] = []; 
  public experienciaChartData: any[] = [];
  public horasPorPlataformaGraphData: any[] = [];
  public educFormalChartData: any[] = [];
  public experienciaLaboralSkillsChartData: any[] = [];
  public experienciaPorActividadChartData: any[] = [];
  public horasTecnologiaCursoChartData: ItemGraphInterface[] = [];

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
    private educationService: Education,
    private coursesServices: CoursesServices
  ) {}
 
  ngOnInit(): void {
    this.cargarDatos();
  }
 
  cargarDatos() {
    // Obtener datos procesados
    this.skillsData = this.dashboardService.categorizarSkills();
    this.experienciaData = this.dashboardService.calcularExperiencia();
    this.cursosData = this.dashboardService.transformarCursos();

    this.datosCursosPorTecnologia();

    this.datosExperienciaLaboral();

    this.horasDeCapacitaconPorPlataforma();

    this.datosEducacionFormal();

    this.experienciaLaboralSkills();

    this.experienciaPorActividad();

    this.datosHorasTecnologiaCurso();
  }

  private datosHorasTecnologiaCurso(): void{
    const temporalResult: ItemGraphInterface[] = [];
    const arrTecnologiasHoras: {name: string[], value: number, plataforma: string}[] = this.cursosData.map((elem: CursoProcesado) => {
      return {
        name: elem.tecnologia,
        value: elem.duracion,
        plataforma: elem.plataforma
      };
    }).filter((item: {name: string[], value: number, plataforma: string}) => item.plataforma !== 'Sence');
    arrTecnologiasHoras.forEach((item: {name: string[], value: number}) => {
      item.name.forEach((elem: string) => {
        if(temporalResult.find((item: ItemGraphInterface) => item.name.toLowerCase() === elem.toLowerCase())){
          temporalResult.find((item: ItemGraphInterface) => item.name.toLowerCase() === elem.toLowerCase())!.value += item.value;
        }else{
          temporalResult.push({name: elem, value: item.value});
        }
      })
    })  
    this.horasTecnologiaCursoChartData = temporalResult.sort((a, b) => b.value - a.value).filter((_,index: number) => index < 20);
  
    console.log('Horas por tecnología', this.horasTecnologiaCursoChartData)
  }

  private datosCursosPorTecnologia(): void{
    this.skillsChartData = this.skillsData.map((elem: any) => {
      return {
        name: elem.nombre,
        value: elem.cursos,
      };
    }).filter((item: {name: string, value: number}) => item.value > 0)
    .sort((a, b) => b.value - a.value);
  }

  private datosExperienciaLaboral(): void{
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

  private horasDeCapacitaconPorPlataforma(): void{
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
    
    this.horasPorPlataformaGraphData = Object.keys(horasPorInstitucion).map((item: string) => {
      return {name: item, value: horasPorInstitucion[item].value, extra: horasPorInstitucion[item].extra}
    }).filter((item: ItemGraphInterface) => item.value > 0)
    console.log('Pie Grid Data',this.horasPorPlataformaGraphData)
  }

  private datosEducacionFormal(): void{
    this.educFormalChartData = this.educationService.aniosPorInstitucion()
    .map((item: AniosEstudiosInterface) => {
      return {
        name: item.label,
        value: item.anios
      }
    });
  }

  private experienciaPorActividad(): void{
    const data: ItemGraphInterface[] = [];
    
    data.push({
      name: 'Laboral', //Meses
      value: this.experienciaData.reduce((acum: number, item: any) => acum + (item.duracionMeses / 12), 0)
    })
    console.log('EDUC FORMAL', this.educFormalChartData)
    data.push({
      name: 'Educación formal', //Años
      value: this.educFormalChartData.reduce((acum: number, item: ItemGraphInterface) => acum + (item.name !== 'Ensañanza mendia' ? item.value : 0), 0),
    })

    data.push({
      name: 'SENCE y Bootcamps', //Horas
      value: this.coursesServices.getCursosSence().reduce((acum: number, item: any) => acum + ((item.lblDuration / (60*12))), 0),
    })

    data.push({
      name: 'Plataformas',  //Horas
      value: this.coursesServices.getOtrosCursos().reduce((acum: number, item: any) => acum + ((item.lblDuration / (60*12))), 0),
    })
    
    this.experienciaPorActividadChartData = data;
  }
}


