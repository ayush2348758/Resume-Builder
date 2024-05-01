// alert("loading");
function addNewWEField()
{
    // console.log("Adding new Fields");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Here");

    let weob = document.getElementById("we");

    let weAddButtonOb = document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonOb);


}

function addNewAQField()
{
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Here");

    let aqob = document.getElementById("aq");

    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqob.insertBefore(newNode, aqAddButtonOb);

   


}

function addNewSkField()
{
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder',"Enter Here");

    let skob = document.getElementById("sk");

    let skAddButtonOb = document.getElementById("skAddButton");

    skob.insertBefore(newNode, skAddButtonOb);
}

// Generating CV 

function generateCV()
{
    // console.log("generating CV")

    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML= nameField;

    // direct procedure

    document.getElementById('nameT2').innerHTML = nameField;

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;
    document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;

    //Objective set

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //work experience

    let wes = document.getElementsByClassName('weField');

    let str = '';

    for(let e of wes)
    {
        str = str+`<li> ${e.value} </li>`

        
    }

    document.getElementById('weT').innerHTML=str;


    let aqs = document.getElementsByClassName('eqField');
    let str1 = '';

    for(let e of aqs)
    {
        str1 = str1+`<li> ${e.value} </li>`
    }

    document.getElementById('aqT').innerHTML=str1;
    //printing CV
     
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

    let photoSrc = document.getElementById('photoField').value; // Assuming there's an input field for photo URL with id 'photoField'
    document.getElementById('photo').src = photoSrc;
   

}

function printCV()
{
    window.print();
}