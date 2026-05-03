import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Compatibility Enforcer — Test Pale Moon, Waterfox & Niche Browsers",
  description: "Automated browser compatibility testing across Pale Moon, Waterfox, and legacy browsers. Get detailed reports, screenshots, and actionable fixes for $39/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c6ca5014-4745-4ed3-9726-e3278ec355bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
