import {DefaultSection} from '../../layouts/wrap-sections';


export default function Hero() {
    return (
        <DefaultSection name={'hero'} width={'full'} padding={'none'}>
            <div onClick={() => {
                // scroll to bottom of page
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                });
            }}>
                <img
                    src={'/hero/hero1.jpg'}
                    alt={'hero'}
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </DefaultSection>
    );
}
