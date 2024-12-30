import "./globals.css";

export const metadata = {
  title: "nasiri",
  description:
    "خدمات قانونية شاملة تشمل استشارات الشركات، التمثيل القضائي، القضايا العمالية، القضايا الجنائية، فض النزاعات، الملكية الفكرية، الأحوال الشخصية وخدمات الشركات. نخبة من المحامين والمستشارين القانونيين في خدمتكم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
