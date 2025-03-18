import React from "react";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: { title: string; description: string; startTime: string; endTime: string };
  onSubmit: (eventData: any) => void;
  selectedDate?: Date;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event, onSubmit, selectedDate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold">{event ? "Edit Event" : "New Event"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            onSubmit(Object.fromEntries(Array.from(formData as any as Iterable<[string, FormDataEntryValue]>)));
          }}
        >
          <input type="text" name="title" placeholder="Event Title" defaultValue={event?.title} required className="w-full p-2 border rounded mt-3"/>
          <textarea name="description" placeholder="Event Description" defaultValue={event?.description} className="w-full p-2 border rounded mt-3"></textarea>
          <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded">Save</button>
        </form>
        <button onClick={onClose} className="mt-3 w-full bg-gray-500 text-white p-2 rounded">Cancel</button>
      </div>
    </div>
  );
};

export default EventModal;