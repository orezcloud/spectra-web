import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, P} from '../widgets/comps/text';
import {useEffect} from 'react';
import {globalState} from '../state/global';
import UlList from '../widgets/list/ul-list';


export default function CookiePolicy() {

    useEffect(() => {
        globalState.cookieDisableForce = true;

        return () => {
            globalState.cookieDisableForce = false;
        };
    }, []);

    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            Cookie Policy - Spectra Power Solutions
                        </title>
                        <H2 style={{
                            textAlign: 'center',
                        }}><b>Cookie Policy</b></H2>

                        <P>
                            Our website uses cookies for the purpose of distinguishing you from other users of our
                            website. This helps in providing you with a good experience when you browse our website and
                            also allows us to improve our site. By accepting, you agree to our use of cookies.
                        </P>
                        <P>
                            A cookie is a small file of letters and numbers that we store on your browser or the hard
                            drive of your computer, if you agree. Cookies contain information that is transferred to
                            your computer's hard drive.
                        </P>
                        <P>
                            We use the following cookies:
                        </P>
                        <UlList list={[
                            'Strictly necessary cookies - These are cookies that are required for the operation of our website. They include, for example, cookies that enable your browsing session to work smoothly. ',
                            'Analytical/performance cookies - These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.',
                            'Functionality cookies - These cookies are used to recognise you when you return to our website. This enables us to personalise our content for you and remember your preferences (for example, your choice of language or region).',
                            'Targeting cookies - These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.',
                        ]}/>

                        <P>
                            Please note that third parties (including, for example, advertising networks and providers
                            of external services like web traffic analysis services) may also use cookies, over which we
                            have no control. These cookies are likely to be analytical/performance cookies or targeting
                            cookies.
                        </P>
                        <P>
                            You block cookies by activating the setting on your browser that allows you to refuse the
                            setting of all or some cookies. However, if you use your browser settings to block all
                            cookies
                            (including essential cookies) you may not be able to access all or parts of our site.
                        </P>
                    </div>
                ),
            ]}
            name={'cookie'}
            heroProps={{
                title: 'Cookie Policy',
                subtitle: 'Last updated: 2022-12-22',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
