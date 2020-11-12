import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
const { error, notice, Stack } = require('@pnotify/core');



const myStack = new Stack({ 
    dir2: 'down',
    maxOpen: 1,
    spacing1: 5,
    maxStrategy: close,
    modal: false,
    maxClosureCausesWait: false,
});

const pnotifySettings = {
    stack: myStack,
    mode: 'light',
    sticker: false,
    width: '300px',
    maxTextHeight: null,
    delay: 2500,
    
}

export default function callNotification(message, type) {
    
    if (type === 'error') {
        error({text: message, title: 'Oops!', ...pnotifySettings})
    } else {
        notice({text: message, title: 'Attention', ...pnotifySettings})
    }

}

