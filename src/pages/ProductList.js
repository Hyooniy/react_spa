import ProductItem from "../components/ProductItem";
import './css/productlist.css'
export default function ProductList(){
  return(
    <div id="product">
      <form>
        <input type="text" placeholder="검색하기" />
        <button type="submit">검색</button>
      </form>
      <div className="container">
        <p> 총 64개의 상품이 검색되었습니다</p>
        <div>
          <ProductItem />
        </div>
      </div>
    </div>
  )
}