import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const title = 'Home';
class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                
            <Helmet>
                <title>Home</title>
            </Helmet>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            <img src="https://micromaxinfo.com/pub/media/catalog/category/in_listing_banner.png" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1665222858678/592d32f0161a416b513e91b88cef7f2d.jpg" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://waltonbd.com/image/catalog/category-banner/mobile/s8-without-prebook.jpg" className="d-block w-100" alt="poster"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="py-5">
                    <div className="container">
                        <Title name="Bakshi" title="Store"/>
                        <div className="row justify-content-center products-container">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default ProductList;