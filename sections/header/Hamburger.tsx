import {globalActions} from '../../state/global';
import MenuItem from './MenuItem';
import {useState} from 'react';


export default function Hamburger({light}: {light?: boolean}) {

    const [color] = useState(!light ? '#151515' : 'white');

    return (
        <MenuItem className={'icon priv-h14892'} onClick={() => {
            globalActions.toggleMenu();
        }}>
            <span className={'text'}>
                MENU
            </span>
            <span className={'d-inline-block'}>
                    <svg width="28" height="15" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.25" x2="31" y2="1.25" stroke={color} stroke-width="1.5"/>
                        <line y1="9.75" x2="31" y2="9.75" stroke={color} stroke-width="1.5"/>
                        <line y1="18.25" x2="31" y2="18.25" stroke={color} stroke-width="1.5"/>
                    </svg>
                </span>
            <style jsx>{`
              .text {
                font-weight: 400;
                font-size: 13px;
                margin-right: 14px;
                margin-top: 2px;
              }

              :global(.priv-h14892) {
                margin-left: 10px;
                opacity: .8;
              }

              :global(.priv-h14892::before) {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 1px;
                background-color: #bbb;
                //border: 0.5px solid #000001a8;
                transform: scaleY(2.4);
              }

              svg {
                transition: all 0.3s ease;
                transform: scaleY(.9);
                cursor: pointer;
              }

              :global(.priv-h14892:hover) {
                opacity: 0.7;
                svg {
                  transform: scaleY(1.1);
                }
              }
            `}</style>
        </MenuItem>
    );
}
