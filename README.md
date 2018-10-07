# @ionic-native/google-maps@5.0.xxx-beta

This demo application is aim to describe how to use `@ionic-native/google-maps` with Ionic v4.

- [sample.apk](https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/sample.apk?raw=true)
- [browser demo](https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/)


## Before use this demo...

Please replace `(API key)` in  `config.xml` and `package.json` files with your API keys.

-----------

# How to use?

```
$> ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID="..." --variable API_KEY_FOR_IOS="..."

$> npm install @ionic-native/core@beta @ionic-native/google-maps@beta --save
```


-------------

# How to build this project for PWA?

```
$> git clone https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4

$> vim package.json  // then replace `(YOUR_API_KEY)` with your key
https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/package.json#L83-L84

$> vim config.xml  //  then replace `(YOUR_API_KEY)` with your key

$> npm i

$> ionic cordova prepare

$> npm run buildwww
https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/package.json#L13
```
