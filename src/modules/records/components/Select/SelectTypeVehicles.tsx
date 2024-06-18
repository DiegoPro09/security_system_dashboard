import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import { OptionVehicles, TypeVehicles } from "../../../../domain/enums/TypeDocuments";

export const SelectTypeVehicle:React.FC<{typeVehicle:any}> = ({typeVehicle}) => {
    const [selectedType, setSelectedType] = useState(TypeVehicles[0]);
    const [options, setOptions] = useState(OptionVehicles[TypeVehicles[0]?.value] || [])
    const [constructed, setConstructed] = useState<any>({ type: 1, option: undefined })

    useEffect(() => {
        typeVehicle(constructed);
      }, [constructed, typeVehicle]);
    
    const handleTypeChange = (value: any, data: any) => {
        const selectedType = TypeVehicles.find((type: any) => type.value === value);
        setSelectedType(selectedType);
        setOptions(OptionVehicles[value] || []);
        setConstructed({ type: selectedType.value, option: undefined });
    };
    
    const handleChangeOption = (value: any) => {
        setConstructed({ type: selectedType.value, option: value });
    };

    return (
        <Space wrap>
            <Select
                defaultValue={TypeVehicles[0]}
                style={{ width: 325 }}
                onChange={handleTypeChange}
                options={TypeVehicles}
                placeholder='Ingrese el tipo de vehículo'
            />
            <Select
                style={{ width: 325 }}
                onChange={handleChangeOption} 
                options={options.map((option:any) => ({ label: option.label, value: option.value }))}
                disabled={selectedType.value === 1}
                placeholder='Seleccione la opción'
            />
        </Space>
    );
};