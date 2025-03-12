import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { IoBagOutline } from "react-icons/io5";
import AvatarImg from "../assets/avatar.png"
import { logout } from '../features/auth/authSlice';
import "remixicon/fonts/remixicon.css";
import CartModal from '../pages/shop page/CartModal';
import { useLogoutUserMutation } from '../features/auth/authApi';
const Navbar = () => {
  const [isCartOpen, setisCartOpen] = useState(false); 
  const products = useSelector((state) => state.cart.products)
  
  const handleCartToggle = () => {  
    setisCartOpen(!isCartOpen);  
  };  

//if logged in
const dispatch=useDispatch()
const {user} = useSelector((state) => state.auth)
const [logoutUser]= useLogoutUserMutation();
const Navigate = useNavigate()
//dropdown
const [isDropDownOpen, setIsDropDownOpen] = useState(false);
const handleDropDownToggle =()=> {
  setIsDropDownOpen(!isDropDownOpen)
}
//admin dropdown menu
const adminDropDownMenus =[
  {label:"Dashboard",path:"/dashboard/admin"},
  {label:"Manage Items",path:"/dashboard/manage-products"},
  {label:"All Orders",path:"/dashboard/manage-orders"},
  {label:"Add New Post",path:"/dashboard/add-new-post"},
]
//users dropdown menu
const userDropDownMenus =[
  {label:"Dashboard",path:"/dashboard"},
  {label:"Profile",path:"/dashboard/profile"},
  {label:"Payments",path:"/dashboard/payments"},
  {label:"Orders",path:"/dashboard/orders"},
]
const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]
 
const handleLogout = async () =>{
  try {
    await logoutUser().unwrap()
dispatch(logout());
alert('Logout successfully')
Navigate('/')
  } catch (error) {
    console.log("Logout Failed",error)
  }
}

return (
    

<header className='fixed-nav-bar w-nav'>
    <nav className='max-w-screen-2x1 mx-auto px-4 flex justify-between items-center  '>
        <ul className='nav__links'> 
            <li><Link to='/' className='text-gray-600' style={{fontWeight:"bold",fontSize:"18px"}}>Home</Link></li>
            <li><Link to='/shop'  className='text-gray-600' style={{fontWeight:"bold",fontSize:"18px"}}>Shop</Link></li>
            <li><Link to='/aboutus'  className='text-gray-600' style={{fontWeight:"bold",fontSize:"18px"}}>About</Link></li>
            <li><Link to='/contact'  className='text-gray-600' style={{fontWeight:"bold",fontSize:"18px"}}>Contact</Link>  </li>
            
        </ul>
       
        <div className='nav__logo'>
          <Link to="/" style={{fontSize:"45px",paddingLeft:"50px"}}>TrendyCart <span>🛒</span></Link>
        </div>
        <div className='nav__icons relative' >
          <span><Link to="search"><i className="ri-search-line"></i></Link></span>
          <span ><button onClick={handleCartToggle} className='hover:text-primary flex justify-around'style={{border:"none",backgroundColor:"transparent", }}>
          <IoBagOutline style={{height:"20px",width:"20px"}}/>
         <sup  style={{ textAlign: "center",fontSize: "0.675rem",
    lineHeight: "1rem",display: "inline-block",paddingLeft: "0.275rem",
    paddingRight: "0.275rem",color:"rgb(255 255 255 / var(--tw-text-opacity, 1))",borderRadius:" 9999px",backgroundColor:" rgb(237 56 73 / var(--tw-bg-opacity, 1))", }}>
      {products.length}</sup> </button>
    </span>
    <span>
    {
      user && user ? (<>
      <img 
      onClick={handleDropDownToggle}
      src={user?.profileImage || AvatarImg} alt="" style={{maxHeight:"26px",maxwidth:"26px"}} />
      {
        isDropDownOpen && (
          <div  style={{ position: "absolute",
            right: 0,
            marginTop: "0.75rem", // mt-3
            padding: "1rem", // p-4
            width: "12rem", // w-48
            backgroundColor: "white", // bg-white
            border: "1px solid #E5E7EB", // border border-gray-200
            borderRadius: "0.5rem", // rounded-lg
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow-lg
            zIndex: 50, }}>
            <ul style={{display:"flex",flexDirection:"column"}}>
              {dropdownMenus.map((menu,index)=> (
                <li>
 <Link onClick={() => setIsDropDownOpen(false)} 
              className='dropdown-items' to={menu.path}>{menu.label}</Link> 
                </li>
              )
             )}
              <li><Link onClick={handleLogout} className='dropdown-items'>Logout</Link></li>
            </ul>
          </div>
        )
      }
      </>):( <Link to="login"><i className="ri-user-line"></i></Link>)
    }
    </span>
        </div>
            
        
    </nav>
    {isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle}/>
    }
</header>
  )
}

export default Navbar
