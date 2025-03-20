import React from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AdminHeaderProps {
  user: User | null;
  onLogout: () => void;
}

export declare function AdminHeader(props: AdminHeaderProps): JSX.Element;

export default AdminHeader;