import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Generated by create next app",
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
