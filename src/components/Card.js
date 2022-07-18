import React,{useState,useEffect} from 'react'
import { Button, Card } from 'react-bootstrap';
import Cardsdata from './CardData';
import { useDispatch } from 'react-redux';
import { Add_to_Cart } from '../redux/action/action'; 
import axios from 'axios';
import '../App.css'
import SearchBar from '../components/SearchBar'


const Cart = () => {
    const [data,setData]=useState(Cardsdata);
    const [product,setProducts]=useState([]);
    const dispatch=useDispatch();

    const handleClick=(item)=>{
      console.log("sfaffdasfdsfd",item)
        dispatch(Add_to_Cart(item))
    }

    const fetchProducts=async()=>{
      const response=await axios
      .get("https://fakestoreapi.com/products")
      .catch((e)=>{console.log(e)});
      setProducts(response.data)
    }

    useEffect(()=>{
      fetchProducts();
  })

    console.log("data",product);
  return (
    <div className='container'>
      <SearchBar placeholder="enter a product" data={product} />
      {/* <div><h1>Shopify</h1></div>
      <div className='container-main'>
        <div>
          {data.map((item)=>{
            return (
              <>
              <Card className='card-details'>
                <Card.Img src={item.imgdata} alt="image" />
                <Card.Body>
                  <Card.Title>{item.rname}</Card.Title>
                  <Card.Text>Rs.{item.price}</Card.Text>
                  <Button onClick={()=>handleClick(item)}>Add To Cart</Button>
                </Card.Body>
              </Card>
              </>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Cart