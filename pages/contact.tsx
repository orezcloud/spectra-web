import Body from '../layouts/body';
import MiniSlider from '../widgets/mini-slider/mini-slider';


export default function Contact() {


    return (
        <Body>
            <div>
                <MiniSlider
                    imageUrls={[
                        '/hero/hero-1.jpg',
                        '/hero/hero-2.jpg',
                    ]}
                    size={'full'}
                />
            </div>
        </Body>
    );
}
