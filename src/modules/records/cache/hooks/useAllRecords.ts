import { useQuery } from "@tanstack/react-query"
import { recordCacheKeys } from "../recordsCacheKeys"
import { fetchAllRecords } from "../../services/fetch/fetchAllRecords"

export const useAllRecords = () => {
    const cacheKey = recordCacheKeys.all()
    
    const allRecords = useQuery<any>({
        queryKey: cacheKey,
        queryFn: fetchAllRecords
    })

    return allRecords
}