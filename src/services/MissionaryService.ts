import http from "../http-common";
import IMissionaryData from "../types/Missionary";

const getAll = () => {
    return http.get<Array<IMissionaryData>>("/missionaries");
};
const get = (id: any) => {
    return http.get<IMissionaryData>(`/missionaries/${id}`);
};
const MissionaryService = {
    getAll,
    get,
};
export default MissionaryService;