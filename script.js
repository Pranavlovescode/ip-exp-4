addEventListener('DOMContentLoaded', function() {
    document.getElementById('orderForm').addEventListener('submit', showSuccessMessage);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileNumberRegex = /^[0-9]{10}$/;
    // Validating the email address
    document.getElementById('email').addEventListener('input',()=>{
        if (!emailRegex.test(document.getElementById('email').value)) {
            document.getElementById('email').setCustomValidity('Invalid email address');
            console.log('Invalid email address');
        } else {
            document.getElementById('email').setCustomValidity(''); 
            console.log('Valid email address');
        }
    })
    // Validating the mobile number
    document.getElementById('mobile_number').addEventListener('input',()=>{
        if (!mobileNumberRegex.test(document.getElementById('mobile_number').value)) {
            document.getElementById('mobile_number').setCustomValidity('Invalid mobile number');
            console.log('Invalid mobile number');
        } else {
            document.getElementById('mobile_number').setCustomValidity(''); 
            console.log('Valid mobile number');
        }
    })
});
function showSuccessMessage(event) {
    event.preventDefault();
    document.getElementById('successMessage').innerHTML = 'Your order has been placed successfully!';
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const mobile_number = document.querySelector('#mobile_number');
    const address = document.querySelector('#address');
    const size = document.querySelector('#size');
    const color = document.querySelector('#color');
    const quantity = document.querySelector('#quantity');
    const customText = document.querySelector('#customText');
    const receipt = document.querySelector('#receipt');
    const orderObject = {
        name:name.value,
        email:email.value,
        mobile_number:mobile_number.value,
        address:address.value,
        size:size.value,
        color:color.value,
        quantity:quantity.value,
        custom_text:customText.value
    }
    if(orderObject){
        
        receipt.innerHTML = `
        <h2>Receipt</h2>
        <p>Name: ${orderObject.name}</p>
        <p>Email: ${orderObject.email}</p>
        <p>Mobile Number: ${orderObject.mobile_number}</p>
        <p>Address: ${orderObject.address}</p>
        <p>Size: ${orderObject.size}</p>
        <p>Color: ${orderObject.color}</p>
        <p>Quantity: ${orderObject.quantity}</p>
        <p>Custom Text: ${orderObject.custom_text}</p>`
    }
    else{
        receipt.classList.add('hidden');
    }
    console.log(orderObject);            
    setTimeout(()=>{
        document.getElementById('successMessage').innerHTML = '';
        document.querySelector('#orderForm').reset();
    },5000);
    
}