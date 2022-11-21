import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h2>Our CultureS</h2>
                        <p>At PowerLink, our people are the key to our success. We continue to grow and succeed thanks to the talent, dedication and hard work of our team. That’s why we choose to invest in our team by providing an environment where we work together to achieve our goals and each employee directly contributes to the success of PowerLink.
</p>
<h2>Diversity and Inclusion </h2>
<p>As part of a global organisation, we believe in embracing diversity and inclusion within our team. Everybody is unique and we value the diverse experiences that each employee brings to the team.
</p>
<h2>Current Opportunities</h2>
<p>We are always on the lookout for talented individuals to join the PowerLink team. If you are interested in joining us, please email us through your resume to careers@powerlinkworld.com.au.
<br></br><br></br>We will keep your resume in our  records and will contact you as soon as we have the right position for you.</p>
                    </div>
                ),
            ]}
            name={'about'}
            heroProps={{
                title: 'Careers',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}