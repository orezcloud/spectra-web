import {ReactNode} from 'react';
import {IS_DEVELOPMENT, IS_STAGING} from '../lib/env';
import MenuLayout from './menu-layout';
import {COLORS} from '../styles/consts';
import {useIsMenuOpen, useIsTransIn, useIsTransOut, useIsTransZero} from '../state/global';
import Modal from '../sections/menu/modal';


export default function Page({children, backgroundColor, noslide}: {children: ReactNode, backgroundColor?: string, noslide?: boolean}) {

    const isTransIn = useIsTransIn();
    const isTransOut = useIsTransOut();
    const isTransZero = useIsTransZero();
    const isMenuOpen = useIsMenuOpen()

    return (
        <>
            <div className={
                'page overflow-hidden'
                + (noslide ? ' noslide' : '')
                + (isTransIn ? ' trans-in' : '')
                + (isTransOut ? ' trans-out' : '')
                + (isTransZero ? ' trans-zero' : '')
                + (isMenuOpen ? ' menu-open' : '')
            }
                 style={{backgroundColor: backgroundColor || COLORS.bodyBackground}}>
                {children}
            </div>
            <MenuLayout>
                <Modal/>
            </MenuLayout>
            {/*{*/}
            {/*    IS_STAGING &&*/}
            {/*    <div className={'notice'}>*/}
            {/*        Staging Environment*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{*/}
            {/*    IS_DEVELOPMENT &&*/}
            {/*    <div className={'notice'}>*/}
            {/*        Development Environment*/}
            {/*    </div>*/}
            {/*}*/}
            {/*<style jsx>*/}
            {/*    {`*/}
            {/*      .notice {*/}
            {/*        position: fixed;*/}
            {/*        bottom: 0;*/}
            {/*        right: 0;*/}
            {/*        padding: 0 10px;*/}
            {/*        height: 30px;*/}
            {/*        background-color: #b20000;*/}
            {/*        color: #fff;*/}
            {/*        display: flex;*/}
            {/*        align-items: center;*/}
            {/*        font-size: 12px;*/}
            {/*        font-weight: 600;*/}
            {/*        z-index: 1000;*/}
            {/*      }*/}
            {/*      .page.menu-open {*/}
            {/*        overflow: hidden;*/}
            {/*        height:  100.08vh;*/}
            {/*      }*/}
            {/*    `}*/}
            {/*</style>*/}
        </>
    );
}
