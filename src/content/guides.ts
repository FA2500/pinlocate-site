// The guides: /guides/ in English, /ms/panduan/ in Malay, one pair per guide.
// Every claim about PinLocate must match the app as it ships; check it before
// changing the "With PinLocate" sections. Steps must work with Google Maps or Waze alone.
import { siteConfig, type Lang } from "@/siteConfig";

const { free, pro } = siteConfig.photoLimits;

export type GuideText = {
  title: string; // the h1 and the browser tab
  description: string;
  answer: string; // the first paragraph: the answer in 2 sentences
  sections: { id: string; title: string; html: string }[];
  withApp: string; // HTML for the "With PinLocate" section
};

export type Guide = {
  id: "share-location" | "balik-kampung";
  slug: Record<Lang, string>;
  published: string; // ISO date
  modified: string;
  text: Record<Lang, GuideText>;
};

export const guidesIndex = {
  en: {
    title: "Guides: find and share the right house · PinLocate",
    heading: "Guides",
    description:
      "Short, practical guides for sharing exact house locations and saving the houses you visit, with Google Maps, Waze and WhatsApp.",
    withApp: "With PinLocate",
    updated: "Updated",
    all: "All guides",
  },
  ms: {
    title: "Panduan: cari dan kongsi rumah yang betul · PinLocate",
    heading: "Panduan",
    description:
      "Panduan ringkas dan praktikal untuk berkongsi lokasi rumah yang tepat dan menyimpan rumah yang anda kunjungi, dengan Google Maps, Waze dan WhatsApp.",
    withApp: "Dengan PinLocate",
    updated: "Dikemas kini",
    all: "Semua panduan",
  },
} as const;

const shareLocation: Guide = {
  id: "share-location",
  slug: { en: "share-exact-house-location-whatsapp", ms: "kongsi-lokasi-rumah-tepat-whatsapp" },
  published: "2026-10-18",
  modified: "2026-10-18",
  text: {
    en: {
      title: "How to share an exact house location on WhatsApp",
      description:
        "Drop a pin on the gate in Google Maps, share it to the chat and add one landmark line, so people find the right house and not just the right street.",
      answer:
        "Open Google Maps, press and hold on the house’s gate to drop a pin, then share that pin to the WhatsApp chat instead of typing an address. Add one line about something people can see from the road, such as the colour of the gate, because the pin gets them to the right spot and the landmark tells them which door it is.",
      sections: [
        {
          id: "why",
          title: "Why an address isn’t enough",
          html: `
<p>In many taman, whole rows of houses look alike, and the pin a map app gives an address often lands on the road or in the middle of a block, not on the right gate. In a kampung, many houses have no number at all. So the delivery rider, the relative visiting for the first time or the aircond technician ends up calling you from the end of the road.</p>
<p>A pin dropped on the gate itself avoids that. A pin is a pair of coordinates, so it doesn’t depend on how the address is written, or on whether the house has one.</p>`,
        },
        {
          id: "google-maps",
          title: "Share a pin with Google Maps",
          html: `
<ol>
  <li><strong>Find the house.</strong> Open Google Maps and search for the street or the area. Tap the layers button and choose Satellite, so you can see the roofs, gates and driveways.</li>
  <li><strong>Drop a pin on the gate.</strong> Zoom in until you can see the house clearly, then press and hold on its gate, or on the road just in front of it. A red pin appears, with a card about it at the bottom of the screen.</li>
  <li><strong>Check it.</strong> Make sure the pin is on the right house and at the entrance you want people to use: the front gate, not the back lane. If it’s off, press and hold again in the right spot.</li>
  <li><strong>Share it.</strong> On the pin’s card, tap Share (swipe the card up if you can’t see the button), choose WhatsApp, then pick the chat.</li>
  <li><strong>Add the landmark.</strong> Before you send, add one line people can check from the road, for example “Green house, black gate, next to the surau”.</li>
  <li><strong>Send a photo of the gate</strong> if you have one. A photo taken from the road is often the quickest way to recognise the right house.</li>
</ol>
<p>When they tap the link, Google Maps opens at your pin, ready for directions.</p>`,
        },
        {
          id: "waze",
          title: "If they use Waze",
          html: `
<p>Many drivers prefer Waze. You can send them a Waze link to the same pin:</p>
<ol>
  <li>Swipe up the card of the pin you dropped. Its coordinates are listed there, for example <code>3.1438, 101.68482</code>. Tap them to copy them.</li>
  <li>In the chat, type <code>https://waze.com/ul?ll=</code>, then the coordinates without the space, then <code>&amp;navigate=yes</code>. For example: <code>https://waze.com/ul?ll=3.1438,101.68482&amp;navigate=yes</code>.</li>
  <li>Send it. Tapping the link opens Waze with directions to that point.</li>
</ol>`,
        },
        {
          id: "at-the-gate",
          title: "If you’re standing at the gate",
          html: `
<p>When you are at the house yourself, WhatsApp can send where your phone is: in the chat, tap the attach button, choose Location, then send your current location. WhatsApp shows how accurate it is. Outdoors it is usually within a few metres; indoors or under a roof it can be much less precise, so step out to the gate first.</p>
<p>Don’t use live location for a house. It follows your phone for as long as you choose, so the pin moves when you leave.</p>`,
        },
        {
          id: "tips",
          title: "Tips that save a phone call",
          html: `
<ul>
  <li><strong>One pin per entrance.</strong> A corner house with two gates, or a shop that takes deliveries at the back, needs a note saying which entrance to use.</li>
  <li><strong>Flats and condos:</strong> pin the guardhouse or the lobby, and write the block, floor and unit number in the note.</li>
  <li><strong>Kampung roads:</strong> describe the turn as well as the house, such as “turn in after the sundry shop, third house on the left”.</li>
  <li><strong>Pin it in the group.</strong> In a family WhatsApp group, pin the location message so it stays at the top of the chat.</li>
</ul>`,
        },
      ],
      withApp: `
<p>PinLocate keeps all of this together for each house, so you set it up once. Save the pin at the gate with your current location, or paste a Google Maps or Waze link. Add the landmark note and up to ${free} photos of the gate (${pro} with Pro).</p>
<p>Tap Share, and WhatsApp gets one card with the photo, the landmark note, and links for both Waze and Google Maps, so the other person doesn’t need the app. If they do have PinLocate, the PinLocate link in the card saves the place on their phone in one tap (the link is on by default and can be turned off in Settings). PinLocate is a free Android app with no account, and your places stay on your phone.</p>`,
    },
    ms: {
      title: "Cara kongsi lokasi rumah yang tepat di WhatsApp",
      description:
        "Letak pin pada pagar dalam Google Maps, kongsi ke WhatsApp dan tambah satu baris penanda, supaya orang jumpa rumah yang betul, bukan sekadar jalan yang betul.",
      answer:
        "Buka Google Maps, tekan lama pada pagar rumah untuk meletakkan pin, kemudian kongsi pin itu ke sembang WhatsApp, bukan menaip alamat. Tambah satu baris tentang sesuatu yang nampak dari jalan, seperti warna pagar, kerana pin membawa orang ke tempat yang betul dan penanda memberitahu rumah yang mana satu.",
      sections: [
        {
          id: "kenapa",
          title: "Kenapa alamat sahaja tidak cukup",
          html: `
<p>Di banyak taman, sederet rumah nampak sama, dan pin yang diberi aplikasi peta untuk sesuatu alamat selalunya jatuh di atas jalan atau di tengah blok, bukan pada pagar yang betul. Di kampung pula, banyak rumah tiada nombor langsung. Akhirnya penghantar barang, saudara yang pertama kali datang atau juruteknik aircond terpaksa menelefon anda dari hujung jalan.</p>
<p>Pin yang diletakkan tepat pada pagar mengelakkan masalah ini. Pin ialah sepasang koordinat, jadi ia tidak bergantung pada cara alamat ditulis, atau sama ada rumah itu ada alamat pun.</p>`,
        },
        {
          id: "google-maps",
          title: "Kongsi pin dengan Google Maps",
          html: `
<ol>
  <li><strong>Cari rumah itu.</strong> Buka Google Maps dan cari nama jalan atau kawasan. Tekan butang lapisan dan pilih Satelit, supaya anda nampak bumbung, pagar dan laluan masuk.</li>
  <li><strong>Letak pin pada pagar.</strong> Zum masuk sehingga rumah itu jelas, kemudian tekan lama pada pagarnya, atau pada jalan betul-betul di hadapannya. Pin merah akan muncul, dengan kad maklumatnya di bahagian bawah skrin.</li>
  <li><strong>Semak.</strong> Pastikan pin berada pada rumah yang betul dan di pintu masuk yang anda mahu orang guna: pagar depan, bukan lorong belakang. Jika tersasar, tekan lama sekali lagi di tempat yang betul.</li>
  <li><strong>Kongsi.</strong> Pada kad pin itu, tekan Kongsi (leret kad ke atas jika butang tidak kelihatan), pilih WhatsApp, kemudian pilih sembang.</li>
  <li><strong>Tambah penanda.</strong> Sebelum hantar, tulis satu baris yang boleh disemak dari jalan, contohnya “Rumah cat hijau, pagar hitam, sebelah surau”.</li>
  <li><strong>Hantar foto pagar</strong> jika ada. Foto yang diambil dari jalan selalunya cara paling cepat untuk cam rumah yang betul.</li>
</ol>
<p>Apabila penerima menekan pautan itu, Google Maps terbuka pada pin anda, sedia untuk memberi arah.</p>`,
        },
        {
          id: "waze",
          title: "Jika mereka guna Waze",
          html: `
<p>Ramai pemandu lebih suka Waze. Anda boleh hantar pautan Waze ke pin yang sama:</p>
<ol>
  <li>Leret ke atas kad pin yang anda letak tadi. Koordinatnya tertera di situ, contohnya <code>3.1438, 101.68482</code>. Tekan koordinat itu untuk menyalinnya.</li>
  <li>Dalam sembang, taip <code>https://waze.com/ul?ll=</code>, diikuti koordinat itu tanpa jarak, kemudian <code>&amp;navigate=yes</code>. Contohnya: <code>https://waze.com/ul?ll=3.1438,101.68482&amp;navigate=yes</code>.</li>
  <li>Hantar. Apabila pautan itu ditekan, Waze terbuka dengan arah ke titik tersebut.</li>
</ol>`,
        },
        {
          id: "di-pagar",
          title: "Jika anda sedang berdiri di pagar",
          html: `
<p>Kalau anda sendiri berada di rumah itu, WhatsApp boleh menghantar lokasi telefon anda: dalam sembang, tekan butang lampiran, pilih Lokasi, kemudian hantar lokasi semasa anda. WhatsApp menunjukkan sejauh mana lokasi itu tepat. Di luar biasanya tepat hingga beberapa meter, tetapi di dalam rumah atau di bawah bumbung ia boleh jauh kurang tepat, jadi keluar ke pagar dahulu.</p>
<p>Jangan guna lokasi langsung (<i lang="en">live location</i>) untuk rumah. Ia mengikut telefon anda selama tempoh yang anda pilih, jadi pin itu bergerak apabila anda beredar.</p>`,
        },
        {
          id: "petua",
          title: "Petua supaya tak perlu telefon",
          html: `
<ul>
  <li><strong>Satu pin untuk setiap pintu masuk.</strong> Rumah lot tepi yang ada dua pagar, atau kedai yang menerima barang di pintu belakang, perlukan nota tentang pintu mana yang patut digunakan.</li>
  <li><strong>Pangsapuri dan kondo:</strong> pin pondok pengawal atau lobi, dan tulis blok, tingkat dan nombor unit dalam nota.</li>
  <li><strong>Jalan kampung:</strong> terangkan simpangnya juga, bukan rumah sahaja, contohnya “masuk simpang lepas kedai runcit, rumah ketiga sebelah kiri”.</li>
  <li><strong>Pin dalam kumpulan.</strong> Dalam kumpulan WhatsApp keluarga, pin mesej lokasi itu supaya ia kekal di bahagian atas sembang.</li>
</ul>`,
        },
      ],
      withApp: `
<p>PinLocate menyimpan semua ini bersama untuk setiap rumah, jadi anda hanya perlu menyediakannya sekali. Simpan pin di pagar dengan lokasi semasa anda, atau tampal pautan Google Maps atau Waze. Tambah nota penanda dan sehingga ${free} foto pagar (${pro} dengan Pro).</p>
<p>Tekan Kongsi, dan WhatsApp menerima satu kad berisi foto, nota penanda, serta pautan Waze dan Google Maps, jadi penerima tidak perlukan aplikasi ini. Jika mereka ada PinLocate, pautan PinLocate dalam kad itu menyimpan tempat tersebut dalam telefon mereka dengan satu tekan (pautan ini hidup secara lalai dan boleh dimatikan dalam Tetapan). PinLocate ialah aplikasi Android percuma tanpa akaun, dan tempat anda kekal dalam telefon anda.</p>`,
    },
  },
};

const baliKampung: Guide = {
  id: "balik-kampung",
  slug: { en: "save-relatives-houses-balik-kampung", ms: "simpan-lokasi-rumah-saudara-balik-kampung" },
  published: "2026-10-18",
  modified: "2026-10-18",
  text: {
    en: {
      title: "How to save relatives’ houses for balik kampung",
      description:
        "Pin every relative’s house once, with a name you’ll recognise and a landmark note, and keep them in one list you can open on the road, even where the signal is weak.",
      answer:
        "Save each relative’s house once as a pin on its gate, with a clear name such as “Rumah Mak Long” and a note about a landmark, and keep them all in one list you can open during the trip. Google Maps can do this with a saved list and an offline map; make the pins while you’re at each house, or ask the family to send you one.",
      sections: [
        {
          id: "why",
          title: "Why it’s worth doing before Raya",
          html: `
<p>Balik kampung often means many houses in a few days: parents, grandparents, aunts and uncles, and cousins who have moved to a new taman. Some you visit once a year, some you have never been to. Kampung houses often have no number, several share one road, and the signal tends to drop just when you need the map.</p>
<p>A list of exact pins, made once, means nobody has to call ahead for directions or follow another car through the kampung.</p>`,
        },
        {
          id: "google-maps",
          title: "Save the houses in Google Maps",
          html: `
<ol>
  <li><strong>Make a list.</strong> In Google Maps, go to your saved places (in the You tab) and create a new list, for example “Balik kampung”. Menu names can differ a little between versions of the app.</li>
  <li><strong>Drop a pin on each gate.</strong> Search for the area, switch to Satellite, then press and hold on the house’s gate. Check that it is the right house before you save it.</li>
  <li><strong>Save it to the list.</strong> On the pin’s card, tap Save and choose your list.</li>
  <li><strong>Name it.</strong> A dropped pin has only its coordinates as a name, so add a note to it in the list, such as “Rumah Mak Long, blue gate, next to the mosque”, or give it a private label with Label.</li>
  <li><strong>Share the list</strong> with your spouse or your siblings so everyone has the same pins. Open the list and tap Share.</li>
  <li><strong>Download the area.</strong> Before you leave, download an offline map of the kampung area in Google Maps (from your profile picture, choose Offline maps), so you can still see the map and get driving directions where the signal is weak.</li>
</ol>`,
        },
        {
          id: "from-family",
          title: "Getting the pin when you’re not there",
          html: `
<p>For a house you have never been to, ask in the family WhatsApp group. Whoever lives there or nearby can drop a pin on the gate in Google Maps and share it, as in our guide to <a href="/guides/share-exact-house-location-whatsapp/">sharing an exact house location on WhatsApp</a>. Open the pin from the chat and save it to your list.</p>
<p>When you are at a house, take a minute before you leave: press and hold on the map where you are standing at the gate, and save that pin. Next year, nobody has to remember the way.</p>`,
        },
        {
          id: "waze",
          title: "If you drive with Waze",
          html: `
<p>Waze can save places too: search for a place, then save it from its card. That works well for houses with a clear address. For houses without one, keep the exact pins in Google Maps, and send yourself a Waze link for each (the steps are in <a href="/guides/share-exact-house-location-whatsapp/#waze">If they use Waze</a>).</p>`,
        },
        {
          id: "tips",
          title: "Tips for the trip",
          html: `
<ul>
  <li><strong>Write the turn, not just the house:</strong> “second junction after the padi field, house with the rambutan tree”.</li>
  <li><strong>Add a photo of the gate</strong> in the family group. A house looks different at night, and from the road than from the map.</li>
  <li><strong>Check old pins once a year.</strong> Families move, and new houses go up on the same land.</li>
</ul>`,
        },
      ],
      withApp: `
<p>PinLocate is made for this list. Add each relative from your contacts or by name, then give them as many places as they need, such as Rumah, Rumah kampung and Kebun, each with its own pin, landmark note and photos of the gate. Search finds a person or a place by name.</p>
<p>Your places are stored on your phone, so they open without signal, and one tap starts navigation in Waze or Google Maps. Save a backup file before you change phones. With Pro, PinLocate also backs up to your own Google Drive automatically, and its visit list puts the day’s houses in order, nearest first from where you are.</p>`,
    },
    ms: {
      title: "Cara simpan lokasi rumah saudara untuk balik kampung",
      description:
        "Pin rumah setiap saudara sekali sahaja, dengan nama yang mudah dicam dan nota penanda, dan simpan dalam satu senarai yang boleh dibuka dalam perjalanan, walaupun di kawasan yang lemah isyaratnya.",
      answer:
        "Simpan rumah setiap saudara sekali sahaja sebagai pin pada pagarnya, dengan nama yang jelas seperti “Rumah Mak Long” dan nota tentang penanda, dan kumpulkan semuanya dalam satu senarai yang boleh dibuka sepanjang perjalanan. Google Maps boleh buat begini dengan senarai simpanan dan peta luar talian; buat pin semasa anda berada di setiap rumah, atau minta keluarga hantarkan.",
      sections: [
        {
          id: "kenapa",
          title: "Kenapa elok dibuat sebelum Raya",
          html: `
<p>Balik kampung selalunya bermakna banyak rumah dalam beberapa hari: ibu bapa, datuk nenek, pak cik dan mak cik, serta sepupu yang sudah berpindah ke taman baharu. Ada yang anda kunjungi setahun sekali, ada yang belum pernah anda pergi. Rumah di kampung selalunya tiada nombor, beberapa rumah berkongsi satu jalan, dan isyarat pula hilang tepat ketika anda perlukan peta.</p>
<p>Satu senarai pin yang tepat, dibuat sekali sahaja, bermakna tiada siapa perlu telefon dahulu untuk bertanya jalan atau mengekori kereta orang lain masuk ke kampung.</p>`,
        },
        {
          id: "google-maps",
          title: "Simpan rumah-rumah itu dalam Google Maps",
          html: `
<ol>
  <li><strong>Buat senarai.</strong> Dalam Google Maps, pergi ke tempat yang disimpan (dalam tab Anda) dan buat senarai baharu, contohnya “Balik kampung”. Nama menu mungkin sedikit berbeza mengikut versi aplikasi.</li>
  <li><strong>Letak pin pada setiap pagar.</strong> Cari kawasan itu, tukar ke Satelit, kemudian tekan lama pada pagar rumah tersebut. Pastikan rumahnya betul sebelum anda simpan.</li>
  <li><strong>Simpan dalam senarai.</strong> Pada kad pin itu, tekan Simpan dan pilih senarai anda.</li>
  <li><strong>Beri nama.</strong> Pin yang diletakkan hanya bernamakan koordinatnya, jadi tambah nota padanya dalam senarai, seperti “Rumah Mak Long, pagar biru, sebelah masjid”, atau beri label peribadi dengan Label.</li>
  <li><strong>Kongsi senarai itu</strong> dengan pasangan atau adik-beradik supaya semua orang ada pin yang sama. Buka senarai itu dan tekan Kongsi.</li>
  <li><strong>Muat turun kawasan itu.</strong> Sebelum bertolak, muat turun peta luar talian kawasan kampung dalam Google Maps (tekan gambar profil anda, kemudian pilih Peta luar talian), supaya anda masih boleh melihat peta dan mendapat arah memandu di tempat yang lemah isyaratnya.</li>
</ol>`,
        },
        {
          id: "dari-keluarga",
          title: "Dapatkan pin apabila anda tiada di sana",
          html: `
<p>Untuk rumah yang belum pernah anda pergi, tanya dalam kumpulan WhatsApp keluarga. Sesiapa yang tinggal di situ atau berdekatan boleh meletakkan pin pada pagar dalam Google Maps dan berkongsinya, seperti dalam panduan kami tentang <a href="/ms/panduan/kongsi-lokasi-rumah-tepat-whatsapp/">cara kongsi lokasi rumah yang tepat di WhatsApp</a>. Buka pin itu dari sembang dan simpan dalam senarai anda.</p>
<p>Apabila anda berada di sesebuah rumah, luangkan seminit sebelum pulang: tekan lama pada peta di tempat anda berdiri di pagar, dan simpan pin itu. Tahun depan, tiada siapa perlu ingat jalannya lagi.</p>`,
        },
        {
          id: "waze",
          title: "Jika anda memandu dengan Waze",
          html: `
<p>Waze juga boleh menyimpan tempat: cari tempat itu, kemudian simpan dari kadnya. Cara ini sesuai untuk rumah yang alamatnya jelas. Untuk rumah tanpa alamat, simpan pin yang tepat dalam Google Maps, dan hantar pautan Waze untuk setiap satu kepada diri sendiri (langkahnya ada dalam <a href="/ms/panduan/kongsi-lokasi-rumah-tepat-whatsapp/#waze">Jika mereka guna Waze</a>).</p>`,
        },
        {
          id: "petua",
          title: "Petua untuk perjalanan",
          html: `
<ul>
  <li><strong>Tulis simpangnya, bukan rumah sahaja:</strong> “simpang kedua lepas sawah padi, rumah yang ada pokok rambutan”.</li>
  <li><strong>Tambah foto pagar</strong> dalam kumpulan keluarga. Rumah nampak lain pada waktu malam, dan lain dari jalan berbanding dari peta.</li>
  <li><strong>Semak pin lama setahun sekali.</strong> Keluarga berpindah, dan rumah baharu dibina di atas tanah yang sama.</li>
</ul>`,
        },
      ],
      withApp: `
<p>PinLocate memang dibuat untuk senarai begini. Tambah setiap saudara daripada kenalan anda atau dengan nama, kemudian beri mereka seberapa banyak tempat yang perlu, seperti Rumah, Rumah kampung dan Kebun, setiap satu dengan pin, nota penanda dan foto pagarnya sendiri. Carian menjumpai orang atau tempat mengikut nama.</p>
<p>Tempat anda disimpan dalam telefon, jadi ia boleh dibuka tanpa isyarat, dan satu tekan memulakan navigasi dalam Waze atau Google Maps. Simpan fail sandaran sebelum menukar telefon. Dengan Pro, PinLocate juga membuat sandaran ke Google Drive anda sendiri secara automatik, dan senarai lawatannya menyusun rumah yang hendak dikunjungi hari itu, yang terdekat dahulu dari tempat anda berada.</p>`,
    },
  },
};

export const guides: Guide[] = [shareLocation, baliKampung];

export function guidePath(guide: Guide, lang: Lang): string {
  return `${lang === "ms" ? "/ms/panduan/" : "/guides/"}${guide.slug[lang]}/`;
}

export function guideById(id: Guide["id"]): Guide {
  return guides.find((g) => g.id === id)!;
}
