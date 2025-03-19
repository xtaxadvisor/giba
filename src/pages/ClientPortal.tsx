import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// Import custom hook or other components if needed (ensure the path is correct):
// import { usePortal } from '../hooks/use-portal';  // example path, adjust as needed

interface ClientPortalProps {
  /** The id of the DOM element to portal into (e.g., 'portal-root'). */
  containerId?: string;
  children: ReactNode;
}

const ClientPortal: React.FC<ClientPortalProps> = ({ containerId = 'portal-root', children }) => {
  // State to track the target container element (only when running in a browser)
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  useEffect(() => {
    // Only execute on client: find the container by ID
    const elem = document.getElementById(containerId);
    setTargetElement(elem);
  }, [containerId]);

  // If no container is found or we're on the server, render nothing
  if (!targetElement) return null;

  // Create a portal with children into the target DOM element
  return createPortal(children, targetElement);
};

export default ClientPortal;