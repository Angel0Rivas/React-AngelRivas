import React from 'react';

function ItemListContainer() {
  const { categoryId } = useParams();
  const location = useLocation();
  const prevCategoryId = useRef(categoryId);

  useEffect(() => {
    if (prevCategoryId.current !== categoryId) {
      const fetchProducts = async () => {

        const products = await api.fetchProductsByCategory(categoryId);


      fetchProducts();
    }
  }

    prevCategoryId.current = categoryId;
  }, [categoryId, location]);


}
// const ItemListContainer = ({ greeting }) => {
//   return (
//     <div className="container">
//       <h2>{greeting}</h2>
//     </div>
//   );
// };

export default ItemListContainer;