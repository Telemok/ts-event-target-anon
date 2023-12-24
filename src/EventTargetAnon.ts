/**
 * @file    EventTargetAnon.ts
 * @brief
 * Like DataView, but byte addressing changed to bit addressing.
 * Set, get, push, unshift, pop, shift functions for each data type.
 * Data types: boolean and custom bit size uint, int, float. For example: Uint17, Int27 or BigUint61.
 * Like a BitBuffer, BitArray, BitStack, BitQueue.
 * Small memory using: used 1 bit in memory for every 1 bit data. 23 bits data => 3 bytes in RAM.
 * Full assert arguments of functions.
 * NodeJs and browser Javascript support.
 * Endianness: Little Endian and Big Endian byte order supported.
 * Significant bit: LSB (lest) by default, MSB (most) is supported.
 * Can export and import to C/C++ BitDataView library (only if LSB + Little Endian).
 * Fastest library with same advantages.
 * Good library to decrypt RS-232, HDLC, Ethernet, USB, Can-Bus, TCP/IP RAW packets.
 * @author  Dmitrii Arshinnikov <www.telemok.com@gmail.com> github.com/Telemok npmjs.com/~telemok
 * https://github.com/Telemok/ts-event-target-anon.git
 * @version 0.0.231224
 * @date 2023-12-24
 *
 @verbatim

 Licensed under the Apache License, Version 2.0(the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 @endverbatim
 */

import {Destroy} from "./Destroy.js";

/**
 * Represents an object that can dispatch events and provides an enhanced addEventListener method.
 * @class
 * @extends EventTarget
 */
export class EventTargetAnon extends EventTarget
{
    /**
     * Adds an event listener to the object and returns an object to facilitate easy removal of the listener.
     * @param {string} type - The event type to listen for.
     * @param {EventListenerOrEventListenerObject | null} listener - The callback function or object that receives the event.
     * @param {boolean | AddEventListenerOptions} [options] - An options object that specifies characteristics about the event listener.
     * @returns {{ destroy: () => void }} - An object with a destroy method to remove the listener.
     */
    public addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): Destroy
    {
        super.addEventListener(type, listener, options);
        return new Destroy(()=>{super.removeEventListener(type, listener, options);});
    }
}