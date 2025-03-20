import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentDashboard } from'../../components/student/StudentDashboard.js'
import { StudentLayout } from '../../components/student/StudentLayout.js';
import { LearningResources } from '../../components/student/LearningResources.js';
import { PracticeExercises } from '../../components/student/PracticeExercises/PracticeExercises.js';
import { ProgressTracking } from '../../components/student/ProgressTracking/ProgressTracking.js';

export default function StudentPortal() {
  return (
    <StudentLayout>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/resources" element={<LearningResources />} />
        <Route path="/exercises" element={<PracticeExercises />} />
        <Route path="/progress" element={<ProgressTracking />} />
      </Routes>
    </StudentLayout>
  );
}