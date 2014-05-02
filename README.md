jaco
====

Japanese string and charactor converter.

[![NPM version](https://badge.fury.io/js/jaco.svg)](http://badge.fury.io/js/jaco)
[![Build Status](https://travis-ci.org/YusukeHirao/jaco.svg?branch=master)](https://travis-ci.org/YusukeHirao/jaco)
[![Code Climate](https://codeclimate.com/github/YusukeHirao/jaco.png)](https://codeclimate.com/github/YusukeHirao/jaco)
[![Dependency Status](https://david-dm.org/YusukeHirao/jaco.svg)](https://david-dm.org/YusukeHirao/jaco)
[![devDependency Status](https://david-dm.org/YusukeHirao/jaco/dev-status.svg)](https://david-dm.org/YusukeHirao/jaco#info=devDependencies)

## install

```sh
$ npm install jaco
```

## Usage

```javascript
var jaco = require('jaco');

jaco.hiraganize('カタカナ'); // => かたかな
jaco.katakanize('かたかな'); // => カタカナ
```
