import React,{useState} from 'react'
import {Card, Button, Row, Col, Modal} from "react-bootstrap"
import { useCart } from './cartcontext';
import { RxCross2 } from 'react-icons/rx';


const Pizza = ({pizza}) => {
    const [variant,setVariant]=useState('small')
    const [quantity,setQuantity]=useState(1)
    const [show, setShow] = useState(false);
    const [sauce, setSauce] = useState('Select Sauces...');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  

  const handleCloseModal = () => setShowModal(false);
  
  const { addToCart } = useCart(); 
  const handleAddToCart = () => {
    const cartItem = {
      image:pizza.image,
      name: pizza.name,
      variant: variant,
      quantity: quantity,
      price: calculateTotalPrice(),
      sauces: sauce !== 'Select Sauces...' ? [sauce] : [],
     
    
    };
    

    addToCart(cartItem);
    handleCloseModal();
  };

  const calculateTotalPrice = () => {
    let basePrice = pizza.prices[0][variant] * quantity;
    let saucePrice = sauce !== 'Select Sauces...' ? 50 : 0;
    return basePrice + saucePrice;
  };

  return (
    <>
    
     <Col>
    
     <Card style={{ width: '17rem', marginTop:'20px', marginLeft:'30px', marginBottom:'20px' }}>
      <Card.Img variant="top" src={pizza.image} style={{height:'180px', cursor:'pointer'}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
          <Row>
           
          
          </Row>
        </Card.Text>
      
            <Col md={6} style={{textAlign:'center',marginLeft:'63px' }}>
                <h6 style={{color:'gray'}}>from Rs. {pizza.prices[0 ][variant]}</h6>
            </Col>
            <Col md={6}>
            <Button className='bg-warning text-black' style={{border:'none', background:'#34495E', marginTop:'20px'}} onClick={handleOpenModal}>
                Add To Cart
            </Button>
                
            </Col>
       
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <RxCross2 style={{background:'grey' , borderRadius:'5px', transition: 'background 0.3s',cursor: 'pointer', }} onClick={handleClose}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <Card.Img variant="top" src={pizza.image} style={{height:'180px'}}/>
                </Col>
                <Col md={6}>
                
                <p style={{marginTop:'10px'}}>{pizza.description}</p>
                </Col>

            </Row>
        </Modal.Body>
       
      </Modal>
      <Modal show={showModal} onHide={handleCloseModal} size='lg'>
   
          <Modal.Title>  <RxCross2 style={{background:'grey' , borderRadius:'5px', transition: 'background 0.3s',cursor: 'pointer', float:'right', marginRight:'15px', marginTop:'10px'}} onClick={handleCloseModal}/></Modal.Title>
       
        <Modal.Body>
        <Row>
                {/* <Col md={6}>
                <Card.Img variant="top" src={pizza.image} style={{height:'180px'}}/>
                <p style={{marginTop:'10px'}}>{pizza.description}</p>
                </Col>
                <Row style={{float:'right'}}>

           
<label htmlFor="variant">Choose Variant</label>
<select name="variant" id="variant" className="form-control" value={variant} onChange={(e)=>{setVariant(e.target.value)}}>
    {pizza.prices.map((p,i)=>{
        return <option key={i} value={p.variant}>{p.variant}</option>
    })}
</select> */}
<Row>
<div class="w-full md:w-1/2 p-4">
  
<Card.Img variant="top" src={pizza.image} style={{height:'180px', marginTop:'-30px', width:'103%'}}/>
<p style={{marginTop:'10px', fontWeight:'bold' , fontSize:'25px'}}>{pizza.name}</p>
<p style={{marginTop:'10px'}}>{pizza.description}</p>
        
      </div>
      <div class="w-full md:w-1/2 p-4">
        <div class="mb-6">
          
          <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Variants</h6>
                <select value={variant} style={{ borderRadius:'20px'}} onChange={e=>setVariant(e.target.value)}>
                    {pizza.varients.map(variant=>(
                        <option >{variant}</option>
                    )
                        
                    )}
                </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select value={quantity} style={{ borderRadius:'20px'}} onChange={e=>setQuantity(e.target.value)}>
                   {
                          [...Array(10).keys()].map((x,i)=>(
                            <option value={i+1} >{i+1}</option>
                          ))
                   }
                </select>
            </Col>
          </Row>
        </Card.Text>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="font-semibold mb-2 text-lg">Select Sauces</h3>
          <select
  class="form-select w-full p-3 border rounded"
  style={{ borderRadius: '20px' }}
  value={sauce}
  onChange={(e) => setSauce(e.target.value)}
>
  <option value="Select Sauces...">Select Sauces...</option>
  <option value="Spicy Red Sauce">Spicy Red Sauce</option>
  <option value="BBQ Sauce">BBQ Sauce</option>
  <option value="Buffalo Sauce">Buffalo Sauce</option>
  <option value="Alfredo Sauce">Alfredo Sauce</option>
  <option value="Pesto Sauce">Pesto Sauce</option>
</select>
        </div>
     
      </Row>
            </Row>
            
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:'red', border:'none', borderRadius:'20px'}} onClick={handleAddToCart}>
           <span style={{}}>Rs. {calculateTotalPrice()}</span> &nbsp; &nbsp; &nbsp; &nbsp; Add to cart
          </Button>
         
        </Modal.Footer>
      </Modal>
     </Col>
     
     
    </>
    
  )
}

export default Pizza
