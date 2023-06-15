function viewImage(imageName){
    const contentBox = document.getElementsByClassName("contentBox");
    const imageBox = document.getElementsByClassName("imageBox");

    const ss = document.getElementById("imgBox");
    ss.innerHTML="<br>"
    +"<img class=\"img-fluid rounded mx-auto d-block img-responsive\" src=\"img/webp/"+imageName+".webp\" ><br>"
    +"<div class=\"col text-center\">"
    +"<button class=\"btn btn-secondary\" onclick=\"backToRead()\">Return</button>"
    +"</div>";


    
    
    contentBox[0].style.display = "none";
    imageBox[0].style.display = "block";
    
}

function backToRead(){
    const contentBox = document.getElementsByClassName("contentBox");
    const imageBox = document.getElementsByClassName("imageBox");
    
    contentBox[0].style.display = "block";
    imageBox[0].style.display = "none";
}   