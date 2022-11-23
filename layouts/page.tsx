import {ReactNode} from 'react';
import {IS_DEVELOPMENT, IS_STAGING} from '../lib/env';
import MenuLayout from './menu-layout';
import {COLORS} from '../styles/consts';
import {useIsTransIn, useIsTransOut, useIsTransZero} from '../state/global';


export default function Page({children, backgroundColor}: {children: ReactNode, backgroundColor?: string}) {

    const isTransIn = useIsTransIn();
    const isTransOut = useIsTransOut();
    const isTransZero = useIsTransZero()

    return (
        <>
            <div className={
                'page overflow-hidden'
                + (isTransIn ? ' trans-in' : '')
                + (isTransOut ? ' trans-out' : '')
                + (isTransZero ? ' trans-zero' : '')
            }
                 style={{backgroundColor: backgroundColor || 'white'}}>
                {children}
            </div>
            <MenuLayout/>
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
