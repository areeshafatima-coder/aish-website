import { collections } from "@/lib/data";
import CollectionGrid from "@/components/home/CollectionGrid";
import TrustStrip from "@/components/home/TrustStrip";

export const metadata = {
  title: "Collections",
  description: "Explore Aish luxury pret, festive, formal and bridal collections. UK & US delivery.",
};

export default function CollectionsPage() {
  return (
    <>
      <main className="page-main">
        <section className="section section-collections">
          <div className="container">
            <div className="page-header">
              <span className="section-tag">Curated</span>
              <h1>Shop by Collection</h1>
              <p>Explore our luxury pret, festive, formal and bridal collections.</p>
            </div>
            <CollectionGrid collections={collections} />
          </div>
        </section>
      </main>
      <TrustStrip />
    </>
  );
}
