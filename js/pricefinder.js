$.post("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,GBP", function(eth) {
  $('.eth').html(" The current Ethereum exchange rates are : <br>	₿ BTC = "+ eth.BTC + " <br> 	 $ USD= " + eth.USD + " <br>	£ GBP = " + eth.GBP);
