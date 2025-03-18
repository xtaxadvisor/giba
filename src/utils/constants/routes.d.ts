export declare const ROUTES: {
    readonly HOME: "/";
    readonly LOGIN: "/login";
    readonly REGISTER: "/register";
    readonly DASHBOARD: "/dashboard";
    readonly ADMIN: "/admin";
    readonly PROFESSIONAL: "/professional";
    readonly INVESTOR: "/investor";
    readonly SERVICES: "/services";
    readonly SAME_DAY_SERVICES: "/same-day-services";
    readonly VIDEOS: "/browse-videos";
    readonly CONSULTATION: "/consultation";
    readonly STUDENTS: "/registered-students";
    readonly CLIENT: "/registered-clients";
    readonly STUDENT: "/student";
    readonly CLIENT_DETAIL: "/client-details";
};
export declare const PROTECTED_ROUTES: ("/dashboard" | "/admin" | "/professional" | "/investor" | "/same-day-services" | "/student" | "/registered-clients")[];
export declare const PUBLIC_ROUTES: ("/login" | "/" | "/register" | "/services" | "/browse-videos")[];
