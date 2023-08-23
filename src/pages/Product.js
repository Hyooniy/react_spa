import {BsFillBasket3Fill} from 'react-icons/bs';
export default function Product(){
  return(
    <>
    <div id="productItem">
      <h1>price</h1>
      <p>
        <button type="button">
          <BsFillBasket3Fill />
        </button>
      </p>
      <p>summary</p>
    </div>
    </>
  )
}