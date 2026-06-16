/**
 * Prepends the configured basePath to an absolute public-folder path.
 *
 * Why: Next.js auto-applies `basePath` for `next/link` but not for `next/image`
 * (see node_modules/next/dist/docs/.../basePath.md). Without this helper,
 * `<Image src="/foo.png" />` resolves to `/foo.png` even when the app is
 * deployed under `/OxEco`, breaking images on GitHub Pages.
 *
 * Usage:
 *   <Image src={withBasePath("/challenges/img1.png")} ... />
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path) return path;
  // Pass through absolute URLs and data URIs untouched.
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }
  if (!BASE_PATH) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
