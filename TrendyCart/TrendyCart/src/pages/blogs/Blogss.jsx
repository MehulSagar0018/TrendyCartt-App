import React from 'react';
import blogsData from '../../data/blog.json'
const Blogss = () => {
    return (
        <section className='section__container blogs__container'>
        <h2 className='section__header'>Latest From Blogs</h2>
        <p className='section__subheader '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, doloremque, quos quas quae doloribus quibusdam
          voluptatem magnam atque quia. 
        </p>
        <div className='blog__grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {
              blogsData.map((blog, index) => (
                  <div key={index} className='blog__card cursor-pointer hover:scale-105 transition-all duration-300'>
                 
                      <img src={blog.imageUrl} alt='blog img'  />
                  
                  <div className='blog__card__content'>
                      <h3 className='blog__card__description'>{blog.subtitle}</h3>
                      <p className='blog__card__title'>{blog.title}</p>
                      <p className='blog__card__date'>{blog.date}</p>
                  </div>
                  </div>
              ))
          }
          </div>
      </section>
    );
};

export default Blogss;