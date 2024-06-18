import { Button, Form, Spin, message } from "antd";
import { PalletteEnum } from "../../../../shared/pallete/PalleteEnum";
import { CustomCard } from "../../../../components/Card/CustomCard";
import { CustomForm } from "../../../../components/Form/CustomForm";
import { LoginFormFields } from "../../../../shared/config/formFields";
import { useAuthContext } from "../../AuthContext";
import { useState } from "react";
import { useAction } from "../../../../shared/hooks/useAction";
import { AuthRes, loginReq, loginService } from "../../services/loginServices";
import { User } from "../../../../domain/models/User";
import { LoadingOutlined } from "@ant-design/icons";
import { privateRoutes, publicRoutes } from "../../../../shared/config/routes";
import logo from '../../../../assets/img/logo.png'

export const Login:React.FC = () => {
    const [form] = Form.useForm()
    const [, setErr] = useState("")
    const [, setSuccess] = useState(false)
    
    const { setLoggedIn } = useAuthContext()

    const fields = LoginFormFields()

    const {action, isLoading} = useAction<loginReq, AuthRes>({
        key: 'login',
        fn: loginService,
        onSuccess:(res:any)=>{
            message.success('Bienvenido!')
            setErr('')
            setSuccess(true) 
            setLoggedIn(true, res.token, privateRoutes.records)
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
            setSuccess(false)
        }
    })

    const handleAction = async() => {
        await form.validateFields()
        .then((data:User) => {
            action(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <CustomCard
            logo={logo} 
            actions={[
                <Button disabled={isLoading} type='primary' onClick={handleAction}>
                    {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/> : 'Ingresar'}
                </Button>
            ]}
            type="login"
        >
            <CustomForm 
                fields={fields} 
                form={form} 
                finish={action} 
            />
            No tiene una cuenta? <a href={publicRoutes.signup} style={{color: PalletteEnum.links}}><u>Regístrese</u></a>
        </CustomCard>
    )
}