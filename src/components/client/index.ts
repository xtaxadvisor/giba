export type TimeSlot = {
  startTime: string;
  endTime: string;
  // other properties...
};
  
  // ✅ Exporting Components from Client Directory
  export { ClientDocuments } from "./ClientDocuments.js";
  export { ClientCommunication } from "./ClientCommunication.js";
  // export { ClientForm } from "./ClientForm";
  // export { ClientDashboard } from "./Dashboard/ClientDashboard";
  export { ClientLayout } from "./Dashboard/ClientLayout.js";
  import Message from "./Messages.js";
  export { Message };
  export { Calendar } from "./Calendar.js";
  import Settings from "./Settings.js";
  export { Settings };
  export type { Client } from '../../types/client.js';
  export type { User } from '../../types/user.js';
  // Ensure that the module '../../types/apiResponse' exists and is correctly named
  // export type { ApiResponse } from '../../types/apiResponse.js';
  // Ensure that the module './ClientProfile' exists and is correctly named
  // export type { ClientProfileProps } from './ClientProfile';
  // export { ClientDocuments } from './ClientDocuments'; // Removed duplicate export
  export { ClientHistory } from './ClientHistory.js';
  export { ClientForm } from './ClientForm.js';
  import ClientDashboard from './Dashboard/ClientDashboard.js';
  export { ClientDashboard };