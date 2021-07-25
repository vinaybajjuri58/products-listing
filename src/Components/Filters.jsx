export const Filters = ({ filterData, dispatch }) => {
    const { sortBy, filterByBrand, filterByCategory, filterBySize } = filterData;
    return (
      <div>
        <button onClick={()=>dispatch({type:"CLEAR_FILTERS"})} >CLEAR FILTERS</button>
        <p>SORTBY :</p>
        <div>
        <label>
          <input 
          type="radio" 
          checked={sortBy && sortBy==="LOW_TO_HIGH"}
          name="SORT" 
          onChange={()=>{
            dispatch({
              type:"SORT",
              payload:"LOW_TO_HIGH"
            })
          }} /> LOW TO HIGH
        </label>
        </div>
        <div>
        <label>
          <input 
          type="radio" 
          checked={sortBy && sortBy==="HIGH_TO_LOW"}
          name="SORT" 
          onChange={()=>{
            dispatch({type:"SORT",payload:"HIGH_TO_LOW"})
          }} />HIGH TO LOW</label>
          </div>
        <h3>BRANDS</h3>
        {filterByBrand.map((brand, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={brand.name}
                checked={brand.isSelected}
                onChange={() => {
                  dispatch({ type: "BRAND", payload: brand.name });
                }}
              />
              {brand.name}
            </label>
          </div>
        ))}
        <h3>CATEGORY</h3>
        {filterByCategory.map((category, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={category.name}
                checked={category.isSelected}
                onChange={() => {
                  dispatch({
                    type: "CATEGORY",
                    payload: category.name,
                  });
                }}
              />
              {category.name}
            </label>
          </div>
        ))}
        <h3>SIZE</h3>
        {filterBySize.map((size, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={size.isSelected}
                name={size.name}
                onChange={() => {
                  dispatch({ type: "SIZE", payload: size.name });
                }}
              />
              {size.name}
            </label>
          </div>
        ))}
      </div>
    );
  };