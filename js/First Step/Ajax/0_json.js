/*
    1. Create xhr
    2. Call back function
    3. Open (get, path)
    4. Send
*/


function click_json(){
    let btn = document.querySelector('#btn');
    btn.style.visibility = 'hidden';
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.statusText);
            // when I use response text function it returns the 0_data.json
            console.log(xhr.responseText);
            // what's really cool is to parse that json into js here's how
            let data = JSON.parse(xhr.responseText);

            // now lets get things little more interesting
            let employeeStatus = '<ul class="employee_list"></ul>';
            for (let i = 0; i < data.length; i++) {
                if (data[i].in_office === true){
                    employeeStatus += '<li class="in">';
                }else{
                    employeeStatus += '<li class="out">';
                }
                employeeStatus += data[i].name;
                employeeStatus += '</li>';
            }
            let container = document.querySelector('.container');
            container.innerHTML = employeeStatus;



        } else if (status === '404'){
            console.log('File not found.');
        }
    }
    xhr.open('GET', 'Data/0_data.json');
    xhr.send();
}
