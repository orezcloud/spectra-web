import DefaultPostLayout from '../../layouts/default-post-layout';


export default function HybridGenerator() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Hybrid Generator</h1>
                    </div>
                ),
            ]}
            name={'hybrid-generator'}
            heroProps={{
                title: 'Hybrid Generator',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    )
}
