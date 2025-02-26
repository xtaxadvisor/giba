import React, { useState } from "react";

interface ClientFormProps {
  initialData?: ClientFormData; // ✅ Uses correct type
  onSubmit: (data: ClientFormData) => Promise<void>;
  onCancel: () => void;
}

interface ClientFormData {
  name: string;
  email: string;
  phone: string;
}

export function ClientForm({ initialData, onSubmit, onCancel }: ClientFormProps) {
  const [formData, setFormData] = useState<ClientFormData>(
    initialData || { name: "", email: "", phone: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Client Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientForm;