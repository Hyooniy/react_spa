import './css/productItem.css'
export default function ProductItem(){
  return(
    <figure className="pic">
      <img src="./img/1.png" alt="pic" />
      <figcaption>
        <dl>
          <dt><span>10%</span>price</dt>
          <dd>title</dd>
        </dl>
      </figcaption>
    </figure>
  )
}