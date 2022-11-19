export interface CategoryCardProps {
    name: string;
    description: string;
    image: string;
    url: string;
}

export function CategoryCard({name, description, image, url}: CategoryCardProps) {
    return (
        <div className={'category-card p-4'}>
            <a href={url}>
                <div className="row">
                    <div className="col-3">
                        <img src={image} alt={name}/>
                    </div>
                    <div className="col-9 align-self-center">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </a>

            <style jsx>
                {`
                  .category-card {
                    background-color: white;
                    display:  inline-block;
                  }


                  img {
                    width: 200px;
                  }
                `}
            </style>
        </div>
    );
}
