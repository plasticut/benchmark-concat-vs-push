# benchmark-concat-vs-push

### node v6.9.1

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

### node v8.0.0

ITEM_COUNT = 1000;
SUB_ITEM_COUNT = 100;

```
concat x 2.68 ops/sec ±4.58% (11 runs sampled)
push.apply x 44.89 ops/sec ±1.61% (55 runs sampled)
push spread x 45.30 ops/sec ±1.47% (56 runs sampled)
Fastest is push spread,push.apply
```

ITEM_COUNT = 100;
SUB_ITEM_COUNT = 1000;

```
concat x 18.00 ops/sec ±2.73% (34 runs sampled)
push.apply x 45.12 ops/sec ±1.77% (56 runs sampled)
push spread x 45.53 ops/sec ±1.70% (56 runs sampled)
Fastest is push spread,push.apply
```