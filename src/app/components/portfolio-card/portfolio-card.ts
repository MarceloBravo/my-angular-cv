import { Component, Input, OnInit } from '@angular/core';
import { PortfolioInterface } from '../../interface/portfolio-interface';
import { Orientation } from '../../enum/orientation';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio-card',
  imports: [],
  templateUrl: './portfolio-card.html',
  styleUrl: './portfolio-card.scss',
})
export class PortfolioCard implements OnInit {
  @Input() portfolio: PortfolioInterface = {} as PortfolioInterface;
  @Input() orientation: Orientation = Orientation.right;
  Orientation = Orientation;
  descriptionsSanitized: SafeHtml[] = [];
  paragraphSanitized: SafeHtml | null = null;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private _sanitizer: DomSanitizer){}

  ngOnInit(): void {
    AOS.init();
    // Sanitizar URL del video para hacerla segura
    if (this.portfolio.video) {
      const embedUrl = this.getYouTubeEmbedUrl(this.portfolio.video);
      this.safeVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

  // Extraer ID de YouTube de la URL
  getYouTubeId(url: string): string {
    if (!url) return '';
    
    // Patrones comunes de URLs de YouTube
    const patterns = [
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtube\.com\/embed\/([^?]+)/,
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/v\/([^?]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return '';
  }

  // Convertir URL de YouTube a URL de embed segura
  getYouTubeEmbedUrl(url: string): string {
    const videoId = this.getYouTubeId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }

  ngOnChanges() {
    if(this.portfolio.description){
      this.descriptionsSanitized = this.portfolio.description.map(desc =>
        this._sanitizer.bypassSecurityTrustHtml(desc)
      );
    }
    if (this.portfolio.paragraph) {
      this.paragraphSanitized = this._sanitizer.bypassSecurityTrustHtml(this.portfolio.paragraph);
    }
    // Actualizar URL segura cuando cambian los datos
    if (this.portfolio.video) {
      const embedUrl = this.getYouTubeEmbedUrl(this.portfolio.video);
      this.safeVideoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

}
