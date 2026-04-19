window.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("#marker");
  const model = document.querySelector("#songket-model");
  const uiOverlay = document.getElementById("ui-overlay");
  const infoBox = document.getElementById("info-box");
  const btnKembali = document.getElementById("btn-kembali");

  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-desc");

  // Data Motif Tenun Songket
  const motifs = [
    {
      image: "asset/img/motif/1.jpg",
      name: "Tenun Songket Cerari",
      desc: "Tenun songket Jembrana motif Cerari memiliki makna keindahan, keharmonisan, dan keseimbangan dalam kehidupan. Motif ini biasanya terinspirasi dari bentuk bunga atau hiasan alami yang melambangkan kesucian keanggunan, serta hubungan yang selaras antara manusia dengan alam dan lingkungan sekitarnya. Selain itu, motif Cerari juga mencerminkan nilai estetika tinggi serta ketekunan para perajin dalam menjaga warisan budaya leluhur."
    },
    {
      image: "asset/img/motif/2.jpg",
      name: "Tenun Songket Jembatan Cinta",
      desc: "Tenun Songket Jembrana dengan motif Jembatan Cinta melambangkan keindahan alam yang terlindungi serta nilai cinta yang tulus dan penuh kesetiaan. Motif ini terinspirasi dari bunga-bunga di Jembrana yang dijaga oleh pagar, sebagai simbol keseimbangan antara keindahan dan pelestarian. Secara filosofis, motif ini juga mengandung makna pentingnya menjaga komitmen dalam hubungan. Selain itu, penggunaan warna alami mencerminkan kekayaan sumber daya daerah, sekaligus menjadi simbol budaya dan ekonomi melalui peran para perajin dalam melestarikan tradisi tenun."
    },
    {
      image: "asset/img/motif/3.jpg",
      name: "Tenun Songket Bulan Bintang ",
      desc: "Tenun songket motif Bulan Bintang memiliki makna keindahan, harapan, dan petunjuk dalam kehidupan. Bulan melambangkan kelembutan, ketenangan, serta siklus kehidupan, sedangkan bintang melambangkan cahaya, arah, dan harapan. Secara filosofis, motif ini menggambarkan keseimbangan antara ketenangan batin dan tujuan hidup, serta menjadi simbol harapan agar manusia selalu berada di jalan yang benar. Selain itu, motif ini juga mencerminkan keindahan alam semesta dan nilai spiritual dalam kehidupan masyarakat."
    },
    {
      image: "asset/img/motif/4.jpg",
      name: "Tenun Songket Anggur",
      desc: "Tenun songket motif anggur memiliki makna simbolis yang mencerminkan kemakmuran, kebersamaan, kesuburan, dan keindahan hidup. Motif anggur yang digambarkan berkelompok melambangkan rezeki yang berlimpah serta kesejahteraan, sekaligus mencerminkan pentingnya persatuan dan hubungan erat dalam kehidupan bermasyarakat. Selain itu, anggur sebagai tanaman yang terus berbuah menjadi simbol harapan akan kehidupan yang subur dan berkembang, sementara keindahan motifnya juga menunjukkan nilai estetika tinggi serta keanggunan, yang sering dikaitkan dengan penggunaan dalam acara adat dan penanda status sosial."
    },
    {
      image: "asset/img/motif/5.jpg",
      name: "Tenun Songket Bikas Kordi",
      desc: "Tenun songket motif Bikas Kordi di Bali memiliki makna kesucian, perlindungan, dan keseimbangan hidup, sehingga sering digunakan dalam upacara seperti otonan dan metatah. Motif ini melambangkan ikatan atau “tali kehidupan” yang menyatukan manusia dengan nilai spiritual, adat, dan Tuhan. Dalam konteks upacara, kain ini dipercaya sebagai simbol penyucian diri serta perlindungan dari pengaruh buruk, sekaligus harapan agar individu yang menjalani ritual dapat tumbuh menjadi pribadi yang lebih baik, seimbang, dan selaras dengan kehidupan."
    }
  ];

  if (marker) {
    marker.addEventListener("markerFound", () => {
      uiOverlay.style.display = "flex";
      if (model) {
        model.setAttribute("visible", true);
        model.emit("show-model");
      }
    });

    marker.addEventListener("markerLost", () => {
      uiOverlay.style.display = "none";
      infoBox.classList.remove("show");
      if (model) {
        model.emit("hide-model");
      }
    });
  }

  // event untuk 5 tombol 
  document.querySelectorAll(".ar-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      if (index !== null && motifs[index]) {
        const data = motifs[index];
        popupImg.src = data.image; // gambar popup
        popupTitle.textContent = data.name; // nama motif
        popupDesc.textContent = data.desc; // sejarah motif
        infoBox.classList.add("show");
      }
    });
  });

  // Tombol kembali popup
  if (btnKembali) {
    btnKembali.addEventListener("click", () => {
      infoBox.classList.remove("show");
    });
  }
});
