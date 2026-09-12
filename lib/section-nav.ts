export interface SectionNavItem {
  id: string;
  label: string;
}

/** Mark homepage section anchors with this attribute so the nav can discover them. */
export const SECTION_NAV_ATTR = "data-section-nav";

/** Keep in sync with `--section-nav-offset` in `app/globals.css`. */
const SECTION_NAV_OFFSET_VAR = "--section-nav-offset";

const FALLBACK_OFFSET_PX = 64;

function readSectionLabel(element: HTMLElement) {
  const heading = element.querySelector("h2");
  return (
    element.dataset.navLabel?.trim() ||
    heading?.textContent?.trim() ||
    element.id
  );
}

export function readSectionNavItems(
  root: ParentNode = document
): SectionNavItem[] {
  return [...root.querySelectorAll<HTMLElement>(`[${SECTION_NAV_ATTR}][id]`)]
    .map((element) => ({
      id: element.id,
      label: readSectionLabel(element),
    }))
    .filter((section) => section.id.length > 0 && section.label.length > 0);
}

/** Resolve the shared nav offset to CSS pixels (matches section `scroll-margin-top`). */
export function readSectionNavOffsetPx(
  root: HTMLElement = document.documentElement
): number {
  const raw = getComputedStyle(root).getPropertyValue(SECTION_NAV_OFFSET_VAR).trim();
  const value = Number.parseFloat(raw);

  if (!Number.isFinite(value)) {
    return FALLBACK_OFFSET_PX;
  }

  if (raw.endsWith("rem")) {
    const rootFontSize = Number.parseFloat(getComputedStyle(root).fontSize);
    return value * (Number.isFinite(rootFontSize) ? rootFontSize : 16);
  }

  return value;
}

function isPageScrolledToEnd(tolerancePx = 2): boolean {
  const scrollingElement = document.scrollingElement ?? document.documentElement;
  const maxScroll = Math.max(
    0,
    scrollingElement.scrollHeight - scrollingElement.clientHeight
  );

  return window.scrollY >= maxScroll - tolerancePx;
}

function isSectionPastOffset(section: SectionNavItem, offsetPx: number) {
  const element = document.getElementById(section.id);
  if (!element) {
    return false;
  }

  return element.getBoundingClientRect().top - offsetPx <= 0;
}

function findActiveSectionFromOffset(
  sections: SectionNavItem[],
  offsetPx: number
) {
  let activeId = "";

  for (const section of sections) {
    if (isSectionPastOffset(section, offsetPx)) {
      activeId = section.id;
    }
  }

  return activeId;
}

/**
 * Active section rules:
 * 1. At the page end → last section (handles short Contact).
 * 2. Otherwise → last section whose top has crossed the shared offset line.
 * 3. Above the first section (hero) → none.
 */
export function readActiveSectionId(
  sections: SectionNavItem[],
  offsetPx = readSectionNavOffsetPx()
): string {
  const lastSection = sections.at(-1);
  if (!lastSection) {
    return "";
  }

  if (isPageScrolledToEnd()) {
    return lastSection.id;
  }

  return findActiveSectionFromOffset(sections, offsetPx);
}
