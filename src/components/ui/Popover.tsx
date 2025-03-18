import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface PopoverProps {
  /** The content to display inside the popover */
  content: ReactNode;
  /** Trigger behavior: "click" (default) or "hover" */
  trigger?: 'click' | 'hover';
  /** Position of the popover relative to trigger */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** The trigger element that toggles the popover (e.g., a button) */
  children: ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  content,
  trigger = 'click',
  position = 'bottom',
  children
}) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Toggle handlers for hover trigger
  const handleMouseEnter = () => trigger === 'hover' && setOpen(true);
  const handleMouseLeave = () => trigger === 'hover' && setOpen(false);

  // Toggle on click for click trigger
  const handleToggle = () => {
    if (trigger === 'click') {
      setOpen(prev => !prev);
    }
  };

  // Close popover on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  // Determine placement classes for the popover container
  let positionClasses = '';
  if (position === 'top') positionClasses = 'bottom-full mb-2';
  if (position === 'bottom') positionClasses = 'top-full mt-2';
  if (position === 'left') positionClasses = 'right-full mr-2';
  if (position === 'right') positionClasses = 'left-full ml-2';

  return (
    <div 
      ref={popoverRef} 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger element */}
      <div onClick={handleToggle} className="inline-block">
        {children}
      </div>

      {/* Popover content container */}
      <div 
        className={`absolute z-50 ${positionClasses} transition ease-out duration-200 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {/* Popover box */}
        <div className="bg-white text-gray-800 rounded shadow-lg p-3">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popover;