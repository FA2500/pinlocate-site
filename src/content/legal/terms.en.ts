// Terms of service, English.
// Approved text: edit words only with a new effective date (see Changes).
import type { LegalDoc } from "./types";

export const termsEn: LegalDoc = {
  title: "PinLocate Terms of Service",
  description: "The terms for using the PinLocate app and PinLocate Pro.",
  heading: "Terms of Service",
  effective: "17 October 2026",
  intro: `<p>These terms apply when you use the PinLocate app and this website. By using PinLocate you agree to them. If you don't agree, please don't use the app.</p>`,
  sections: [
    {
      id: "who",
      title: "1. Who makes PinLocate",
      html: `
<p>PinLocate is made by an independent developer in Malaysia (“we”, “us”). You can reach us at <a href="mailto:support@pinlocate.link">support@pinlocate.link</a>.</p>
`,
    },
    {
      id: "data",
      title: "2. Your data and your backups",
      html: `
<p>PinLocate has no server and no account. What you save stays on your phone, or in your own Google Drive if you choose to back up there. We can't see your data, and we can't recover it if your phone is lost or reset, or the app is removed. Keeping backups is your responsibility. The <a href="/privacy/">privacy policy</a> explains how your data is handled.</p>
`,
    },
    {
      id: "pro",
      title: "3. PinLocate Pro",
      html: `
<ul>
  <li>Pro is a subscription billed by Google Play, at the price shown in Google Play before you buy.</li>
  <li>New subscribers get a 2-week free trial. If you don't cancel before it ends, the subscription starts and Google Play charges you.</li>
  <li>The subscription renews automatically until you cancel. Cancel anytime in Google Play, under Payments &amp; subscriptions. Pro stays on until the end of the period you paid for.</li>
  <li>Refunds are handled by Google Play under its refund policy.</li>
  <li>When Pro ends, everything you saved stays on your phone and readable. Only adding or editing with Pro features stops.</li>
</ul>
`,
    },
    {
      id: "safety",
      title: "4. Maps, directions and safety",
      html: `
<p>Pins, landmarks and directions can be wrong: GPS can be off, places change, and a shared place may be mistaken. Check before you rely on them. Waze and Google Maps are third-party apps, and their directions are their own. Don't use PinLocate while driving: set up your trip before you set off, and always follow traffic laws and road signs.</p>
`,
    },
    {
      id: "use",
      title: "5. Acceptable use",
      html: `
<p>Don't use PinLocate to track, stalk or harass anyone, or for anything unlawful. You are responsible for the places, notes and photos you save or share, including what they show or say about other people, and for having the right to share them.</p>
`,
    },
    {
      id: "services",
      title: "6. Other services",
      html: `
<p>Some features use other services, and their own terms apply too: Google Play (downloads and purchases), Google Drive (backup), Waze and Google Maps (directions), and WhatsApp (sharing).</p>
`,
    },
    {
      id: "warranty",
      title: "7. No warranty",
      html: `
<p>PinLocate is provided “as is” and “as available”. As far as the law allows, we make no promises that it will be error-free, always available or fit for a particular purpose.</p>
`,
    },
    {
      id: "liability",
      title: "8. Limit of liability",
      html: `
<p>As far as the law allows, we are not liable for indirect or consequential loss, or for lost data. Our total liability for any claim is limited to what you paid for PinLocate in the 12 months before the claim. Nothing in these terms excludes or limits rights you have as a consumer that the law does not allow to be excluded, including under Malaysia's Consumer Protection Act 1999.</p>
`,
    },
    {
      id: "changes",
      title: "9. Changes to these terms",
      html: `
<p>If we change these terms, we post the new version on this page with a new effective date. For important changes we also say so in the app's release notes on Google Play before they take effect. If you keep using PinLocate after a change, the new terms apply.</p>
`,
    },
    {
      id: "law",
      title: "10. Governing law",
      html: `
<p>These terms are governed by the laws of Malaysia.</p>
`,
    },
    {
      id: "contact",
      title: "11. Contact",
      html: `
<p>Questions about these terms: <a href="mailto:support@pinlocate.link">support@pinlocate.link</a></p>
`,
    },
  ],
};
