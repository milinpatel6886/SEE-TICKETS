import { ORG_ADD_GUIDE, ORG_ADD_GUIDES_BULK, ORG_UPDATE_GUIDE, ORG_DELETE_GUIDE } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgGuide = async (eventData) => {
    try {
        const response = await Service.post(ORG_ADD_GUIDE, eventData);
        return response.data;
    } catch (error) {
        console.error("Create Guide api error", error);
        throw error;
    };
};

export const createOrgGuideBulk = async (eventData) => {
    try {
        const response = await Service.post(ORG_ADD_GUIDES_BULK, eventData);
        return response.data;
    } catch (error) {
        console.error("Create guide bulk api error", error);
        throw error;
    };
};

export const updateOrgGuide = async (id, eventData) => {
    try {
        const response = await Service.put(`${ORG_UPDATE_GUIDE}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Update Guide Event api error", error);
        throw error;
    };
};

export const deleteOrgGuide = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_GUIDE}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Guide Event api error", error);
        throw error;
    };
};