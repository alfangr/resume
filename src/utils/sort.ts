/**
 * Returns a new array sorted by a date string field in descending order (newest first).
 * Uses toSorted() to avoid mutating the original array.
 */
export function sortByDateDesc<T>(items: readonly T[], key: keyof T): T[] {
    return [...items].sort(
        (a, b) =>
            new Date(b[key] as string).getTime() -
            new Date(a[key] as string).getTime()
    );
}
