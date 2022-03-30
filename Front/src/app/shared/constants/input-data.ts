import { FormGroup } from "@angular/forms"

export const INPUTS_DATA: any = [
    {
        label:"Identificador",
        type:"number",
        form: "id",
        id:"id",
    },
    {
        label:"Nombres:",
        type:"text",
        form: "name",
        id:"name",
    },
    {
        label:"Apellidos:",
        type:"text",
        form: "lastname",
        id:"lastname",
    },
    {
        label:"Genero:",
        type:"text",
        form: "genere",
        id:"genere",
    },
    {
        label:"Edad:",
        type:"number",
        form: "age",
        id:"age",
    },
    {
        label:"Correo electronico:",
        type:"email",
        form: "email",
        id:"email",
    }
]
export const INPUTS_CONDITION: any = [
    {
        label:"Identificador",
        type:"number",
        form: "id",
        id:"idCondition",
    },
    {
        label:"Condición:",
        type:"text",
        form: "condicion",
        id:"condicion",
    },
    {
        label:"Fecha de diagnóstico:",
        type:"date",
        form: "fechaD",
        id:"fechaD",
    },
    {
        label:"Medicamentos:",
        type:"text",
        form: "medicina",
        id:"medicina",
    },
    {
        label:"N° de aplicaciones diarias:",
        type:"number",
        form: "nAplic",
        id:"nAplic",
    },
    {
        label:"Notas importantes",
        type:"text",
        form: "notas",
        id:"notas",
    }
]
export const PATTERNS = {
    onlyLetters: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$',
    onlyNumbers: '^[0-9]*$',
    email: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
}
