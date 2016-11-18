/**
 * Created by keith on 2016-11-17.
 */
setInterval(function(){
let pdfDir = document.querySelectorAll(".course");
for(let i = 0; i < pdfDir.length; i += 1) {
    let fileName = pdfDir[i].textContent;
    fileName = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length);
    fileName = document.createTextNode(fileName)
    pdfDir[i].textContent = ""
    pdfDir[i].appendChild(fileName);
}},2000);