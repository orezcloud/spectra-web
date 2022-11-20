import SectionCard from './section-card';
import {DefaultSection} from './section-layouts';
import {FC} from 'react';


export default function CardsSection({Elements, name}: {Elements: FC<{index?: number}>[], name: string}) {
    return (
        <DefaultSection name={name} padding={'none'} className={'pb-10'}>
            {
                Elements.map((Element, index) => {
                    return (
                        <div className={'mb-12'} key={index}>
                            <SectionCard minusMargin={index === 0} key={index}>
                                <Element index={index}/>
                            </SectionCard>
                        </div>
                    );
                })
            }
        </DefaultSection>
    );
}
