import { ProductType } from "@/types";
import ProductCard from "@/components/ProductCard";

export default async function Products() {
    const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' })
    const { products }: { products: ProductType[] } = await response.json()

    return (
        <>
            <div className="grid grid-cols-3 gap-6 px-20 py-10">
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}

            </div>
        </>
    )
}