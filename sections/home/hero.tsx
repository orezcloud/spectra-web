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
                    '/hero/hero-1.jpg',
                    '/hero/hero-2.jpg',
                    '/hero/hero-3.jpg',
                ]} size={'full'}/>

            </div>
        </DefaultSection>
    );
}
