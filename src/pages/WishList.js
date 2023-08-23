import ProductItem from "../components/ProductItem";

export default function WishList(){
  return(
    <div className="wishlist">
      <ul>
        <li>
          <ProductItem />
        </li>
        <p>
          <button type="button">
            버리기
          </button>
        </p>
      </ul>
    </div>
  )
}