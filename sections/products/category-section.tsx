import {DefaultSection} from '../../layouts/section-layouts';
import {CategoryCardsWidget} from './category-cards-widget';
import {CategoryCardProps} from './category-card';


export function CategorySection({categoryCards}: {categoryCards: CategoryCardProps[]}) {
    return (
        <DefaultSection name={'products'}>
            <CategoryCardsWidget categoryCards={categoryCards}/>
        </DefaultSection>
    );
}
