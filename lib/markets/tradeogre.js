const request = require('postman-request');
const base_url = 'https://tradeogre.com/api/v1/';
const market_url_template = 'https://tradeogre.com/exchange/{coin}-{base}';

function get_summary(coin, exchange, cb) {
  const req_url = base_url + 'ticker/' + coin + '-' + exchange;

  request({uri: req_url, json: true}, function (error, response, body) {
    if (error)
      return cb(error, null);
    else if (body.error != null)
      return cb(body.error.message, null);
    else {
      var retVal = {
        'high': body.high,
        'low': body.low,
        'volume': body.volume,
        'bid': body.bid,
        'ask': body.ask,
        'last': body.price,
        'prev': body.initialprice
      };

      return cb(null, retVal);
    }
  }).on('error', function(err) {
    return cb(err, null);
  });
}

function get_trades(coin, exchange, cb) {
  const req_url = base_url + 'history/' + coin + '-' + exchange;

  request({uri: req_url, json: true}, function (error, response, body) {
    if (error)
      return cb(error, null);
    else if (body.error != null)
      return cb(body.error.message, null);
    else {
      var trades = [];

      for (var i = 0; i < body.length; i++) {
        var trade = {
          ordertype: body[i]['type'],
          price: parseFloat(body[i]['price']),
          quantity: parseFloat(body[i]['quantity']),
          total: parseFloat(body[i]['price']) * parseFloat(body[i]['quantity']),
          timestamp: parseInt(body[i].date)
        };

        trades.push(trade);
      }
      
      // Reverse the order of the trades array
      trades.reverse();

      return cb(null, trades);
    }
  }).on('error', function(err) {
    return cb(err, null);
  });
}

function get_orders(coin, exchange, cb) {
  const req_url = base_url + 'orders/' + coin + '-' + exchange;

  request({ uri: req_url, json: true }, function (error, response, body) {
    if (error)
      return cb(error, [], []);
    else if (body.error != null)
      return cb(body.error.message, [], []);
    else {
      var orders = body;
      var buys = [];
      var sells = [];

      for (var price in orders.buy) {
        if (orders.buy.hasOwnProperty(price)) {
          var order = {
            price: parseFloat(price),
            quantity: parseFloat(orders.buy[price])
          };
          buys.push(order);
        }
      }

      for (var price in orders.sell) {
        if (orders.sell.hasOwnProperty(price)) {
          var order = {
            price: parseFloat(price),
            quantity: parseFloat(orders.sell[price])
          };
          sells.push(order);
        }
      }

      // Sort buy orders in descending order of price
      buys.sort((a, b) => b.price - a.price);

      // Sort sell orders in ascending order of price
      sells.sort((a, b) => a.price - b.price);

      return cb(null, buys, sells);
    }
  }).on('error', function (err) {
    return cb(err, null, null);
  });
}

module.exports = {
  market_name: 'TradeOgre',
  market_logo: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG9SURBVDhPlZM9KIVhFMcfn8m3FJGBwaAshAmbjU1hUL7pXooSAyWGy4CyYBCDZCIGkYEYFCkhUgrDTRl8JEUp/P7v+96362Pxr9895znPc56P855rChY9OVAGGeYfYn2ibIgzqMdMwBX0HdZMrhFLw8/C38P+EvPlGL+1gUQgG7MPSTAD5zAODWwyh/0m1q9iNkLtoTEsusR02SPTBHUwBkcKBItkL6YCMt0bSExEYV7tkasTWAPd7hB6oB10+HwYP67SKwvDMRGQB5GKoVQogWp4hEaIBenCfYKjZugFH9wo8EP3kGK7ll7cDbh+LmbIHlnXq7JdV9ugQgfrzNqA5DjMJOjbrsMoRT3AboK0A0vQYo2M2YV32A7coA30zifwkvymIJqFDrgAPSsGJNUnGo5DOb0Ip19RNEDyteNLxTACrRCvgKN8KGXtp24wDZpchimwxMbJmFrQqT8L6iN5S4420CfT1T0E9a6AhiHBdo02U1GfoZN1gwpKgRp0E7xzfJ2ujlQ3BqQGU1HzWKf/jCs1zgJYvU6imqYP1KoPcAr6Eisk/tUXJoSkRCafsHqrivMBt+AnHvykP2TMF4pQf5ir+xRbAAAAAElFTkSuQmCC',
  market_url_template: market_url_template,
  market_url_case: 'u',
  get_data: function(settings, cb) {
    var error = null;
      get_orders(settings.coin, settings.exchange, function(err, buys, sells) {
        if (err) { error = err; }
        get_trades(settings.coin, settings.exchange, function(err, trades) {
          if (err) { error = err; }
          get_summary(settings.coin, settings.exchange, function(err, stats) {
            if (err) { error = err; }
            return cb(error, {buys: buys, sells: sells, trades: trades, stats: stats});
        });
      });
    });
  }
};