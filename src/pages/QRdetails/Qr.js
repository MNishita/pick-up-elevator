import { useEffect, useState } from 'react';
import './Qr.css';
  function QRgererator() {
  const [order_id, setOrderId] = useState("");
  const [customer_id, setCustomerId]=useState("");
  const [temp_order,setTempOrder]=useState("");
  const [temp_customer,setTempCustomer]=useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");
  
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${order_id}&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [order_id, size, bgColor]);

    // ('http://localhost:8080/aggregator_api/v1/generate_qr/?order_id=${order_id}/?customer_id=${customer_id}');
    // },[order_id,customer_id]);
  
  function handleClick() {
    setOrderId(temp_order);
     setCustomerId(temp_customer);
  }
  
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
            <span>
                <input type="text" onChange={
                (e) => {setTempOrder(e.target.value)}}
                placeholder="Enter order id" />
            </span>
            {/* <span> 
                <input type="text" onChange={
                (e) => {setTempCustomer(e.target.value)}}
                placeholder="Enter Customer id" />
            </span> */}
            <span>
                <button className="button" 
                    onClick={handleClick}>
                    Generate
                </button>
            </span>
        </div>
        <div className='extra'>
            <span>
               <h5>Background Color:</h5>
                <input type="color" onChange={(e) => 
                 { setBgColor(e.target.value.substring(1)) }} />

            </span>
            <span>
                <h5>Dimension:</h5>
                <input type="range" min="200" max="600"
                value={size} onChange={(e) => 
                {setSize(e.target.value)}} />
            </span>
            
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        {/* <a href={qrCode} download="QRCode">
          <button className='button'>Download</button>
        </a> */}
      </div>
    </div>
  );
}
  
export default QRgererator;