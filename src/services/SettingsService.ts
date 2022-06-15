import http from "../http-common";
import SettingsData from "../types/Settings";

const getByName = (setting_name: string) => {
    return http.get<SettingsData>(`/settings/${setting_name}`);
};
const SettingsService = {
    getByName
};
export default SettingsService;