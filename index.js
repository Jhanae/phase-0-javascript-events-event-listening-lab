function clickalert(){
    alert('I was clicked!');
}
function addingEventListener() {
    const input = document.getElementById('input');

    input.addEventListener('click', clickalert); 
}
addingEventListener();