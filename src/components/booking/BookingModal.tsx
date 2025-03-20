import React from 'react';
import Modal from "../../components/ui/Modal.js"; // ✅ Correct
import { BookingForm } from './BookingForm.js';
import { useConsultation } from '../../hooks/useConsultation.js';
import { useNotificationStore } from '../../lib/store.js';
import { useNavigate } from 'react-router-dom';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

export function BookingModal({ isOpen, onClose, serviceType }: BookingModalProps) {
  const { scheduleConsultation, isScheduling } = useConsultation();
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    try {
      await scheduleConsultation(data);
      addNotification('Consultation scheduled successfully', 'success');
      onClose();
      navigate('/dashboard/consultations');
    } catch (error) {
      addNotification('Failed to schedule consultation', 'error');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule Consultation"
    >
      <BookingForm
        serviceType={serviceType}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}