import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
export function VirtualMeeting({ onEnd }) {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = React.useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = React.useState(true);
    useEffect(() => {
        // Initialize video stream
        async function setupStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            }
            catch (error) {
                console.error('Error accessing media devices:', error);
            }
        }
        setupStream();
        // Cleanup
        return () => {
            const stream = videoRef.current?.srcObject;
            stream?.getTracks().forEach(track => track.stop());
        };
    }, []);
    const toggleMute = () => {
        const stream = videoRef.current?.srcObject;
        stream?.getAudioTracks().forEach(track => {
            track.enabled = !track.enabled;
        });
        setIsMuted(!isMuted);
    };
    const toggleVideo = () => {
        const stream = videoRef.current?.srcObject;
        stream?.getVideoTracks().forEach(track => {
            track.enabled = !track.enabled;
        });
        setIsVideoEnabled(!isVideoEnabled);
    };
    return (_jsxs("div", { className: "flex flex-col h-screen bg-gray-900", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: true, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute bottom-4 right-4 w-48 h-36 bg-black rounded-lg overflow-hidden", children: _jsx("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: true, className: "w-full h-full object-cover" }) })] }), _jsx("div", { className: "bg-gray-800 p-4", children: _jsxs("div", { className: "flex justify-center space-x-4", children: [_jsx(Button, { variant: "outline", size: "lg", className: `rounded-full ${isMuted ? 'bg-red-600 text-white' : ''}`, onClick: toggleMute, icon: isMuted ? MicOff : Mic, children: undefined }), _jsx(Button, { variant: "outline", size: "lg", className: `rounded-full ${!isVideoEnabled ? 'bg-red-600 text-white' : ''}`, onClick: toggleVideo, icon: isVideoEnabled ? VideoIcon : VideoOff, children: undefined }), _jsx(Button, { variant: "outline", size: "lg", className: "rounded-full bg-red-600 text-white hover:bg-red-700", onClick: onEnd, icon: Phone, children: undefined })] }) })] }));
}
