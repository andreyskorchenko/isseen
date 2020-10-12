# Isseen
Function prototype for element.

## Install
```sh
npm install isseen
```

## Usage
```js
import 'isseen';

const el = document.querySelectorAll('.animation');

document.addEventListener('scroll', () => {
    el.forEach(item => {
        item.isSeen() ?
        item.classList.add('show') :
        item.classList.remove('show');
    });
}, { passive: true });