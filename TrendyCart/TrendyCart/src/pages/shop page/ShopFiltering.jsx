import React from 'react'

const ShopFiltering = ({filters, filterState,setFilterState,clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      
      

     <h3>Filters</h3>
     <br/>
   <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Categories</h4>
        <hr />
        
        {
            filters.Categories.map((category) => (
            <label key={category } className='capitalize cursor-pointer '>
                <input type="radio" name='category' id='category' value={category}
                checked={filterState.category === category} 
                onChange={(e) => setFilterState({...filterState,category:e.target.value})}/>
            <span className='ml-1'>{category}</span>
            </label>
            ))
        }
       
   </div>
   <br/>
   
   <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Colours</h4>
        <hr />
       
       
        {
            filters.colors.map((color) => (
            <label key={color } className='capitalize cursor-pointer '>
                <input type="radio" name='color' id='color' value={color}
                checked={filterState.color === color} 
                onChange={(e) => setFilterState({...filterState,color:e.target.value})}/>
            <span className='ml-1'>{color}</span>
            </label>
            ))
        }
        
       
   </div>
   <br/> 
  {/*} <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price Range</h4>
        <hr />
       
       
        {
            filters.priceRange.map((range) => (
            <label key={range.label} className='capitalize cursor-pointer '>
                <input type="radio" name='priceRange' id='priceRange' value={`${Range.min}`}
                checked={filterState.priceRange === `${range.min}-${range.max}`} 
                onChange={(e) => setFilterState({...filterState,priceRange:e.target.value})}/>
            <span className='ml-1'>{range.label}</span>
            </label>
            ))
        }
        
       
   </div>*/}
   <div>
   <button className='bg-primary py-1 px-4 text-white rounded'onClick={clearFilters}>Clear Filters</button>
   </div>
    </div>
    
  )
}

export default ShopFiltering
