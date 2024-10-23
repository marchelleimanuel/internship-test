const tableBody = document.querySelector("#productTable tbody");

fetch('http://localhost:8080/product')
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    data.forEach(el => {
        const row = document.createElement("tr");

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

        tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('gagal ambil data: ', error);
  });
