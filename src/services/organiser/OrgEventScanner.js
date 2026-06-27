import { ORG_CREATE_SCANNER, ORG_SCANNERS_LIST, ORG_REVOKE_SCANNER, ORG_REACTIVATE_SCANNER, ORG_DELETE_SCANNER } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const createOrgScanner = async (eventData) => {
    try {
        const response = await Service.post(ORG_CREATE_SCANNER, eventData);
        return response.data;
    } catch (error) {
        console.error("Create scanner api error", error);
        throw error;
    };
};

export const deleteOrgScanner = async (id) => {
    try {
        const response = await Service.remove(`${ORG_DELETE_SCANNER}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("Delete Scanner Event api error", error);
        throw error;
    };
}

export const revokeOrgScanner = async (id, eventData) => {
    try {
        const response = await Service.patch(`${ORG_REVOKE_SCANNER}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Revoke Scanner Event api error", error);
        throw error;
    };
};

export const reactivateOrgScanner = async (id, eventData) => {
    try {
        const response = await Service.patch(`${ORG_REACTIVATE_SCANNER}/${id}`, eventData);
        return response.data;
    } catch (error) {
        console.error("Reactivate Scanner Event api error", error);
        throw error;
    };
};

export const getOrgScannerList = async () => {
    try {
        const response = await Service.get(ORG_SCANNERS_LIST);
        return response;
    } catch (error) {
        console.error("Get Scanner List api error", error);
        throw error;
    }
}

