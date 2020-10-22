import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Care extends Component {
    render() {
        return (
            <div>
                {/**/}
                {/* Carousel
      ================================================== */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <Link href="/"><img className="first-slide" src="images/book2.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="second-slide " src="images/book2.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="third-slide " src="images/book2.jpg" alt="Third slide" /></Link>
                        </div>
                    </div>
                </div>
                {/* /.carousel */}

                  {/*content*/}
                  <div className="kic-top ">
                    <div className="container ">
                        <div className="kic ">
                            <h3>Popular Books</h3>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/a1.jpeg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Fiction</h6>
                            <p>Harry Potter</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/a5.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Non-Fiction</h6>
                            <p>Hopes</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/a7.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Kids</h6>
                            <p>SnowBelle's</p>
                        </div>
                    </div>
                </div>
                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l agileinf">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src="images/a10.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">New Titles</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={24} data-name="Wheat" data-summary="summary 24" data-price={6.00} data-quantity={1} data-image="images/a10.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                        <img src="images/a7.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Our Space</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={25} data-name="Peach Halves" data-summary="summary 25" data-price="4.50" data-quantity={1} data-image="images/a7.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                        <img src="images/a5.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">The Gravity Of Us</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={26} data-name="Banana" data-summary="summary 26" data-price="3.50" data-quantity={1} data-image="images/of26.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/a4.jpg" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Silver Arrow</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={27} data-name="Rice" data-summary="summary 27" data-price="0.80" data-quantity={1} data-image="images/a.jpg">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="clearfix" />
                        </div>
             </div>
             </div>
             </div>


        )
    }
}
