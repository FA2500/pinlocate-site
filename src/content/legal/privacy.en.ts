// Privacy policy, English.
// Approved text: edit words only with a new effective date (see Changes).
import type { LegalDoc } from "./types";

export const privacyEn: LegalDoc = {
  title: "PinLocate Privacy Policy",
  description: "How the PinLocate Android app and this website handle your data.",
  heading: "Privacy Policy",
  effective: "17 October 2026",
  intro: `<p>PinLocate saves the locations of the people you visit: a pin, a landmark note and a photo of the house or gate. This policy explains what happens to that information, in the app and on this website.</p>`,
  sections: [
    {
      id: "summary",
      title: "The short version",
      html: `
<ul>
  <li>PinLocate has no server and no account. Your people, places, notes and photos are stored on your phone, and in your own Google Drive if you turn on Drive backup.</li>
  <li>We, the developer, never receive your data. There are no ads, no analytics and no tracking, in the app or on this website.</li>
  <li>Data leaves your phone only when you share it, when you back it up, or in the few cases listed below.</li>
</ul>
`,
    },
    {
      id: "stored",
      title: "What PinLocate stores on your phone",
      html: `
<ul>
  <li>People you add: their names, and, if you link a phone contact, that contact's ID and phone number.</li>
  <li>Places: coordinates, how accurate the GPS fix was, label, landmark note, and any tags and fields you add.</li>
  <li>Photos you choose for a place. They are compressed and their EXIF data, including any GPS location, is removed.</li>
  <li>Visits you log, with their dates and notes, and your current visit list.</li>
  <li>App settings, such as your language.</li>
</ul>
<p>All of this is kept in the app's private storage, which other apps cannot read.</p>
`,
    },
    {
      id: "permissions",
      title: "Permissions",
      html: `
<div class="table"><table>
  <tr><th>Permission</th><th>Why</th></tr>
  <tr><td>Location (only while you use the app)</td><td>To pin where you are standing, and to order a visit list from where you are. PinLocate never uses location in the background.</td></tr>
  <tr><td>Contacts (optional)</td><td>To read the phone number of a contact you link to a person, so the link can be restored if the contact changes. PinLocate explains this before asking. You can link contacts without it, and you can add people by typing their names.</td></tr>
  <tr><td>Internet</td><td>To open short map links, and to back up to your Google Drive if you choose (see below).</td></tr>
      <tr><td>Network state</td><td>To check for Wi-Fi and Data Saver before an automatic Drive backup. Android does not ask for this one.</td></tr>
</table></div>
<p>Photos and files are chosen with Android's own picker, so PinLocate needs no storage permission.</p>
`,
    },
    {
      id: "data-leaves",
      title: "When data leaves your phone",
      html: `
<h3>When you share or navigate</h3>
<ul>
  <li><strong>Share card:</strong> when you tap Share, the place's name, coordinates, note and photo go to the app you pick, such as WhatsApp. Unless you turn it off in Settings, the card ends with a PinLocate link that holds the place's name and coordinates (see The PinLocate link below). Before your first share, PinLocate reminds you that the card shows a home.</li>
  <li><strong>Navigate:</strong> the coordinates go to Waze or Google Maps, or to their website if the app is not installed.</li>
</ul>
<h3>When you read a map link</h3>
<ul>
  <li><strong>Short links:</strong> a link such as maps.app.goo.gl is opened once over the internet, so PinLocate can read the location it points to. Only the link itself is sent, to Google or Waze.</li>
  <li><strong>Place name lookup:</strong> when a Google Maps link has a place name but no coordinates, the name and address in the link are looked up with your phone's built-in geocoder, which sends them to Google.</li>
</ul>
<h3>Backups and exports you make</h3>
<ul>
  <li><strong>Backup file:</strong> Save backup or Share backup creates one .zip with all your people, places, notes and photos. It is not encrypted. It goes only where you save or send it.</li>
  <li><strong>CSV (Pro):</strong> a spreadsheet of people, phone numbers, places, notes, tags and fields, without photos. It is not encrypted and goes only where you save or send it.</li>
</ul>
    <h3>Google Drive backup</h3>
    <p>If you connect Google Drive in Backup &amp; restore, PinLocate uploads the same backup .zip to a hidden folder in your own Google Drive: when you tap Back up now, or, with Pro and Back up automatically turned on, while you use the app (when it opens or comes back to the screen, and about 2 minutes after a change), at most once a day and only if something changed. Automatic backups use Wi-Fi only unless you allow mobile data, and wait while Data Saver is on over a metered connection. Leaving the app stops an upload; it is tried again next time. The upload goes over HTTPS to Google; the .zip itself is not encrypted, and it counts against your Drive storage. PinLocate asks Google only for access to its own folder, so it cannot see your other files, and it keeps the newest 3 backups. On your phone it stores which Google account is connected (its email address, which Google sign-in gives the app). Restoring from Drive works with or without Pro. Disconnect removes PinLocate's access; the backups stay in your Drive until you delete them (see Deleting your data). Nothing is sent to the developer.</p>
<h3>Android backup</h3>
<p>If Google backup is turned on for your phone, Android backs up PinLocate's database (people, places, notes and settings, but not photos) to your own Google account. Android encrypts this backup with your screen lock, and PinLocate allows it only when that encryption is available. When you move to a new phone with a cable or Wi-Fi transfer, the photos are copied too. You can turn this off in your phone's backup settings.</p>
<h3>Purchases</h3>
<p>PinLocate Pro is a subscription bought through Google Play. Google handles the payment; PinLocate only learns whether your subscription is active, and remembers that answer on your phone so Pro keeps working offline. Nothing about your purchase is sent to the developer. You can cancel anytime in Google Play.</p>
`,
    },
    {
      id: "link",
      title: "The PinLocate link",
      html: `
<p>A shared place can carry a link such as <code>pinlocate.link/p#v=1&amp;lat=…&amp;lng=…&amp;n=…</code>. The place's coordinates and name sit after the <code>#</code>. Browsers never send that part to a website, so it never reaches the server.</p>
<ul>
  <li><strong>With PinLocate installed,</strong> the link opens the app, which checks the coordinates and name and offers to save the place. Nothing is sent anywhere.</li>
  <li><strong>Without the app,</strong> the link opens a page on this website. The page reads the place from the link inside your browser and shows its name, with buttons for Waze, Google Maps and Google Play. Those buttons send the coordinates only to the service you tap.</li>
</ul>
`,
    },
    {
      id: "website",
      title: "This website",
      html: `
<p>pinlocate.link has no analytics, cookies, trackers, or scripts or fonts from other websites. It is hosted by GitHub Pages. Like any web host, GitHub receives your IP address and the address of the page you open (without the part after <code>#</code>), and may keep them in its logs; see GitHub's privacy statement. The developer does not see these logs.</p>
`,
    },
    {
      id: "deleting",
      title: "Deleting your data",
      html: `
<p>Delete a person or place in the app and it is removed from your phone, together with its photos. Uninstalling PinLocate deletes everything it stored. Backup and CSV files you saved or sent elsewhere are yours to delete. To delete PinLocate's backups from Google Drive, open PinLocate, go to Settings, then Backup &amp; restore, and tap Delete Drive backups: it deletes every PinLocate backup in your Drive and then disconnects. You can also do it from Google Drive: go to Settings, then Manage apps, find PinLocate and choose Delete hidden app data. Android backups in your Google account are managed in your Google account settings.</p>
`,
    },
    {
      id: "children",
      title: "Children",
      html: `
<p>PinLocate is not directed at children under 13.</p>
`,
    },
    {
      id: "changes",
      title: "Changes",
      html: `
<p>If this policy changes, the new version is posted on this page with a new effective date.</p>
`,
    },
    {
      id: "contact",
      title: "Contact",
      html: `
<p>Questions about this policy: <a href="mailto:support@pinlocate.link">support@pinlocate.link</a></p>
`,
    },
  ],
};
