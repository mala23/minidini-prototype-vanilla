var itemName = document.getElementById('itemName')
var itemAdd = document.getElementById('item-add')

function createItem() {
    var itemNameValue = itemName.value
    console.log(itemNameValue)
    var list = document.getElementById('item-list')
    var itemSection = document.createElement('section')
    var itemLi = document.createElement('li')
    var itemCheckbox = document.createElement('input')
    itemSection.setAttribute('class', 'item-section');
    itemCheckbox.setAttribute('type', 'checkbox');
    itemCheckbox.setAttribute('class', 'item-checkbox');
    list.appendChild(itemSection)
    itemSection.appendChild(itemCheckbox)
    itemSection.appendChild(itemLi)
    itemLi.appendChild(document.createTextNode(itemNameValue))
    itemName.value=''
}

itemName.addEventListener('keyup', function(event){
    event.preventDefault()
    if(event.keyCode === 13) {
          createItem()
        }
})
