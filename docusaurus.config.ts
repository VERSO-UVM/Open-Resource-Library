import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
const config = {
  title: "VERSO Open Resource Library",
  tagline: "Learn, explore, and create open source practices.",
  favicon:
    "https://verso.w3.uvm.edu/wp-content/uploads/2023/08/cropped-Logo_verso2-1-1-192x192.png",

  url: "https://openresourcelibrary.com",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "VERSO-UVM",
  projectName: "Open-Resource-Library",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Required for language metadata, not actually internationalized
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/VERSO-UVM/Open-Resource-Library",
        },
        blog: false,
        pages: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "Open Resource Library",
      logo: {
        alt: "VERSO Logo",
        src: "https://verso.w3.uvm.edu/wp-content/uploads/2023/08/cropped-Logo_verso2-1-1-192x192.png",
      },
      items: [
        {
          href: "https://verso.w3.uvm.edu",
          label: "VERSO Website",
          position: "right",
        },
        {
          href: "https://github.com/VERSO-UVM/Open-Resource-Library",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
} satisfies Config;

export default config;
