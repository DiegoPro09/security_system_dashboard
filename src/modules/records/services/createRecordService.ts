import apiCall from "../../../shared/axios/apiCall"

export const createRecordService = (data:any) =>{
    return apiCall.post('/records/create', data)
}