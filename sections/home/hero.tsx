import {DefaultSection} from '../../layouts/section-layouts';
import {IS_DEVELOPMENT, } from '../../lib/env';


export default function HomeHero() {
    return (
        <DefaultSection name={'hero'} width={'full'} padding={'none'}>
            <div onClick={() => {
                // scroll to bottom of page
                if (!IS_DEVELOPMENT) {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            }}>
                <img
                    src={'/hero/hero1.jpg'}
                    alt={'hero'}
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',

                    }}
                />
            </div>
        </DefaultSection>
    );
}
