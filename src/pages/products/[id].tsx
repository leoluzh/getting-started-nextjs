import axios from 'axios'
import { GetStaticPaths , GetStaticProps , NextPage } from 'next'
import { useRouter } from 'next/router' 
import * as React from 'react' 
import { Product } from '../../models/product'

//generate all sources in build time - static pages

interface ProductShowProps {
    product: Product
}

const ProductShow : NextPage<ProductShowProps> = ( props ) => {
    const {product} = props
    const router = useRouter()
    if( router.isFallback ){
        return <div>Carrengado...</div>
    }else{
        <div>
            {product.name} - {product.price}
        </div>
    }
}

export default ProductShow;

export const getStaticProps : GetStaticProps = async ( context ) => {
    const {
        params: id
    } = context 
    const {data} = await axios.get(`http://host.docker.internal:3000/products/${id}`)
    return {
        props: {
            produc: data
        } ,
        revalidate: 20
    }
}

export const getStaticPath : GetStaticPaths = async () => {
    return {
        paths: [
            { params { id: "6" } } ,
            { params { id: "7" } }
        ],
        fallback: true ,
    }
}
