import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/type";

export default async function Products() {
    const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' })
    const { products }: { products: ProductType[] } = await response.json()

    console.log(products);

    return (
        <>
            <div className="mt-8">
                {/* Main Product */}
                <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                    <main className="my-8 bg-white grid grid-cols-4 gap-5">
                        {products.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })}
                    </main>
                </div>
            </div>
        </>
    )
}