//const {EventTargetAnon} = require('@telemok/ts-event-target-anon/dist/commonjs/index.js');
//const {EventTargetAnon} = require('../dist/commonjs/index.js');
//import {EventTargetAnon} from "@telemok/ts-event-target-anon"
import {EventTargetAnon} from "../dist/esnext/index.js"


class MyClass extends EventTargetAnon
{

}
let myInstance =  new MyClass();

let i =0;
let subscription = myInstance.addEventListener("tick",()=>{
    i++;
    console.log("listener",i)
    if(i >= 5)
        subscription.destroy();
})
setInterval(()=>{
    console.log("interval");
    myInstance.dispatchEvent(new Event("tick"));
},500);