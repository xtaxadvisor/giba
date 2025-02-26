export type TimeSlot = {
  startTime: string;
  endTime: string;
  // other properties...
};
  
  // ✅ Exporting Components from Client Directory
  export { ClientDocuments } from "./ClientDocuments";
  export { ClientCommunication } from "./ClientCommunication";
  // export { ClientForm } from "./ClientForm";
  // export { ClientDashboard } from "./Dashboard/ClientDashboard";
  export { ClientLayout } from "./Dashboard/ClientLayout";
  export { Messages } from "./Messages";
  export { Calendar } from "./Calendar";
  export { Settings } from "./Settings";
  export type { Client } from '../../types/client';
  export type { User } from '../../types/user';
  // Ensure that the module '../../types/apiResponse' exists and is correctly named
  // export type { ApiResponse } from '../../types/apiResponse';
  // Ensure that the module './ClientProfile' exists and is correctly named
  // export type { ClientProfileProps } from './ClientProfile';
  // export { ClientDocuments } from './ClientDocuments'; // Removed duplicate export
  export { ClientHistory } from './ClientHistory';
  export { ClientForm } from './ClientForm';
  export { ClientDashboard } from './Dashboard/ClientDashboard';