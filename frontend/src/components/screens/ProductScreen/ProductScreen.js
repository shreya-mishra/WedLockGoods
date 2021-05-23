import React from 'react'
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import products from '../../../products'
import Rating from '../../Rating/Rating';

const ProductScreen = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)
    console.log(product.image)
    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
      </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup varaint='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>


                    </ListGroup>

                </Col>
                <Col md={3}>
<Card>
                    <ListGroup varaint='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                                                   
                                </Col>
                                <Col>
                                {product.countInStock>0? 'In Stock': 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                         <ListGroup.Item>
                            <Button className='btn-block' type='button'>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                
            </Row>
        </>
    )
}

export default ProductScreen
