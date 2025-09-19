import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useState,useEffect, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';


const Category = () =>{
    const categoriesMap = useSelector(selectCategoriesMap);
    const {category} = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect (()=>{
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
            {
                isLoading ? (<Spinner />) : (
            
            <div className='category-container'>
                
                { products && // this is a safe guard to make sure this function don't map until we have the products from the db
                    products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div> 
        )}
        </Fragment>
    );

}

export default Category;