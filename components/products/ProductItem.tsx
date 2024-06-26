import { Products } from '@/lib/models/ProductModel';
import { formatRupiah } from '@/lib/util';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }: { product: Products }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-over h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex item-center justify-between">
          <span className="text-2xl">{formatRupiah(product.price)}</span>
        </div>
      </div>
    </div>
  );
}
