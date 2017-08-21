require('colors');
const Benchmark = require('benchmark');

const ITEM_COUNT = 100;
const SUB_ITEM_COUNT = 1000;

function getData() {
  return (new Array(ITEM_COUNT)).fill(0).map((item, index) => {
    return {
      index,
      items: (new Array(SUB_ITEM_COUNT)).fill(0).map((item, index) => index)
    };
  });
}

const suite = new Benchmark.Suite;

suite
.add('concat', function() {

  getData().reduce((acc, item) => {
    return acc.concat(item.items);
  }, []);

})

.add('push.apply', function() {

  getData().reduce((acc, item) => {
    Array.prototype.push.apply(acc, item.items);
    return acc;
  }, []);

})

.add('push spread', function() {

  getData().reduce((acc, item) => {
    acc.push(...item.items);
    return acc;
  }, []);

})

.on('cycle', function(event) {
  console.log(String(event.target).cyan);
})
.on('complete', function() {
  console.log(('Fastest is ' + this.filter('fastest').map('name')).green);
})
.run();
