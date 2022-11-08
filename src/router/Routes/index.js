import ProductDetail from '../../containers/ProductDetail';
import ProductListing from '../../containers/ProductListing';
import Error from '../../containers/Error';

export const routes = [

    {
        link:"/",
        title:"Home",
        element: <ProductListing />
    },
    {
        link:"/product/:productId",
        title:"Product Detail",
        element: <ProductDetail />
    },
    {
        link:"*",
        title:"Error",
        element: <Error />
    }
];
