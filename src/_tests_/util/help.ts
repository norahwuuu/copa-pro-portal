import { TABLE_CONFIG, TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";



export const getDefaultFilter = () => {
    const filters = {}
    Object.keys(TABLE_FILTER).map((f) => {
        filters[f] = [] as string[]
        if (f === "sort_by") {
            filters[f] = [...TABLE_CONFIG.SORT_BY_DEFAULT];
        }
    })
    return filters;
}
