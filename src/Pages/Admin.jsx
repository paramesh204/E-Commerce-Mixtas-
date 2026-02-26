import React from 'react';
import { useLocation } from 'react-router-dom';
import blog3 from '../assets/images/blog.jpg'
import Adminn from '../assets/images/Admin.jpg'

const Admin = () => {
    const location = useLocation();
    const blog = location.state?.blog;

    return (
        <div className="container my-4">
            {blog ? (
                <>
                    <h2 >{blog.content}</h2>
                    <p > <img src={blog3} style={{ width: '40px', height: '40px', borderRadius: '100%' }} /> by {blog.admin} on {blog.date}</p>
                    <div className="text-center">
                        <img
                           className='w-75'
                            src={blog.image}
                            alt="Blog"
                            style={{ maxWidth: '100%', borderRadius: '10px' ,width:'auto',height:'400px'}}
                        />
                    </div>

                    <div className='w-75 my-3 fs-5' style={{ margin: 'auto' }}>
                        <p className='text-secondary'>What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell us the story behind one of their most prized possessions.</p>
                        <h2 className='mt-3 mb-3'>Who?</h2>
                        <p className='text-secondary'>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston. After they graduated, the couple began to craft together as a way to decompress from their corporate fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were ultimately the gateway to launching their now-beloved New York–based textile brand Cold Picnic.</p>
                        <div>
                            <img src={Adminn} alt="" srcset="" className='w-100 mt-2 mb-2' />
                            <p><span>Phoebe and Peter in their Ridgewood home</span></p>
                        </div>

                        <p className='text-secondary'>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that double as works of art. Nearly every collection is informed by old movies, either in composition (they print out stills and trace shapes over them) or palette (think retro hues). “There was one series of films that we were really inspired by that were all set in the desert, so the colors were very chalky and powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and citrons and tans.”</p>

                        <h2 className='mt-3 mb-3'>What?</h2>

                        <p className='text-secondary'>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY sofa (the Mags Soft Low sectional to be exact) that they reupholstered using hand-tufted rugs after the sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we could actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a little bit heartier with a lot of color and design would survive our family.”

                            For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail collections, which are an homage to the Claire Denis film of the same name. But instead of using the handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the rugs himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the wrong glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.</p>

                        <h2 className='mt-3 mb-3'>Where and When?</h2>

                        <p className='text-secondary'>Peter undertook this grueling project at home in 2021—injuring his back in the process. “Everything he does, he does very intensely. He just wanted to finish it, but then he put his back out and couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe says, adding that a local upholsterer then covered the HAY sofa in the hand-tufted rugs and a greenish-mustard wide wale corduroy.</p>


                        <h2 className='mt-3 mb-3'>Why?</h2>

                        <p className='text-secondary mt-3 mb-3'>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental value for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is our take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use old movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to encapsulate.”</p>
                        <p className='text-secondary mt-3 mb-3'>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design, the Denis Denis, , as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché tulip lamp they made during the pandemic. “We thought using one of the rugs that it was based on would be too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says. “The effect was more low-key when we just really went for it and did the whole room in the same print.”</p>

                        <div>
                            <i class="fa-brands fa-facebook" style={{ border: '1px solid black', padding: '8px', color: 'white', backgroundColor: 'black', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}></i>
                            <i class="fa-brands fa-x-twitter" style={{ border: '1px solid black', padding: '8px', color: 'white', backgroundColor: 'black', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}></i>
                            <i class="fa-brands fa-linkedin" style={{ border: '1px solid black', padding: '8px', color: 'white', backgroundColor: 'black', margin: '5px', borderRadius: '5px', cursor: 'pointer' }}></i>
                        </div>

                        <div>
                            <div className='text-secondary'>
                                <h3 className='text-dark mt-3'>Leave a Reply</h3>
                                <p className='fs-6'>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div>
                                <p className='fs-5'>Comment*</p>
                                <textarea name="" id="" className='w-100 pb-5'></textarea>
                            </div>

                            <div className="row g-4 fs-5 my-1">
                                <div className="col-12 col-md-4">
                                    <p>Name*</p>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col-12 col-md-4">
                                    <p>Email*</p>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col-12 col-md-4">
                                    <p>Website*</p>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className='fs-6'>
                                    <input type="checkbox" className='me-2' />
                                    <span>Save my name, email, and website in this browser for the next time I comment.</span>

                                </div>
                                <div >

                                    <button style={{backgroundColor:'black', color:'white', fontSize:'20px', padding:'5px 15px', borderRadius:'5px' }}>Post Command</button>
                                </div>
                            </div>




                        </div>
                    </div>
                </>
            ) : (
                <p>No blog data found.</p>
            )}
        </div>
    );
};

export default Admin;
