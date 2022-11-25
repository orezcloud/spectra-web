import Slider, {Settings} from '@ant-design/react-slick';
import {ReactNode} from 'react';


type CarouselProps = {
    items: readonly ReactNode[],
    prevArrow?: ReactNode,
    nextArrow?: ReactNode,
}

export default function ModalSlick(props: CarouselProps) {

    const settings: Settings = {
        infinite: false,
        arrows: true,
        dots: false,
        speed: 700,
        slidesToShow: 5,
        // slidesToScroll: 1,
        autoplay: false,
        prevArrow: (
            <div>
                {props.prevArrow}
            </div>
        ),
        nextArrow: (
            <div>
                {props.nextArrow || props.prevArrow}
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <div className={'modal-slick'} style={{
            width: '100%',
        }}>
            <Slider {...settings}>
                {
                    props.items.map((value, index) =>
                        <div key={index} className={'modal-slick-item'}>
                            {value}
                        </div>,
                    )
                }
            </Slider>
        </div>
    );
}
