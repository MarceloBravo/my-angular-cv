import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SkillCategorizado } from '../../interface/skill-categorizado';
import { Experiencia } from '../../interface/experiencia';
import { CursoProcesado } from '../../interface/curso-procesado';
import { DashboardDataService } from '../../services/dashboardDataService/dashboard-data-service';
import { BarHorizontalGraph } from '../../components/Graphs/bar-horizontal-graph/bar-horizontal-graph';
import { PieChartGraph } from '../../components/Graphs/pie-chart-graph/pie-chart-graph';

@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule, BarHorizontalGraph, PieChartGraph],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  public skillsChartData: any[] = []; 
  public experienciaChartData: any[] = [];

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
  public experienciaData: Experiencia[] = [];
  public cursosData: CursoProcesado[] = [];
 
  constructor(private dashboardService: DashboardDataService) {}
 
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
}

