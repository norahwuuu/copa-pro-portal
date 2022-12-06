import { TABLE_FILTER } from "@/pages/Patient/List/components/CTable/table.config";
import { PatientListParams } from "@/pages/Patient/List/type";
import request from "@/utils/request";


interface params extends PatientListParams {
    sort_by?: string,
    sort_type?: string,
    page_size: number
    order_status?: string,
    dental_monitoring?: string,
    case_detail?: string,
    status?: string
}


export async function fetchPatientList(payload: PatientListParams) {
    const obj = {
        totalRecords: 0,
        data: []
    }
    const params: params = {
        page: payload.page + 1,
        page_size: payload.rowsPerPage,
    } as params

    if (payload.search) {
        params.search = payload.search
    }
    const { sort_by, order_status, status, dental_monitoring, case_detail } = payload.filters

    if (sort_by && sort_by.length) {
        params.sort_type = "asc";
        params.sort_by = sort_by[0];
    }
    if (order_status && order_status.length) {
        let data: string[] = []
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

    const { result, paging } = await request("/patient-mgmt/v1/org/3/patients/", {
        method: "GET",
        params,
    }, true);
    if (result && result.length > 0) {
        obj.totalRecords = paging.total_count;
        obj.data = result

    }
    return obj || {}
}
