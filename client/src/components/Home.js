import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../js/action/productAction'
import AddModal from './AddModal'
import ProductItem from './ProductItem'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)
    const isLoading = useSelector(state => state.productReducer.isLoading)
   useEffect(() => {
      dispatch(getProducts())
      
   }, [])
    console.log(products)
    return (
    <div className="d-flex justify-content-around flex-wrap">
            { isLoading ? <h1>Loading ... </h1> :
                products.map(product => <ProductItem product={product} key={product._id}/>)
            }

            <br />
            <AddModal/>
           
        </div>
    )
}

export default Home
