import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ForumLayout } from '../../components/forum/ForumLayout.js';
import { ThreadList } from '../../components/forum/ThreadList.js';
import { ThreadDetail } from '../../components/forum/ThreadDetail.js';

export default function ForumPage() {
  return (
    <ForumLayout>
      <Routes>
        <Route index element={<ThreadList />} />  {/* This is the default route */}
        <Route path="thread/:threadId" element={<ThreadDetail />} />
        <Route path="create" element={<ThreadList />} />
      </Routes>
    </ForumLayout>
  );
}