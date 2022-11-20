export default function ProductList({products}: {products: ProductListItemProps[]}) {
    return (
        <div>
            {
                products.map((product, index) => (
                    <ProductListItem
                        key={index}
                        {...product}
                    />
                ))
            }
        </div>
    );
}

interface ProductListItemProps {
    image: string,
    title: string,
    description: string
}

function ProductListItem({image, title, description}: ProductListItemProps) {
    return (
        <div className={'product-list-item'}>
            <div className="row">
                <div className="col-12 col-lg-3 order-1 order-lg-0 mt-4">
                    <img src={image} alt={title}/>
                </div>
                <div className="col-12 col-lg-9 align-self-center ps-lg-7">
                    <h3 className={'mt-0 mb-4'}>{title}</h3>
                    <p className={'mb-0'}>{description}</p>
                </div>
            </div>

            <style jsx>
                {`
                  .product-list-item {
                    padding: 40px 0;
                    border-bottom: 1px solid #eaeaea;
                  }
                `}
            </style>
        </div>
    );
}
