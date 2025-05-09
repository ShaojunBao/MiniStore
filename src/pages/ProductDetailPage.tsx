import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../api/products';

interface Product{
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    images: string[];

}

export default function ProductDetailPage(){
    const {id} = useParams<{id: string}>()
    const [product, setProduct] = useState<Product>()

    useEffect(() =>{
        if(id){
            getProductById(Number(id)).then((res) =>{
                setProduct(res.data)
            })
        }
    }, [id])
    if (!product) return <p>Loading...</p>;

    return(
        <div>
            <h1>{product.title}</h1>
            <p><strong>Price:</strong>${product.price}</p>
            <p>{product.description}</p>
            {product.images.map((url, index) =>(
                <img key={index} src={url} alt={product.title} width={200} />
            ))}
        </div>
    )
}