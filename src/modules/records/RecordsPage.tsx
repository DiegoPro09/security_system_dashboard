import { Flex, Skeleton } from "antd"
import { AppLayout } from "../app/Layout/AppLayout"
import { AppContent } from "../app/content/AppContent"
import { recordColumns } from "./RecordColumns"
import { useAllRecords } from "./cache/hooks/useAllRecords"
import { CustomTable } from "../../components/Table/CustomTable"
import { useState } from "react"
import { CreateRecord } from "./actions/CreateRecord"
import { UpdateRecord } from "./actions/UpdateRecord"

export const RecordsPage:React.FC = () =>{
    const { data:record, isLoading } = useAllRecords()
    const columns = recordColumns

    const [selectedRecordId, setSelectedRecord] = useState<any>('') //en lugar de any debería ser Record['id']
    const selectedRecord = record && record.data.find((Record:any)=>Record.id === selectedRecordId) 

    const primaryActions = [ 
        <Flex gap={10}>
            <UpdateRecord record={selectedRecord} />
            <CreateRecord />
        </Flex>
    ]
    
    return (
        <AppLayout>
            <AppContent title="Registros" primaryActions={primaryActions}>
                <div style={{margin: 25}}>  
                    {isLoading || !record  ? <Skeleton/> :<CustomTable data={record.data} isLoading={isLoading} columns={columns} setSelected={setSelectedRecord} singleSelection/>}
                </div>
            </AppContent>
        </AppLayout>
    )
}