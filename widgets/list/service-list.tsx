import AnimImageWrap from '../anim-image-wrap';


export default function ServiceList({services}: {services: ServiceListItemProps[]}) {
    return (
        <div>
            {
                services.map((service, index) => (
                    <ServiceListItem
                        key={index}
                        {...service}
                        noborder={index === services.length - 1}
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
    noborder?: boolean
}

function ServiceListItem({image, title, description, noborder}: ServiceListItemProps) {
    return (
        <div className={'service-list-item js-anim u-fade'}>
            <div className="row">
                <div className="col-12 col-lg-3 order-1 order-lg-0 mt-4">
                    <AnimImageWrap children={<img src={image} alt={title}/>}/>
                    {/*<img src={image} alt={title}/>*/}
                </div>
                <div className="col-12 col-lg-9 align-self-center ps-lg-7">
                    <h3 className={'mt-0 mb-4'}>{title}</h3>
                    <p className={'mb-0'}>{description}</p>
                </div>
            </div>

            <style jsx>
                {`
                  .service-list-item {
                    padding: 40px 0;
                    //border-bottom: 1px solid #eaeaea;
                    border-bottom: ${noborder ? 0 : 1}px solid #eaeaea;
                  }
                `}
            </style>
        </div>
    );
}
