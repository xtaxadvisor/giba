import React from "react";
import { Mic, MicOff, Video, VideoOff, Phone } from 'lucide-react';
import { Button } from '../../ui/Button.js';

interface VideoControlsProps {
  isMuted: boolean;
  isVideoEnabled: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onEndCall: () => void;
}

export function VideoControls({
  isMuted,
  isVideoEnabled,
  onToggleMute,
  onToggleVideo,
  onEndCall
}: VideoControlsProps) {
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full ${isMuted ? 'bg-red-600 text-white' : ''}`}
          onClick={onToggleMute}
          icon={isMuted ? MicOff : Mic}
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full ${!isVideoEnabled ? 'bg-red-600 text-white' : ''}`}
          onClick={onToggleVideo}
          icon={isVideoEnabled ? Video : VideoOff}
        >
          {isVideoEnabled ? 'Disable Video' : 'Enable Video'}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full bg-red-600 text-white hover:bg-red-700"
          onClick={onEndCall}
          icon={Phone}
        >
          End Call
        </Button>
        <Button
          variant="outline"
          size="lg"
          className={`rounded-full ${!isVideoEnabled ? 'bg-red-600 text-white' : ''}`}
          onClick={onToggleVideo}
          icon={isVideoEnabled ? Video : VideoOff} children={undefined}        />
        <Button
          variant="outline"
          size="lg"
          className="rounded-full bg-red-600 text-white hover:bg-red-700"
          onClick={onEndCall}
          icon={Phone} children={undefined}        />
      </div>
    </div>
  );
}