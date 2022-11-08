import  React, {useEffect}  from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {setProducts} from '../redux/actions/productActions';


const ProductListing = () => {
    //getting state from the store 
    // const products = useSelector((state)=> state);
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(()=> {
        fetchProducts();
    },[]);

    const fetchProducts =  async () => {
        const response = await axios
        .get("http://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });

        dispatch(
            setProducts(response.data)
        );
    };

    // console.log(products);

    return (
        <div className="ui grid container" > 
            <ProductComponent />
        </div>
    )
}


export default ProductListing;