export const LINKS = {
  github: 'https://github.com/astoneham1',
  linkedin: 'https://www.linkedin.com/in/alexander-stoneham-03aa70341/',
  email: 'mailto:me@alexstoneham.co.uk',
} as const;

export type ExternalLinkKey = keyof typeof LINKS;
