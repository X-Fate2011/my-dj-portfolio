function ImprintPage() {
  return (
    <div className="p-4 text-left privacy">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Andreas Schlegel
        <br />
        Fanny-Lewald-Straße 1<br />
        65197 Wiesbaden
        <br />
        Deutschland
        <br />
        E-Mail: <a href="mailto:xfate.music@gmail.com">xfate.music@gmail.com</a>
      </p>

      <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Diese Website
        verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang. Eine Weitergabe an
        Dritte erfolgt nicht, sofern nicht explizit angegeben.
      </p>
      <p>
        Diese Datenschutzerklärung informiert über die Art, den Umfang und Zweck der Verarbeitung
        personenbezogener Daten im Rahmen dieser Website gemäß Art. 13 DSGVO.
      </p>

      <h2>3. Hosting durch Netlify</h2>
      <p>
        Diese Website wird durch den Dienstanbieter{" "}
        <strong>Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</strong>{" "}
        gehostet.
      </p>
      <p>
        Beim Aufruf der Website erfasst Netlify automatisch sogenannte Server-Logfiles. Diese
        beinhalten:
      </p>
      <ul>
        <li>IP-Adresse des Besuchers</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>angeforderte Datei</li>
        <li>Referrer-URL</li>
        <li>verwendeter Browsertyp und -version</li>
        <li>Betriebssystem</li>
      </ul>
      <p>
        Die Erhebung dieser Daten ist technisch notwendig, um die Website korrekt auszuliefern, und
        erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb der
        Website).
      </p>
      <p>
        Weitere Informationen:{" "}
        <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener">
          https://www.netlify.com/privacy/
        </a>
      </p>

      <h2>4. Eingebettete Inhalte von Drittanbietern</h2>

      <h3>4.1 Mixcloud</h3>
      <p>
        Auf dieser Website werden Inhalte des Streaming-Dienstes <strong>Mixcloud</strong> (Mixcloud
        Ltd., UK) eingebunden. Beim Laden eines Mixcloud-Players wird eine Verbindung zu den Servern
        von Mixcloud hergestellt. Dabei können personenbezogene Daten (z. B. IP-Adresse) übermittelt
        werden.
      </p>
      <p>
        Mixcloud verwendet möglicherweise eigene Cookies oder ähnliche Technologien, worauf ich
        keinen Einfluss habe.
      </p>
      <p>
        Mehr dazu in der Datenschutzerklärung von Mixcloud:
        <br />
        <a href="https://www.mixcloud.com/privacy/" target="_blank" rel="noopener">
          https://www.mixcloud.com/privacy/
        </a>
      </p>

      <h3>4.2 Twitch</h3>
      <p>
        Es werden Inhalte von <strong>Twitch Interactive, Inc.</strong> (USA) per iFrame
        eingebettet. Beim Aufruf solcher Inhalte wird eine Verbindung zu Twitch-Servern hergestellt,
        wobei technische Daten wie Ihre IP-Adresse übertragen werden können.
      </p>
      <p>
        Datenschutzerklärung von Twitch:
        <br />
        <a href="https://www.twitch.tv/p/legal/privacy-policy/" target="_blank" rel="noopener">
          https://www.twitch.tv/p/legal/privacy-policy/
        </a>
      </p>

      <h3>4.3 Mixcloud API</h3>
      <p>
        Zur Anzeige aktueller Inhalte wird im Hintergrund die <strong>Mixcloud API</strong>{" "}
        verwendet. Dabei wird eine Anfrage an Mixcloud-Server gestellt. Diese API-Aufrufe sind
        technisch notwendig zur Darstellung der Inhalte. Es findet jedoch keine
        Benutzeridentifikation oder Profilbildung auf dieser Website statt.
      </p>

      <h2>5. Verlinkungen zu Drittplattformen</h2>
      <p>
        Diese Website enthält <strong>externe Links zu Instagram, Twitch und Mixcloud</strong>. Beim
        Klicken auf solche Links verlassen Sie diese Seite – es gelten dann die
        Datenschutzrichtlinien der jeweiligen Plattform.
      </p>

      <h2>6. Keine Cookies / kein Tracking</h2>
      <p>
        Diese Website verwendet <strong>keine Cookies</strong>, keine Tracking-Tools (z. B. Google
        Analytics) und kein Nutzerprofiling.
      </p>

      <h2>7. Rechte der betroffenen Personen</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft über gespeicherte personenbezogene Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Datenübertragbarkeit, sofern technisch umsetzbar (Art. 20 DSGVO)</li>
      </ul>
      <p>
        Bitte wenden Sie sich zur Ausübung dieser Rechte an:
        <br />
        <a href="mailto:xfate.music@gmail.com">xfate.music@gmail.com</a>
      </p>

      <h2>8. Änderung dieser Datenschutzerklärung</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, insbesondere bei technischen
        Änderungen oder zur Anpassung an neue gesetzliche Vorgaben.
      </p>
      <p>
        <strong>Stand:</strong> August 2025
      </p>
    </div>
  );
}

export default ImprintPage;
