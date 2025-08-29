import {CategoryPreviewContainer, CategoryPreviewTitle,Preview} from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({title, products})=>{
    return(
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitle to={title}>{title.toUpperCase()}</CategoryPreviewTitle>
            </h2>
            <Preview>
                {
                    products.filter((_,idx)=>idx < 4)
                    .map((product)=> <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;