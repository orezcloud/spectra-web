import {useEffect, useState} from 'react';
import {sleep} from '../lib/utils';


let stopLoop = false;
export default function Test() {

    const [heroImage, setHeroImage] = useState<{
        url: string;
        className: string;
        id: string;
    }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<{
        url: string;
        id: string;
    }[]>([]);

    const init = async () => {

        // set images
        const resImages = await getImages();
        let images = resImages.map((image, index) => ({
            url: image.url,
            id: String(index + 1),
        }));
        setImages(images);

        await sleep(1000);

        console.log('images', images);

        // set first hero image
        setHeroImage([{
            url: images[0].url,
            className: 'zoom-in',
            id: images[0].id,
        }]);

        // add zoom-in class to first hero image
        // setHeroImage([{
        //     url: images[0].url,
        //     className: 'zoom-in',
        //     id: images[0].id,
        // }]);

        // set ID to 0
        // setIndex(0);

        while (true) {
            await sleep(5000);
            await loopFunc();
            if (stopLoop) {
                break;
            }
        }
    };


    const loopFunc = async () => {
        // push next id image
        if (currentIndex < images.length - 1) {
            setHeroImage([
                ...heroImage,
                {
                    url: images[currentIndex + 1].url,
                    className: 'zoom-in',
                    id: images[currentIndex + 1].id,
                }]);
            setCurrentIndex(currentIndex + 1);
        } else {
            setHeroImage([{
                url: images[0].url,
                className: 'zoom-in',
                id: images[0].id,
            }]);
            setCurrentIndex(0);
        }

        await sleep(500);

        // add class leave to first image
        setHeroImage((prev) => {
            return prev.map((image, index) => {
                if (index === 0) {
                    return {
                        ...image,
                        className: image.className + 'leave',
                    };
                }
                return image;
            });
        });

        await sleep(500);
        // add class zoom-in to second image
        setHeroImage((prev) => {
            return prev.map((image, index) => {
                if (index === 1) {
                    return {
                        ...image,
                        className: 'zoom-in',
                    };
                }
                return image;
            });
        });

        await sleep(500);

        // remove first image
        setHeroImage((prev) => {
            return prev.slice(1);
        });

        // await sleep(500);
        // set next id
        // setCurrentIndex((prev) => {
        //     if (prev === images.length - 1) {
        //         return 0;
        //     }
        //     return prev + 1;
        // });
    };

    useEffect(() => {
        init();
        return () => {
            stopLoop = true;
        };
    }, []);


    return (
        <div>
            {
                heroImage.map((image) => {
                    return (
                        <img
                            key={image.id}
                            src={image.url}
                            className={image.className}
                        />
                    );
                })
            }
        </div>
    );
}

async function getImages() {
    const images: {
        url: string;
    }[] = [];
    for (let i = 1; i <= 3; i++) {
        images.push({
            url: `/hero/hero-${i}.jpg`,
        });
    }
    return images;
}
