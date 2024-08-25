let apiKey="ef8a0a58f0cfa90f3cc5af56";
let api=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

let fromDropDown=document.getElementById('from-currency-select');
let toDropDown=document.getElementById('to-currency-select');


const currencies = [
    "USD",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLE", // Duplicate entry for Sierra Leone
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
];

currencies.forEach((currency)=>{
  let option=document.createElement('option');
  option.text=currency;
  option.value=currency;
  fromDropDown.add(option);
})
currencies.forEach((currency)=>{
  let option=document.createElement('option');
  option.text=currency;
  option.value=currency;
  toDropDown.add(option);
})

let request=new XMLHttpRequest();
request.open('get',api);
request.send();
let data;
request.addEventListener('readystatechange',async()=>{
   if(request.readyState==4&&request.status==200){
    let response=await request.response;
     data=await JSON.parse(response);
    // console.log(data.conversion_rates);

   }
});

fromDropDown.value='USD';
toDropDown.value='EGP';

function convert(){
  let amount=document.getElementById('amount').value;
  let toCurrency=toDropDown.value;
  let fromCurrency=fromDropDown.value;
  let fromRate=data.conversion_rates[fromCurrency];
  let toRate=data.conversion_rates[toCurrency];
  let res=(amount/fromRate)*toRate;
  let cont=document.getElementById('result');
  cont.innerHTML=`${amount} ${fromCurrency} = ${res.toFixed(2)} ${toCurrency}`;

 
}














// const fromDropDown = document.getElementById("from-currency-select");
// const toDropDown = document.getElementById("to-currency-select");

// //Create dropdown from the currencies array
// currencies.forEach((currency) => {
//   const option = document.createElement("option");
//   option.value = currency;
//   option.text = currency;
//   fromDropDown.add(option);
// });

// //Repeat same thing for the other dropdown
// currencies.forEach((currency) => {
//   const option = document.createElement("option");
//   option.value = currency;
//   option.text = currency;
//   toDropDown.add(option);
// });

// //Setting default values
// fromDropDown.value = "USD";
// toDropDown.value = "INR";
// var data=[];
// function getData(){
//     var myhttp=new XMLHttpRequest();
// myhttp.open('get',api);
// myhttp.send();
// myhttp.addEventListener('readystatechange', async function(){
//     if(this.readyState==4&&this.status==200){
//          data=await JSON.parse(await myhttp.response);
//         console.log(data);
//     }
// })
// }
// getData();
// let convertCurrency = () => {
//   //Create References
//   const amount = document.querySelector("#amount").value;
//   const fromCurrency = fromDropDown.value;
//   const toCurrency = toDropDown.value;

//   //If amount input field is not empty
//   if (amount.length != 0) {
//      console.log(fromCurrency);
//      console.log(toCurrency);
//      console.log(data.conversion_rates);
//         let fromExchangeRate = data.conversion_rates[fromCurrency];
//         let toExchangeRate = data.conversion_rates[toCurrency];
//         const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
//         result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
//           2
//         )} ${toCurrency}`;
      
//   } else {
//     alert("Please fill in the amount");
//   }
// }


// document
//   .querySelector("#convert-button")
//   .addEventListener("click", convertCurrency);
// // window.addEventListener("load", convertCurrency);
// // convertCurrency();
