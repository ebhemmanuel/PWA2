/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 4/4/14
 * Time: 3:18 PM
 * To change this template use File | Settings | File Templates.
 */


function textChange(){

    var inElements= document.getElementById("textIn");
    var outElements= document.getElementsByTagName("p");
    var headingElements = document.getElementsByClassName("heading") ;

    for (var i=0; i<outElements.length; i++){

        var outItem = outElements[i];
        headingElements[i].innerHTML="Updating" + (i+1) + "to" + inElements.value;

        outItem.innerHTML= inElements.value;


    }


}
