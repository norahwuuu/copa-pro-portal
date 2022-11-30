import { PatientListParams } from "@/pages/Patient/List/type";
import request from "@/utils/request";


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchPatientList(payload: PatientListParams) {
    const obj = {
        totalRecords: 0,
        data: []
    }
    const res = await request("/patients", {
        method: "GET",
        params: { ...payload },
    });
    if (res && res.length > 0) {
        obj.totalRecords = res.length;
        obj.data = payload.rowsPerPage > 0 ? res.slice(payload.page * payload.rowsPerPage, payload.page * payload.rowsPerPage + payload.rowsPerPage) : res

    }
    //TODO: Testing Skeleton UI 
    await delay(4000);
    //TODO: Testing No records  
    // obj.data = [];
    // obj.totalRecords = 0;
    return obj || {}
}
