function changeImage()
{
    let ImageOne=document.getElementById("image1").style;
    let ImageTwo= document.getElementById("image2").style;
    if(ImageOne.visibility=="visible")
    {
        ImageOne.visibility="hidden";
        ImageTwo.visibility="visible";
    }
    else{
        ImageOne.visibility="visible";
        ImageTwo.visibility="hidden";
    }
}
