import { Header } from "@/components/public/layout/Header";
import { HeaderSpacer } from "@/components/public/layout/HeaderSpacer";
import { Footer } from "@/components/public/layout/Footer";
import { StickyMobileCta } from "@/components/public/layout/StickyMobileCta";
import { MobileMenuProvider } from "@/components/public/layout/MobileMenuContext";
import { buildLocalBusinessSchema, buildWebsiteSchema } from "@/lib/schema/local-business";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <MobileMenuProvider>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Header />
          <HeaderSpacer />
          <main className="flex-1 pb-20 lg:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
        </div>
      </MobileMenuProvider>
    </>
  );
}
