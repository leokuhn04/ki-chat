# KI-Chat

Kleine Web-App fürs iPhone: ein persönlicher KI-Chat, der direkt mit der Anthropic-API spricht.

- Chats anlegen, jeder mit eigener **Charakter-Anweisung** und einem **Kontextdokument (.md)**, das immer mitgeschickt wird
- Läuft komplett im Browser, alle Daten (Chats, Dokumente, API-Key) bleiben auf dem Gerät
- Als Web-App zum Homescreen hinzufügen: Safari → Teilen → „Zum Home-Bildschirm“

## Dateien

- `index.html` – die komplette App (Oberfläche, Logik, Design)
- `manifest.webmanifest` – Name, Icon und Vollbild-Modus für den Homescreen
- `sw.js` – sorgt dafür, dass die App auch offline startet
- `icon.svg` / `icon-*-v3.png` – App-Icon
