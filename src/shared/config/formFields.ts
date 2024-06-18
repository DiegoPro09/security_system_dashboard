import { BasicTrueFalse, TypeDocuments, TypePersons } from "../../domain/enums/TypeDocuments"

export const LoginFormFields = () => {

    const fields = [
        { 
            name: 'email', 
            label: 'Email', 
            placeholder: 'Ingrese el email', 
            tooltip: 'example@algo.com',
            type: 'email' 
        },
        { 
            name: 'password', 
            label: 'Contraseña', 
            placeholder: 'Ingrese la contraseña', 
            tooltip: 'Debe tener un caracter especial, numeros y al menos una mayuscula',
            type: 'password' 
        }
    ]

    return fields
}

export const SignupFormFields = () => {

    const fields = [
        { 
            name: 'name_user', 
            label: 'Nombre', 
            placeholder: 'Ingrese su nombre', 
            tooltip: 'Debe ingresar su nombre'
        },
        { 
            name: 'lastname', 
            label: 'Apellido', 
            placeholder: 'Ingrese su apellido', 
            tooltip: 'Debe ingresar su apellido',
        },
        { 
            name: 'id_document', 
            label: 'Tipo de Identificación', 
            placeholder: 'Seleccione el tipo de ID ', 
            type: 'select',
            selectOptions: TypeDocuments,
        },
        { 
            name: 'document_number', 
            label: 'Numero de ID', 
            placeholder: 'Ingrese el numero de identificación', 
            tooltip: '12.345.678'
        },
        { 
            name: 'email', 
            label: 'Email', 
            placeholder: 'Ingrese el email', 
            tooltip: 'example@algo.com',
            type: 'email' 
        },
        { 
            name: 'password', 
            label: 'Contraseña', 
            placeholder: 'Ingrese la contraseña', 
            tooltip: 'Debe tener un caracter especial, numeros y al menos una mayuscula',
            type: 'password' 
        },
        { 
            name: 'password_confirmation', 
            label: 'Verificar contraseña', 
            placeholder: 'Ingrese nuevamente su contraseña', 
            tooltip: 'Debe tener un caracter especial, numeros y al menos una mayuscula',
            type: 'password' 
        }
    ]

    return fields
}

export const PersonalDataFields = () => {
    const fields = [
        { 
            name: 'name_person', 
            label: 'Nombre', 
            placeholder: 'Ingrese su nombre', 
            tooltip: 'Debe ingresar su nombre'
        },
        { 
            name: 'lastname_person', 
            label: 'Apellido', 
            placeholder: 'Ingrese su apellido', 
            tooltip: 'Debe ingresar su apellido',
        },
        { 
            name: 'id_document', 
            label: 'Tipo de Identificación', 
            placeholder: 'Seleccione el tipo de ID ',
            type: 'select',
            selectOptions: TypeDocuments,
        },
        { 
            name: 'document_number', 
            label: 'Numero de ID', 
            placeholder: 'Ingrese el numero de identificación', 
            tooltip: '12.345.678'
        },
        {
            name: 'id_type_person',
            label: 'Tipo de persona',
            placeholder: 'Ingrese el tipo de persona que es',
            tooltip: 'Residente o visitante',
            type: 'select',
            selectOptions: TypePersons,
          },
          { 
              name: 'sector', 
              label: 'Sector', 
              placeholder: 'Ingrese el sector al que ingresa', 
              tooltip: 'Debe ingresar el sector al que ingresa'
          },
          {
            name: 'vehicle',
            label: 'La persona ingresa con vehículo?',
            type: 'select',
            selectOptions: BasicTrueFalse
          },
          {
            name: 'permanent_authorization',
            label: 'Le da autorización permanentemente?',
            type: 'select',
            selectOptions: BasicTrueFalse
          }
    ]

    return fields
}

export const VisitDataFields = () => {
    const fields = [
        { 
            name: 'residence_certificate', 
            label: 'Certificado de residencia', 
            placeholder: 'Ingrese si posee certificado de residencia', 
            tooltip: 'Debe ingresar si posee certificado de residencia',
            type:'select',
            selectOptions: BasicTrueFalse
        },
        { 
            name: 'expire_residence', 
            label: 'Vencimiento', 
            placeholder: 'Ingrese la fecha de vencimiento de la residencia', 
            tooltip: 'Debe ingresar la fecha de vencimiento de la residencia',
            type:'date'
        },
        { 
            name: 'good_standing_certificate', 
            label: 'Certificado de buena conducta', 
            placeholder: 'Ingrese si posee certificado de buena conducta', 
            tooltip: 'Debe ingresar si posee certificado de buena conducta',
            type:'select',
            selectOptions: BasicTrueFalse
        },
        {
            name: 'expire_good_standing',
            label: 'Vencimiento', 
            placeholder: 'Ingrese la fecha de vencimiento de buena conducta', 
            tooltip: 'Debe ingresar la fecha de vencimiento de buena conducta',
            type:'date'
          },
    ]

    return fields
}

export const VehicleDataFields = () => {
    const fields = [
        { 
            name: 'model', 
            label: 'Modelo del vehículo', 
            placeholder: 'Ingrese el modelo del vehículo', 
            tooltip: 'Debe ingresar el modelo del vehículo'
        },
        { 
            name: 'domain', 
            label: 'Dominio', 
            placeholder: 'Ingrese el dominio del vehículo', 
            tooltip: 'Debe ingresar el dominio del vehículo'
        },
        { 
            name: 'driver_license', 
            label: 'Licencia de conducir', 
            placeholder: 'Ingrese si posee Licencia de conducir', 
            tooltip: 'Debe ingresar si posee Licencia de conducir',
            type:'select',
            selectOptions: BasicTrueFalse
        },
        { 
            name: 'type', 
            label: 'Tipo de licencia', 
            placeholder: 'A1, B1 O D3', 
            tooltip: 'Debe ingresar el tipo de licencia'
        },
        {
            name: 'expire_license',
            label: 'Vencimiento de la licencia', 
            placeholder: 'Ingrese la fecha de vencimiento de la licencia', 
            tooltip: 'Debe ingresar la fecha de vencimiento de la licencia',
            type:'date'
        },
        { 
              name: 'insurance', 
              label: 'Seguro', 
              placeholder: 'Ingrese si posee seguro', 
              tooltip: 'Debe ingresar si posee seguro',
              type:'select',
              selectOptions: BasicTrueFalse
        },
        { 
              name: 'policy', 
              label: 'póliza', 
              placeholder: 'Ingrese si posee póliza', 
              tooltip: 'Debe ingresar si posee póliza',
              type:'select',
              selectOptions: BasicTrueFalse
        },
        {
            name: 'expire_insurance',
            label: 'Vencimiento del seguro', 
            placeholder: 'Ingrese la fecha de vencimiento del seguro', 
            tooltip: 'Debe ingresar la fecha de vencimiento del seguro',
            type:'date'
        },
    ]

    return fields
}