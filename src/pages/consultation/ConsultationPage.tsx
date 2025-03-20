import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ConsultationLayout } from '../../components/consultation/ConsultationLayout.js';
import { ConsultationList } from '../../components/consultation/ConsultationList.js';
import { ConsultationDetail } from '../../components/consultation/ConsultationDetail.js';
import { BookConsultation } from '../../components/consultation/BookConsultation.js';
import { VirtualMeeting } from '../../components/consultation/VirtualMeeting.js';

export default function ConsultationPage() {
  return (
    <ConsultationLayout>
      <Routes>
        <Route path="/" element={<ConsultationList />} />
        <Route path="/book" element={<BookConsultation />} />
        <Route path="/:consultationId" element={<ConsultationDetail />} />
        <Route path="/meeting/:meetingId" element={<VirtualMeeting onEnd={() => {}} />} />
      </Routes>
    </ConsultationLayout>
  );
}