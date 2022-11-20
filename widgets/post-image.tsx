export default function PostImage({src, alt, footnote}: {src: string, alt?: string, footnote?: string}) {
    return (
        <div className={'image'}>
            <img src={src} alt={alt || ''}/>
            {
                footnote &&
                <p className={'mt-2'}>{footnote}</p>
            }
            <style jsx>
                {`
                  .image {
                    width: 110%;
                    height: 100%;
                    left: -5%;
                    overflow: hidden;
                    margin-bottom: 60px;
                    margin-top: 50px;
                  }

                  .image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                `}
            </style>
        </div>
    );
}
