import { EditOutlined } from "@ant-design/icons"
import { CustomModal } from "../../../components/Modal/CustomModal"
import { useState } from "react"
import { CustomForm } from "../../../components/Form/CustomForm"
import { PersonalDataFields } from "../../../shared/config/formFields"
import { Form } from "antd"

export const UpdateRecord:React.FC<{record:any}> = ({record}) => {
    const canUpdate = !!record
    const [err, setErr] = useState("")
    const personal_fields = PersonalDataFields()
    const [form] = Form.useForm<any>()
    const [formData, setFormData] = useState({});
    const [typeResident, setTypeResident] = useState<any>({})

    const handleFinish = () => {
        const updatedFormData = { 
            ...formData,
            ...form.getFieldsValue(), 
            
        };
        
        setFormData(updatedFormData);
    
        if(updatedFormData){
            console.log(updatedFormData)
        }
    };

    const handleTypePerson = (identifier:string, value:number) => {
        setTypeResident({identifier, value})
    }

    return (
        <CustomModal 
                placement="bottom"
                shape="default"
                disabled={!canUpdate}
                error={err}
                //closeOn={isSuccess}
                action={handleFinish} 
                title='Actualizar registro'
                tooltiptitle={canUpdate ? 'Actualizar registro' : 'Debe seleccionar una persona' }
                icon={<EditOutlined/>} 
                //isLoading={isLoading} 
                buttonTitle='Actualizar registro'
        >
            <CustomForm fields={personal_fields} form={form} actions={handleFinish} selectTypePerson={handleTypePerson} values={record}/>
        </CustomModal>
    )
}