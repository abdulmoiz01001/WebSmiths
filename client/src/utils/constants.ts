// apiRoutes.ts

// Import environment variables
export const HOST = import.meta.env.VITE_SERVER_URL;

// Define route paths
export const AUTH_ROUTES = 'api/auth';
export const PATIENTS_ROUTES = 'api/patients';
export const OTP_ROUTES = 'api/otp';
export const PATIENT_ROUTES = 'api/patients';

// Auth routes
export const REGISTER_ROUTE = `${AUTH_ROUTES}/register`;
export const VERIFY_USER_ROUTE = `${AUTH_ROUTES}/verification`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

// User routes
export const USERS_ROUTE = 'api/users';
export const GET_ALL_USERS_ROUTE = `${USERS_ROUTE}`;
export const DELETE_USER_ROUTE = (id: string) => `${USERS_ROUTE}/delete/${id}`;
export const RESET_PASSWORD_ROUTE = `${USERS_ROUTE}/reset/currentpassword`;

// OTP routes
export const OTP_REQUEST_ROUTE = `${OTP_ROUTES}/request`;
export const VERIFY_RESET_OTP_ROUTE = `${OTP_ROUTES}/verify`;
