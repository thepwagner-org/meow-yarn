/** Valid cat sounds in different languages */
const validCatSounds: ReadonlySet<string> = new Set([
  "meow", // English
  "nyaa", // Japanese
  "nyan", // Japanese
  "yaong", // Korean
  "miao", // Chinese
  "miau", // Spanish/German
  "miaou", // French
  "myau", // Russian
]);

/**
 * Checks if a given string is a valid cat sound
 * @param str - The string to check
 * @returns True if the string is a valid cat sound, false otherwise
 */
export function isMeow(str: string): boolean {
  if (!str) {
    return false;
  }

  return validCatSounds.has(str.toLowerCase());
}
