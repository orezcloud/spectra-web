import Body from '../layouts/body';
import {DefaultSection} from '../layouts/section-layouts';
import Header from '../sections/header/header';


export default function Contact() {

    

    return (
        <Body backgroundColor={'#f1f1f1'}>
            <Header/>
            <DefaultSection name={'contact'} padding={'none'}>

                <div style={{
                     height: '400vh',
                }}></div>
            </DefaultSection>
        </Body>
    );
}
