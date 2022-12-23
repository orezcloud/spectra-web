import {DefaultSection} from '../../layouts/section-layouts';
import {CategoryCardsWidget} from './category-cards-widget';
import {CategoryCardProps} from './category-card';
import Certs from '../../widgets/comps/certs';


export function CategorySection({categoryCards}: {categoryCards: CategoryCardProps[]}) {
    return (
        <DefaultSection name={'products'}>
            <CategoryCardsWidget categoryCards={categoryCards}/>
            <Certs/>
        </DefaultSection>
    );
}
