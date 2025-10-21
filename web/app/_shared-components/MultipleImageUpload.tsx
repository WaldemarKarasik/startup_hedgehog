"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";

interface ImagePreview {
  id: string;
  url: string;
  file: File;
}

interface MultipleImageUploadProps {
  value?: File[];
  onChange?: (files: File[]) => void;
}

export const MultipleImageUpload = ({
  value = [],
  onChange,
}: MultipleImageUploadProps) => {
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  // Initialize previews from initial value (only on mount)
  useEffect(() => {
    if (isInitialMount.current && value && value.length > 0) {
      const initialPreviews = value.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        file: file,
      }));
      setImagePreviews(initialPreviews);
    }
    isInitialMount.current = false;
  }, []); // Empty dependency array - only run on mount

  // Handle file selection
  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (!files) return;

      const newPreviews: ImagePreview[] = [];

      Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          const preview: ImagePreview = {
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
            file: file,
          };
          newPreviews.push(preview);
        }
      });

      if (newPreviews.length > 0) {
        setImagePreviews((prev) => {
          const updatedPreviews = [...prev, ...newPreviews];
          // Call onChange AFTER state update, not during render
          setTimeout(() => {
            if (onChange) {
              onChange(updatedPreviews.map((p) => p.file));
            }
          }, 0);
          return updatedPreviews;
        });
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [onChange]
  );

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  // Remove image
  const removeImage = useCallback(
    (id: string) => {
      setImagePreviews((prev) => {
        const newPreviews = prev.filter((preview) => preview.id !== id);

        const removedPreview = prev.find((p) => p.id === id);
        if (removedPreview) {
          URL.revokeObjectURL(removedPreview.url);
        }

        // Call onChange AFTER state update
        setTimeout(() => {
          if (onChange) {
            onChange(newPreviews.map((p) => p.file));
          }
        }, 0);

        return newPreviews;
      });
    },
    [onChange]
  );

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Clear all images
  const clearAll = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setImagePreviews((prev) => {
      prev.forEach((preview) => URL.revokeObjectURL(preview.url));

      // Call onChange AFTER state update
      setTimeout(() => {
        if (onChange) {
          onChange([]);
        }
      }, 0);

      return [];
    });
  }, [onChange]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-4 sm:p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400 bg-gray-50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
          <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <p className="text-base sm:text-lg font-semibold text-gray-700">
              Upload your images
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Drag & drop images here or click to browse
            </p>
          </div>

          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Supports: JPG, PNG, WEBP</span>
          </div>

          <button
            type="button"
            className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
            onClick={(e) => {
              e.stopPropagation();
              triggerFileInput();
            }}
          >
            Choose Files
          </button>
        </div>
      </div>

      {/* Image Previews */}
      {imagePreviews.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Selected Images ({imagePreviews.length})
            </h3>
            <button
              type="button"
              onClick={clearAll}
              className="text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="max-h-64 sm:max-h-96 overflow-y-auto pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pr-2">
              {imagePreviews.map((preview) => (
                <div
                  key={preview.id}
                  className="relative group aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={preview.url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(preview.id)}
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 sm:p-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="truncate text-[10px] sm:text-xs">
                      {preview.file.name}
                    </p>
                    <p className="text-[10px] sm:text-xs">
                      {(preview.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="border-2 border-dashed border-gray-300 rounded-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors p-2"
                onClick={triggerFileInput}
              >
                <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm text-gray-500 text-center">
                  Add More
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {imagePreviews.length === 0 && (
        <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
          No images selected yet
        </div>
      )}
    </div>
  );
};
