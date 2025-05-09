import { useEffect, useState } from "react"
import { getProducts } from "../api/products"
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    title: string
    price: number
}

export default function ProductPage(){
    const [products, setProducts] = useState<Product[]>([])
    const [offset, setOffset] = useState(0)
    const [search, setSearch] = useState('')
    const limit = 10

    const handleSearch = (query: string) =>{
        setSearch(query);
        setOffset(0);
        getProducts(0, limit, query).then((res) =>{
            setProducts(res.data)
        })
    }
    useEffect(() =>{
         if (offset === 0 && search) return;
        getProducts(offset, limit).then((res) =>{
            setProducts((prev) => [...prev, ...res.data])
        })
    }, [offset, search])


    return(
        <>
        <h1>Products</h1>
        <SearchBar onSearch={handleSearch} />
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
        <button onClick={() => setOffset((prev) => prev+limit)}>Load More Products</button>
        </>
    )
}