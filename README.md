# MigraConnect · Version 4

**Responsive React-/TypeScript-Webanwendung** auf Basis des ursprünglichen MigraConnect-Konzepts und der Wireframes. Ziel: Frauen mit Migrationsgeschichte beim Deutschlernen, bei der beruflichen Orientierung und beim Austausch unterstützen.

## Funktionen in Version 4

- **Dashboard:** Lernrunden, gemerkte Stellen, Community-Aktivität
- **Deutsch lernen:** Quiz mit Lösungen, Erläuterungen, Fehlertraining und Lernhistorie
- **Jobportal:** Suche, Remote-/Teilzeitfilter, Merkliste mit **klar als Demo gekennzeichneten** Stellen
- **Karriereassistent:** Profilpflege und transparentes regelbasiertes Skill-Matching mit Beispieldaten
- **Bewerbungstraining:** typische Fragen, Texteingabe, einfaches lokales Feedback
- **Sprachhilfe:** Deutsch/Englisch/Polnisch-Phrasenbuch, keine Live-Übersetzung
- **Community:** lokale Beiträge im Browser, kein öffentliches Netzwerk
- **Profil:** lokale Speicherung, optional Anmeldung und Cloud-Synchronisation über Supabase
- **KI-Integration (optional):** geschützte Supabase Edge Function für Karriereberatung und Sprachfeedback. **Nicht ohne Konfiguration nutzbar.**

## Starten

Benötigt Node.js 24 und pnpm 11.25.0. Die Paketversionen sind in pnpm-lock.yaml festgehalten.

```bash
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm run dev
```

Dann die angezeigte lokale Adresse (typisch `http://localhost:5173`) im Browser öffnen. Für die lokale Demo **sind weder n8n noch Supabase oder ein API-Schlüssel erforderlich**.

Produktionsbuild:

```bash
pnpm run typecheck
pnpm run build
pnpm run preview
```

## Optional: Supabase und echte KI

1. Supabase-Projekt anlegen und Email-Auth konfigurieren.
2. `supabase/schema.sql` im SQL Editor ausführen (Row Level Security wird aktiviert).
3. `.env.example` als `.env` kopieren und `VITE_SUPABASE_URL` sowie `VITE_SUPABASE_ANON_KEY` eintragen. **Niemals geheime API-Schlüssel als `VITE_`-Variable speichern.**
4. Supabase CLI installieren, mit dem Projekt verbinden und `supabase functions deploy ai-assistant` ausführen.
5. Server-Secrets setzen: `supabase secrets set OPENAI_API_KEY=... ALLOWED_ORIGIN=https://deine-domain.example`. Für lokale Tests `ALLOWED_ORIGIN=http://localhost:5173` verwenden.
6. Supabase-Auth verwenden; KI-Funktionen benötigen eine gültige Anmeldung.
7. In Supabase für den Produktivbetrieb E-Mail-Bestätigung, Abuse-Schutz und Limits einrichten.

**Hinweis:** Die Edge Function bietet grundlegende Authentifizierung und Eingabelimits, jedoch **noch keine nutzerbezogene Rate-Limitierung oder Kostenbegrenzung**. Vor öffentlicher Freigabe ergänzen. Keine sensiblen Bewerbungsunterlagen oder persönlichen Daten ohne Datenschutzkonzept hochladen. Für eine öffentliche Community wären Moderation, Datenschutz, Meldefunktion und sichere Datenbankregeln nötig.

## Projektstruktur

- `src/main.tsx`: React-Oberfläche und Zustandslogik
- `src/data.ts`: Demo-Stellen und Lernfragen
- `src/style.css`: responsives Design
- `supabase/schema.sql`: Datenbankschema mit RLS
- `supabase/functions/ai-assistant/`: serverseitige KI-Anbindung
- `design/wireframes/`: vier Original-Wireframes und weitere Referenzen
- `docs/`: ursprüngliche Projektpräsentationen
- `legacy-v3.html`: vorheriger HTML-Prototyp als Referenz

## Abgrenzung

Diese Version ist ein **funktionierender lokaler Prototyp**, kein fertig veröffentlichtes Produkt. Es gibt keine Live-Stellensuche, keine öffentlich geteilten Community-Beiträge und keine freie Echtzeitübersetzung. Die optionale KI benötigt externe Dienste und einen API-Schlüssel. Nutzerprofile und lokale Community-Beiträge bleiben standardmäßig im Browser (`localStorage`).

## Weiterentwicklung

Echte Stellenangebote über lizenzierte Jobdatenquellen, moderierte Community, mehrsprachige Benutzeroberfläche, Lernstufen und Spaced Repetition, automatisierte Tests, Barrierefreiheit, Datenschutz- und Sicherheitsprüfung.


## GitHub

Die Anleitung in [GITHUB-UPLOAD.md](GITHUB-UPLOAD.md) beschreibt den ersten Upload. Der Workflow in .github/workflows/ci.yml prüft bei Pushes und Pull Requests TypeScript und Produktionsbuild. Er benötigt keine Secrets und veröffentlicht keine Website.

Abhängigkeiten bitte mit pnpm verwalten und pnpm-lock.yaml mit einchecken. pnpm-workspace.yaml erlaubt ausschließlich das benötigte esbuild-Installationsskript.

## Lizenz

Eine Open-Source-Lizenz wurde noch nicht festgelegt. Das Repository enthält daher keine pauschale Freigabe zur Weiterverwendung; die Rechte an den Originalunterlagen bleiben unberührt.
