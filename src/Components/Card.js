import React from 'react'
import DetailForCard from './DetailForCard';

const Card = ({items, isLoading}) => {
    return isLoading ? <h1>Loading..</h1> : <section className="cards">
        {
            items.map(item => (
                <DetailForCard key={item.flight_number} item={item}></DetailForCard>
            ))
        }
    </section>
}
export default Card;