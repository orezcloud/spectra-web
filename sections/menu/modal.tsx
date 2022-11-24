import ModalContainer from './modal-container';



export default function Modal() {
    return (
        <div className={'h-100 border border-4'}>
            <ModalTop/>
            <ModalContent/>
        </div>
    );
}

function ModalTop() {
    return (
        <ModalContainer className={'py-7'}>
            <div className={'d-flex justify-content-between'}>
                <div>
                    <img style={{
                        width: '130px',
                    }} className={'logo-img'} src="/logo-black.png" alt="logo"/>
                </div>
                <div>
                    <img className={'svg-img'} src="/icons/menu-black.svg" alt="menu"/>
                </div>
            </div>
        </ModalContainer>
    );
}

function ModalContent() {
    return (
        <ModalContainer className={'py-3 h-100'}>
{/*            <div className={'d-flex bg-danger border border-4'} style={{*/}
{/*                height: '85%',*/}
{/*            }}>*/}
{/*dadf*/}
{/*            </div>*/}
        </ModalContainer>
    );
}
