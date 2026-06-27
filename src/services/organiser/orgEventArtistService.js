import { ORG_ADD_ARTIST, ORG_DELETE_ARTIST, ORG_UPDATE_ARTIST } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgArist = async (eventData) => {
    try {
        const response = await Service.post(ORG_ADD_ARTIST, eventData);
        return response.data;
    } catch (error) {
        console.error("Create artist api error", error);
        throw error;
    };
};

export const deleteOrgArtist = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_ARTIST}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Artist image Event api error", error);
        throw error;
    };
}

export const updateOrgArtist = async (id, eventData) => {
    try {
        const response = await Service.put(`${ORG_UPDATE_ARTIST}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Update Artist Event api error", error);
        throw error;
    };
};
