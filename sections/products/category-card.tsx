import AnimLink from '../../lib/anim-link';
import AnimImageWrap from '../../widgets/anim-image-wrap';
import {base} from '../../styles/consts';


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
                <a href={url}>
                    <div className="row w-100">
                        <div className="img-col col-3 d-flex align-items-center">
                            <AnimImageWrap children={<img src={image} alt={name}/>}/>
                        </div>
                        <div className="col-9 align-self-center">
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </a>
            </AnimLink>

            <style jsx>
                {`
                  .img-col {
                      //min-width: 140px;
                  }

                  .category-card {
                    background-color: white;
                    border-radius: 2px;
                    display: inline-block;
                    transition: all .5s ease-in-out;
                    width: 100%;
                    height: 100%;

                    a {
                      display: flex;
                      height: 100%;
                      width: 100%;
                      //justify-content: center;
                      align-items: center
                    }
                  }

                  h3 {
                    font-family: Spectral, Noto Sans, serif;
                    font-size: ${base(1.3)};
                    letter-spacing: 0;
                    text-transform: uppercase;
                    margin-bottom: 2px;
                  }

                  p {
                    //font-family: Noto Sans, serif;
                    font-size: 15px;
                    font-weight: 500;
                    color: black;
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
