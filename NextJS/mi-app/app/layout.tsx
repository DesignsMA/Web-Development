import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DB Studio",
  description: "Gestión de base de datos empresarial",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0e0f11", overflow: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
