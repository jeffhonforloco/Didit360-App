import React, { useState } from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { formatFileSize } from '../../../utils/format';

interface UploadFormProps {
  onUpload: (formData: FormData) => Promise<void>;
  onCancel?: () => void;
}

export function UploadForm({ onUpload, onCancel }: UploadFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title.trim() || !description.trim()) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('file', file);

      await onUpload(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-[#2E2E2E] rounded-lg p-6">
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept="audio/*"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-400">
              {file ? `${file.name} (${formatFileSize(file.size)})` : 'Drag & drop files here or click to browse'}
            </p>
          </label>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full bg-[#1E1E1E] text-white px-4 py-2 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-white hover:bg-[#3E3E3E] rounded-lg"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting || !file}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            {isSubmitting ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </form>
  );
}