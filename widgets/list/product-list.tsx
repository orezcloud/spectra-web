import AnimImageWrap from '../anim-image-wrap';


export default function ProductList({products}: {products: ProductListItemProps[]}) {
    return (
        <div>
            {
                products.map((product, index) => (
                    <ProductListItem
                        key={index}
                        {...product}
                        noborder={index === products.length - 1}
                    />
                ))
            }
        </div>
    );
}

interface ProductListItemProps {
    image: string,
    title: string,
    description: string | string[],
    noborder?: boolean
}

function ProductListItem({image, title, description, noborder}: ProductListItemProps) {
    return (
        <div className={'product-list-item js-anim u-fade'}>
            <div className="row">
                <div className="col-12 col-lg-4 col-xxl-3 order-1 order-lg-0 mt-4">
                    <AnimImageWrap children={<img src={image} alt={title}/>}/>
                </div>
                <div className="col-12 col-lg-8 col-xxl-9 align-self-center ps-xl-6">
                    <h3 className={'mt-0 mb-4'}>{title}</h3>
                    {
                        typeof description === 'string' ?
                            <p className={'mb-0'}>{description}</p> :
                            description.map((desc, index) => (
                                <p key={index} className={
                                    index === description.length - 1 ? 'mb-0' : ''
                                }>{desc}</p>
                            ))
                    }
                </div>
            </div>

            <style jsx>
                {`
                  .product-list-item {
                    padding: 40px 0;
                    border-bottom: ${noborder ? 0 : 1}px solid #eaeaea;
                  }
                `}
            </style>
        </div>
    );
}
