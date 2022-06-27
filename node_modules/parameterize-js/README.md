Parameterize.js
=================
This is a fork of [node-parameterize by Fırat Yalavuz](https://github.com/fyalavuz/node-parameterize), rewritten in TypeScript.

This repository adds node.js and npm support for [parameterize](http://apidock.com/rails/String/parameterize) which is originally used in Ruby on Rails. It replaces special characters in a string so that it may be used as part of a 'pretty' URL.

parameterize.js is a port of django admin [urlify.js](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js)

Installing
--------------------------------
```shell
npm install parameterize.js
```


Supports
--------------------------------
- Turkish
- Azerbaijani
- Serbian
- Greek
- Georgian
- Russian
- Ukranian
- Czech
- Polish
- Romanian
- Latvanian
- Lithuanian
- Arabic
- Latin special chars


Usage
--------------------------------
```typescript
import parameterize from 'parameterize.js';

// outputs
// parameterized-url-with-special-characters-ocisc
parameterize('parameterized url with special characters, öçıŞÇ');

// optional length limit
// outputs
// this-is-a-l
parameterize('this is a long text', {maxLength: 10});

// you can change separator character
// outputs
// this_is_a_l
parameterize('this is a long text', {maxLength: 10, separator: '_'});

```
