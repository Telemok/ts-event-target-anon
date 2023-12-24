# ts-event-target-anon
EventTargetAnon extends EventTarget to add lambda noname addEventListener.

## Before this library:
```JavaScript
function listener(event){
    console.log("onmessage", event.detail);
}
/* Subscribe */
myInstance.addEventListener(listener);

/* Unsubscribe */
myInstance.removeEventListener(listener);
```
## After this library:
```JavaScript
/* Add anonymous event listener. */
let selfDestructInstance = myInstance.addEventListener('message',(event)=>{
    console.log("onmessage", event.detail);
});

/* unsubscribe */
selfDestructInstance.destroy();
```


## Installation:
```Bash
npm install git+https://github.com/Telemok/ts-event-target-anon.git
```
## Import to updated JavaScript, module, dom:
```JavaScript
import {EventTargetAnon} from "@telemok/ts-event-target-anon"
```

## Import to old node.js:
```JavaScript
const {EventTargetAnon} = require('@telemok/ts-event-target-anon/dist/commonjs/index.js');
```

## Examples:

#### 1. Subscribe, unsubscribe, throw on seconds unsubscribe
/examples/2xunsubscribe.js

```JavaScript
//const {EventTargetAnon} = require('@telemok/ts-event-target-anon/dist/commonjs/index.js');
import {EventTargetAnon} from "@telemok/ts-event-target-anon"

class MyClass extends EventTargetAnon
{

}
let myInstance = new MyClass();

/* Add anonymous event listener. */
let selfDestructInstance = myInstance.addEventListener('message',(event)=>{
    console.log("onmessage", event.detail);
});

console.log("Subscribed = ", !selfDestructInstance.isDestroyed());//>Subscribed =  true

/* listener subscribed */
let e = new Event('message');
e.detail = {text:"Event message was sent"};
myInstance.dispatchEvent(e);//>onmessage { text: 'Event message was sent' }

/* unsubscribe */
selfDestructInstance.destroy();

console.log("Subscribed = ", !selfDestructInstance.isDestroyed());//>Subscribed =  false

/* listener unsubscribed */
e = new Event('message');
e.detail = {text:"Event message was not sent"};
myInstance.dispatchEvent(e);//> nothing do

selfDestructInstance.destroy();//> throws
```

#### 2. Mass unsubscribe

```JavaScript
import {Destrash} from "@telemok/ts-event-target-anon"

const destrash = new Destrash();

/* insert 1st event */
destrash.insert = myInstance.addEventListener('type0',(event)=>{
    console.log("type0", event.detail);
});
/* insert many many events */
/* insert 100s event */
destrash.insert = myInstance.addEventListener('type100',(event)=>{
    console.log("type100", event.detail);
});

/* When need destroy all events */
destrash.destroyAll();
```