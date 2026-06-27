import { ORG_EVENTS_LIST, ORG_CREATE_EVENT, ORG_UPDATE_EVENT, ORG_EVENT_DETAILS, ORG_DELETE_EVENT, ORG_PUBLISH_EVENT, ORG_CANCEL_EVENT } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const getOrganiserEventList = async () => {
    try {
        const response = await Service.get(ORG_EVENTS_LIST);
        return response;
    } catch (error) {
        console.error("Get Organiser Event List api error", error);
        throw error;
    }
};

export const createOrganiserEvent = async (eventData) => {
    try {
        const response = await Service.post(ORG_CREATE_EVENT, eventData);
        return response.data;
    } catch (error) {
        console.error("Create Event api error", error);
        throw error;
    };
};

export const updateOrganiserEvent = async (id, eventData) => {
    try {
        const response = await Service.put(`${ORG_UPDATE_EVENT}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Update Organiser Event api error", error);
        throw error;
    };
};

export const getOrganiserEventById = async () => {
    try {
        const response = await Service.get(ORG_EVENT_DETAILS);
        return response;
    } catch (error) {
        console.error("Get Event Data by ID api error", error);
        throw error;
    }
}

export const deleteOrganiserEvent = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_EVENT}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Organiser Event api error", error);
        throw error;
    };
}

export const publishOrganiserEvent = async (id, eventData) => {
    try {
        const response = await Service.patch(`${ORG_PUBLISH_EVENT}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Publish Organiser Event api error", error);
        throw error;
    };
};

export const cancelOrganiserEvent = async (id, eventData) => {
    try {
        const response = await Service.patch(`${ORG_CANCEL_EVENT}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Cancel Organiser Event api error", error);
        throw error;
    };
};