/*
function addButton (name,typ,id) {
    var btn = document.createElement('button')
    btn.innerHTML 	= name;
    btn.type 		    = typ;
    btn.id 			    = id;
    var Ausgabebereich = document.getElementById('Tests');
    Ausgabebereich.appendChild(btn);
    //document.getElementById("Tests").disabled = true;
    return btn;
  }
*/

  function stage1 ()
  {
    document.getElementById("test").innerHTML = "Neuer Button: <br> <br>";
    var b2 = addButton("Test","button","b2");
    document.getElementById("b2").addEventListener('click', stage2()); // function ohne Klammerpaar

  }

  function stage2 ()
  {
    alert("Test");



  }


  function addButton (p1,p2,p3) {
    var btn = document.createElement('button');
    btn.innerHTML 	= p1;
    btn.type 		= p2;
    btn.id 			= p3;
    document.body.appendChild(btn);
    var Ausgabebereich = document.getElementById('test');
    Ausgabebereich.appendChild(btn);
    return btn;
  }




function reloadSite () //Die Funktion lädt die Seite sobald sie gecalled wird neu und sendet eine Bestätigung in der console
{
  console.log("Log | Reload erfolgreich")
  location.reload();
}
