import { ORG_UPLOAD_BANNER, ORG_UPLOAD_GALLERY, ORG_UPLOAD_VIDEOS, ORG_UPLOAD_SPONSOR_LOGOS, ORG_REMOVE_GALLERY_IMAGE } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgUploadBanner = async (eventData) => {
    try {
        const response = await Service.post(ORG_UPLOAD_BANNER, eventData);
        return response.data;
    } catch (error) {
        console.error("Create upload banner api error", error);
        throw error;
    };
};

export const createOrgUploadGallery = async (eventData) => {
    try {
        const response = await Service.post(ORG_UPLOAD_GALLERY, eventData);
        return response.data;
    } catch (error) {
        console.error("Create upload gallery api error", error);
        throw error;
    };
};

export const createOrgUploadVideos = async (eventData) => {
    try {
        const response = await Service.post(ORG_UPLOAD_VIDEOS, eventData);
        return response.data;
    } catch (error) {
        console.error("Create upload video api error", error);
        throw error;
    };
};

export const createOrgUploadSponserLogo = async (eventData) => {
    try {
        const response = await Service.post(ORG_UPLOAD_SPONSOR_LOGOS, eventData);
        return response.data;
    } catch (error) {
        console.error("Create upload sponser logo api error", error);
        throw error;
    };
};

export const deleteOrgGalleryImage = async (id) => {
    try {
        const response = await Service.remove(`${ORG_REMOVE_GALLERY_IMAGE}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Gallery image Event api error", error);
        throw error;
    };
}


