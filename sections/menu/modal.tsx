import ModalHeader from './modal-header';
import ModalContent from './modal-content';


export default function Modal() {
    return (
        <div className={'h-100 d-flex flex-column'}>
            <div>
                <ModalHeader/>
            </div>

            <div className={'flex-grow-1'}>
                <ModalContent/>
            </div>
        </div>
    );
}
