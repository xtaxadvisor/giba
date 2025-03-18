import { Shield, TrendingUp, MessageSquare, BookOpen, Briefcase, Users } from 'lucide-react';
// ✅ Define roles in a constant to avoid typos and improve maintainability
export const USER_ROLES = {
    ADMIN: "admin",
    STUDENT: "student",
    INVESTOR: "investor",
    CLIENT: "client",
    PROFESSIONAL: "professional",
    SUPPORT: "support"
};
export const PORTAL_CONFIGS = {
    admin: {
        id: "admin",
        title: "Admin Portal",
        description: "Comprehensive system administration and management.",
        icon: Shield,
        path: "/admin",
        requiredRole: [USER_ROLES.ADMIN],
        features: ["User Management", "System Settings", "Analytics Dashboard", "Security Controls"],
        notifications: true,
        messaging: true,
        documents: true
    },
    student: {
        id: "student",
        title: "Student Portal",
        description: "Access educational resources and financial learning materials.",
        icon: BookOpen,
        path: "/student",
        requiredRole: [USER_ROLES.STUDENT],
        features: ["Financial Education", "Learning Resources", "Practice Exercises", "Progress Tracking"],
        notifications: true,
        messaging: true,
        documents: true
    },
    investor: {
        id: "investor",
        title: "Investor Portal",
        description: "Access investment tools and market insights.",
        icon: TrendingUp,
        path: "/investor",
        requiredRole: [USER_ROLES.INVESTOR],
        features: ["Portfolio Management", "Market Analysis", "Investment Tools", "Performance Tracking"],
        notifications: true,
        messaging: true,
        documents: true
    },
    client: {
        id: "client",
        title: "Client Portal",
        description: "Access financial services and account management tools.",
        icon: Briefcase, // ✅ Changed icon for clarity
        path: "/client",
        requiredRole: [USER_ROLES.CLIENT],
        features: ["Account Management", "Financial Services", "Transaction History", "Support"],
        notifications: true,
        messaging: true,
        documents: true
    },
    professional: {
        id: "professional",
        title: "Professional Portal",
        description: "Access professional services and client management tools.",
        icon: Users, // ✅ Changed icon for clarity
        path: "/professional",
        requiredRole: [USER_ROLES.PROFESSIONAL],
        features: ["Client Management", "Professional Services", "Appointment Scheduling", "Billing"],
        notifications: true,
        messaging: true,
        documents: true
    },
    messages: {
        id: "messages",
        title: "Secure Messaging",
        description: "End-to-end encrypted communication platform.",
        icon: MessageSquare,
        path: "/messages",
        features: ["End-to-End Encryption", "File Sharing", "Message History", "Real-time Chat"],
        notifications: true,
        messaging: false, // ✅ Explicitly defining optional fields
        documents: false
    }
};
// ✅ Get a portal config by ID, throw an error if it doesn't exist
export function getPortalConfig(portalId) {
    const portal = PORTAL_CONFIGS[portalId];
    if (!portal) {
        throw new Error(`Portal with ID "${portalId}" not found`);
    }
    return portal;
}
// ✅ Get a list of portals the user has access to
export function getAvailablePortals(userRole) {
    return Object.values(PORTAL_CONFIGS).filter(({ requiredRole }) => !requiredRole || requiredRole.includes(userRole ?? ""));
}
