import SectionCard from './section-card';
import {DefaultSection} from './section-layouts';
import {FC} from 'react';


export default function CardsSection({Elements, name}: {Elements: FC<{index?: number}>[], name: string}) {
    return (
        <DefaultSection name={name} padding={'none'}>
            {
                Elements.map((Element, index) => {
                    return (
                        <SectionCard minusMargin={index === 0} key={index}>
                            <Element index={index}/>
                        </SectionCard>
                    );
                })
            }
        </DefaultSection>
    );
}
