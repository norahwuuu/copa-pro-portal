import { PatientListParams } from "@/pages/Patient/List/type";
import request from "@/utils/request";


export async function fetchPatientList(payload: PatientListParams) {
    const obj = {
        totalRecords: 0,
        data: []
    }
    const { result, paging } = await request("/patient-mgmt/v1/org/3/patients/", {
        method: "GET",
        params: { page: payload.page + 1, page_size: payload.rowsPerPage },
    }, true);
    if (result && result.length > 0) {
        obj.totalRecords = paging.total_count;
        obj.data = result

    }
    return obj || {}
}
