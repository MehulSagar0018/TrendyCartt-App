import React, { useEffect ,useState} from 'react'
import ProductCard from './ProductCard';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../features/products/productsApi';

const filters={
    Categories:['dress','jewellery','cosmetics','accessories'],
    colors:['black','white','blue','yellow','red','green'],
    priceRange:[
        {label:'under $50',min:0,max:50},
        {label:'$50-$100',min:50,max:100},
        {label:'$100-$200',min:100,max:200},
        {label:'$200 and above',min:200,max: Infinity},

    ],
}
const ShopPage = () => {
  
    
    const [filterState, setFilterState] = useState({    
        category: 'all',
        color: 'all',
        priceRange: ''
    });
 const [currentPage,setCurrentPage] = useState(1);
 const [ProductsPerPage] = useState(8);
const {category, color, priceRange} = filterState;
const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    const {data: {products = [], totalPages , totalProducts } ={}, error, isLoading}= 
    useFetchAllProductsQuery({
        category: category !== 'all' ? category: '',
        color: color !== 'all' ? color: '',
        minPrice: isNaN(minPrice)  ? '' : minPrice ,
        maxPrice: isNaN(maxPrice)  ? '' : maxPrice ,
        page: currentPage,
        limit:ProductsPerPage,
       
    });
 
  
    const clearFilters = () => {
        setFilterState({
            category: 'all',
            color: 'all',
            priceRange: ''
        })
    }
    //paginating
    const handlePageChange = (pageNumber) =>{
        if(pageNumber> 0 && pageNumber <= totalPages){
            setCurrentPage(pageNumber)
        }
    }
    if(isLoading) return <div>Loading......</div>
    if(error) return <div>Error Loading Products......</div>
   const startProduct = (currentPage -1 )* ProductsPerPage + 1;
   const endProduct = startProduct + products.length - 1;
 return (
<>
<section className='section__container bg-primary-light'>
      <h2 className='section__header capitalize'>Shop Page</h2>
      <p className='section__subheader'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam 
        cupiditate facere laborum aut repellendus facilis magni quisquam unde reprehenderit. 
        Doloribus ut, nulla architecto atque ducimus dolor doloremque magni quibusdam!</p>
    </section>
    
    <section className='section__container'>
        <div className='flex flex-row md:flex-row md:gap-12 gap-8'>
            <ShopFiltering 
            filters={filters} 
            filterState={filterState} 
            setFilterState={setFilterState} 
            clearFilters={ clearFilters}/>
            <div >
                <h3 className='text-xl font-medium mb-4'>Showing : {startProduct} to {endProduct} of {totalProducts} Products</h3>
           
<div style={{maxHeight:"500px",overflow:"scroll"}}>
<ProductCard products={products}/>
<div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
    <button onClick={() => handlePageChange( currentPage - 1)} style={{ padding: '0.5rem 1rem', backgroundColor: '#D1D5DB', color: '#374151',borderRadius: '0.375rem',
    marginRight: '0.5rem', }}>Previous</button>
    {
        [...Array(totalPages)].map((_, index) => (
            <button key={index}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(index-1)}
            style={{
    padding: '0.5rem 1rem',
    backgroundColor: currentPage === index + 1 ? '#3B82F6' : '#D1D5DB', // Blue-500 or Gray-300
    color: currentPage === index + 1 ? '#FFFFFF' : '#374151', // White or Gray-700
    borderRadius: '0.375rem',
    margin: '0 0.25rem',
  }}>{index+1}</button>
        ))
    }
    <button   disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage+1)} style={{ padding: '0.5rem 1rem', backgroundColor: '#D1D5DB', color: '#374151',borderRadius: '0.375rem',
    marginRight: '0.5rem', }}>Next</button>
</div>

</div>
            </div>
        </div>

    </section>
    </>
  )
}

export default ShopPage
