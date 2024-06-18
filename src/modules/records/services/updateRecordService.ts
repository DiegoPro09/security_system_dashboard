import apiCall from "../../../shared/axios/apiCall"

export const updateRecordService = (id:number, data:any) =>{
    return apiCall.put(`/records/update/${id}`, data)
}