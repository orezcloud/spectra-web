import {DefaultSection} from '../../layouts/section-layouts';
import {CategoryCardsWidget} from './category-cards-widget';
import {productCategories} from '../../lib/consts';


export function CategorySection() {
    return (
        <DefaultSection name={'products'}>
            <CategoryCardsWidget categoryCards={productCategories} />
        </DefaultSection>
    )
}
