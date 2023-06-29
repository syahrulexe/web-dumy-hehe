// let dataProvinsi;
// // Mengambil data dari file data.json
// fetch('./public/js/data.json')
//   .then(response => response.json())
//   .then(data => {
//     dataProvinsi = data;
//     populateProvinsiOptions();
//   })
//   .catch(error => {
//     console.error('gagal:', error);
//   });

// function populateProvinsiOptions() {
//   provinsiSelect.innerHTML = '<option value="">Pilih Provinsi</option>';

//   dataProvinsi.forEach(function(provinsi) {
//     const optionProvinsi = document.createElement('option');
//     optionProvinsi.value = provinsi.provinsi;
//     optionProvinsi.text = provinsi.provinsi;
//     provinsiSelect.appendChild(optionProvinsi);
//   });
// }

// function updateKotaOptions() {
//   const provinsiId = provinsiSelect.value;
//   kotaSelect.innerHTML = '<option value="">Pilih Kota</option>';

//   const provinsi = dataProvinsi.find((provinsi) => provinsi.provinsi === provinsiId);

//   if (provinsi) {
//     provinsi.kota.forEach(function(kota) {
//       const optionKota = document.createElement('option');
//       optionKota.value = kota;
//       optionKota.text = kota;
//       kotaSelect.appendChild(optionKota);
//     });
//   }
// }

let dataProvinsi;
let provinsiSelect; // Mendefinisikan variabel provinsiSelect sebagai variabel global
let kotaSelect; // Mendefinisikan variabel kotaSelect sebagai variabel global

// Mengambil data dari file data.json
fetch('./public/js/data.json')
  .then(response => response.json())
  .then(data => {
    dataProvinsi = data;
    populateProvinsiOptions();
  })
  .catch(error => {
    console.error('gagal:', error);
  });

function populateProvinsiOptions() {
  provinsiSelect = document.getElementById("provinsi"); // Menginisialisasi variabel provinsiSelect
  provinsiSelect.innerHTML = '<option value="">Pilih Provinsi</option>';

  dataProvinsi.forEach(function(provinsi) {
    const optionProvinsi = document.createElement('option');
    optionProvinsi.value = provinsi.provinsi;
    optionProvinsi.text = provinsi.provinsi;
    provinsiSelect.appendChild(optionProvinsi);
  });
}

function updateKotaOptions() {
  provinsiSelect = document.getElementById("provinsi"); // Menginisialisasi variabel provinsiSelect
  kotaSelect = document.getElementById("kota"); // Menginisialisasi variabel kotaSelect
  const provinsiId = provinsiSelect.value;
  kotaSelect.innerHTML = '<option value="">Pilih Kota</option>';

  const provinsi = dataProvinsi.find((provinsi) => provinsi.provinsi === provinsiId);

  if (provinsi) {
    provinsi.kota.forEach(function(kota) {
      const optionKota = document.createElement('option');
      optionKota.value = kota;
      optionKota.text = kota;
      kotaSelect.appendChild(optionKota);
    });
  }
}


function submitForm(event) {
    event.preventDefault(); // Menghentikan pengiriman form
  
    // Mengambil nilai inputan form
    var nama = document.getElementById('nama').value;
    var nohp = document.getElementById('nohp').value;
    var email = document.getElementById('email').value;
    var provinsiSelect = document.getElementById('provinsi').value;
    var kotaSelect = document.getElementById('kota').value;
  
  
    // Menampilkan data inputan ke halaman
    var hasilDiv  = document.getElementById('hasil');
    hasilDiv .innerHTML = '<h3>result</h3>' +
      '<p>Nama: ' + nama + '</p>' +
      '<p>No. HP: ' + nohp + '</p>' +
      '<p>Email: ' + email + '</p>' +
      '<p>Provinsi: ' + provinsiSelect + '</p>' +
      '<p>Kota/Kabupaten: ' + kotaSelect + '</p>';
  }


