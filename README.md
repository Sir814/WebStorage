# WebStorage
Current browsing is not compatible with localstorage and sessionStorage, when one of them is used  there may be a potential security hazard . The plugin can use Cookie instead of localstorage and sessionStorage when it doesn't support, so that it can be compatible with low version browsers while using new technology.

## Example Usage
#### It can store simple values or Javascript objects. The Javascript objects are stored as JSON and upon retrival they are converted in object again. 
```javascript
/* Create instance, you can use this as global variable */
var Storage = new WebStorage('localStorage'); // localStorage or Cookies or sessionStorage

/* Set item */
Storage.setItem(key, value);

/* Get Item */
var item = Storage.getItem(key);

/* Remove Item */
Storage.removeItem(key)

/* Save Javascript object */
var object = { name: Daniel, experience: 6 };
Storage.setItem('user', object);

/* Get Javascript object */
var object = Storage.getJSON('user');
```
## Import File
#### IF  Development version
use WebStorage.js

#### IF Online version
use WebStorage.min.js
