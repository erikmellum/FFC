import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/ffc-admin/public/api",
    headers: {
        "Content-type": "application/json"
    }
});