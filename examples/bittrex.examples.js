
const bittrex = require('../node.bittrex.api');
const APIKEY = '4eb6df82180a4969aed29530da3e0a6f';
const APISECRET = '84bf7c66a49d4dd99401e9a710f6fba2';

bittrex.options({ 
  'apikey' : APIKEY, 
  'apisecret' : APISECRET, 
  'stream' : false, 
  'verbose' : false, 
  'cleartext' : false 
});

/**
 *  sendCustomRequest example
 */
// bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc', function( data ) {
//   console.log( data );
// }, true);

/**
 *  getmarkethistory example
 */
// bittrex.getmarkethistory( { market : 'BTC-LTC' }, function( data ) {
//   console.log( data.result );
// });

/**
 *  getorderbook example
 */
// bittrex.getorderbook( { market : 'BTC-PIVX', depth : 10, type : 'both' }, function( data ) {

//     data.result.buy.forEach(function(dataset) { console.log(dataset); });
//     data.result.sell.forEach(function(dataset) { console.log(dataset); });
// });
const buy = {
  market: 'BTC-VBK',
  quantity: 0.22,
  rate: 0.00002450
}

setInterval(()=>{
  bittrex.buylimit(buy, function( data ) {
    console.log(data);
    // let cancel = data.result;
    // setTimeout(()=>{
    //   bittrex.cancel(cancel, function( data ) {
    //   console.log(data);
    // });
    // }, 2000);
  });
}, 100);
// bittrex.selllimit(sell, function( data ) {
//   console.log(data);
//   let cancel = data.result;
//   setTimeout(()=>{
//     bittrex.cancel(cancel, function( data ) {
//     console.log(data);
//     });
//   }, 10000);
// });
// bittrex.getbalances(function( data ) {
//   console.log(data.result );
// });
