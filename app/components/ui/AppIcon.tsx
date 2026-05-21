'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

type IconSet = Record<string, LucideIcon>;

interface IconProps extends LucideProps {
    name: string;
    size?: number;
    disabled?: boolean;
}

function Icon({
    name,
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const iconSet = LucideIcons as unknown as IconSet;
    const IconComponent = iconSet[name] || LucideIcons.HelpCircle;

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon;