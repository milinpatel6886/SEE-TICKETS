import { ORG_REPORT_ATTENDANCE, ORG_REPORT_ENTRY_TIMELINE, ORG_REPORT_SCANNER_PERFORMANCE, ORG_REPORT_TICKET_CATEGORY, ORG_REPORT_FULL, ORG_REPORT_EXPORT } from "../../constant/apiEndpoints";
import Service from "../../lib/service";

export const getOrgReportAttendence = async () => {
    try {
        const response = await Service.get(ORG_REPORT_ATTENDANCE);
        return response;
    } catch (error) {
        console.error("Get Report Attendence List api error", error);
        throw error;
    }
}

export const getOrgReportEntryTimeline = async () => {
    try {
        const response = await Service.get(ORG_REPORT_ENTRY_TIMELINE);
        return response;
    } catch (error) {
        console.error("Get Report Entry Timeline List api error", error);
        throw error;
    }
}

export const getOrgReportScannerPerformance = async () => {
    try {
        const response = await Service.get(ORG_REPORT_SCANNER_PERFORMANCE);
        return response;
    } catch (error) {
        console.error("Get Report Scanner Performance List api error", error);
        throw error;
    }
}

export const getOrgReportTicketCategory = async () => {
    try {
        const response = await Service.get(ORG_REPORT_TICKET_CATEGORY);
        return response;
    } catch (error) {
        console.error("Get Report Ticket Category List api error", error);
        throw error;
    }
}

export const getOrgReportFull = async () => {
    try {
        const response = await Service.get(ORG_REPORT_FULL);
        return response;
    } catch (error) {
        console.error("Get Report full List api error", error);
        throw error;
    }
}

export const getOrgReportExport = async () => {
    try {
        const response = await Service.get(ORG_REPORT_EXPORT);
        return response;
    } catch (error) {
        console.error("Get Export Report List api error", error);
        throw error;
    }
}