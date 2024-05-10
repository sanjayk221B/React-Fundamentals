import React, { useState } from 'react';

//Component 
// function MyComponent() {

// const [name, setName] = useState("Guest");
// const [age, setAge] = useState(0);
// const [isEmployed, setIsEmployed] = useState(false);

// const updateName = () => {
//     setName("Sanjay");
// }

// const incrementAge = () => {
//     setAge(age + 2)
// }

// const toggleEmployedStatus = () => {
//     setIsEmployed(!isEmployed)
// }

// return (<div>
//     <p>Name: {name}</p>
//     <button onClick={updateName}>Set Name</button>

//     <p>Age: {age}</p>
//     <button onClick={incrementAge}> Increment Age</button>

//     <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//     <button onClick={toggleEmployedStatus}>Toggle Status</button>
// </div>)

// const [name, setName] = useState("");

// }

//OnChange event handler
function MyComponent() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
    return (<div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number' />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction " />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label >
            <input type='radio' value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick Up
        </label><br />

        <label >
            <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div >)
}

export default MyComponent