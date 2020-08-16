'use strict';
console.log('--- loading handler: _');

const addItem = (event) => {
    event.preventDefault();
    console.log(event)
    const text = event.target.firstElementChild.value
    console.log(text)

    createItem(text);

    populateList(items, itemList)
    event.target.reset();
};

const toggleDone = (event) => {
    if (!event.target.matches('input')) return

    const el = event.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
}

const deleteItemHandler = (event) => {

    if (event.target.id !== 'delete') return;
    console.log(event);
    const index = event.target.dataset.index

    deleteItem(index)
    populateList(items, itemList);
}

/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/