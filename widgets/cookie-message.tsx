import React, {useEffect} from 'react';
import {DefaultSection} from '../layouts/section-layouts';
import {proxy, useSnapshot} from 'valtio';


const state = proxy({
    isAccepted: true,
});
function setCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name: string) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


export default function CookieMessage() {
    // const [isAccepted, setIsAccepted] = useState(false);
    const {isAccepted} = useSnapshot(state);

    useEffect(() => {
        if (getCookie('cookie-accepted') === 'true') {
            state.isAccepted = true;
        } else {
            state.isAccepted = false;
        }
    })

    if (isAccepted) {
        return null;
    }

    return (
        <>
            <div className={'website-block'}/>
            <div
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0)',
                    color: 'white',
                    padding: '1rem',
                    zIndex: 9999,
                }}
            >
                <DefaultSection name={'cookie'} padding={'none'}>
                    <div className={'sww'}>
                        <p>
                            This website uses cookies to improve your experience. By continuing to
                            use this website, you consent to the use of cookies.
                        </p>
                        <button
                            onClick={
                                () => {
                                    state.isAccepted = true;
                                    setCookie('cookie-accepted', 'true', 365);
                                }
                            }
                            style={{}}
                        >
                            Accept
                        </button>
                    </div>
                </DefaultSection>
            </div>

            <style jsx>
                {`
                  button {
                    background-color: white;
                    color: black;
                    padding: 0.5rem 1rem;
                    border: none;
                    cursor: pointer;
                    z-index: 10000;
                    min-width: 100px;
                  }

                  .sww {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 1rem;
                  }

                  .website-block {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                  }

                  :global(html, body) {
                    overflow: hidden;
                  }
                `}
            </style>
        </>
    );
};
