import  React, {useEffect}  from "react";
import {useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectedProduct, removeSelectedProduct} from '../redux/actions/productActions'
import axios from 'axios';


const ProductDetail = () => { 

    const {productId }  = useParams();
    const dispatch = useDispatch();

    useEffect( ()=> {
        if(productId && productId !== "") {
            fetchProductDetail();
            
        }

        return () => {
            dispatch(removeSelectedProduct());
        }
    },[productId]);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch( (err)=> { 
            console.log(err);
        });

        dispatch(selectedProduct(response.data));


    }

    const product  = useSelector((state)=>state.product);
    console.log(product);

    const {id, title, price, description , category , image, rating} = product;

    return (
        <div className="ui grid container"> 
            {Object.keys(product).length === 0 ? (
                <div>...Loading </div>
            ):
            (<div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <img className = "ui fluid image" src ={image} />


                </div>
            </div>)}
        </div>
    )
}


export default ProductDetail;