import { BASE_URL } from "../constant/baseURL"

// Auth API Endpoints
export const REGISTER = `${BASE_URL}/api/v1/auth/register`
export const LOGIN = `${BASE_URL}/api/v1/auth/login`
export const REFRESH_TOKEN = `${BASE_URL}/api/v1/auth/refresh`
export const LOGOUT = `${BASE_URL}/api/v1/auth/logout`
export const GET_ME = `${BASE_URL}/api/v1/auth/me`

// Admin - User Management
export const ADMIN_USERS_LIST = `${BASE_URL}/api/v1/admin/users`
export const ADMIN_USER_DETAILS = `${BASE_URL}/api/v1/admin/users`
export const ADMIN_DEACTIVATE_USER = `${BASE_URL}/api/v1/admin/users`
export const ADMIN_REACTIVATE_USER = `${BASE_URL}/api/v1/admin/users`
export const ADMIN_CHANGE_USER_ROLE = `${BASE_URL}/api/v1/admin/users`
export const ADMIN_DELETE_USER = `${BASE_URL}/api/v1/admin/users`

// Admin - Platform Event Management
export const ADMIN_EVENTS_LIST = `${BASE_URL}/api/v1/admin/events`
export const ADMIN_EVENT_DETAILS = `${BASE_URL}/api/v1/admin/events`
export const ADMIN_SET_FEATURED_EVENT = `${BASE_URL}/api/v1/admin/events`
export const ADMIN_FORCE_CANCEL_EVENT = `${BASE_URL}/api/v1/admin/events`
export const ADMIN_UNPUBLISH_EVENT = `${BASE_URL}/api/v1/admin/events`
export const ADMIN_FORCE_DELETE_EVENT = `${BASE_URL}/api/v1/admin/events`

// Admin - Bookings & Payments Oversight
export const ADMIN_BOOKINGS_LIST = `${BASE_URL}/api/v1/admin/bookings`
export const ADMIN_BOOKING_DETAILS = `${BASE_URL}/api/v1/admin/bookings`
export const ADMIN_PAYMENTS_SUMMARY = `${BASE_URL}/api/v1/admin/payments/summary`

// Admin - Analytics
export const ADMIN_ANALYTICS_OVERVIEW = `${BASE_URL}/api/v1/admin/analytics/overview`
export const ADMIN_ANALYTICS_REVENUE_TREND = `${BASE_URL}/api/v1/admin/analytics/revenue-trend`
export const ADMIN_ANALYTICS_TOP_ORGANIZERS = `${BASE_URL}/api/v1/admin/analytics/top-organizers`
export const ADMIN_ANALYTICS_TOP_EVENTS = `${BASE_URL}/api/v1/admin/analytics/top-events`
export const ADMIN_ANALYTICS_CATEGORY_BREAKDOWN = `${BASE_URL}/api/v1/admin/analytics/category-breakdown`

// Admin - Notification Logs
export const ADMIN_NOTIFICATIONS_LIST = `${BASE_URL}/api/v1/admin/notifications`
export const ADMIN_NOTIFICATION_STATS = `${BASE_URL}/api/v1/admin/notifications/stats/summary`
export const ADMIN_NOTIFICATION_DETAILS = `${BASE_URL}/api/v1/admin/notifications`

// Organizer - Event CRUD
export const ORG_EVENTS_LIST = `${BASE_URL}/api/v1/organizer/events`
export const ORG_CREATE_EVENT = `${BASE_URL}/api/v1/organizer/events/create`
export const ORG_UPDATE_EVENT = `${BASE_URL}/api/v1/organizer/events/update`
export const ORG_EVENT_DETAILS = `${BASE_URL}/api/v1/organizer/events/details`
export const ORG_DELETE_EVENT = `${BASE_URL}/api/v1/organizer/events/delete`
export const ORG_PUBLISH_EVENT = `${BASE_URL}/api/v1/organizer/events/publish`
export const ORG_CANCEL_EVENT = `${BASE_URL}/api/v1/organizer/events/cancel`


// Organizer - Event Media
export const ORG_UPLOAD_BANNER = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPLOAD_GALLERY = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPLOAD_VIDEOS = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPLOAD_SPONSOR_LOGOS = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REMOVE_GALLERY_IMAGE = `${BASE_URL}/api/v1/organizer/events`

// Organizer - Artists
export const ORG_ADD_ARTIST = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPDATE_ARTIST = `${BASE_URL}/api/v1/organizer/events`
export const ORG_DELETE_ARTIST = `${BASE_URL}/api/v1/organizer/events`

// Organizer - Schedules
export const ORG_ADD_SCHEDULE_SLOT = `${BASE_URL}/api/v1/organizer/events`
export const ORG_ADD_SCHEDULE_SLOTS_BULK = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPDATE_SCHEDULE_SLOT = `${BASE_URL}/api/v1/organizer/events`
export const ORG_DELETE_SCHEDULE_SLOT = `${BASE_URL}/api/v1/organizer/events`

// Organizer - Guides
export const ORG_ADD_GUIDE = `${BASE_URL}/api/v1/organizer/events`
export const ORG_ADD_GUIDES_BULK = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPDATE_GUIDE = `${BASE_URL}/api/v1/organizer/events`
export const ORG_DELETE_GUIDE = `${BASE_URL}/api/v1/organizer/events`

// Organizer - Ticket Categories
export const ORG_CREATE_TICKET_CATEGORY = `${BASE_URL}/api/v1/organizer/events`
export const ORG_UPDATE_TICKET_CATEGORY = `${BASE_URL}/api/v1/organizer/events`
export const ORG_DELETE_TICKET_CATEGORY = `${BASE_URL}/api/v1/organizer/events`

// Organizer - Scanners
export const ORG_CREATE_SCANNER = `${BASE_URL}/api/v1/organizer/scanners/create`
export const ORG_SCANNERS_LIST = `${BASE_URL}/api/v1/organizer/scanners/list`
export const ORG_REVOKE_SCANNER = `${BASE_URL}/api/v1/organizer/scanners`
export const ORG_REACTIVATE_SCANNER = `${BASE_URL}/api/v1/organizer/scanners`
export const ORG_DELETE_SCANNER = `${BASE_URL}/api/v1/organizer/scanners`

// Organizer - Reports
export const ORG_REPORT_ATTENDANCE = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REPORT_ENTRY_TIMELINE = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REPORT_SCANNER_PERFORMANCE = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REPORT_TICKET_CATEGORY = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REPORT_FULL = `${BASE_URL}/api/v1/organizer/events`
export const ORG_REPORT_EXPORT = `${BASE_URL}/api/v1/organizer/events`

// Client - Bookings
export const CLIENT_INITIATE_BOOKING = `${BASE_URL}/api/v1/bookings/initiate`
export const CLIENT_VERIFY_PAYMENT = `${BASE_URL}/api/v1/bookings/verify-payment`
export const CLIENT_BOOKINGS_LIST = `${BASE_URL}/api/v1/bookings`
export const CLIENT_BOOKING_DETAILS = `${BASE_URL}/api/v1/bookings`

// Client - My Tickets
export const CLIENT_MY_TICKETS_LIST = `${BASE_URL}/api/v1/my-tickets`
export const CLIENT_TICKET_DETAILS = `${BASE_URL}/api/v1/my-tickets`
export const CLIENT_TICKET_DOWNLOAD = `${BASE_URL}/api/v1/my-tickets/download`

// Public - Events
export const PUBLIC_EVENTS_LIST = `${BASE_URL}/api/v1/events`
export const PUBLIC_EVENT_DETAILS = `${BASE_URL}/api/v1/events`
export const PUBLIC_EVENT_ARTISTS = `${BASE_URL}/api/v1/events`
export const PUBLIC_EVENT_SCHEDULES = `${BASE_URL}/api/v1/events`
export const PUBLIC_EVENT_GUIDES = `${BASE_URL}/api/v1/events`
export const PUBLIC_EVENT_TICKET_CATEGORIES = `${BASE_URL}/api/v1/events`

// Scanner - Public
export const SCANNER_INVITATION_DETAILS = `${BASE_URL}/api/v1/scanner/invitation`
export const SCANNER_ACTIVATE = `${BASE_URL}/api/v1/scanner/activate`
export const SCANNER_LOGIN = `${BASE_URL}/api/v1/scanner/login`

// Scanner - Protected
export const SCANNER_VALIDATE_TICKET = `${BASE_URL}/api/v1/scanner/validate-ticket`
export const SCANNER_SCAN_TICKET = `${BASE_URL}/api/v1/scanner/scan-ticket`
export const SCANNER_MY_EVENTS = `${BASE_URL}/api/v1/scanner/my-events`
export const SCANNER_ENTRY_LOGS = `${BASE_URL}/api/v1/scanner/entry-logs`
export const SCANNER_REPORTS = `${BASE_URL}/api/v1/scanner/reports`