export default function PostImage({src, alt}: {src: string, alt?: string}) {
    return (
        <div className={'image'}>
            <img src={src} alt={alt || ''}/>
            <style jsx>
                {`
                  .image {
                    width: 110%;
                    height: 100%;
                    left: -5%;
                    overflow: hidden;
                  }

                  .image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                `}
            </style>
        </div>
    );
}
