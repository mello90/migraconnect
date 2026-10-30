# Auf GitHub hochladen

## Empfohlen: Git oder GitHub Desktop

Der Projektordner ist als Git-Repository mit Branch main initialisiert. Die geeigneten Dateien sind für den ersten Commit vorgemerkt; es wurde kein Commit mit einer fremden Identität erstellt und nichts hochgeladen.

1. Auf GitHub ein neues, leeres Repository anlegen, zum Beispiel migraconnect. README, .gitignore und Lizenz dort nicht automatisch hinzufügen.
2. Im Projektordner ein Terminal öffnen.
3. Falls Git noch keine Identität kennt, den eigenen Namen und die eigene GitHub-E-Mail (oder GitHub-Noreply-Adresse) lokal konfigurieren:

~~~sh
git config user.name "DEIN NAME"
git config user.email "DEINE GITHUB-E-MAIL"
~~~

4. Dateien kontrollieren und hochladen; DEIN-BENUTZERNAME ersetzen:

~~~sh
git status
git diff --cached --stat
git commit -m "Initial commit: MigraConnect v4"
git remote add origin https://github.com/DEIN-BENUTZERNAME/migraconnect.git
git push -u origin main
~~~

GitHub kann dabei eine Anmeldung verlangen. Zugangsdaten gehören nicht in Dateien oder die Remote-URL.

Alternativ in GitHub Desktop: File → Add local repository → diesen Projektordner auswählen → ersten Commit erstellen → Publish repository. Sichtbarkeit bewusst wählen.

## Alternative: ZIP und Browser-Upload

MigraConnect-v4-GitHub.zip entpacken und den Inhalt über Add file → Upload files hochladen. Die ZIP-Datei selbst nicht als einzigen Repository-Inhalt hochladen. Versteckte Dateien/Ordner wie .github, .gitignore und .env.example müssen mit übertragen werden. Git/GitHub Desktop ist dafür zuverlässiger.

## Enthalten und ausgeschlossen

Enthalten sind React-Quellen, Konfiguration, Lockdatei, Beispielumgebung, Supabase-Vorlagen, Originalunterlagen und Build-Workflow. Ausgeschlossen sind node_modules, dist, lokale .env-Dateien, Schlüsseldateien, Logs und Build-Caches. .env.example enthält nur leere Platzhalter.

Die Originalfotos und Präsentationen gehören zum Paket; vor Wahl eines öffentlichen Repositorys deren Veröffentlichungsrechte prüfen. Es wurde keine Lizenz im Namen der Rechteinhaber vergeben.

## Nach dem Upload

Im Tab Actions sollte der Build-Workflow erfolgreich durchlaufen. Er prüft den Frontend-Build, nicht die optionale Supabase Edge Function. GitHub-Upload ist kein Webhosting: GitHub Pages oder eine andere Veröffentlichung wird separat eingerichtet.
