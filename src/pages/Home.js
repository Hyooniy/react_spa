import ProductItem from "../components/ProductItem";
import './css/Home.css';
export default function Home(){
  return(
    <>
    <div id="box01">
    <dl>
      <dt>My Firtst Sulwhasoo<br/>나의 첫 설화수</dt>
      <dd>설화수를 처음 경험하는 당신에게</dd>
    </dl>
    </div>
    <article id="box02">
    <h1>Ranking</h1>
    <ProductItem />
    </article>
    <article id="box03">
    <h1>Best Sellers</h1>
    <div>
    <dl>
      <dt>베스트셀러</dt>
      <dd>건강하게 빛나고 힘 있게 채우는<br/>설화수의 시그니처 케어</dd>
      <dd>자세히 보기</dd>
    </dl>
    </div>
    </article>
    <article id="box04">
    <h1>전체상품</h1>
    <ProductItem />
    </article>
    </>
  )
}