const form = document.getElementById('addProductForm');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const ID = document.getElementById('id').value;
    const productID = document.getElementById('productID').value;
    const productName = document.getElementById('productName').value;
    const amount = document.getElementById('amount').value;
    const customerName = document.getElementById('customerName').value;
    const status = document.getElementById('status').value;
    const createBy = document.getElementById('createBy').value;
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19); 

    fetch('http://localhost:8080/product/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id : ID,
            productID: productID,
            productName: productName,
            amount: amount,
            customerName: customerName,
            status: status,
            transactionDate: formattedDate,
            createBy: createBy,
            createOn: formattedDate
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

});