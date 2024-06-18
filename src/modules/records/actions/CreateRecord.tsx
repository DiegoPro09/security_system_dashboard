import { PlusOutlined } from "@ant-design/icons"
import { CustomModal } from "../../../components/Modal/CustomModal"
import { Button, Form,  Tabs, message } from "antd"
import { useState } from "react";
import { CustomForm } from "../../../components/Form/CustomForm";
import { PersonalDataFields, VehicleDataFields, VisitDataFields } from "../../../shared/config/formFields";
import { useAction } from "../../../shared/hooks/useAction";
import { ReactQueryClient } from "../../../shared/ReactQuery/QueryClient";
import { recordCacheKeys } from "../cache/recordsCacheKeys";
import { createRecordService } from "../services/createRecordService";
import { SelectTypeVehicle } from "../components/Select/SelectTypeVehicles";

export const CreateRecord:React.FC = () => {
    const [form] = Form.useForm<any>()
    const [activeTab, setActiveTab] = useState('1');
    const [formData, setFormData] = useState({});
    const [typeResident, setTypeResident] = useState<any>({})
    const [switchVehicle, setSwitchVehicle] = useState<any>({})
    const [datePicked, setDatePicked] = useState({})
    const [vehicleType, setVehicleType] = useState<any>({});
    const [, setErr] = useState("")

    const personal_fields = PersonalDataFields()
    const visit_fields = VisitDataFields()
    const vehicle_fields = VehicleDataFields()
    const totalTabs = 3;
    const isFirstTab = parseInt(activeTab, 10) === 1;
    const isLastTab = parseInt(activeTab, 10) === totalTabs;

    const {action, reset} = useAction<any, any>({
        key:'products',
        fn:(data)=> createRecordService(data),
        onSuccess:()=>{
            message.success('Registro creado correctamente!')
            ReactQueryClient.invalidateQueries({queryKey: recordCacheKeys.all()})
            handleReset()
            form.resetFields()
        },
        onError:(error:Error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const handlePrevNext = (direction:string) => {
        const currentIndex = parseInt(activeTab, 10);
        const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        setActiveTab(nextIndex.toString());
    };

    const handleTypePerson = (identifier:string, value:number) => {
        setTypeResident({identifier, value})
    }
    
    const handleSwitch = (identifier:string, value:number) => {
        setSwitchVehicle({identifier, value})
    }

    const handleDate = (identifier:string, dateString:string) => {
        setDatePicked(prevState => ({
            ...prevState,
            [identifier]: dateString,
        }));
    };

    const handleReset = () =>{
        form.resetFields()
        reset()
        setErr('')
    }

    const handleFinish = () => {
        const updatedFormData = { 
            ...formData,
            ...form.getFieldsValue(), 
            ...datePicked,
            image: 'someimage',
            sanction: false,
            id_type_vehicle: vehicleType.type,
            id_option_vehicle: vehicleType.option === undefined ? null : vehicleType.option
        };
        
        setFormData(updatedFormData);
    
        if(updatedFormData){
            action(updatedFormData)
        }
    };

    const closeModal = () =>{
        return false
    }

    const handleTypeVehicle = (value:any) =>{
        setVehicleType(value);
    }

    return (
        <CustomModal
            placement="bottom"
            shape="default"
            buttonTitle="Nuevo registro"
            title="Nuevo registro"
            action={handleFinish} 
            tooltiptitle="Crear nuevo registro" 
            icon={ <PlusOutlined/> } 
            actionTitle="Guardar"
            actionButtons={
                <>
                    {isFirstTab ? (
                        <Button onClick={closeModal}>Cancelar</Button>
                    ) : (
                        <Button onClick={() => handlePrevNext('prev')}>Anterior</Button>
                    )}

                    <Button type="primary" onClick={isLastTab ? handleFinish : () => handlePrevNext('next')}>
                        {isLastTab ? 'Guardar' : 'Siguiente'}
                    </Button>
                </>
            }
        > 
            <Tabs type="card" activeKey={activeTab} onChange={(key) => setActiveTab(key)}>
                <Tabs.TabPane tab="Datos personales" key={1}>
                    <CustomForm fields={personal_fields} form={form} actions={handleFinish} selectTypePerson={handleTypePerson} selectVehicle={handleSwitch}/>
                </Tabs.TabPane>
                {(typeResident.identifier === 'id_type_person' && typeResident.value === 1) && 
                <Tabs.TabPane tab="Datos del residente" key={2}>
                    <CustomForm fields={visit_fields} form={form} actions={handleFinish} datePick={handleDate} />
                </Tabs.TabPane>}
                {(switchVehicle.identifier === 'vehicle' && switchVehicle.value === true) && 
                <Tabs.TabPane tab="Datos del vehículo" key={3}>
                    <CustomForm fields={vehicle_fields} form={form} actions={handleFinish} datePick={handleDate} otherComponent={<SelectTypeVehicle typeVehicle={handleTypeVehicle} />}/>
                </Tabs.TabPane>}
            </Tabs>
        </CustomModal>
    )
}