//In dieser Datei werden die generellen Funktionen aufbewahrt, die für die universelle Nutzung im Source Code essenziell sind.

/*Diese Funktion fügt einen Button hinzu. Die Funktion benötigt vier Parameter:
#1: Der Text der auf dem Button erscheinen wird
#2: Der Typ des Buttons, standartmäßig 'button'
#3: Die einzigartige ID des Buttons
#4: Die ID der Nachricht bzw des Bereiches in welchem der Button erstellt werden soll
*/
    function addButton (name,type,id,area)
      {
        var btn = document.createElement('button');
        btn.innerHTML 	= name;
        btn.type 		    = type;
        btn.id 			    = id;
        document.body.appendChild(btn);
        var Ausgabebereich = document.getElementById(area);
        Ausgabebereich.appendChild(btn);
        return btn;
      }

/*Diese Funktion entfernt einen Button. Sie benötigt lediglich einen Parameter:
#1: Gibt die ID des Buttons an welcher gelöscht werden soll.
*/
    function  removeButton (BtnID)
      {
        var button = document.getElementById(BtnID);
        button.remove();
      }

//Diese Funktion lädt die Seite sobald sie aufgerufen wird neu und sendet eine Bestätigung in der Konsole. Sie benötigt keine Parameter
    function reloadSite ()
      {
        location.reload();
      }

/*Diese Funktion versteckt ein HTML Element. Es benötigt einen Parameter:
#1: Gibt die ID des zu versteckenden Elements an.
*/
    function hideElement (element)
      {
        document.getElementById(element).style.visibility = "hidden";
      }

/*Diese Funktion zeigt ein verstecktes HTML Element. Es benötigt einen Parameter:
#1: Gibt die ID des zu enthüllenden Elements an.
*/
    function shwoElement (element)
      {
        document.getElementById(element).style.visibility = "visible";
      }
