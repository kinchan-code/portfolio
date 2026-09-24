/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react"],
    // Tailwind CSS is small (~10KiB); inlining removes the render-blocking CSS chain for first visits / PSI.
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
