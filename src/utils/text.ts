/**
 * Truncates text to a specified character limit, appending "..." if truncated.
 */
export function truncateText(text: string, limit: number): string {
    if (text.length <= limit) return text;
    return text.slice(0, limit).trim() + "...";
}
