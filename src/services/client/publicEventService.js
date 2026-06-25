import { PUBLIC_EVENTS_LIST, PUBLIC_EVENT_DETAILS, PUBLIC_EVENT_ARTISTS, PUBLIC_EVENT_SCHEDULES, PUBLIC_EVENT_GUIDES, PUBLIC_EVENT_TICKET_CATEGORIES } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const getPublicEventList = async () => {
    try {
        const response = await Service.get(PUBLIC_EVENTS_LIST);
        return response;
    } catch (error) {
        console.error("Get Public Event List api error", error);
        throw error;
    }
};

export const getPublicEventDetails = async (eventId) => {
    try {
        const response = await Service.get(`${PUBLIC_EVENT_DETAILS}/${eventId}`);
        return response;
    } catch (error) {
        console.error("Get Public Event Details List api error", error);
        throw error;
    }
}

export const getPublicEventArtist = async (eventId) => {
    try {
        const response = await Service.get(`${PUBLIC_EVENT_ARTISTS}/${eventId}/artists`);
        return response;
    } catch (error) {
        console.error("Get Public Event Artist List api error", error);
        throw error;
    }
}

export const getPublicEventSchedule = async (eventId) => {
    try {
        const response = await Service.get(`${PUBLIC_EVENT_SCHEDULES}/${eventId}/schedules`);
        return response;
    } catch (error) {
        console.error("Get Public Event Schedule List api error", error);
        throw error;
    }
}

export const getPublicEventGuides = async (eventId) => {
    try {
        const response = await Service.get(`${PUBLIC_EVENT_GUIDES}/${eventId}/guides`);
        return response;
    } catch (error) {
        console.error("Get Public Event Guide List api error", error);
        throw error;
    }
}

export const getPublicEventTicketCategories = async (eventId) => {
    try {
        const response = await Service.get(`${PUBLIC_EVENT_TICKET_CATEGORIES}/${eventId}/ticket-categories`);
        return response;
    } catch (error) {
        console.error("Get Public Event Ticket Categories List api error", error);
        throw error;
    }
}