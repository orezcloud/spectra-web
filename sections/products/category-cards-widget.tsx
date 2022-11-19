import {CategoryCard, CategoryCardProps} from './category-card';


interface CategoryCardsProps {
    categoryCards: CategoryCardProps[];
}

export function CategoryCardsWidget({categoryCards}: CategoryCardsProps) {

    return (
        <div className={'category-cards'}>
            <div className={'row'}>
                {
                    categoryCards.map((categoryCard, index) => {
                        return (
                            <div key={index} className={'card-container col-12 mb-5 col-lg-6'}>
                                <CategoryCard {...categoryCard} />
                            </div>
                        );
                    })
                }
            </div>
            <style jsx>
                {`
                  .category-cards {
                  
                  }

                  .card-container {

                  }
                `}
            </style>
        </div>
    );
}
