// Get values from an input when the button is clicked

// Callback for button
$('#previewButton').on (
    'click',
    ()=>{
        let title = $('#blogTitleInput').val();
        let content = $('#blogContentInput').val();

        console.log(title,content);

    }
);

