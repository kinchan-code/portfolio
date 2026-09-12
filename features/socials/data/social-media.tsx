import type { ReactNode } from "react";
import { siFacebook, siGithub } from "simple-icons";

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
 * - GitHub / Facebook paths: simple-icons (sourced from brand guidelines)
 * - LinkedIn: official [in] bug shape; monochrome for icon lineups per
 *   https://brand.linkedin.com/in-logo (black / white variants)
 * Prefer downloading LinkedIn assets from https://brand.linkedin.com/downloads
 * if you need colored lockups.
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

export const socialMedia: SocialMediaItem[] = [
  {
    name: "GitHub",
    icon: <BrandIcon title={siGithub.title} path={siGithub.path} />,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: siteConfig.links.linkedin,
  },
  {
    name: "Facebook",
    icon: <BrandIcon title={siFacebook.title} path={siFacebook.path} />,
    link: siteConfig.links.facebook,
  },
  {
    name: "Email",
    icon: <MailIcon />,
    link: siteConfig.links.email,
  },
];
