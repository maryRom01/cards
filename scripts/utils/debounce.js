/**
 * @description Функція debounce приймає функцію і таймаут, і повертає нову функцію, яка виконує передану функцію не частіше ніж раз на таймаут.
 * @param func {function}
 * @param timeout {number} in ms
 * @return {function}
 */
const debounce = (func, timeout) => {
    let timeoutId; 

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId); 

        timeoutId = setTimeout(() => { 
            func.apply(context, args);
        }, timeout);
    };
}

export default debounce;