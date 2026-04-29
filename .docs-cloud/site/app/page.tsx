import Link from "next/link";

const title = "Better Call";
const description = "Better call is a tiny web framework for creating endpoints that can be invoked as a normal function or mounted to a router to be served by any web standard compatible server (like Bun, node, nextjs, sveltekit...) and also includes a typed RPC client for typesafe client side invocation of these endpoints.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Author markdown in <code>docs/</code> and <code>api-reference/</code>.</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
