import React from 'react'
import { Link } from 'react-router-dom' 
import category1 from '../../assets/category-1.jpg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpg'
import category4 from '../../assets/category-4.jpg'
const Categories = () => {
    const categories = [
        {
            name: 'Accessories',path:'accessories',image: category1
        },
        {
            name: 'Clothing',path:'dress',image: category2
        },
        {
            name: 'Jewellery',path:'jewellery',image: category3
        },
        {
            name: 'Cosmetics',path:'cosmetics',image: category4
        },
    ]
  return (
    <>
    <div className='product__grid '>
        {
        categories.map((category) => (
            <Link key={category.name} to={`/category/${category.path}`} className='category__card'>
               <div className='category__card'>
               <img  src={category.image} alt={category.name} />
               <h4>{category.name}</h4>

               </div>
        </Link>
            
                
        ))
        }
      
      </div>
      </>
  )
}

export default Categories
