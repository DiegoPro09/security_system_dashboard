import { message } from "antd"
import { useState } from "react"
import { queryStatus } from "../../domain/enums/queryStatus"

interface UseActionService<T, R>{
    key:string,
    fn:(payload:T)=>Promise<R>,
    onError?:(err:Error)=>void,
    onSuccess?:(response:R)=>void
}

export const useAction = <T, R>({ fn, onError, onSuccess }: UseActionService<T, R>) => {
    const [status, setStatus] = useState<queryStatus>(queryStatus.idle);

    const isIdle = status === queryStatus.idle;
    const isLoading = status === queryStatus.loading;
    const isError = status === queryStatus.error;
    const isSuccess = status === queryStatus.success;

    const action = async (payload: T): Promise<void> => {
        setStatus(queryStatus.loading);
    
        try {
            const data: R = await fn(payload);
            if (onSuccess) await onSuccess(data);
            setStatus(queryStatus.success);
        } catch (err:any) {
            if (err && typeof err === 'object' && 'status' in err && 'code' in err && 'message' in err) {
                // Error específico del servidor
                setStatus(queryStatus.error);
                if (onError) onError(err);
                else message.error(err.message);
            } else if (err instanceof Error) {
                // Otros errores
                setStatus(queryStatus.error);
                if (onError) onError(err);
                else message.error(err.message);
            }
        }
    };

    const reset = () => {
        setStatus(queryStatus.idle);
    };

    return {
        action,
        reset,
        status,
        isLoading,
        isError,
        isIdle,
        isSuccess,
    };
};