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

function showPage(page){
    const contentDiv = document.getElementById('content');
    switch (page){
        case 'page1':
            contentDiv.innerHTML =`
                    <div id="boxContainer">
                        <div class="box">
                            <p>box 1</p>

                        </div>
                        <div class="box">
                            <img id="loadingLogo" src="images/loading.gif" alt="Loading">
                            <p>box 2</p>

                        </div>
                        <div class="box">
                            <img id="completeLogo" src="images/complete.png" alt="Complete">
                            <p>box 3</p>
                        </div>
                    </div>`;
            break;
        case 'page2':
            contentDiv.innerHTML =`
            <p>Empty Tab</p>`;
            break;
        case 'page3':
            contentDiv.innerHTML = `
            <p>Empty Tab 2</p>`;
            break;
        default:
            contentDiv.innerHTML =`
            <p>Select a Tab</p>`;
    }
}

//show page 1 as default
window.onload = function() {
    showPage('page1');
};



