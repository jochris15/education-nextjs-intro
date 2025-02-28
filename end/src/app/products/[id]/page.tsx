import { ProductType } from "@/type"
import Link from "next/link"

export default async function DetailProduct({ params }: { params: { id: number } }) {
    const { id } = params
    const response = await fetch(`https://dummyjson.com/products/${id}`, { cache: 'no-store' })
    const product: ProductType = await response.json()

    return (
        <>
            <div className="flex flex-start bg-red-400 border-2 border-black p-5 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full mt-10">
                <div>
                    <img
                        src={product.thumbnail}
                        alt="product image"
                        className="border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full"
                    />
                </div>
                <div className="flex mx-10 flex-col w-1/2 justify-between">
                    <b className="text-4xl mb-5">
                        {product.title}
                    </b>
                    <p className="h-full">
                        {product.description}
                    </p>
                    <div>
                        <Link href="/products" >
                            <button className="bg-white border-2 border-black p-2 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] w-40">Back</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}