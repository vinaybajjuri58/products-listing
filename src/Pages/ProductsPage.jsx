import { useReducer } from "react";
import { Product,Filters } from "../Components";
import {reducerFunction,initialFilterData} from "./ReducerFunction"
import { products } from "../products";

export const ProductsPage = () => {
  const [filterData, dispatch] = useReducer(reducerFunction, initialFilterData);
  const {filterByBrand,filterByCategory,filterBySize,sortBy} = filterData
  const selectedBrandsArray =[];
  const selectedCategoriesArray = [];
  const selectedSizesArray =[];
  filterByBrand.forEach(brand=>{
    if(brand.isSelected){
      selectedBrandsArray.push(brand.name)
    }
  });
  filterByCategory.forEach(category=>{
    if(category.isSelected){
      selectedCategoriesArray.push(category.name)
    }
  });
  filterBySize.forEach(size=>{
    if(size.isSelected){
      selectedSizesArray.push(size.name)
    }
  });
  const productsFilteredByBrand = selectedBrandsArray.length>0 ?  products.filter(product=>selectedBrandsArray.includes(product.brand)) : products 
  const productsFilteredByCategory = selectedCategoriesArray.length>0 ?  productsFilteredByBrand.filter(product=>selectedCategoriesArray.includes(product.category)) : productsFilteredByBrand 
  const productsFilteredBySize = selectedSizesArray.length>0 ? productsFilteredByCategory.filter((product)=>{
    let productSelected = true;
    selectedSizesArray.forEach(size=>{
      productSelected = productSelected || product.sizes.includes(size)
    });
    return productSelected
  }) : productsFilteredByCategory

  const sortedProducts = filterData.sortBy!==null ?  productsFilteredBySize.sort((a,b)=>{
    return sortBy==="HIGH_TO_LOW" ? b.price-a.price : a.price-b.price
  }) : productsFilteredBySize

  return (
    <div className="products-page" >
      <div className="filters" > 
      <Filters filterData={filterData} dispatch={dispatch} />
      </div>
      <div className="products" >
      {sortedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {productsFilteredBySize.length ===0 && <p>No products Available</p>}
      </div>
    </div>
  );
};


