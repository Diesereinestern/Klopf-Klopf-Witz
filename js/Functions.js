//In dieser Datei werden Funktionen aufbewahrt die ebenfalls essenziell sind, jedoch nicht universal genutzt werden können.

//Diese Funktion lässt eine Confirm
    function confirmReload ()
      {
        if (confirm("Du bist dabei die Seite zurückzusetzen! Willst du das wirklich tun?"))
          {
            reloadSite()
            console.log("Reload autorisiert")
          }
        else
          {
            console.log("Reload abgebrochen")
          }
      }

    function copySiteLink ()
     {
       navigator.clipboard.writeText(window.location.href);
     }

    function copyDcName ()
     {
       navigator.clipboard.writeText('Star.-.#2795');
     }

    function w3_open()
     {
       document.getElementById("mySidebar").style.display = "block";
     }

    function w3_close()
     {
       document.getElementById("mySidebar").style.display = "none";
     }
