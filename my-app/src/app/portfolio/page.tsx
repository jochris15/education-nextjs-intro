type ProductType = {
    id: number,
    thumbnail: string,
    title: string,
    description: string
}


export default async function Portfolio() {
    const response = await fetch('https://dummyjson.com/products')
    const { products }: { products: ProductType[] } = await response.json()

    return (
        <>
            <main className="grid grid-cols-3 gap-10 py-20">
                {products.map((product) => {
                    return (
                        <>
                            <div className="card glass w-96">
                                <figure>
                                    <img
                                        src={product.thumbnail}
                                        alt="product!" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </main>
        </>
    )
}