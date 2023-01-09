import {DefaultSection} from '../../layouts/section-layouts';
import {IS_DEVELOPMENT} from '../../lib/env';
import MiniSlider from '../../widgets/mini-slider/mini-slider';


export default function HomeHero() {

    return (
        <DefaultSection name={'hero'} width={'full'} padding={'none'}>
            <div onClick={() => {
                if (!IS_DEVELOPMENT) {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            }}>
                <MiniSlider imageUrls={[
                    '/images/hero2/Picture-1.jpg',
                    '/images/hero2/Picture-2.jpg',
                    '/images/hero2/Picture-3.jpg',
                    '/images/hero2/Picture-4.jpg',
                    '/images/hero2/Picture-5.jpg',
                ]} size={'full'}/>
            </div>
        </DefaultSection>
    );
}
