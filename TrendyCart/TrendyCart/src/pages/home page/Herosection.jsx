import React from 'react'
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'
const Herosection = () => {
 const cards = [
    {
        id:1,
        Image: card1,
        trend: '2024 Trend',
       title: ' Womens Shirt'

    },
    {
        id:2,
        Image: card2,
        trend: '2024 Trend',
       title: ' Womens Dresses'

    },
    {
        id:3,
        Image: card3,
        trend: '2024 Trend',
       title: ' Womens Casuals'

    }
    
 ]



    return (
  <>
  
    <section className='section__conteiner hero__container'>
      {
        cards.map((card) => (
          <div key={card.id} className='hero__card'>
            <img src={card.Image} alt='' />
            <div className='hero__content'>
              <p>{card.trend}</p>
              <h4>{card.title}</h4>
              <button  className='btn'>EXPLORE NOW</button>
          </div>
          </div>
        ))
      }
    </section>
</>
  )
}

export default Herosection
