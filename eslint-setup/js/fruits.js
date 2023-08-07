import lodash from 'lodash';

const arr = ['apples', 'grapes', 'oranges'];

lodash.findIndex(arr, 'grapes');

function checkEven(number) {
    return number % 2 === 0 ? true : false;
}

checkEven(4);