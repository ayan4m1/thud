# Thud - Yeoman Issue!

Yeoman isn't playing well with Babel 7 compiled JavaScript. There are two exceptions I can produce based on how `yeoman-generator` is imported.

If `import Generator from 'yeoman-generator'` is used, we observe:

```
X:\code\thud\yeoman-issue\generators\generator\index.js:40
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Test).call(this, args, opts));
                                                                   ^
TypeError: Class constructor Generator cannot be invoked without 'new'
    at new Test (E:\code\thud\yeoman-issue\generators\generator\index.js:40:68)
    at Environment.instantiate (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:427:12)
    at Environment.create (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:379:19)
    at Environment.run (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\environment.js:462:28)
    at env.lookup (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:159:11)
    at Environment.resolver.lookup (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\node_modules\yeoman-environment\lib\resolver.js:51:12)
    at init (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:120:7)
    at pre (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:79:3)
    at Object.<anonymous> (C:\Users\ayan4m1\AppData\Roaming\npm\node_modules\yo\lib\cli.js:208:3)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
```

If `import { Base } from 'yeoman-generator'` is used, we observe:

```
X:\code\thud\yeoman-issue\generators\base\index.js:24
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
                                                                                                          ^
TypeError: Super expression must either be null or a function
    at _inherits (E:\code\thud\yeoman-issue\generators\base\index.js:24:113)
    at E:\code\thud\yeoman-issue\generators\base\index.js:31:3
    at Object.<anonymous> (E:\code\thud\yeoman-issue\generators\base\index.js:53:2)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Module.require (internal/modules/cjs/loader.js:636:17)
    at require (internal/modules/cjs/helpers.js:20:18)
```

To reproduce:

```
$> cd yeoman-issue
$> npm install
$> npm run build
$> npm link
$> yo yeoman-issue:base
$> yo yeoman-issue:generator
```

This can also be reproduced with [this repo](https://github.com/boneskull/generator-bonestorm/blob/master/src/app/index.js).