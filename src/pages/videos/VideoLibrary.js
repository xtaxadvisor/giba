import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { VideoCard } from '../../components/video/VideoCard';
import { VideoFilters } from '../../components/video/VideoFilters';
import { videoClasses } from '../../data/videoData';
import { Button } from '../../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function VideoLibrary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();
    const filteredVideos = videoClasses.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (_jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx(Button, { variant: "ghost", onClick: () => navigate('/'), icon: ArrowLeft, className: "mb-4", children: "Back to Home" }), _jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Video Library" }) })] }), _jsx(VideoFilters, { searchTerm: searchTerm, onSearchChange: setSearchTerm, selectedCategory: selectedCategory, onCategoryChange: setSelectedCategory }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredVideos.map((video) => (_jsx(VideoCard, { video: video }, video.id))) })] }) }));
}
