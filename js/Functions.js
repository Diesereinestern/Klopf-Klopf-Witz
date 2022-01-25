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
