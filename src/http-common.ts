import axios from "axios";

export default axios.create({
    baseURL: "https://missions.givealot.org/api",
    headers: {
        "Content-type": "application/json"
    }
});