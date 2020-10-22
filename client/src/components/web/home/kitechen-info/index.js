import React from 'react'
import { Link } from 'react-router-dom';
import './kitechen.css';
import { connect } from 'react-redux';
import Sliderproduct from '../Carousel/sliderproduct';
import { addToCart } from '../../../../actions/productActions';

const Kitchenitem = (props) => {
    return (
        <div className="content-top">
            <div className="container ">
                <div className="spec ">
                    <h3>Special Offers</h3>
                    <div className="ser-t">
                        <b />
                        <span><i /></span>
                        <b className="line" />
                    </div>
                </div>
                <div className="tab-pane active text-style" id="tab1">
                    <div className=" con-w3l">
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                    <img src="/images/book8.jpg" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Soul River</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => props.addToCart("moong")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                    <img src="images/a2.jpg" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Extraordinary Bird</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$10.00</label><em className="item_price">$9.00</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("sunflower")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                    <img src="images/a1.jpeg" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Harry Potter</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$3.00</label><em className="item_price">$2.00</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("kabuli")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                    <img src="images/a11.jpg" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">A Curse So Dark and Lonely</Link>(</h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("soyachunks")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
<br></br>

                

                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>You might be looking for</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal17" className="offer-img">
                                        <img src="images/a12.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Shock Forest</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add add-2">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/a12.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal18" className="offer-img">
                                        <img src="images/a11.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">A Curse</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="4.50" data-quantity={1} data-image="images/a11.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal19" className="offer-img">
                                        <img src="images/a7.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Space</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="3.50" data-quantity={1} data-image="images/of18.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal20" className="offer-img">
                                        <img src="images/a9.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Hopes</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="0.80" data-quantity={1} data-image="images/a9.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            
                           
                         
                                         
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>

                {/* another slider  */}
                <div className="tab-pane active text-style" id="tab1" style={{ paddingBottom: '3rem' }}>
                    <div className="spec ">
                        <h3>Best Offers View</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className="slick-slider slick-initialized slider-bk" dir="ltr">
                        <Sliderproduct state={props}/>
                        <div className="clearfix" />
                    </div>
                </div>
                {/* End slider */}

            </div>
        </div >

    )
}

export default connect(null, { addToCart })(Kitchenitem);