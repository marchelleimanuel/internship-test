const updateForm = document.getElementById('updateProductForm');
const ID = document.getElementById('id');
const productID = document.getElementById('productID');
const productName = document.getElementById('productName');
const amount = document.getElementById('amount');
const customerName = document.getElementById('customerName');
const status = document.getElementById('status');
const createBy = document.getElementById('createBy');
// const updateBtn = document.getElementById('update-btn');

fetch('http://localhost:8080/product')
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    data.forEach(el => {
        const row = document.createElement("tr");
        const tableBody = document.querySelector("#productTable tbody");
        const editBtn = document.createElement("button");
        const editBtnText = document.createTextNode("Edit");
        const deleteBtn = document.createElement("button");
        const deleteBtnText = document.createTextNode("Delete");


        editBtn.append(editBtnText);
        deleteBtn.append(deleteBtnText);

        row.innerHTML = `
            <td>${el.id}</td>
            <td>${el.productID}</td>
            <td>${el.productName}</td>
            <td>${el.amount}</td>
            <td>${el.customerName}</td>
            <td>${el.status}</td>
            <td>${el.transactionDate}</td>
            <td>${el.createBy}</td>
            <td>${el.createOn}</td>
        `;

        const newTd = document.createElement('td');
        newTd.append(editBtn);
        newTd.append(deleteBtn);
        row.append(newTd);

        deleteBtn.addEventListener('click', function() {
            fetch(`http://localhost:8080/product/delete/${el.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

            window.location.reload();
        });

        editBtn.addEventListener('click', function() {
            ID.value = el.id;
            productID.value = el.productID;
            productName.value = el.productName;
            amount.value = el.amount;
            customerName.value = el.customerName;
            status.value = el.status;
            createBy.value = el.createBy;

            updateForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const date = new Date();
                const formattedDate = date.toISOString().slice(0, 19); 
    
                fetch('http://localhost:8080/product/update', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id : ID.value,
                        productID: productID.value,
                        productName: productName.value,
                        amount: amount.value,
                        customerName: customerName.value,
                        status: status.value,
                        transactionDate: formattedDate,
                        createBy: createBy.value,
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

                window.location.reload();
            });
        });
        tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('gagal ambil data: ', error);
  });


