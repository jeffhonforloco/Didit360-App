import React from 'react';
import { formatFileSize } from '../../../utils/format';

interface UploadProgressProps {
  progress: number;
  fileName: string;
  fileSize?: number;
}

export function UploadProgress({ progress, fileName, fileSize }: UploadProgressProps) {
  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-white">{fileName}</span>
          {fileSize && (
            <span className="text-gray-400 text-sm ml-2">
              ({formatFileSize(fileSize)})
            </span>
          )}
        </div>
        <span className="text-gray-400">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-[#1E1E1E] rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}