'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { brands, categories, products } from '@/lib/products';
import { useState, useEffect } from 'react';

interface ProductFilterProps {
  selectedBrands: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onBrandChange: (brand: string) => void;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export function ProductFilter({
  selectedBrands,
  selectedCategories,
  priceRange,
  onBrandChange,
  onCategoryChange,
  onPriceRangeChange,
}: ProductFilterProps) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Encontrar el precio mínimo y máximo de todos los productos
  useEffect(() => {
    const prices = products.map((product) => product.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Filtros</h2>
      <Accordion
        type="multiple"
        defaultValue={['price', 'brands', 'categories']}
        className="w-full"
      >
        <AccordionItem value="price">
          <AccordionTrigger>Rango de Precio</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2 px-1">
              <div className="flex justify-between mb-2">
                <div className="text-sm">
                  <span className="font-semibold">${priceRange[0]}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">${priceRange[1]}</span>
                </div>
              </div>

              {/* Implementación personalizada del slider con bolitas visibles en ambos extremos */}
              <div className="relative py-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-1 w-full bg-slate-200 rounded"></div>
                </div>
                <div
                  className="absolute inset-0 flex items-center"
                  style={{
                    left: `${
                      ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100
                    }%`,
                    right: `${
                      100 -
                      ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100
                    }%`,
                  }}
                >
                  <div className="h-1 w-full bg-primary rounded"></div>
                </div>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) =>
                    onPriceRangeChange([
                      Number.parseInt(e.target.value),
                      priceRange[1],
                    ])
                  }
                  className="absolute w-full appearance-none bg-transparent pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceRangeChange([
                      priceRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="absolute w-full appearance-none bg-red pointer-events-none focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brands">
          <AccordionTrigger>Marcas</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => onBrandChange(brand)}
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="categories">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
