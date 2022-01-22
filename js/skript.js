//Diese Funktion lädt die Seite sobald sie aufgerufen wird neu und sendet eine Bestätigung in der Konsole. Sie benötigt keine Parameter
      function reloadSite ()
      {
        location.reload();
        console.log("Seite wurde neu geladen")
      }

/*Diese Funktion fügt einen Button hinzu. Die Funktion benötigt vier Parameter:
#1: Der Text der auf dem Button erscheinen wird
#2: Der Typ des Buttons, standartmäßig 'button'
#3: Die einzigartige ID des Buttons
#4: Die ID der Nachricht bzw des Bereiches in welchem der Button erstellt werden soll
*/
      function addButton (name,typ,id,area)
      {
        var btn = document.createElement('button');
        btn.innerHTML 	= name;
        btn.type 		    = typ;
        btn.id 			    = id;
        document.body.appendChild(btn);
        var Ausgabebereich = document.getElementById(area);
        Ausgabebereich.appendChild(btn);
        return btn;
      }





//Diese Funktion ist der Startpunkt des ganzen
      function stage1 ()
      {
        document.getElementById("test2").innerHTML = "Klopf Klopf <br>"
        var btn2 = addButton("Wer ist da?","button","b2","test");
        document.getElementById("b2").addEventListener('click', stage2());

      }

      function stage2 ()
      {

        document.getElementById("btn1").disabled = true; //Deaktiviert den Start Button
        var button = document.getElementById("btn1");  // Erfasst den Button durch die ID
        button.remove();                              //
      }

      function stage3 ()
      {
        removeButton('btn1')
      }

      function  removeButton (p1)
      {
        var button = document.getElementById(p1);
        button.remove();
      }
