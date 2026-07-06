# Tipp-Racer als iOS-App (.ipa) über GitHub bauen – ohne eigenen Mac

Ja, das geht komplett in der Cloud. GitHub Actions stellt dir einen **macOS-Rechner
mit Xcode** zur Verfügung und baut dort die App. Du bekommst am Ende eine
**unsignierte `.ipa`** zum Download. Auf dem iPhone wird sie dann beim Installieren
mit einer **kostenlosen Apple-ID signiert** (siehe Schritt 6).

Wichtig zur Einordnung: Apples Build-Werkzeuge (Xcode, codesign) laufen nur auf macOS
– deshalb der macOS-Runner. Auf Linux lässt sich keine .ipa erzeugen.

---

## Was in dieses Repo gehört (ist hier schon vorbereitet)

```
├─ .github/workflows/build-ios.yml   ← der Cloud-Build
├─ capacitor.config.json             ← App-Name & ID
├─ package.json                      ← Capacitor-Abhängigkeiten
└─ www/                              ← das Spiel
   ├─ index.html
   ├─ script.js
   ├─ style.css
   ├─ manifest.json
   └─ icon-180.png / icon-192.png / icon-512.png
```

Deine Spiel-Dateien müssen im Ordner **`www/`** liegen (schon erledigt).

---

## Schritt für Schritt

### 1. GitHub-Konto & Repository
- Auf https://github.com kostenlos anmelden.
- Oben rechts **+ ▸ New repository** → Name z. B. `tipp-racer` → **Create repository**.

### 2. Dateien hochladen
- Im leeren Repo: **Add file ▸ Upload files**.
- Ziehe den **gesamten Inhalt** dieses Ordners hinein (inklusive des Ordners
  `.github` und `www`). Falls der Browser den Punkt-Ordner `.github` nicht mag,
  lege die Datei manuell an: **Add file ▸ Create new file**, als Namen
  `.github/workflows/build-ios.yml` eintippen und den Inhalt einfügen.
- Unten **Commit changes**.

### 3. (Optional) App-ID anpassen
- In `capacitor.config.json` `appId` von `com.deinname.tippracer` auf etwas
  Eindeutiges ändern, z. B. `com.max.tippracer`.

### 4. Build starten
- Reiter **Actions** oben im Repo öffnen.
- Falls gefragt: Workflows aktivieren (**I understand my workflows, go ahead and enable them**).
- Links **Build iOS IPA (unsigned)** wählen → rechts **Run workflow** ▸ **Run workflow**.
- Der Lauf dauert ein paar Minuten (grüner Haken = fertig).

### 5. IPA herunterladen
- Auf den fertigen Workflow-Lauf klicken.
- Ganz unten unter **Artifacts** liegt **TippRacer-unsigned-ipa** → herunterladen
  und die ZIP entpacken. Darin: `TippRacer-unsigned.ipa`.

### 6. Aufs iPhone bringen (unsigniert → mit Apple-ID signieren)
Die .ipa ist noch unsigniert, sie lässt sich also nicht einfach so installieren.
Zum Installieren nimmst du ein Sideload-Tool, das sie mit deiner **kostenlosen
Apple-ID** signiert:

- **Sideloadly** (Windows oder Mac): https://sideloadly.io
  iPhone per Kabel anstecken, .ipa reinziehen, Apple-ID eingeben, **Start**.
- **AltStore**: kann die App direkt auf dem iPhone halten und automatisch erneuern.

Hinweis zur kostenlosen Apple-ID: die Signatur gilt **7 Tage**, danach die App
einfach neu signieren/„refreshen". AltStore kann das automatisch im Hintergrund.

---

## Wenn du es „richtig" willst (App Store / TestFlight / 1 Jahr gültig)

Dafür brauchst du das **Apple Developer Program (99 $/Jahr)**. Dann baust du eine
**signierte** IPA – ebenfalls über GitHub Actions, aber mit hinterlegtem Zertifikat
und Provisioning-Profil. Ablauf:
1. In deinem Apple-Developer-Account ein Distribution-Zertifikat (.p12) und ein
   Provisioning-Profil (.mobileprovision) erstellen.
2. Beide als Base64 in die GitHub-Secrets legen
   (Settings ▸ Secrets and variables ▸ Actions), plus Passwörter.
3. Im Workflow vor dem Build einen Signing-Schritt ergänzen und beim `xcodebuild`
   `-exportArchive` mit `export_method: app-store` bzw. `ad-hoc` nutzen.

Sag Bescheid, dann baue ich dir auch diese signierte Variante des Workflows.

---

## Häufige Stolpersteine
- **`cap add ios` schlägt fehl:** meist eine Capacitor-Versionsfrage. In
  `package.json` die drei `@capacitor/...`-Versionen auf denselben aktuellen Stand
  bringen (alle gleich).
- **Falscher Ordner:** In `capacitor.config.json` muss `webDir` auf `www` zeigen und
  `www/index.html` existieren.
- **Icon:** Standardmäßig nimmt Capacitor ein eigenes Icon. Willst du das mitgelieferte
  Design, füge `icon-1024.png` als `resources/icon.png` hinzu und lass einmal
  `npx @capacitor/assets generate --ios` laufen (kann man auch als Extra-Schritt in
  den Workflow packen).
