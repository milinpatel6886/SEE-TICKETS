import { ORG_CREATE_TICKET_CATEGORY, ORG_UPDATE_TICKET_CATEGORY, ORG_DELETE_TICKET_CATEGORY } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgTicket = async (eventData) => {
    try {
        const response = await Service.post(ORG_CREATE_TICKET_CATEGORY, eventData);
        return response.data;
    } catch (error) {
        console.error("Create ticket api error", error);
        throw error;
    };
};

export const deleteOrgTicket = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_TICKET_CATEGORY}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Ticket api error", error);
        throw error;
    };
}

export const updateOrgTicket = async (id, eventData) => {
    try {
        const response = await Service.put(`${ORG_UPDATE_TICKET_CATEGORY}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Update Ticket api error", error);
        throw error;
    };
};