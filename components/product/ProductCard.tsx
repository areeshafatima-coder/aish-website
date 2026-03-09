import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={533}
          loading="lazy"
          quality={95}
          sizes="(max-width: 700px) 50vw, 25vw"
        />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="quick-view">Quick view</span>
      </Link>
      <div className="product-info">
        <span className="product-fabric">{product.category}</span>
        <h3>
          <Link href={`/products/${product.slug}`}>{product.title}</Link>
        </h3>
        <p className="price">{product.price}</p>
      </div>
    </article>
  );
}
