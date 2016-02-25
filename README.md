babel-remove-pure-exps
======================

A [Babel][] transform removing effect-less expression statements.

[babel]: https://babeljs.io/

Example
-------

The following:

```javascript
a + b || Math.abs(c);
b - i++;
```

is transformed to:

```javascript
b - i++;
```

Options
-------

The transform is fairly smart deciding what can be removed and what needs to be
left, but you can help it with some hints.

#### pureMembers

Member expressions:

```javascript
a.b['c'];
```

cannot be removed by default because a property getter may do something more
than just return a value:

```javascript
node.offsetHeight;  // Triggers a browser reflow.
```

Pass a `pureMembers` regex to mark some member chains as side-effects free:

```javscript
['transform-remove-pure-exps': {pureMembers: /^a\.b\.c$/}]
```

#### pureCallees

By default a list of built-in functions, such as `Object.is()` and `Math.abs()`
is assumed to be side-effects free. <sup>[1](#f1)</sup> You can take control of
this assumption by passing a custom "pure callees" regex:

```javscript
['transform-remove-pure-exps': {pureCallees: /^JSON\.parse$/}]
```

<sub>
<a id="f1">1.</a>
    See [side-effects-safe][] for a full list and some caveats.
</sub>

[side-effects-safe]: https://github.com/wrwrwr/side-effects-safe

Installation
------------

```bash
npm install babel-cli babel-plugin-transform-remove-pure-exps
```
