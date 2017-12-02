var btcChoice = localStorage.getItem("BTC?");
var xrpChoice = localStorage.getItem("XRP?");
var ethChoice = localStorage.getItem("ETH?");
var bchChoice = localStorage.getItem("BCH?");
var ltcChoice = localStorage.getItem("LTC?");
var dashChoice = localStorage.getItem("DASH?");
var xemChoice = localStorage.getItem("XEM?");
var neoChoice = localStorage.getItem("NEO?");
var iotaChoice = localStorage.getItem("IOTA?");
var xmrChoice = localStorage.getItem("XMR?");

//BTC
if (btcChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=,USD,EUR,GBP", function(btc) {
    $('.btc').html("<br>The current Bitcoin exchange rates are: <br>  $ USD = " + btc.USD + " <br>	£ GBP = " + btc.GBP + "<br>€ EUR = " + btc.EUR)
  });
}
//ETH
if (ethChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP", function(eth) {
    $('.eth').html(" <br>The current Ethereum exchange rates are : <br>	₿ BTC = "+ eth.BTC + " <br> 	 $ USD= " + eth.USD + " <br>	£ GBP = " + eth.GBP+ "<br> € EUR = " + eth.EUR)
  })
}
//XRP
if (xrpChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=BTC,USD,EUR,GBP", function(xrp) {
    $('.xrp').html(" <br>The current Ripple exchange rates are : <br>	₿ BTC = "+ xrp.BTC + " <br> 	 $ USD= " + xrp.USD + " <br>	£ GBP = " + xrp.GBP+ "<br> € EUR = " + xrp.EUR)
  })
}
//BCH
if (bchChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=BTC,USD,EUR,GBP", function(bch) {
    $('.bch').html(" <br>The current Bitcoin Cash exchange rates are : <br>	₿ BTC = "+ bch.BTC + " <br> 	 $ USD= " + bch.USD + " <br>	£ GBP = " + bch.GBP+ "<br> € EUR = " + bch.EUR)
  })
}
//LTC
if (ltcChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BTC,USD,EUR,GBP", function(ltc) {
    $('.ltc').html(" <br>The current Litecoin exchange rates are : <br>	₿ BTC = "+ ltc.BTC + " <br> 	 $ USD= " + ltc.USD + " <br>	£ GBP = " + ltc.GBP+ "<br> € EUR = " + ltc.EUR)
  })
}
//DASH
if (dashChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=BTC,USD,EUR,GBP", function(dash) {
    $('.dash').html(" <br>The current Dash exchange rates are : <br>	₿ BTC = "+ dash.BTC + " <br> 	 $ USD= " + dash.USD + " <br>	£ GBP = " + dash.GBP+ "<br> € EUR = " + dash.EUR)
  })
}
//XEM
if (xemChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XEM&tsyms=BTC,USD,EUR,GBP", function(xem) {
    $('.xem').html(" <br>The current NEM exchange rates are : <br>	₿ BTC = "+ xem.BTC + " <br> 	 $ USD= " + xem.USD + " <br>	£ GBP = " + xem.GBP+ "<br> € EUR = " + xem.EUR)
  })
}
//NEO
if (neoChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=NEO&tsyms=BTC,USD,EUR,GBP", function(neo) {
    $('.neo').html(" <br>The current NEO exchange rates are : <br>	₿ BTC = "+ neo.BTC + " <br> 	 $ USD= " + neo.USD + " <br>	£ GBP = " + neo.GBP+ "<br> € EUR = " + neo.EUR)
  })
}
//IOTA
if (iotaChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=IOTA&tsyms=BTC,USD,EUR,GBP", function(iota) {
    $('.iota').html(" <br>The current IOTA exchange rates are : <br>	₿ BTC = "+ iota.BTC + " <br> 	 $ USD= " + iota.USD + " <br>	£ GBP = " + iota.GBP+ "<br> € EUR = " + iota.EUR)
  })
}
//XMR
if (xmrChoice == "1") {
  $.post("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,EUR,GBP", function(xmr) {
    $('.xmr').html(" <br>The current XMR exchange rates are : <br>	₿ BTC = "+ xmr.BTC + " <br> 	 $ USD= " + xmr.USD + " <br>	£ GBP = " + xmr.GBP+ "<br> € EUR = " + xmr.EUR)
  })
}
