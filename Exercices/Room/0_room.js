/*
    1. Create the xhr
    2. Callback function
    3. Open
    4. Send
*/

function click_me(){
    let xhr = new XMLHttpRequest();
    let room = document.querySelector('.room');
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            let html_body = '<ul>';
            let js_obj = JSON.parse(xhr.responseText);
            for (let i = 0; i < js_obj.length; i++) {
                if (js_obj[i].empty === true){
                    html_body += '<li class="in">' + js_obj[i].name + '</li>';
                }else{
                    html_body += '<li class="out">' + js_obj[i].name + '</li>';
                }
            }
            html_body += '</ul>';
            room.innerHTML = html_body;
        } else if (xhr.status === 404) {
            console.log('File not found!');
        } else if (xhr.status === 500) {
            console.log('Internal server error!');
        }
    }
    xhr.open('GET', 'Data/0_data.json');
    xhr.send();

}