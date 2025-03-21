import Modal from "../../ui/Modal"; // ✅ Correct Import
console.log("✅ Modal Component:", Modal);
import { jsx as _jsx } from "react/jsx-runtime";
import { BookingForm } from './BookingForm';
import { useConsultation } from '../../hooks/useConsultation';
import { useNotificationStore } from '../../lib/store';
import { useNavigate } from 'react-router-dom';
export function BookingModal({ isOpen, onClose, serviceType }) {
    const { scheduleConsultation, isScheduling } = useConsultation();
    const { addNotification } = useNotificationStore();
    const navigate = useNavigate();
    const handleSubmit = async (data) => {
        try {
            await scheduleConsultation(data);
            addNotification('Consultation scheduled successfully', 'success');
            onClose();
            navigate('/dashboard/consultations');
        }
        catch (error) {
            addNotification('Failed to schedule consultation', 'error');
        }
    };
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, title: "Schedule Consultation", children: _jsx(BookingForm, { serviceType: serviceType, onSubmit: handleSubmit, onCancel: onClose }) }));
}
