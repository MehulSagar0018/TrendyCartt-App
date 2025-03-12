import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    addressList :[]
}
export const addNewAddress = createAsyncThunk( 'address/addNewAddress',
    async(formData) =>{
            const response = await axios.post('http://localhost:5000/api/shop/address/add'
            ,formData
)
return response.data
    }
)
  
export const fetchAllAddresses = createAsyncThunk( 'address/fetchAllAddresses',
    async(userId) =>{
            const response = await axios.get(`http://localhost:5000/api/shop/address/update/${userId}`
           
)
return response.data
    }
)
export const editaAddress = createAsyncThunk( 'address/editAddress',
    async(userId,AddressId,formData) =>{
            const response = await axios.update(`http://localhost:5000/api/shop/address/update/${userId}/${AddressId}`
            ,formData
)
return response.data
    }
)
export const deleteAddress = createAsyncThunk( 'address/deleteAddress',
    async(userId,AddressId) =>{
            const response = await axios.delete(`http://localhost:5000/api/shop/address/delete/${userId}/${AddressId}`
       
)
return response.data
    }
)
  
const addressSlice = createSlice({
    name:'address',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(addNewAddress.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addNewAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addressList = [...state.addressList, action.payload];
        });
        builder.addCase(addNewAddress.rejected, (state) => {
            state.isLoading = false;
            state.addressList = [];
        });
        builder.addCase(fetchAllAddresses.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllAddresses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addressList = action.payload;
        });
        builder.addCase(fetchAllAddresses.rejected, (state) => {
            state.isLoading = false;
            state.addressList = [];
        })
        builder.addCase(editaAddress.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(editaAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addressList = state.addressList.map((address) => {
                if (address._id === action.payload._id) {
                    return action.payload;
                }
                return address;
            });
        });
        builder.addCase(deleteAddress.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addressList = state.addressList.filter((address) => address._id !== action.payload._id);
        });
    }
})
export default addressSlice.reducer;