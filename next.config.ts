import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // required: default image optimizer needs a server
  trailingSlash: true,           // each route -> /route/index.html; Apache serves folders cleanly
};

export default nextConfig;
