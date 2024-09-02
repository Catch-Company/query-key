// index.d.ts

/**
 * Compresses a JSON object representing the page state into a query parameter string.
 *
 * @param state - The JSON object to compress.
 * @returns A compressed and encoded string suitable for use as a URL query parameter.
 */
export function share(state: object): string;

/**
 * Decompresses a query parameter string back into a JSON object.
 *
 * @param queryKey - The compressed and encoded query parameter string.
 * @returns The original JSON object.
 */
export function read(queryKey: string): object;