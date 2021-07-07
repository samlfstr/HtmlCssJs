// get the extention of a file name
let file_name = "xox.jpg";
let extention = file_name.slice(file_name.indexOf('.'));
let doc_name = file_name.slice(0, file_name.indexOf('.'));
document.write(doc_name);

// using simply indexOf and slice function we can get
// the file name and the extention