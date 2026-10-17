// Polisi privasi, Bahasa Melayu.
// Approved text: edit words only with a new effective date (see Changes).
import type { LegalDoc } from "./types";

export const privacyMs: LegalDoc = {
  title: "Polisi Privasi PinLocate",
  description: "Cara aplikasi Android PinLocate dan laman web ini mengendalikan data anda.",
  heading: "Polisi Privasi",
  effective: "17 Oktober 2026",
  intro: `<p>PinLocate menyimpan lokasi orang yang anda lawati: pin, nota penanda dan foto rumah atau pagar. Polisi ini menerangkan apa yang berlaku kepada maklumat tersebut, dalam aplikasi dan di laman web ini.</p>`,
  sections: [
    {
      id: "summary",
      title: "Ringkasnya",
      html: `
<ul>
  <li>PinLocate tiada pelayan dan tiada akaun. Orang, tempat, nota dan foto anda disimpan hanya pada telefon anda.</li>
  <li>Kami, pembangun aplikasi, tidak pernah menerima data anda. Tiada iklan, tiada analitik dan tiada penjejakan, dalam aplikasi atau di laman web ini.</li>
  <li>Data keluar dari telefon anda hanya apabila anda berkongsi, membuat sandaran, atau dalam beberapa keadaan yang disenaraikan di bawah.</li>
</ul>
`,
    },
    {
      id: "stored",
      title: "Apa yang PinLocate simpan pada telefon anda",
      html: `
<ul>
  <li>Orang yang anda tambah: nama mereka, dan jika anda memautkan kenalan telefon, ID kenalan dan nombor telefonnya.</li>
  <li>Tempat: koordinat, ketepatan GPS, label, nota penanda, serta tag dan medan yang anda tambah.</li>
  <li>Foto yang anda pilih untuk sesuatu tempat. Foto dimampatkan dan data EXIF, termasuk lokasi GPS, dibuang.</li>
  <li>Lawatan yang anda catat, dengan tarikh dan nota, serta senarai lawatan semasa anda.</li>
  <li>Tetapan aplikasi, seperti bahasa.</li>
</ul>
<p>Semua ini disimpan dalam storan peribadi aplikasi, yang tidak boleh dibaca oleh aplikasi lain.</p>
`,
    },
    {
      id: "permissions",
      title: "Kebenaran",
      html: `
<div class="table"><table>
  <tr><th>Kebenaran</th><th>Sebab</th></tr>
  <tr><td>Lokasi (hanya semasa aplikasi digunakan)</td><td>Untuk pin tempat anda berdiri, dan untuk menyusun senarai lawatan dari lokasi anda. PinLocate tidak pernah menggunakan lokasi di latar belakang.</td></tr>
  <tr><td>Kenalan (pilihan)</td><td>Untuk membaca nombor telefon kenalan yang anda pautkan kepada seseorang, supaya pautan itu boleh dipulihkan jika kenalan berubah. PinLocate menerangkan perkara ini sebelum meminta. Anda boleh memautkan kenalan tanpanya, dan boleh menambah orang dengan menaip nama mereka.</td></tr>
  <tr><td>Internet</td><td>Untuk membuka pautan peta pendek (lihat di bawah).</td></tr>
</table></div>
<p>Foto dan fail dipilih menggunakan pemilih Android sendiri, jadi PinLocate tidak memerlukan kebenaran storan.</p>
`,
    },
    {
      id: "data-leaves",
      title: "Bila data keluar dari telefon anda",
      html: `
<h3>Apabila anda berkongsi atau menavigasi</h3>
<ul>
  <li><strong>Kad kongsi:</strong> apabila anda ketik Kongsi, nama tempat, koordinat, nota dan foto dihantar ke aplikasi yang anda pilih, seperti WhatsApp. Kecuali anda mematikannya dalam Tetapan, kad itu berakhir dengan pautan PinLocate yang mengandungi nama dan koordinat tempat (lihat Pautan PinLocate di bawah). Sebelum perkongsian pertama, PinLocate mengingatkan bahawa kad itu menunjukkan sebuah rumah.</li>
  <li><strong>Navigasi:</strong> koordinat dihantar ke Waze atau Google Maps, atau ke laman web mereka jika aplikasi tidak dipasang.</li>
</ul>
<h3>Apabila anda membaca pautan peta</h3>
<ul>
  <li><strong>Pautan pendek:</strong> pautan seperti maps.app.goo.gl dibuka sekali melalui internet, supaya PinLocate dapat membaca lokasi yang ditunjukkannya. Hanya pautan itu dihantar, kepada Google atau Waze.</li>
  <li><strong>Carian nama tempat:</strong> apabila pautan Google Maps mempunyai nama tempat tetapi tiada koordinat, nama dan alamat dalam pautan itu dicari menggunakan pengekod geo terbina dalam telefon anda, yang menghantarnya kepada Google.</li>
</ul>
<h3>Sandaran dan eksport yang anda buat</h3>
<ul>
  <li><strong>Fail sandaran:</strong> Simpan sandaran atau Kongsi sandaran membuat satu fail .zip dengan semua orang, tempat, nota dan foto anda. Fail ini tidak disulitkan. Ia hanya pergi ke tempat yang anda simpan atau hantar.</li>
  <li><strong>CSV (Pro):</strong> hamparan orang, nombor telefon, tempat, nota, tag dan medan, tanpa foto. Fail ini tidak disulitkan dan hanya pergi ke tempat yang anda simpan atau hantar.</li>
</ul>
<h3>Sandaran Android</h3>
<p>Jika sandaran Google dihidupkan pada telefon anda, Android menyandarkan pangkalan data PinLocate (orang, tempat, nota dan tetapan, tetapi bukan foto) ke akaun Google anda sendiri. Android menyulitkan sandaran ini dengan kunci skrin anda, dan PinLocate hanya membenarkannya apabila penyulitan itu tersedia. Apabila anda berpindah ke telefon baharu melalui kabel atau Wi-Fi, foto turut disalin. Anda boleh mematikannya dalam tetapan sandaran telefon.</p>
<h3>Pembelian</h3>
<p>PinLocate Pro ialah langganan yang dibeli melalui Google Play. Google menguruskan pembayaran; PinLocate hanya mengetahui sama ada langganan anda aktif, dan mengingati jawapan itu dalam telefon anda supaya Pro terus berfungsi tanpa internet. Tiada maklumat pembelian anda dihantar kepada pembangun. Anda boleh membatalkannya bila-bila masa di Google Play.</p>
`,
    },
    {
      id: "link",
      title: "Pautan PinLocate",
      html: `
<p>Tempat yang dikongsi boleh membawa pautan seperti <code>pinlocate.link/p#v=1&amp;lat=…&amp;lng=…&amp;n=…</code>. Koordinat dan nama tempat terletak selepas <code>#</code>. Pelayar tidak pernah menghantar bahagian itu kepada laman web, jadi ia tidak pernah sampai ke pelayan.</p>
<ul>
  <li><strong>Jika PinLocate dipasang,</strong> pautan itu membuka aplikasi, yang menyemak koordinat dan nama, kemudian menawarkan untuk menyimpan tempat itu. Tiada apa-apa dihantar ke mana-mana.</li>
  <li><strong>Tanpa aplikasi,</strong> pautan itu membuka halaman di laman web ini. Halaman itu membaca tempat daripada pautan di dalam pelayar anda dan menunjukkan namanya, dengan butang untuk Waze, Google Maps dan Google Play. Butang itu menghantar koordinat hanya kepada perkhidmatan yang anda ketik.</li>
</ul>
`,
    },
    {
      id: "website",
      title: "Laman web ini",
      html: `
<p>pinlocate.link tiada analitik, kuki, penjejak, atau skrip atau fon dari laman web lain. Ia dihoskan oleh GitHub Pages. Seperti mana-mana hos web, GitHub menerima alamat IP anda dan alamat halaman yang anda buka (tanpa bahagian selepas <code>#</code>), dan mungkin menyimpannya dalam lognya; lihat penyata privasi GitHub. Pembangun tidak melihat log ini.</p>
`,
    },
    {
      id: "deleting",
      title: "Memadam data anda",
      html: `
<p>Padam seseorang atau sesuatu tempat dalam aplikasi dan ia dibuang dari telefon anda, bersama fotonya. Menyahpasang PinLocate memadam semua yang disimpannya. Fail sandaran dan CSV yang anda simpan atau hantar ke tempat lain adalah milik anda untuk dipadam. Sandaran Android dalam akaun Google anda diuruskan melalui tetapan akaun Google anda.</p>
`,
    },
    {
      id: "children",
      title: "Kanak-kanak",
      html: `
<p>PinLocate tidak ditujukan kepada kanak-kanak di bawah umur 13 tahun.</p>
`,
    },
    {
      id: "changes",
      title: "Perubahan",
      html: `
<p>Jika polisi ini berubah, versi baharu disiarkan di halaman ini dengan tarikh berkuat kuasa yang baharu.</p>
`,
    },
    {
      id: "contact",
      title: "Hubungi",
      html: `
<p>Soalan tentang polisi ini: <a href="mailto:support@pinlocate.link">support@pinlocate.link</a></p>
`,
    },
  ],
};
