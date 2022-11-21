import Link from 'next/link';
import AnimLink from '../../lib/anim-link';
import AnimImageWrap from '../../widgets/anim-image-wrap';


export interface CategoryCardProps {
    name: string;
    description: string;
    image: string;
    url: string;
}

export function CategoryCard({name, description, image, url}: CategoryCardProps) {
    return (
        <div className={'category-card p-4 u-fade js-anim u-hover'}>
            <AnimLink href={url}>
                <div className="row">
                    <div className="col-3">
                        {/*<img src={image} alt={name}/>*/}
                        <AnimImageWrap children={<img src={image} alt={name}/>}/>
                    </div>
                    <div className="col-9 align-self-center">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </AnimLink>

            <style jsx>
                {`
                  .category-card {
                    background-color: white;
                    border-radius: 2px;
                    display: inline-block;
                    transition: all .5s ease-in-out;
                    width:  100%;
                  }

                  h3 {
                    font-family: Spectral, Noto Sans, serif;
                    text-transform: uppercase;
                    margin-bottom: 2px;
                  }

                  p {
                    font-family: Noto Sans, serif;
                    font-size: 14px;
                    font-weight: 700;
                  }


                  .category-card:hover {
                    box-shadow: 0 1px 8px rgb(94 99 97 / 50%);
                    opacity: .5;
                  }

                  img {
                    width: 200px;
                  }
                `}
            </style>
        </div>
    );
}
