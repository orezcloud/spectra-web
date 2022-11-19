import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h1>About</h1>
                    </div>
                ),
            ]}
            name={'about'}
            heroProps={{
                image: '/images/hero/hero-2.jpg',
                title: 'Support',
                subtitle: 'We are here to help you',
            }}
        />
    );
}
