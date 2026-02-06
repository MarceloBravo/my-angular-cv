export class DataEducation {
    years: String = '';
    name: String = '';
    image: String = '';
    title: String = '';
    institution: String = '';
    description: String = '';
    styles: String = '';

    constructor(
        years: String = '',
        name: String = '',
        image: String = '',
        title: String = '',
        institution: String = '',
        description: String = '',
        styles: String = ''
    ){
        this.years = years;
        this.name = name;
        this.image = image;
        this.title = title;
        this.institution = institution;
        this.description = description;
        this.styles = styles;
    }

}
