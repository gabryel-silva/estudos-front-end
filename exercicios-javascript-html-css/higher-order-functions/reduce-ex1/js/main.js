const table = document.getElementById("tabela");

let listaDeCompras = [
    {
        produto: "Arroz 2kg", 
        preco: 19.90, 
        quantidade: 3
    },
    {
        produto: "Feijão 1kg", 
        preco: 9.90, 
        quantidade: 3
    },
    {
        produto: "Leite 1L", 
        preco: 3.79, 
        quantidade: 4
    },
    {
        produto: "Farinha de trigo", 
        preco: 7.90, 
        quantidade: 2
    },
    {
        produto: "Cuzcuz", 
        preco: 6.90, 
        quantidade: 5
    },
];

const displayTable = () => {
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tfoot = document.createElement("tfoot");

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    const trHead = document.createElement("tr");
    thead.appendChild(trHead);

    // Adiciona cabeçalho da tabela
    trHead.innerHTML = `<th>Produto</th>
                        <th>Preço</th>
                        <th>Quantidade</th>`;

    const totalDeCompras = listaDeCompras.reduce((acc, item) => {
        const tr = document.createElement("tr");

        // Adiciona linha na tabela
        tbody.appendChild(tr);

        // Itera sobre as propriedades do objeto e cria as células (td) correspondentes
        for (const prop in item) {
            const td = document.createElement("td");
            td.innerText = `${item[prop]}`;
            tr.appendChild(td);
        }

        // Calcula o total para cada item e acumula
        return acc + item.preco * item.quantidade;
    }, 0);

    const total = document.createElement("tr");

    total.innerHTML = `<td colspan="2" style="font-weight: 700">Total</td>
                       <td style="font-weight: 700">${toString("R$" + totalDeCompras.toFixed(2))}</td>`;

    tfoot.appendChild(total);
}

document.addEventListener("DOMContentLoaded", displayTable);