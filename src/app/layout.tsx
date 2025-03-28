import type { Metadata } from "next";
import "@/styles/index.scss";
// import AuthWrapper from "@/components/common/AuthWrapper";
import { auth } from "@/config/firebase";
import AuthWrapper from "@/components/common/AuthWrapper";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Tracking Multi",
  description: "Tracking Multiple project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>{children}</AuthWrapper>
        {/* {children} */}
      </body>
    </html>
  );
}
