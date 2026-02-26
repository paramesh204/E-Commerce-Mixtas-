import React from 'react'
import { Link, useParams } from 'react-router-dom'
import shop1 from '../assets/images/shop1.jpg'
import arrival1 from '../assets/images/arrival6.jpg';
import '../App.css';
import { popularImages, relatedImages, shopImages } from '../assets/assets';
import { arrivalImages } from '../assets/assets';
const WishList = () => {

    const { idd } = useParams()

    const foundd =
        popularImages.find((value) => value.id === Number(idd)) ||
        arrivalImages.find((value) => value.id === Number(idd)) ||
        shopImages.find((value) => value.id === Number(idd)) ||
        relatedImages.find((value) => value.id === Number(idd))




    return (
        <div>
            <div className="container">
                <div className='text-lg-center'>
                    <p className='my-3 ms-3 fs-3'><strong><Link to='/' className='text-decoration-none text-dark '>Home</Link></strong> <i class="fa-solid fa-greater-than"></i> Cart</p>
                    <div className='my-3 ms-3' style={{ fontSize: '25px', fontWeight: 'normal' }}> <h2>WishList</h2></div>

                </div>

                <div className='d-flex gap-3 align-items-center ms-4 my-5'>
                    <div className=" d-none d-lg-block w-50 ">
                        <div className='w-25'>
                            <img src={foundd.image} alt="" srcset="" className='w-100' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around gap-3'>

                        <div>
                            <span>DIME CLASSIC REMASTERED HOODIE, BLACK</span>
                            <span className='ms-4'>$140.00</span>
                        </div>




                        <div>
                            <i className="fa-solid fa-bag-shopping  btn-light fs-3 "></i>
                        </div>

                    </div>



                </div>
                <div>
                    <h3>Share On:</h3>
                    <div className="d-flex gap-3 iconsss my-4 fs-3">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WishList
