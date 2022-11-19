export default function ServiceList({services}: {services: ServiceListItemProps[]}) {
    return (
        <div>
            {
                services.map((product, index) => (
                    <ServiceListItem
                        key={index}
                        {...product}
                    />
                ))
            }
        </div>
    );
}

interface ServiceListItemProps {
    image: string,
    title: string,
    description: string
}

function ServiceListItem({image, title, description}: ServiceListItemProps) {
    return (
        <div className={'service-list-item'}>
            <div className="row">
                <div className="col-12 col-lg-3 order-1 order-lg-0">
                    <img src={image} alt={title}/>
                </div>
                <div className="col-12 col-lg-9 align-self-center">
                    <h3>{title}</h3>
                    <p className={'mb-0'}>{description}</p>
                </div>
            </div>

            <style jsx>
                {`
                  .product-list-item {
                    padding: 20px 0;
                  }
                `}
            </style>
        </div>
    );
}
