import { brands, sizes, categories } from "../products";
export const initialFilterData = {
  sortBy: null,
  filterByBrand: brands.map((brand) => ({
    isSelected: false,
    name: brand,
  })),
  filterByCategory: categories.map((category) => ({
    isSelected: false,
    name: category,
  })),
  filterBySize: sizes.map((size) => ({
    isSelected: false,
    name: size,
  })),
};
export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        filterByCategory: state.filterByCategory.map((category) =>
          category.name === action.payload
            ? { ...category, isSelected: !category.isSelected }
            : { ...category }
        ),
      };
    case "SIZE":
      return {
        ...state,
        filterBySize: state.filterBySize.map((size) =>
          size.name === action.payload
            ? { ...size, isSelected: !size.isSelected }
            : { ...size }
        ),
      };
    case "BRAND":
      return {
        ...state,
        filterByBrand: state.filterByBrand.map((brand) =>
          brand.name === action.payload
            ? { ...brand, isSelected: !brand.isSelected }
            : { ...brand }
        ),
      };
    case "CLEAR_FILTERS":
      return initialFilterData;
    default:
      return state;
  }
};
