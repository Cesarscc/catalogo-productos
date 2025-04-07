import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {} from 'lucide-react';
import WsppIcon from '@/assets/WsppIcon';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={'/images/31343C.svg'}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="pt-4 flex-grow">
        <Badge variant="outline" className="mb-2">
          {product.category}
        </Badge>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="text-sm text-muted-foreground">
          Marca: {product.brand}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
        <a
          href={`https://wa.me/51999999999?text=Hola, estoy interesado en: ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-2 items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md text-sm"
        >
          <WsppIcon />
          Cotizar
        </a>
      </CardFooter>
    </Card>
  );
}
