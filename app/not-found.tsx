import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-main" style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
      <div className="container">
        <h1 className="page-header" style={{ marginBottom: "1rem" }}>Page not found</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </main>
  );
}
