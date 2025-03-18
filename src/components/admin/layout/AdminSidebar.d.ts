import MenuItem from '../../ui/Modal'; // Update this path to the correct path if necessary
interface AdminSidebarProps {
    menuItems: typeof MenuItem[];
    currentPath: string;
}
export declare function AdminSidebar({ menuItems, currentPath }: AdminSidebarProps): any;
export {};
