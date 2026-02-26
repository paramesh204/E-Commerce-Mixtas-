import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../App.css';
import { shopImages } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import  {slideImages} from '../../assets/assets';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ShopNav = () => {


    const navigate = useNavigate();
    return (
        <div>

            <div className='text-center my-4'>
                <div>
                    <h2 style={{ fontSize: '50px', fontWeight: 'normal' }}>Shop</h2>
                </div>

                <div className='my-2'>
                    <p className='text-secondary'><strong><Link to='/' className='text-decoration-none text-dark'>Home</Link></strong>/Shop</p>
                </div>
            </div>


            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-lg-3 " >
                        <div className="accordion w-75">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#productCategoryCollapse"
                                    >
                                        Product Categories
                                    </button>
                                </h2>
                                <div
                                    id="productCategoryCollapse"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> HOODIES</p></div>

                                            <div><p className='text-secondary'>5</p></div>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> MEN</p></div>

                                            <div><p className='text-secondary'>5</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> BAGS</p></div>

                                            <div><p className='text-secondary'>5</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> JACKETS</p></div>

                                            <div><p className='text-secondary'>5</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i>SWEATSHIRTS</p></div>

                                            <div><p className='text-secondary'>5</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion w-75 my-4">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#productCategoryCollapse"
                                    >
                                        Price
                                    </button>
                                </h2>
                                <div
                                    id="productCategoryCollapse"
                                    className="accordion-collapse collapse "
                                >
                                    <div className="accordion-body">
                                        <div className='text-secondary'>
                                            <p>$50-$100</p>
                                        </div>

                                        <div className='text-secondary'>
                                            <p>$100-$150</p>
                                        </div>

                                        <div className='text-secondary'>
                                            <p>$150-$200</p>
                                        </div>

                                        <div className='text-secondary'>
                                            <p>$200-$250</p>
                                        </div>

                                        <div className='text-secondary'>
                                            <p>$250-$300</p>
                                        </div>

                                        <div className='text-secondary'>
                                            <p>$1-$50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion w-75">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#productCategoryCollapse"
                                    >
                                        Color
                                    </button>
                                </h2>
                                <div
                                    id="productCategoryCollapse"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Blue</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Gray</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Green</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Red</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i>Yellow</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion w-75 my-4">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#productCategoryCollapse"
                                    >
                                        Color
                                    </button>
                                </h2>
                                <div
                                    id="productCategoryCollapse"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Large</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>

                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Medium</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>  <p className='text-secondary '><i className="fa-solid fa-greater-than me-2"></i> Small</p></div>

                                            <div><p className='text-secondary'>(46)</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="accordion w-75 my-4 ">
                            <div className="accordion-item  ">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#productCategoryCollapse"
                                    >
                                        Tags
                                    </button>
                                </h2>
                                <div
                                    id="productCategoryCollapse"
                                    className="accordion-collapse collapse show"
                                >
                                    <div className="accordion-body">
                                        <div className='d-flex justify-content-around'>

                                            <div className=' shop-btn'>
                                                <button  >Clothing</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>Ets</button>
                                            </div>




                                        </div>

                                        <div className='d-flex justify-content-around my-3'>

                                            <div className=' shop-btn' >
                                                <button>Fashion</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>M11</button>
                                            </div>

                                        </div>

                                        <div className='d-flex justify-content-around my-3'>

                                            <div className=' shop-btn' >
                                                <button>M12</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>M31</button>
                                            </div>

                                        </div>




                                        <div className='d-flex justify-content-around my-3'>


                                            <div className=' shop-btn' >
                                                <button>M32</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>M41</button>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-around my-3'>

                                            <div className=' shop-btn' >
                                                <button>M71</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>M72</button>
                                            </div>

                                        </div>


                                        <div className='d-flex justify-content-around my-3'>


                                            <div className=' shop-btn' >
                                                <button>M81</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>Men</button>
                                            </div>
                                        </div>


                                        <div className='d-flex justify-content-around my-3'>
                                            <div className=' shop-btn' >
                                                <button>Product</button>
                                            </div>

                                            <div className=' shop-btn' >
                                                <button>Women</button>
                                            </div>

                                        </div>






                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>




                    <div className='col-12 col-lg-9'>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <p>Showing 1-12 of 47 results</p>
                            </div>

                            <div className="d-flex gap-2 align-items-center mb-3 ">
                                <div>
                                    <p className="mb-0">Show 12 15 30</p>
                                </div>

                                <div className="dropdown">
                                    <button
                                        className="btn btn-light dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Default Sorting
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item">Action</button></li>
                                        <li><button className="dropdown-item">Another action</button></li>
                                        <li><button className="dropdown-item">Something else here</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            {shopImages.map((value, index) => (
                                <div className='col-12 col-lg-4 col-sm-12 col-md-6 position-relative  '>
                                    <img src={value.image} alt="" srcset="" className='w-100' onClick={() => navigate(`/Product/${value.id}`)} />

                                    <p className='text-secondary my-2'>{value.name}</p>

                                    <p>{value.para}</p>

                                    <p className='text-secondary my-2'>${value.amt2}</p>

                                    <div
                                        className="position-absolute d-flex flex-column gap-2 icons"
                                        style={{ top: '15px', right: '20px' }}
                                    >
                                        <i className="fa-solid fa-magnifying-glass bg-white p-2 rounded-circle shadow-sm"></i>
                                        <i className="fa-solid fa-heart bg-white p-2 rounded-circle shadow-sm"onClick={()=>navigate(`/WishList/${value.id}`)}></i>
                                        <i className="fa-solid fa-bag-shopping bg-white p-2 rounded-circle shadow-sm"></i>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>


                </div>
            </div>



           

        </div>
    )
}
export default ShopNav
