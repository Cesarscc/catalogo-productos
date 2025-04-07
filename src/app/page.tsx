import ProductCatalog from '@/components/product-catalog';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
        <ProductCatalog />
      </div>
    </main>
  );
}
