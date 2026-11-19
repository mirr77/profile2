import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: string;
  decorative?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  style,
  fallbackTitle,
  fallbackIcon = 'image',
  decorative = false,
  ...rest
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (decorative) {
      return null;
    }
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3F5F1] to-[#FAFBF8] text-[#586255] p-6 text-center ${className}`}
        style={style}
      >
        <span className="material-symbols-outlined text-[32px] mb-2 opacity-70">{fallbackIcon}</span>
        <span className="text-xs font-mono-code font-medium">{fallbackTitle || alt || 'Preview'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
      style={style}
      {...rest}
    />
  );
};
