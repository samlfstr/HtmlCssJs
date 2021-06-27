/*
    1. Create an Xml HTML Request object
    2. Create a callback function : it's the complicated part
    3. Open a request
    4. Send the request
*/

//<editor-fold desc="Alternative Selection">
let click_obj = document.getElementById('clk');

click_obj.addEventListener(
    'click',
    ()=>{
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.state === 200){
                console.log(xhr.statusText);
            } else if (xhr.status === 404) {
                console.log('File not found.');
            } else if (xhr.status === 500){
                console.log('Internal server error.');
            }
        }
        xhr.open('GET', 'path.json');
        xhr.close();
    }
);
//</editor-fold>

//<editor-fold desc="Ajax connection">
function click_me() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(xhr.status === 200){
                console.log(xhr.responseText);
            }else if (xhr.status ===403){
                // forbidden
            }
            else if (xhr.status ===404){
                // not found
            }
            else if (xhr.status ===500){
                // server had a problem
            }
        }
    }
    xhr.open('GET', '18_ajax.html');
    xhr.send();
}
//</editor-fold>


