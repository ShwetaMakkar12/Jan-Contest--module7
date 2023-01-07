const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

async function fetchdata(){

   let fching = new Promise((resolve,reject)=>{
    let request = fetch(url)
    // console.log(request)
    request.then((Requestdata)=>{
      // console.log(data)
      if(Requestdata.status==200){
        console.log("yeaaah recieved")
        resolve (Requestdata.json())
      }
      else{
        console.log("ooops not recieved")
        reject(Requestdata.statusText)
      }
    })
    })
    let Heetdata = await fching
    return Heetdata
    
  }


fetchdata().then(objectdata =>{
  let tabledata=""
  objectdata.map((values)=>{

     // this function will change the number to currency
     tabledata +=`<tr style="Border-bottom:2px solid white">
          <td><img src="${values.image}">  ${values.name}</td>
          <td>${(values.symbol).toUpperCase()}</td>
          <td>$${values.current_price}</td>
          <td>$${(values.market_cap_change_24h)}</td>
          <td class ="${values.price_change_percentage_24h > 0 ? "positive": "negative"}"> ${parseFloat(values.market_cap_change_percentage_24h).toFixed(2)}% </td>
          <td>Mkt Cap: ${values.market_cap}</td>
        </tr>`;
      })
  document.getElementById("table_body").innerHTML=tabledata;
})
