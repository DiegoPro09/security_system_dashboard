import apiCall from "../../../../shared/axios/apiCall";

export const fetchRecordById = async (id:number) =>{
    try {
        const response = await apiCall.get(`/records/${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching record by id:', error);
        throw error;
    }
}