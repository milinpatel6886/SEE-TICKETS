import { ORG_ADD_SCHEDULE_SLOT, ORG_ADD_SCHEDULE_SLOTS_BULK, ORG_UPDATE_SCHEDULE_SLOT, ORG_DELETE_SCHEDULE_SLOT } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgScheduleOne = async (eventData) => {
    try {
        const response = await Service.post(ORG_ADD_SCHEDULE_SLOT, eventData);
        return response.data;
    } catch (error) {
        console.error("Create schedule one api error", error);
        throw error;
    };
};

export const createOrgScheduleBulk = async (eventData) => {
    try {
        const response = await Service.post(ORG_ADD_SCHEDULE_SLOTS_BULK, eventData);
        return response.data;
    } catch (error) {
        console.error("Create schedule bulk api error", error);
        throw error;
    };
};

export const updateOrgSchedule = async (id, eventData) => {
    try {
        const response = await Service.put(`${ORG_UPDATE_SCHEDULE_SLOT}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Update Schedule Event api error", error);
        throw error;
    };
};

export const deleteOrgSchedule = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_SCHEDULE_SLOT}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Schedule Event api error", error);
        throw error;
    };
}