/*global console*/

// Find Elements BY :
/*
    [1] - document.getElementById() // مدعومة في كل المتصفحات
    [2] - document.getElementsByTagName() //غير مدعومة في بعض المتصفحت
    [3] - document.getElementsByClassName()
    [4] - document.querySelectorAll() |Not Compatible With IE8
*/


document.getElementById("FirstTest").innerHTML = "GoodBye World";

console.log(document.getElementsByTagNameNS("*", "*"));

var myElement = document.getElementsByTagName("div");
myElement[2].innerHTML =
    "I'm Different By Using JS";

// Find Elements BY Opjects P1 :

/* 
    document.title
    document.images
    document.fforms
    document.body
    document.anchors
    document.links
*/

var myDiv = document.getElementById('TITLE');

myDiv.innerHTML = document.title;

document.getElementById('ImgSrc').innerHTML = document.images[0].src;

document.getElementById("TEST2").innerHTML = document.getElementById("TEST").innerHTML;

document.getElementById("hello").textContent = document.body.innerHTML;

// TODO: NOT COMPELETE CODE DOESN'T WORK !

// Get Set Element Content
/*
    innerText // Not Standard
    OuterTexe // Not Standard
    innerHTML
    outerHTML
    textContent
*/

// Get ,Set Attribute Value
// Element.Attribute [Direct Method]
/*
    id
    className
    title
    src
    alt
*/

// Get/Set Attribute

/*
    getAttribute('Attribute Name'), setAttribute('Attribute Name','Attribute Value')
*/

// Elements Attribute (Has,Remove)
/*
    hasAttrribute(Attribute Name) ;return T || F
    removeAttribute(Attribute)
*/


// Elememt ClassList | Length, Item, Contains

/* 
    classList // Not Supported With IE9
    classList.contain // return T || F
*/

// Elememt ClassList | Add, Remove, Toggle

/* 
    ToAddClass :
    Element.className += "Class Name"
    classList.add("ClassName2", "ClassName2")
    
    ToRemoveClass :
    classList.remove("ClssName")
    
    ToToggleClass :
    classList.toggle("ClassName")
*/

// Elements - Children - ChildrenNodes

/* 
    childElementCount // يعيد عدد عناصر الأب فقط
    Element.children[] Make Array Of Children Elements
    Element.childNodes Make Array Of All Things(ELements , Comments , Text)
*/

// Element [First/Last]Child , [First,Last]ElementChild

// Element - Children - appendchild (Append = الحاق)

// Elements - Children - InserBefore

/*
    insertBefore(Element B , Element)
*/

// Elemnts - Children - Remove Child

/*
    removeChild()
*/

// Elements - Node[Name, Value, Type]

/*
    nodeName
    tagName
    nodeValue ابقى ارجع 
    nodeType
*/

// Elements - Clone Node
/* 
    the diffrent between use cloneNode & not use it clone make a copy but AppendChild Will move the Element *
    
    cloneNode(true) // copy all (Content & Attribute) //// cloneNode(false) (Attribute Only) the defaule
*/
var copy = document.getElementById("main").firstElementChild;

document.getElementById("new").appendChild(copy);

// Elements - Parent Element :

/*
    parentElement
    parentNode
*/

// Elements - Next, Previous Sibling

/*
    nextSibling
    nextElementSibling
    previousSibling
    previousElementSibling
*/

//Elements - Focus, Blur

/*
    focus()
    blur()
*/

window.onload = function () {
    
    'use strict';
    
    document.getElementById('myInput').focus();
};

// Elements - Click

document.getElementById("hide").onclick = function () {
    "use strict";
    
    this.previousElementSibling.style.display = 'none';
    this.style.display = 'none';
};

window.onload = function () {
    "use strict";
    
    setTimeout(function () {
        
        document.getElementById("hide").click();
    }, 2000);
};

// Elements - Add Event Listner : addEventListner(Event(vlick),code(FunChion))

/*
    contain(Element) Search for a children & return T || F
*/

// Elements - client[Height, Width] :

/*
    viewable Area 
    Include Padding
    No Border
    No Margin
    No scroll
*/

// Elements - scroll[Height, Width] :

/*
    all Area Include although Invisible Area
    Include Padding
    Include scroll
    No Border
    No Margin
*/

// Elements - offset[Height, Width]

/*
    viewable Area 
    Include Padding
    Include Border
    Include Scroll
    No Margin
*/

//Element - Scroll[Top,Left]

var fixed = document.getElementById("fixed"),
    
    scroll = document.body.scrollTop;

// TODO: Return I will Return!
/*

window.onscroll = function () {
    "use strict";
    console.log(document.body.scrollTop);
    function abc() {
        console.log(document.body.scrollTop);
        if (scroll >= 1000 && scroll <= 1999) {
            fixed.style.color = "red";

        } else if (scroll >= 2000 && scroll <= 2999) {

            fixed.style.color = "green";
        } else if (scroll >= 3000 && scroll <= 3999) {
            fixed.style.color = "blue";
        }
        abc();
    }
    abc();
};
*/

// Elements - Client[Top,Left] // Include Border & Scroll

// Elements - Style ;

// Document - InputEncoding, LastModified, Url

console.warn(document.inputEncoding);

console.warn(document.lastModified);

console.warn(document.URL);

// Create The Main Element
var myElement = document.createElement("div");

// Append To Body 
document.body.appendChild(myElement);

// Creaate Text Node
var myText = document.createTextNode("This Div Vreated With Javascript");

// Create Start Comment
var myStartComment = document.createComment("Start Text Created With JavaScript");

// Create End Comments
var myEndComment = document.createComment("End Text Created With JS");

// Add The Comment To My Element
myElement.appendChild(myStartComment);

// Add Text To mt ELement 
myElement.appendChild(myText);

// Add The Comment To My Element
myElement.appendChild(myEndComment);

// Document - Create Attribute

// Create The Attribute

var myAttr = document.createAttribute("name");

myAttr.value = "HELLO";

myElement.setAttributeNode(myAttr);

// Events - How To Write All Methods

/*

    First Method : By Html 
    Second Method : by Java Script Function
    Third : By JS FUN
*/

// Events - Onfocus, Onblur, Onsubmit

/* 
    Osama Used Onsubmit with Form
*/

// Events - OnClick, Ondblclick, oncontextmenu, onmouseenter , onmouseleave

// preventDefault()

// Events - onkeypress , onkeyup, onkeydown