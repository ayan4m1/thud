# Thud - Yeoman Issue!

Yeoman isn't playing well with Babel 7 compiled JavaScript.

```
E:\code\generator-ecomod\generators\app\index.js:33
    _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, args, opts));
                                                                     ^

TypeError: Class constructor Generator cannot be invoked without 'new'
    at new _class (E:\code\generator-ecomod\generators\app\index.js:33:70)
    at Environment.instantiate (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:427:12)
    at Environment.create (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:405:17)
    at Environment.run (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:462:28)
    at env.lookup (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:159:11)
    at Environment.resolver.lookup (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\resolver.js:51:12)
    at init (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:120:7)
    at pre (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:79:3)
    at Object.<anonymous> (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:208:3)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
```

To reproduce:

```
$> cd yeoman-issue
$> npm install
$> npx babel --out-file generators/app/index.js src/app/index.js
$> npm link
$> yo yeoman-issue
```

This can also be reproduced with [this repo](https://github.com/boneskull/generator-bonestorm/blob/master/src/app/index.js).