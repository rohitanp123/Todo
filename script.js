var ul = document.getElementById('list')
var li ;


var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

function addItem(){
    var input = document.getElementById('input')
    var inputValue = input.value;
    ul = document.getElementById('list')
    var newText = document.createTextNode(inputValue);
    // alert(newText.isElementContentWhitespace);
    if (inputValue === '') {
        return false;
    } else {
        var li = document.createElement('li');
        // alert(li);
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id','check');

        var label = document.createElement('label')
        label.setAttribute('lbl','for')
        
        // ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(newText);
        li.appendChild(label);
        ul.insertBefore(li , ul.childNodes[1]);


        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value=''
    }
}

function removeItem(){
    li = ul.children;
    console.log(li.length);
    for (let index = 0; index < li.length; index++) {
        
        while (li[index] && li[index].children[0].checked)
        {
            // console.log(li[index]);
            ul.removeChild(li[index])
        }  
    }
}