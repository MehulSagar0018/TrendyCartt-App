import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/baseURL";
const productsApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/products`,
        credentials: 'include'
    }),
    tagTypes: ["Products"],
    endpoints:(builder) => ({
        fetchAllProducts: builder.query({
            query: ({ category, color,minPrice,maxPrice,page = 1, limit = 10 }) => {
                const queryParams = new URLSearchParams({
                    category: category || '', 
                    color: color || '' ,
                    minPrice:  minPrice || 0,
                    maxPrice: maxPrice || '',
                    page: page.toString(),
                     limit: limit.toString()
                }).toString()
                return `/?${queryParams}`
            },
            providesTags: ["Products"]
        }),
        fetchProductById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Products", id }],
        }),
    AddProduct: builder.mutation({
        query: (newProduct) => ({
            url: "/create-product",
            method: "POST",
            body: newProduct,
            credentials:"include"
        }),
        invalidatesTags: ["Products"]
    }),
    fetchRelatedProduct: builder.query({
        query: (id) => `blogs/related/${id}`
    }),
    fetchRelatedBlogs: builder.query({
        query: (id) => `blogs/related/${id}`,
        providesTags: ['Product'],
      }),
     
    updateProduct: builder.mutation({
        query: ({id, ...rest}) => ({
            url: `/update-product/${id}`,
            method: "PATCH",
            body: rest,
            credentials:"include"
        
        }),
        invalidatesTags: ["Products"]
    }),
    deleteProduct: builder.mutation({
        query: (id) => ({
            url: `/${id}`,
            method: "DELETE",
            credentials:"include"
        
        }),
        providesTags:(result,error,id) => [{type:"Products",id}]
    })
    })
})
export const {useFetchAllProductsQuery,
     useFetchProductByIdQuery,
      useAddProductMutation, useUpdateProductMutation,
       useDeleteProductMutation, 
       useFetchRelatedProductQuery,
       useFetchRelatedBlogsQuery} = productsApi;
export default productsApi