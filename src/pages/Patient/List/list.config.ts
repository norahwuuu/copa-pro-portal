import { TABLE_FILTER } from "./components/CTable/table.config";
import { PatientListParams, PatientQueryparams } from "./type";



export const constructQueryParams = (payload: PatientListParams): PatientQueryparams => {
    const params: PatientQueryparams = {
        page: payload.page + 1,
        page_size: payload.rowsPerPage,
    } as PatientQueryparams

    if (payload.search) {
        params.search = payload.search
    }
    const { sort_by, order_status, status, dental_monitoring, case_detail } = payload.filters

    if (sort_by && sort_by.length) {
        params.sort_type = "asc";
        params.sort_by = sort_by[0];
    }
    if (order_status && order_status.length) {
        let data: string[] = [];
        if (order_status.includes("all")) {
            data = order_status.filter((o) => o != "all")
        } else {
            data = order_status
        }
        if (data.length) {
            const items = TABLE_FILTER.order_status.options.map(item => { if (data.includes(item.id)) { return item.dataKey } });
            params.order_status = new Set(items.filter(Number)).join(",")
        }

    }

    if (status && status.length) {
        if (status.includes("all")) {
            params.status = (status.filter((o) => o != "all")).join(',')
        } else {
            params.status = status.join(',')
        }
    }
    if (dental_monitoring && dental_monitoring.length) {
        if (dental_monitoring.includes("all")) {
            params.dental_monitoring = dental_monitoring.filter((o) => o != "all").join(',')
        } else {
            params.dental_monitoring = dental_monitoring.join(',')
        }
    }

    if (case_detail && case_detail.length) {
        if (case_detail.includes("all")) {
            params.case_detail = case_detail.filter((o) => o != "all").join(',')
        } else {
            params.case_detail = case_detail.join(',')
        }
    }

    return params;
}