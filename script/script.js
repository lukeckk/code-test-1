function addDiv(){
    var inputText = document.getElementById('input').value;
    var newDiv = document.createElement('div');
    // add 1px border
    newDiv.classList.add('box');

    //add image
    var img = document.createElement('img');
    img.src = "images/loading.gif";
    img.alt = "Loading";
    img.id = "dynamicLoadingLogo";
    newDiv.appendChild(img);

    //add text
    var text = document.createTextNode(inputText);
    newDiv.appendChild(text);

    //add newDiv to the container
    document.getElementById('boxContainer').appendChild(newDiv);

    //clear text after adding
    document.getElementById('input').value = "";

}

function loadingToComplete(){
    var image = document.getElementById('dynamicLoadingLogo');
    image.src = "images/complete.png";
    image.alt = "Complete";
}

setTimeout(loadingToComplete, 10000);



