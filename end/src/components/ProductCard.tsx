import { ProductType } from "@/types"
import Link from "next/link"

export default function ProductCard({ product }: { product: ProductType }) {
    return (
        <div className="card bg-base-300 w-96 shadow-xl mt-5">
            <figure>
                <img
                    src={product.thumbnail}
                    alt="Product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                </h2>
                <div className="badge badge-outline">{product.category}</div>
                <div className="divider"></div>
                <p className="text-green-600 text-2xl">${product.price}</p>
                <div className="card-actions justify-end">
                    <Link href={`/products/${product.id}`} className="btn btn-primary">Learn More!</Link>
                </div>
            </div>
        </div >
    )
}