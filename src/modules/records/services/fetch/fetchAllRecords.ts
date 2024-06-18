import apiCall from "../../../../shared/axios/apiCall"

export const fetchAllRecords = () => {
    const records = apiCall.get<any[],any>(`/records/all`)
    return records
}