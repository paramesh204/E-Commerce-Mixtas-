//import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
// import { ThemeContext } from '../../ThemeContext';
import shop9 from '../../assets/images/shop9.jpg'
import { all_products } from '../../assets/assets';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [addFun, setaddFun] = useState(0);

  const setAdd = () => {
    setaddFun(addFun + 1)
  }

  const RemoveFun = () => {

    if (addFun > 0) {
      setaddFun(addFun - 1)
    }


  }




  // Filter based on para5 only if searchTerm is not empty
  const filteredImages =
    searchTerm.trim() === ''
      ? []
      : all_products.filter((item) =>
        item.para.toLowerCase().includes(searchTerm.toLowerCase())
      );
  // const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>

      <div className="w-100">

        <div className="container position-relative ">


          <div className="header d-flex justify-content-between align-items-center py-3">

            <div
              className="d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <i className="fa-solid fa-bars"></i>
            </div>

            {/* Offcanvas Menu */}
            <div
              className="offcanvas offcanvas-start w-50"
              tabIndex="-1"
              id="offcanvasMenu"
              aria-labelledby="offcanvasMenuLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body canvas ">
                <div><Link className="d-block w-100"></Link></div>
                <div><Link className="d-block w-100" to="/">Home</Link></div>
                <div><Link className="d-block w-100" to="/About" >About</Link></div>
                <div><Link className="d-block w-100" to="/Shop">Shop</Link></div>
                <div><Link className="d-block w-100" to="/FAQs">FAQs</Link></div>
                <div><Link className="d-block w-100" to="/Contact">Contact</Link></div>

              </div>
            </div>
            {/* Centered Title */}
            <div className="flex-grow-1 text-center me-sm-5 ">
              <h1 className='h1 fs-sm-1 '>Mixtas</h1>
            </div>

            {/* Right-side Icons */}
            <div className="nav position-absolute end-0 top-50 mb-5 translate-middle-y me-4">
              <i className="fa-solid fa-user btn-light" data-bs-toggle="offcanvas" data-bs-target="#staticUser"></i>
              <i className="fa-solid fa-magnifying-glass " data-bs-toggle="modal" data-bs-target="#staticmodal"></i>
              <i className="fa-solid fa-heart" onClick={() => { navigate(`/WishList`) }}></i>
              <i className="fa-solid fa-bag-shopping  btn-light" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" ><sup>0</sup></i>
            </div>


            {/* Search Modal */}
            <div className="modal fade" id="staticmodal" tabIndex="-1">
              <div className="modal-dialog modal-xl">
                <div className="modal-content" style={{ backgroundColor: 'white' }}>
                  <div className="modal-header">
                    <h5 className="modal-title">Search Products</h5>
                    <button
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="modal-body">
                    {/* Input */}
                    <input
                      type="text"
                      className="form-control w-100 pt-2 pb-2 mb-4"
                      placeholder="Search Product"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        border: 'none',
                        borderBottom: '2px solid #000',
                        borderRadius: '0',
                        boxShadow: 'none',
                      }}
                    />

                    {/* Filtered Results */}
                    {searchTerm.trim() === '' ? (
                      <p className="text-center text-muted">Start typing to search products.</p>
                    ) : filteredImages.length > 0 ? (
                      <div className="row justify-content-center">
                        {filteredImages.map((value, index) => (
                          <div
                            key={index}
                            className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
                          >
                            <div className="position-relative text-center">
                              <img
                                src={value.image}
                                alt={value.name}
                                onClick={() => navigate(`/Product/${value.id}`)}
                                className="img-fluid mb-2"
                                style={{
                                  width: '100%',
                                  maxWidth: '250px',
                                  height: '250px',
                                  objectFit: 'cover',
                                  cursor: 'pointer',
                                }}
                              />

                              <p className="fw-bold mt-2">{value.name}</p>
                              <p>{value.para}</p>
                              <p className="text-success">{value.amt}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-danger">No products found.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>




            {/* user */}

            <div className="offcanvas offcanvas-end" id='staticUser'>
              <div className="offcanvas-header">
                <button className='btn-close ms-auto' data-bs-dismiss="offcanvas"></button> </div>

              <div className='offcanvas-body'>
                <div className=''>
                  <h2 className='text-dard fs-5'>Login</h2>
                </div>
                <div className="container my-5">
                  <div>
                    <input type="text" placeholder='Uername or email address' className='w-100 p-2 my-4 text-dark' />
                  </div>


                  <div>
                    <input type="text" placeholder='Password' className='w-100 p-2 text-dark' />
                  </div>

                  <div>
                    <div>

                    </div>

                    <div>
                      <span>Remember Me</span>
                    </div>
                  </div>

                  <div><button className='w-100 my-5 bg-dark text-light p-2 border-none'>Log In</button></div>

                  <div className='text-underline'>Lost your Possword?</div>

                  <div className='text-center my-5'><p className='text-secondary'>Not a Memember? <span className='text-dard'>Register</span></p></div>


                </div>

              </div>



            </div>








            {/* Bag */}
            <div className="offcanvas offcanvas-end" id='staticBackdrop'>
              <div className="offcanvas-header ">
                <button className='btn-close ms-auto' data-bs-dismiss="offcanvas"></button>

              </div>

              <div className="modal-body">
                <h4>SHOPPING CART <span className='shop-cart'>0</span></h4>
                <br />
                <hr />

                <div className='d-flex gap-3'>
                  <div className='w-50'>
                    <img src={shop9} alt="" srcset="" className='w-100' />
                  </div>

                  <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                      <p>Dime Classic Remastered Hoodie, black $140</p>
                    </div>
                    <div>
                      <i class="fa-solid fa-circle-xmark"></i>
                    </div>



                  </div>
                </div>


                <div className='text-center fs-5'>
                  <span
                    className='border border-1 ps-2 pe-2 pt-0 pb-0 text-center'
                    onClick={RemoveFun}
                    style={{ cursor: 'pointer' }}
                  >
                    -
                  </span>

                  <span className='px-3'>{addFun}</span> {/* ✅ Show value here */}

                  <span
                    className='border border-1 ps-2 pe-2 pt-0 pb-0 text-center'
                    onClick={setAdd}
                    style={{ cursor: 'pointer' }}
                  >
                    +
                  </span>
                </div>



                <div className="container " style={{ marginTop: '50%' }}>
                  <div className='d-flex justify-content-between'>
                    <div><strong>Subtotal</strong></div>

                    <div>
                      <p>$140.00</p>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <div><button style={{ backgroundColor: 'white', color: 'black', padding: '15px 30px', borderRadius: '10px', }}>View Card</button></div>

                    <div><button style={{ backgroundColor: 'black', color: 'white', padding: '15px 30px', borderRadius: '10px', }}>Check Out</button></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Links */}

        </div>


      </div >
    </>
  );
};

export default Nav;
