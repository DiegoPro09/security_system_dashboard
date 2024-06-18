import { Rule } from "antd/es/form";
import { regExp } from "../../domain/enums/RegExp";

export const validations:{[fieldName:string]:Rule[]} = {
    name_user:[{
        required: true,
        message: 'Nombre requerido'
    },{
        pattern: regExp.text,
        message: 'Nombre no válido'
    }],
    lastname:[{
        required: true,
        message: 'Apellido requerido'
    },{
        pattern: regExp.text,
        message: 'Apellido no válido'
    }],
    id_document:[{
        required: true,
        message: 'Seleccione una opción'
    },{
        pattern: regExp.number,
        message: 'Tipo de identificación no válida'
    }],
    document_number:[{
        required: true,
        message: 'Ingrese su numero de identificación'
    },{
        pattern: regExp.document,
        message: 'Número de identificación no válido'
    }],
    email:[{
        required: true,
        message: 'Email requerido'
    },{
        pattern: regExp.email,
        message: 'Email no válido'
    }],
    password:[{
        required: true,
        message: 'Contraseña requerida'
    },{
        pattern: regExp.password,
        message: 'Por favor ingrese una contraseña valida, debe tener una mayúscula, números y un carácter especial'
    }],
    password_confirmation:[{
        required: true,
        message: 'Contraseña requerida'
    },{
        pattern: regExp.password,
        message: 'Por favor ingrese una contraseña valida, debe tener una mayúscula, números y un carácter especial'
    }]
}