export const formatNumberCompact = Intl.NumberFormat('en-GB', {
    notation: 'compact',
    maximumFractionDigits: 1
}).format;
