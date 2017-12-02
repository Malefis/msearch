var divs = ["btc","eth","xrp","bch","ltc","dash","xem","neo","iota","xmr"]
$(function(){
  //Select Bitcoin
$("#btcSelectY").click(function () {
  localStorage.setItem("BTC?", "1");
});
$("#btcSelectN").click(function (){
  localStorage.setItem("BTC?", "0");
});
//Select Ethereum
$("#ethSelectY").click(function (){
  localStorage.setItem("ETH?","1");
});
$("#ethSelectN").click(function (){
  localStorage.setItem("ETH?","0");
});
//Select Ripple
$("#xrpSelectY").click(function (){
  localStorage.setItem("XRP?","1");
});
$("#xrpSelectN").click(function (){
localStorage.setItem("XRP?","0");
});
// Select Bitcoin Cash
$("bchSelectY").click(function (){
  localStorage.setItem("BCH?","1");
});
$("#bchSelectY").click(function (){
  localStorage.setItem("BCH?","0");
});
//Select Litecoin
$("#ltcSelectY").click(function (){
  localStorage.setItem("LTC?","1");
});
$("#ltcSelectN").click(function (){
  localStorage.setItem("LTC?","0");
});
//Select Dash
$("#dashSelectY").click(function (){
  localStorage.setItem("DASH?","1");
});
$("#dashSelectN").click(function (){
  localStorage.setItem("DASH?","0");
});
//Select NEM
$("#xemSelectY").click(function (){
  localStorage.setItem("XEM?","1");
});
$("#xemSelectN").click(function (){
  localStorage.setItem("XEM?","0");
});
//Select NEO
$("#neoSelectY").click(function (){
  localStorage.setItem("NEO?","1");
});
$("#neoSelectN").click(function (){
  localStorage.setItem("NEO?","0");
});
//Select IOTA
$("#iotaSelectY").click(function (){
  localStorage.setItem("IOTA?","1");
});
$("#iotaSelectN").click(function (){
  localStorage.setItem("IOTA?","0");
});
//Select Monero
$("#xmrSelectY").click(function (){
  localStorage.setItem("XMR?","1");
});
$("#xmrSelectN").click(function (){
  localStorage.setItem("XMR?","0");
});
})
