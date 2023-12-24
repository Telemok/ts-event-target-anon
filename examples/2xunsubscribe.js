//const { EventTargetAnon } = require('@telemok/ts-event-target-anon');
// import {EventTargetAnon} from "@telemok/ts-event-target-anon"
import {EventTargetAnon} from "../dist/esnext/index.js"


class MyClass extends EventTargetAnon
{

}
let myInstance = new MyClass();
let selfDestructInstance = myInstance.addEventListener('message',(event)=>{
    console.log("onmessage",event.detail);
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




