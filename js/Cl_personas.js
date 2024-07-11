export default class Cl_personas {
    constructor() {
        this.contHombres = 0;
        this.contMujeres = 0;
    }



    procesarDatos(data) {
        if(data.sexo == 'M') {
            this.contHombres++;
        } else if(data.sexo == 'F') {
            this.contMujeres++;
        }

    }


}