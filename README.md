# benchmark-concat-vs-push

ITEM_COUNT = 1000;
SUB_ITEM_COUNT = 100;

```
concat x 2.55 ops/sec ±2.06% (11 runs sampled)
push.apply x 11.39 ops/sec ±2.08% (31 runs sampled)
push spread x 9.58 ops/sec ±1.83% (27 runs sampled)
Fastest is push.apply
```

ITEM_COUNT = 100;
SUB_ITEM_COUNT = 1000;

```
concat x 8.62 ops/sec ±3.16% (26 runs sampled)
push.apply x 11.76 ops/sec ±2.96% (32 runs sampled)
push spread x 9.60 ops/sec ±6.22% (28 runs sampled)
Fastest is push.apply
```