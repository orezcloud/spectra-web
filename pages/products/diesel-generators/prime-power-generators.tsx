import DefaultPostLayout from '../../../layouts/default-post-layout';


export default function Solutions() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>Prime Power Generators</h1>
                    </div>
                ),
            ]}
            name={'prime-power-generators'}
            heroProps={{
                title: 'Prime Power Generators',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
