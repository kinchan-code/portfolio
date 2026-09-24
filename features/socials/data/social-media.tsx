import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

interface SocialMediaItem {
  name: string;
  icon: ReactNode;
  link: string;
}

interface BrandIconProps {
  title: string;
  path: string;
}

/**
 * Official brand marks for social profile links.
 * Paths inlined (formerly simple-icons) to avoid pulling the full icon package.
 * LinkedIn uses the official [in] bug shape; monochrome for icon lineups per
 * https://brand.linkedin.com/in-logo
 */
function BrandIcon({ title, path }: Readonly<BrandIconProps>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 72 72"
      fill="currentColor"
      className="size-4"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8Zm54-10H51.316V43.802c0-4.989-1.896-7.778-5.845-7.778-4.296 0-6.541 2.902-6.541 7.778V62H28.633V27.333h10.297v4.67s3.096-5.729 10.453-5.729C56.736 26.274 62 30.764 62 40.051V62ZM16.349 22.794c-3.507 0-6.349-2.864-6.349-6.397 0-3.533 2.842-6.397 6.349-6.397 3.508 0 6.348 2.864 6.348 6.397 0 3.533-2.84 6.397-6.348 6.397ZM11.033 62h10.736V27.333H11.033V62Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Email</title>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const GITHUB_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";

const FACEBOOK_PATH =
  "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z";

export const socialMedia: SocialMediaItem[] = [
  {
    name: "GitHub",
    icon: <BrandIcon title="GitHub" path={GITHUB_PATH} />,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: siteConfig.links.linkedin,
  },
  {
    name: "Facebook",
    icon: <BrandIcon title="Facebook" path={FACEBOOK_PATH} />,
    link: siteConfig.links.facebook,
  },
  {
    name: "Email",
    icon: <MailIcon />,
    link: siteConfig.links.email,
  },
];
