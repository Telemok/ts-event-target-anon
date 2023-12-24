import {Destrash} from "../dist/esnext/index.js"

// Example usage
const destrash = new Destrash();

// Add objects to the list
destrash.insert = {
    destroy: () => {
        console.log('Object 1 destroyed');
    },
};

destrash.insert = {
    destroy: () => {
        console.log('Object 2 destroyed');
    },
};

// Destroy all objects
destrash.destroyAll();






