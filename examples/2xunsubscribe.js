//const { EventTargetAnon } = require('@telemok/ts-event-target-anon');
// import {EventTargetAnon} from "@telemok/ts-event-target-anon"
import {EventTargetAnon} from "../dist/esnext/index.js"


class MyClass extends EventTargetAnon
{

}
let myInstance = new MyClass();
let subscribableInstance = myInstance.addEventListener('message',(event)=>{
    console.log("onmessage",event.detail);
});

console.log("Subscribed = ", !subscribableInstance.isDestroyed());//>Subscribed =  true

/* listener subscribed */
let e = new Event('message');
e.detail = {text:"Event message was sent"};
myInstance.dispatchEvent(e);//>onmessage { text: 'Event message was sent' }

/* unsubscribe */
subscribableInstance.destroy();

console.log("Subscribed = ", !subscribableInstance.isDestroyed());//>Subscribed =  false

/* listener unsubscribed */
e = new Event('message');
e.detail = {text:"Event message was not sent"};
myInstance.dispatchEvent(e);//> nothing do

subscribableInstance.destroy();//> throws




