import Footer from "@/components/Footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "믹스(Mix) - 마케팅 인사이트 미디어",
  description: "마케팅 인사이트가 돋보이는 콘텐츠를 엄선하여 소개합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
