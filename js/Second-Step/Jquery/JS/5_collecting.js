/*Create the button connection*/
// Selection
let anim_ok = $('#user').hide();
let anim_warn = $('#warning').hide();

// Selection
$('#previewButton').on(
    'click',
    ()=>{
        let title = $('#blogTitleInput').val();
        let content = $('#blogContentInput').val();

        if ((title && content) !== ''){
            console.log(title, content);
            anim_ok.fadeIn().delay(1000).fadeOut();
        }
        else{
            anim_warn.fadeIn().delay(1000).fadeOut();
        }


    }
);