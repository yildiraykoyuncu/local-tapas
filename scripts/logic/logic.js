'use strict';
console.log('--- loading logic: _');

// either expect or assert, up to you
const expect = chai.expect;


/**
 *
 */
const populateList = (plates = [], platesList) => {
    platesList.innerHTML = plates.map((plate, i) => {
        return `<li>
        <input type="checkbox" id="item${i}" data-index=${i} ${plate.done ? "checked":''}>
        <label for="item${i}">${plate.text}</label>
        <button type="button" id="delete" class="delete-btn" data-index=${i}>X</button>
        </li>
        `
    }).join('');

};

const createItem = (text) => {
    const item = {
        text,
        done: false
    }

    items.push(item)

    localStorage.setItem('items', JSON.stringify(items))

}

const deleteItem = (index) => {

    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items))

}

populateList(items, itemList)
console.log(items)


// write only one top-level describe in this file
describe('_', () => {
    // write as many nested describes as you would like
    describe('_', () => {
        // write as many it's as you want in each describe
        it('_', () => {
            // have only one assertion inside each it
        });
    });
});

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/