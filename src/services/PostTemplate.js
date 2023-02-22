import { baseURL } from "../Config";
import axios from "axios";
import { toast } from "react-toastify";
import { trimData } from "../utilities/TrimPayloadData";
import { loadingAction } from "../redux/actions/loadingAction";

export const handlePostRequest =
    (data, url, isShowLoad = false, isShowToast = true) =>
    async (dispatch) => {
        data = await trimData(data);
        try {
            if (isShowLoad) dispatch(loadingAction(true));
            const response = await axios({
                method: "post",
                url: `${baseURL + url}`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            });
            if (isShowToast) toast.success(response?.data?.messages);
            if (isShowLoad) dispatch(loadingAction(false));
            return response?.data;
        } catch (error) {
            if (isShowLoad) dispatch(loadingAction(false));
            if (error?.response?.status === 400 || error?.response?.status === 500) {
                toast.warn(error?.response?.data?.messages || error?.response?.data?.message || error?.response?.data?.error || "Something went wrong !!");
            } else {
                toast.warn(error?.response?.data?.messages || error?.response?.data?.message || error?.response?.data?.error || "Something went wrong !!");
            }
        }
    };
