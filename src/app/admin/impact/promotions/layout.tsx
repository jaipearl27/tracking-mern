import type { Metadata } from "next";
import "@/styles/index.scss";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Promotions",
    description: "Generated by create next app",
};

export default function PromotionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Suspense>{children}</Suspense>
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 1500 }}
            />
        </>
    );
}
