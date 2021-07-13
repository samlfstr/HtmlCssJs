/*Get values from an input when the button is clicked*/

// Hide message
select_user = $(`#user`).hide();

// Callback for button
$('#previewButton').on (
    'click',
    ()=>{
        let title = $('#blogTitleInput').val();
        let content = $('#blogContentInput').val();

        console.log(title,content);

        // Hide message
        select_user.hide();
        select_user.slideDown();
        select_user.delay(1000);
        select_user.slideUp();
    }
);

