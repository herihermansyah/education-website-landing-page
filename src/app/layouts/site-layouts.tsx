import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import React from "react";

function SiteLayouts({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-cream">
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer className="bg-cream">
        <Footer />
      </footer>
    </div>
  );
}

export default SiteLayouts;
