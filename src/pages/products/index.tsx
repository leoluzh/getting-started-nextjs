
import axios from 'axios'
import { GetStaticProps , NextPage } from 'next'
import * as React from 'react' 
import { Product } from '../../models/product'
import { User } from '../../models/user'

interface ProductListProps {
    products: Product[]
}

const ProductList: NextPage<ProductListProps> = ( props ) => {
    const { products } = props
    const [ products , setProducts ] = React.useState<User[]>([])

    React.useEffect( () => {
        axios.get('http://localhost:3001/api/products')
            .then( response => {
                setProducts(response.data)
            })
    } , []);

    return (
        <ul>
            {products.map( p => {
                <li>{p.name} - {p.price}</li>
            })}
        </ul>
    )

}

export default ProductList;

export const getStaticProps : GetStaticProps = async ( context ) => {
    const {data} = await axios.get('http://host.docker.internal:3000/products')
    return {
        props: {
            products: data
        }
    }
}