import React from "react";
import { Routes, Route } from 'react-router-dom';
import { InvestorDashboard } from '../components/investor/InvestorDashboard.js';
import { VideoLibrary } from '../components/investor/VideoLibrary.js';
import { InvestorLayout } from '../components/investor/InvestorLayout.js';
import InvestorForum from './investor/InvestorForum.js';

export default function InvestorPortal() {
  return (
    <InvestorLayout>
      <Routes>
        <Route path="/" element={<InvestorDashboard />} />
        <Route path="/videos" element={<VideoLibrary />} />
        <Route path="/forum" element={<InvestorForum />} />
      </Routes>
    </InvestorLayout>
  );
}