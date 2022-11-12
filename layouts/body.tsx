import {ReactNode} from 'react';
import {IS_DEVELOPMENT, IS_STAGING} from '../lib/env';


export default function Body({children}: {children: ReactNode}) {
    return (
        <>
            {children}
            {
                IS_STAGING &&
                <div className={'notice'}>
                    Staging Environment
                </div>
            }
            {
                IS_DEVELOPMENT &&
                <div className={'notice'}>
                    Development Environment
                </div>
            }
            <style jsx>
                {`
                  .notice {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    padding: 0 10px;
                    height: 30px;
                    background-color: #b20000;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 600;
                    z-index: 1000;
                  }
                `}
            </style>
        </>
    );
}
