const form = document.querySelector('.form');
const lista = document.querySelector('.lista');
const produto = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = produto.value;
    const quantity = quantidade.value;

    const tableBody = document.createElement('tbody');
    
    tableBody.innerHTML += `<td>
                            <th>${product}</th>
                            <th>${quantity}</th>
                        </td>`

    lista.appendChild(tableBody);
})