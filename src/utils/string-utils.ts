/**
 * Helper function to capitalize each word as the tags returned by Mixcloud are all lowercase.
 * @param {string} tag The tag to capitalize
 */
export function capitalizeTags(tag: string): string {
  return tag
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
