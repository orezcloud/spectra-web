import DefaultPostLayout from '../../layouts/default-post-layout';


export default function GasGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Gas Generators</h1>
                    </div>
                ),
            ]}
            name={'gas-generator'}
            heroProps={{
                title: 'Gas Generator',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    )
}
