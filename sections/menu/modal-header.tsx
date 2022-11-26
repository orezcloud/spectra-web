import ModalContainer from './modal-container';
import {globalActions} from '../../state/global';


export default function ModalHeader() {
    return (
        <ModalContainer className={'pt-7'}>
            <div className={'d-flex justify-content-between px-7'}>
                <div>
                    <img style={{
                        width: '130px',
                    }} className={'logo-img'} src="/logo-black.png" alt="logo"/>
                </div>
                <div className={'close'} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    globalActions.toggleMenu();
                    return false;
                }}>
                    <img height={42} className={'svg-img'} src="/icons/close-black.png" alt="menu"/>
                </div>
            </div>
            <style jsx>{`
              .close {
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                  opacity: 0.7;
                }
              }
            `}</style>
        </ModalContainer>
    );
}
