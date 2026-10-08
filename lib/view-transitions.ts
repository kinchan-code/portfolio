import type { ViewTransitionProps } from "react";

export const NAV_FORWARD = "nav-forward";
export const NAV_BACK = "nav-back";
export const PROJECT_FILTER = "project-filter";

const PROJECTS_TITLE_TRANSITION = "projects-title";
const SITE_NAME_TRANSITION = "site-name";

export const siteNameTransition = {
  name: SITE_NAME_TRANSITION,
  share: { [NAV_FORWARD]: "morph", [NAV_BACK]: "morph", default: "none" },
  default: "none",
} satisfies ViewTransitionProps;

export const projectsTitleTransition = {
  name: PROJECTS_TITLE_TRANSITION,
  share: { [NAV_FORWARD]: "morph", default: "none" },
  default: "none",
} satisfies ViewTransitionProps;

export const filterItemTransition = {
  enter: { [PROJECT_FILTER]: "filter-enter", default: "none" },
  exit: { [PROJECT_FILTER]: "filter-exit", default: "none" },
  update: { [PROJECT_FILTER]: "filter-move", default: "none" },
  default: "none",
} satisfies ViewTransitionProps;

export function toTransitionName(prefix: string, value: string) {
  const slug = value
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");

  return `${prefix}-${slug}`;
}
