import { baseURL } from "../Config";
import axios from "axios";

export const handleGetRequest = async (url, isShowToast = false) => {
    try {
        const response = await axios.get(`${baseURL + url}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error, "error")
    }
};
