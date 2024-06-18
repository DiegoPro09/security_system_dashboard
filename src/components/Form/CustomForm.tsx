import { Col, DatePicker, Form, FormInstance, Input, Row, Select} from "antd"
import { validations } from "../../modules/auth/authValidations"

interface CustomFormProps {
  form: FormInstance;
  fields: Array<{
    name: string;
    label?: string;
    placeholder?: string;
    tooltip?: string;
    type?: string;
    mode?:  undefined;
    selectOptions?: Array<{ value: number|boolean|any; label: string }>;
  }>;
  finish?: (payload: any) => Promise<void>;
  values?: [];
  actions?: () => void,
  selectTypePerson?: (a:any, b:any)=>void,
  selectVehicle?: (a:any, b:any)=>void
  datePick?: (a:any, b:any)=>void,
  otherComponent?: React.ReactNode
}

export const CustomForm: React.FC<CustomFormProps> = ({
  form,
  fields,
  finish,
  values,
  actions,
  selectTypePerson,
  selectVehicle,
  datePick,
  otherComponent
}: CustomFormProps) => {

  const handleTypePerson = (identifier:string, value:number) =>{
    selectTypePerson && selectTypePerson(identifier, value)
  }

  const handleSelect = (identifier: string, value:boolean) =>{
    selectVehicle && selectVehicle(identifier, value)
  }

  const handleDate = (identifier: string, dateString:string) =>{
    datePick && datePick(identifier, dateString)
  }

  return (
    <Form form={form} onFinish={finish} layout="vertical" autoComplete="on" initialValues={values}>
      <Row gutter={[10, 10]}>
        {fields.map((field, index) => (
          <Col key={index} span={(fields.length > 2 ? (field.name === 'email' ? 24 : 12) : 24)}>
            {field.type === 'select' ? (
              <Form.Item
                name={field.name}
                label={field.label}
                tooltip={field.tooltip}
                rules={validations[field.name]}
              >
                <Select 
                  placeholder={field.placeholder} 
                  mode={field.mode} 
                  onChange={
                    field.name === 'id_type_person' ? (value) => handleTypePerson(field.name, value) :
                    field.name === 'vehicle' ? (value) => handleSelect(field.name, value) : undefined
                  }
                >
                  {field.selectOptions && field.selectOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            ) : field.type === 'date' ? (
              <Form.Item name={field.name} label={field.label}>
                <DatePicker onChange={(_date, dateString) => handleDate(field.name, dateString)} style={{width: '100%'}} />
              </Form.Item>
            ) : (
              <Form.Item
                name={field.name}
                label={field.label}
                tooltip={field.tooltip}
                rules={validations[field.name]}
              >
                <Input placeholder={field.placeholder} type={field.type} />
              </Form.Item>
            )}
          </Col>
        ))}
        {otherComponent ? otherComponent : ''}
      </Row>
    </Form>
  );
};