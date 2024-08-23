import { ProductType } from "@/types"
import Link from "next/link"

export default async function DetailProduct({ params }: { params: { id: number } }) {
    const { id } = params
    const response = await fetch(`https://dummyjson.com/products/${id}`, { cache: 'no-store' })
    const product: ProductType = await response.json()

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="card bg-base-100 w-4/5">
                    <div className="card-actions justify-start">
                        <Link href='/products' className="btn btn-primary">Back to Products</Link>
                    </div>
                    <figure>
                        <img
                            src={product.thumbnail}
                            alt="product" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {product.title}
                        </h2>
                        <div className="flex flex-row gap-2">
                            <div className="badge badge-outline">{product.category}</div>
                            <p className="text-green-600">${product.price}</p>
                        </div>
                        <div className="divider"></div>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}