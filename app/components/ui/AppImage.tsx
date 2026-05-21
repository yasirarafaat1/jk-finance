'use client';

import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

interface AppImageProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fallbackSrc?: string;
}

function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isExternal = imageSrc.startsWith('http://') || imageSrc.startsWith('https://');
    const isDataUrl = imageSrc.startsWith('data:');

    const handleError = () => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;
    const unoptimized = isExternal || isDataUrl;

    // For local images and data URLs, use Next.js Image component
    const imageProps = {
        src: imageSrc,
        className: commonClassName,
        priority,
        quality,
        placeholder,
        blurDataURL,
        unoptimized,
        onError: handleError,
        onLoad: handleLoad,
        onClick,
        ...props,
    };

    if (fill) {
        return (
            <div className={`relative ${className}`}>
                <Image
                    {...imageProps}
                    alt={alt}
                    fill
                    sizes={sizes || '100vw'}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            alt={alt}
            width={width || 400}
            height={height || 300}
        />
    );
}

export default AppImage;