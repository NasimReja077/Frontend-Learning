// components/Product.jsx

// const { useEffect } = require("react")
import {useEffect} from "react"
import { add } from "../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux"; // for action despach
import { fetchProducts } from "../store/slices/productsSlice";
import { STATUSE } from "../store/slices/productsSlice";

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {

        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, [dispatch]);

  const handleAdd = (product) => {
    // store data in redax store
    // action despach
    dispatch(add(product)); // dispatch(action(paylod))
  };

  if(status === STATUSE.LOADING){
    return <h2>LOADING......</h2>
  }

  if(status === STATUSE.ERROR){
    return <h2>SOMETHING WENT WORONG......</h2>
  }
  
   return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Products;