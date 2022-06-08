import http from "../http-common";
import IMissionaryData from "../types/Missionary";
import ContactMissionaryData from "../types/ContactMissionary";

const getAll = () => {
    return http.get<Array<IMissionaryData>>("/missionaries");
};
const get = (id: any) => {
    return http.get<IMissionaryData>(`/missionaries/${id}`);
};
const contactMissionary = (id: number, data: ContactMissionaryData) => {
    return http.post<ContactMissionaryData>(`/missionaries/contact/${id}`, data);
};
const MissionaryService = {
    getAll,
    get,
    contactMissionary
};
export default MissionaryService;