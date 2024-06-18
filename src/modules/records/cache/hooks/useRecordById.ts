import { useQuery } from "@tanstack/react-query"
import { recordCacheKeys } from "../recordsCacheKeys"
import { fetchRecordById } from "../../services/fetch/fetchRecordById"

export const useRecordById = (id:number) => {
    const cacheKey = recordCacheKeys.byId(id)
    
    const recordById = useQuery({
        queryKey: cacheKey,
        queryFn: () => fetchRecordById(id)
    })

    return recordById
}