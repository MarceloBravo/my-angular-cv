export interface JobInterface {
    years: string;
    company: string;
    position: string;
    description: string;
    tecnologies: string[];
    category: 'frontend' | 'backend' | 'fullstack' | 'desktop' | 'freelance';
}
