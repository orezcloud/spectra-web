import DefaultPostLayout from '../../../layouts/default-post-layout';
import PostImage from '../../../widgets/post-image';
import UlList from '../../../widgets/list/ul-list';
import ProductList from '../../../widgets/list/product-list';


export default function Solutions() {
    return (
        <DefaultPostLayout
            name={'prime-power-generators'}
            heroProps={{
                title: 'Prime Power',
                subtitle: 'Diesel Generators',
                image: '/images/hero/hero-3.jpg',
                topTitle: 'Product',
            }}
            isPreFooter={true}
            Elements={[
                () => (
                    <div>
                        <h2>Prime Power Generators</h2>
                        <p>Spectra open type diesel standby generators are perfect to perform in both prime mode and
                            standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design
                            of Spectra open type gensets are typically for projects with generator rooms with noise
                            isolation materials built in. Past projects for open types consist of but not limited to
                            factories, shopping centres, commercial buildings, hotels, airports, and power stations to
                            grid supply.</p>
                        <PostImage src={'/images/page/1.jpg'} footnote={'Image are for illustrative purpose only.'}/>
                        <h3>Features</h3>
                        <UlList list={[
                            'Spectra open type',
                            'Prime power rating',
                            'Standby power rating',
                            'Power range from 6KVA to 3250KVA',
                        ]}/>
                    </div>
                ),
                () => (
                    <div>
                        <h2>Prime Power Diesel Generators</h2>
                        <ProductList products={[
                            {
                                title: 'Prime Power Diesel Generators',
                                image: '/images/page/1.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Prime Power Diesel Generators',
                                image: '/images/page/1.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Prime Power Diesel Generators',
                                image: '/images/page/1.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Prime Power Diesel Generators',
                                image: '/images/page/1.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
        />
    );
}
