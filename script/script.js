const myMediaQuery = window.matchMedia('screen and (max-width: 540px)')
var reUploadImg = document.getElementById("reuploadLabel");
var file;
var preview = document.getElementById("preview");
var imageupload = document.getElementById("upload_image")
var successImage = myMediaQuery.matches ? "./images/check-white.svg" : "./images/check-green.svg"; 
var successAttacheImage = myMediaQuery.matches ? "./images/attachment-white.svg" : "./images/attachment-black.svg";

const uploadBtn = document.getElementsByName('uploadbtn')

const dragNdrop = (event) => {
    file = event.target.files[0];
    if(file?.name){
        imageupload.style.display = "none";
        preview.innerHTML = `<div class="mycard mt-5" id="uploadbtn">
                <div class="text-center">
                    <div class="mt-5">
                        <img src=${successImage} width="50x"/>
                    </div>
                    <p class="text-success mt-3 fw-bold">Image uploaded successfully</p>
                </div> 
                <div class="attach-text-align">
                    <img src=${successAttacheImage} width="20px"/>
                    <span class="ms-1 attach-text fw-bold"> ` + file?.name +`</span>
                </div>                   
            </div>
            <div class="mt-5">
                <label id="uploadbtn" for="uploadFile" class="button btn-lg px-5">Reupload Image</label>
            </div>
        `;
    }
    
}

function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
        if(file?.name){
            preview.innerHTML = `<div class="mycard mt-5">
                <div class="text-center">
                    <div class="mt-5">
                        <img src="./images/check-white.svg" width="50x"/>
                    </div>
                    <p class="text-success mt-3 fw-bold">Image uploaded successfully</p>
                </div> 
                <div class="attach-text-align">
                    <img src="./images/attachment-white.svg" width="20px"/>
                    <span class="ms-1 attach-text fw-bold"> ` + file?.name +`</span>
                </div>                   
            </div>
            <div class="mt-5">
                <label id="uploadbtn" for="uploadFile" class="button px-5">Reupload Image</label>
            </div>
        `;
        }   
     } else {
        if(file?.name){            
            preview.innerHTML = `<div class="mycard mt-5">
                <div class="text-center">
                    <div class="mt-5">
                        <img src="./images/check-green.svg" width="50x"/>
                    </div>
                    <p class="text-success mt-3 fw-bold">Image uploaded successfully</p>
                </div> 
                <div class="attach-text-align">
                    <img src="./images/attachment-black.svg" width="20px"/>
                    <span class="ms-1 attach-text fw-bold"> ` + file?.name +`</span>
                </div>                   
            </div>
        `;
        }
     }
  }

  myMediaQuery.addEventListener('change', widthChangeCallback);