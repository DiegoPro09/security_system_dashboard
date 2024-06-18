import { ColumnsType } from "antd/es/table";
import { AuthorizationSwitch } from "./components/Switch/AuthorizationSwitch";

export const recordColumns:ColumnsType<any> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Nombre',
        dataIndex: 'name_person',
        key: 'name_person',
    },
    {
        title: 'Apellido',
        dataIndex: 'lastname_person',
        key: 'lastname_person',
    },
    {
        title:'Tipo de ID',
        dataIndex: 'type_document',
        key: 'type_document'
    },
    {
        title:'Número',
        dataIndex: 'document_number',
        key: 'document_number'
    },
    {
        title:'Sector',
        dataIndex: 'sector',
        key: 'sector'
    },
    {
        title:'Tipo',
        dataIndex: 'type_person',
        key: 'type_person'
    },
    {
        title: 'Entrada',
        children: [
            {
                title: 'Fecha',
                dataIndex: 'date_income',
                key: 'date_income',
                width: 100,
            },
            {
                title: 'Hora',
                dataIndex: 'hour_income',
                key: 'hour_income',
                width: 100,
            },
        ],
    },
    {
        title: 'Salida',
        children: [
            {
                title: 'Fecha',
                dataIndex: 'date_departure',
                key: 'date_departure',
                width: 100,
            },
            {
                title: 'Hora',
                dataIndex: 'hour_departure',
                key: 'hour_departure',
                width: 100,
            },
        ],
    },
    {
        title:'Autorización permanente',
        render: (_text, record) => (
           <AuthorizationSwitch state={record.state} idUser={record.id} /> 
        )
    }
]