// ==============================
// ✅ Authentication Types
// ==============================

import { AppUser } from "@/components/admin/AdminLayout.js";

/**
 * @typedef {Object} AuthCredentials
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 */

/**
 * @typedef {Object} AnalyticsMetrics
 * @property {{ change: number }} revenue - Revenue metrics.
 * @property {{ change: number }} clients - Client growth metrics.
 * @property {{ change: number }} responseTime - Response time metrics.
 * @property {{ change: number }} satisfaction - Satisfaction metrics.
 */

/**
 * @typedef {Object} TimeSlot
 * @property {string} startTime - The start time of the slot.
 * @property {string} endTime - The end time of the slot.
 * @property {boolean} available - Whether the slot is available.
 */

/**
 * @typedef {Object} AIMetrics
 * @property {number} totalInteractions - Total number of interactions.
 * @property {number} averageResponseTime - Average response time.
 * @property {number} satisfactionRate - Satisfaction rate percentage.
 * @property {Map<string, number>} topQuestions - Map of top questions and their counts.
 * @property {number} errorRate - Error rate percentage.
 */

/**
 * @param {string} timeRange - The time range for analytics.
 * @returns {{
 *   metrics: AnalyticsMetrics,
 *   revenueData: any,
 *   clientGrowth: any,
 *   performanceMetrics: any,
 *   isLoading: boolean,
 *   exportAnalytics: (format: 'pdf' | 'csv' | 'excel') => Promise<void>
 * }}
 */
export function useAnalytics(timeRange) {
  return {
    metrics: {
      revenue: { change: 0 },
      clients: { change: 0 },
      responseTime: { change: 0 },
      satisfaction: { change: 0 }
    },
    revenueData: null,
    clientGrowth: null,
    performanceMetrics: null,
    isLoading: false,
    exportAnalytics: async (format) => {
      // Dummy export function
    }
  };
}

/**
 * @typedef {AuthCredentials & { name: string; role: UserRole }} RegisterData
 */

/**
 * @typedef {Object} AuthResponse
 * @property {User} user - The authenticated user.
 * @property {string} token - The authentication token.
 */

/**
 * @typedef {Object} User
 * @property {string} id - The user's unique identifier.
 * @property {string} email - The user's email address.
 * @property {string} [displayName] - The user's display name (optional).
 * @property {UserRole} role - The user's role.
 * @property {string} [createdAt] - The timestamp when the user was created (optional).
 * @property {string} [updatedAt] - The timestamp when the user was last updated (optional).
 */

/**
 * @typedef {"client" | "student" | "investor" | "professional" | "admin"} UserRole
 */

/**
 * @typedef {Object} LocalAppUser
 * @property {string} name - The user's name.
 * @property {UserRole} role - The user's role.
 */

// ==============================
// ✅ Navigation / Menu Types
// ==============================

/**
 * @typedef {Object} MenuItem
 * @property {string} title - The title of the menu item.
 * @property {string} href - The URL the menu item links to.
 * @property {React.ComponentType<{ className?: string }>} icon - The icon component for the menu item.
 */

// ==============================
// ✅ Metric & Analytics Types
// ==============================

/**
 * @typedef {Object} MetricComparison
 * @property {number} current - The current value.
 * @property {number} previous - The previous value.
 * @property {number} absoluteChange - The absolute change between current and previous.
 * @property {number} percentageChange - The percentage change between current and previous.
 * @property {"up" | "down" | "stable"} trend - The trend direction.
 */

/**
 * @typedef {Object} Recommendation
 * @property {string} recommendationField - A field for recommendations.
 */

// ==============================
// ✅ Document Types
// ==============================

/**
 * @typedef {Object} Document
 * @property {string} id - The document's unique identifier.
 * @property {string} name - The name of the document.
 * @property {string} type - The type of the document.
 * @property {string} [size] - The size of the document (optional).
 * @property {string} uploadedAt - The timestamp when the document was uploaded.
 * @property {"pending" | "approved" | "rejected"} status - The status of the document.
 * @property {string[]} [tags] - Tags associated with the document (optional).
 */

/**
 * @typedef {Object} AuthError
 * @property {string} message - The error message.
 * @property {number} code - The error code.
 */

// ==============================
// ✅ Utility Types
// ==============================

/**
 * @typedef {Object} SomeOtherType
 * // Define the properties of SomeOtherType here
 */

/**
 * @returns {{ user: LocalAppUser | null }}
 */
export function useAuth() {
  return { user: null };
}

