let mainTable = document.getElementById("mainTable")
let tableColumnData = []

tableColumnData.push(['Diego', 25, "palavras"])
tableColumnData.push(['Lou', 20, "palavrass"])
tableColumnData.push(['Caue', 20, "Sustentação,Cobrança,Incosistências"])


document.getElementById("teste").onclick = generateTable()

function generateTable(){

    

    for(let person of tableColumnData){
        for(let rowDetails of person){
            mainTable.appendChild(HTMLTableRowElement)
        }
    }

    console.log(tableColumnData)
}