import { PatientQueryparams } from "@/pages/Patient/List/type";
import request from "@/utils/request";




export async function fetchPatientList(params: PatientQueryparams, orgId: string) {
    return await request(`/patient-mgmt/v1/org/${orgId}/patients/`, {
        method: "GET",
        params,
    }, true);


}
