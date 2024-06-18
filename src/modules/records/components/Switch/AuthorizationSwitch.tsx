import { Switch, message } from "antd"
import { useState } from "react"
import { useAction } from "../../../../shared/hooks/useAction"
import { ReactQueryClient } from "../../../../shared/ReactQuery/QueryClient"
import { recordCacheKeys } from "../../cache/recordsCacheKeys"
import { updateRecordService } from "../../services/updateRecordService"

export const AuthorizationSwitch:React.FC<{ state:boolean, idUser:number }> = ({state, idUser}) => {
    const [authorized, setAuthorized] = useState(state)
    const [, setErr] = useState("")

    const {action} = useAction({
        key:'update',
        fn:(status)=> updateRecordService(idUser, status),
        onSuccess:()=>{
            message.success('Registro actualizado correctamente!')
            ReactQueryClient.invalidateQueries({queryKey: recordCacheKeys.all()})
        },
        onError:(error)=>{
            message.error(error.message)
            setErr(error.message) 
        }
    })

    const handleAuthorization = (checked:boolean)=>{
        setAuthorized(checked)
        action({ "permanent_authorization": checked })
    }
    return(
        <Switch checkedChildren="Autorizado" unCheckedChildren="No autorizado" onChange={handleAuthorization} defaultValue={authorized} />
    )
}