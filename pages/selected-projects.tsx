import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        
                    </div>
                ),
            ]}
            name={'selected-projects'}
            heroProps={{
                title: 'Selected Projects',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}