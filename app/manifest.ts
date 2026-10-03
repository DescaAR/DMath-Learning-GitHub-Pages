import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: basePath + "/",
    display: "standalone",
    background_color: "#F3F7FB",
    theme_color: "#0B2D6B",
    lang: siteConfig.language,
    icons: [
      {
        src: basePath + "/brand/logo-symbol.webp",
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
