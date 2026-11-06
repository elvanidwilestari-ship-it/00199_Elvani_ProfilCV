// Langkah 2 · Cek koneksi file
console.log("script.js terhubung!");

// Langkah 3 · Variabel, tipe data, object
const profil = {
  nama: "Elvani Dwi Lestari",
  prodi: "Sistem Informasi",
  semester: 1,
};

const sapaan = `Halo, saya ${profil.nama}, mahasiswa ${profil.prodi} semester ${profil.semester}.`;
console.log(sapaan);
console.log(typeof profil.nama, typeof profil.semester);

// Langkah 4 · Array of object + loop
const keahlian = [];

console.log(`Jumlah keahlian: ${keahlian.length}`);

for (const skill of keahlian) {
  console.log(`${skill.nama} (${skill.level})`);
}

// Langkah 5 · Fungsi + percabangan -> render ke halaman
const daftarSkill = document.getElementById("daftar-skill");

const buatPil = (skill) => {
  const li = document.createElement("li");
  li.textContent = skill.nama;
  li.className = "flex items-center justify-center h-full text-sm font-semibold px-4 py-3 rounded-xl text-center border transition-all";

  if (skill.level === "mahir") {
    li.classList.add(
      "bg-emerald-700",
      "text-white",
      "dark:bg-emerald-800",
      "dark:text-white",
      "border-emerald-700"
    );
  } else {
    li.classList.add(
      "bg-emerald-100",
      "text-emerald-900",
      "dark:bg-emerald-950",
      "dark:text-emerald-200",
      "border-emerald-200"
    );
  }

  return li;
};

for (const skill of keahlian) {
  if (daftarSkill) {
    daftarSkill.append(buatPil(skill));
  }
}

// Langkah 6 · Form tambah keahlian
const formKeahlian = document.querySelector("#form-keahlian");
const inputSkill = document.querySelector("#input-skill");
const inputLevel = document.querySelector("#input-level");

if (formKeahlian) {
  formKeahlian.addEventListener("submit", (event) => {
    event.preventDefault();

    const skillBaru = {
      nama: inputSkill.value.trim(),
      level: inputLevel.value,
    };

    if (skillBaru.nama === "") {
      return;
    }

    keahlian.push(skillBaru);
    if (daftarSkill) {
      daftarSkill.append(buatPil(skillBaru));
    }
    formKeahlian.reset();
  });
}

// Langkah 7 · Hamburger: buka/tutup menu
const tombolMenu = document.querySelector("#tombol-menu");
const menuNav = document.querySelector("#menu-nav");

const toggleMenu = () => {
  if (menuNav) {
    menuNav.classList.toggle("hidden");
    menuNav.classList.toggle("flex");
  }
};

if (tombolMenu && menuNav) {
  tombolMenu.addEventListener("click", toggleMenu);
}

// Langkah 8 · Tutup menu setelah link diklik
const tutupMenu = () => {
  if (window.innerWidth < 768 && menuNav) {
    menuNav.classList.add("hidden");
    menuNav.classList.remove("flex");
  }
};

const linkMenu = document.querySelectorAll("#menu-nav a");

for (const link of linkMenu) {
  link.addEventListener("click", tutupMenu);
}

// Helper Function untuk Accordion
const aktifkanAccordion = (idTombol, idIsi, idIkon) => {
  const tombol = document.querySelector(idTombol);
  const isi = document.querySelector(idIsi);
  const ikon = document.querySelector(idIkon);

  if (tombol && isi) {
    tombol.addEventListener("click", () => {
      isi.classList.toggle("hidden");

      if (ikon) {
        ikon.textContent = isi.classList.contains("hidden") ? "▸" : "▾";
      }
    });
  }
};

// Panggilan Accordion tiap bagian
aktifkanAccordion("#tombol-tentang", "#isi-tentang", "#ikon-tentang");
aktifkanAccordion("#tombol-pendidikan", "#isi-pendidikan", "#ikon-pendidikan");
aktifkanAccordion("#tombol-keahlian", "#daftar-skill", "#ikon-keahlian");
aktifkanAccordion("#tombol-organisasi", "#isi-organisasi", "#ikon-organisasi");
aktifkanAccordion("#tombol-pengalaman", "#isi-pengalaman", "#ikon-pengalaman");
aktifkanAccordion("#tombol-kontak", "#isi-kontak", "#ikon-kontak");