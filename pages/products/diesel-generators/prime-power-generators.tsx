import DefaultPostLayout from '../../../layouts/default-post-layout';
import PostImage from '../../../widgets/post-image';


export default function Solutions() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Prime Power Generators</h1>
                        <p>Spectra open type diesel standby generators are perfect to perform in both prime mode and
                            standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design
                            of Spectra open type gensets are typically for projects with generator rooms with noise
                            isolation materials built in. Past projects for open types consist of but not limited to
                            factories, shopping centres, commercial buildings, hotels, airports, and power stations to
                            grid supply.</p>
                        <PostImage src={'/images/page/1.jpg'}/>
                        {/*<img src="/images/page/1.jpg" alt=""/>*/}
                    </div>
                ),
            ]}
            name={'prime-power-generators'}
            heroProps={{
                title: 'Prime Power Generators',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
                topTitle: 'Product',
            }}
        />
    );
}
