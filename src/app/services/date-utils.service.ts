import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  /**
   * Formatea fecha desde formato DD/MM/YYYY a lenguaje natural
   * @param fechaString - Fecha en formato "01/01/2024"
   * @returns Fecha formateada en lenguaje natural
   */
  formatearFechaLenguajeNatural(fechaString: string): string {
    if (!fechaString) return '';

    // Separar día, mes, año
    const partes = fechaString.split('/');
    if (partes.length !== 3) return fechaString; // Retornar original si formato inválido

    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const anio = parseInt(partes[2]);

    // Validar que sean números
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) return fechaString;

    // Obtener nombre del mes en español
    const nombreMes = this.obtenerNombreMes(mes);
    
    // Formatear según el día
    let diaFormateado: string;
    if (dia === 1) {
      diaFormateado = '1er';
    } else if (dia === 2) {
      diaFormateado = '2do';
    } else if (dia === 3) {
      diaFormateado = '3er';
    } else {
      diaFormateado = dia.toString();
    }

    return `${diaFormateado} de ${nombreMes} de ${anio}`;
  }

  /**
   * Convierte fecha en lenguaje natural a objeto Date
   * @param fechaNatural - Fecha como "1 de Enero de 2024"
   * @returns Objeto Date
   */
  lenguajeNaturalToDate(fechaNatural: string): Date {
    if (!fechaNatural) return new Date();

    const meses = {
      'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4,
      'junio': 5, 'julio': 6, 'agosto': 7, 'septiembre': 8,
      'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };

    // Extraer partes: "1 de Enero de 2024"
    const regex = /(\d+)(?:er|do|ro)? de (\w+) de (\d{4})/i;
    const match = fechaNatural.match(regex);

    if (!match) return new Date();

    const [, dia, mes, anio] = match;
    const mesNumero = meses[mes.toLowerCase() as keyof typeof meses];

    if (mesNumero === undefined) return new Date();

    return new Date(parseInt(anio), mesNumero, parseInt(dia));
  }

  /**
   * Formatea objeto Date a lenguaje natural
   * @param fecha - Objeto Date
   * @returns Fecha en lenguaje natural
   */
  dateToLenguajeNatural(fecha: Date): string {
    if (!fecha) return '';

    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    const nombreMes = this.obtenerNombreMes(mes);
    
    let diaFormateado: string;
    if (dia === 1) {
      diaFormateado = '1er';
    } else if (dia === 2) {
      diaFormateado = '2do';
    } else if (dia === 3) {
      diaFormateado = '3er';
    } else {
      diaFormateado = dia.toString();
    }

    return `${diaFormateado} de ${nombreMes} de ${anio}`;
  }

  /**
   * Obtiene nombre del mes en español
   * @param mesNumero - Número del mes (1-12)
   * @returns Nombre del mes
   */
  private obtenerNombreMes(mesNumero: number): string {
    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    return meses[mesNumero - 1] || 'mes desconocido';
  }

  /**
   * Calcula diferencia en años entre dos fechas
   * @param fechaInicio - Fecha de inicio
   * @param fechaFin - Fecha de fin (opcional)
   * @returns Años de diferencia
   */
  calcularDiferenciaAnios(fechaInicio: Date, fechaFin?: Date): number {
    const fin = fechaFin || new Date();
    const diferencia = fin.getTime() - fechaInicio.getTime();
    return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  }

  /**
   * Calcula diferencia en meses entre dos fechas
   * @param fechaInicio - Fecha de inicio
   * @param fechaFin - Fecha de fin (opcional)
   * @returns Meses de diferencia
   */
  calcularDiferenciaMeses(fechaInicio: Date, fechaFin?: Date): number {
    const fin = fechaFin || new Date();
    return (fin.getFullYear() - fechaInicio.getFullYear()) * 12 + 
           (fin.getMonth() - fechaInicio.getMonth());
  }

  /**
   * Verifica si una fecha es válida
   * @param fechaString - Fecha a validar
   * @returns true si es válida
   */
  esFechaValida(fechaString: string): boolean {
    if (!fechaString) return false;

    const partes = fechaString.split('/');
    if (partes.length !== 3) return false;

    const [dia, mes, anio] = partes.map(p => parseInt(p));
    
    return !isNaN(dia) && !isNaN(mes) && !isNaN(anio) &&
           dia >= 1 && dia <= 31 &&
           mes >= 1 && mes <= 12 &&
           anio >= 1900 && anio <= 2100;
  }

  parseDDMMYYYY(fechaStr: string): Date {
    const [dd, mm, yyyy] = fechaStr.split("/");
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  }

}
