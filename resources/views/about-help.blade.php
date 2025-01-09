<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About & Help</title>
    <link rel="stylesheet" href="{{ asset('style/style.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
</head>

<body>
    <!-- Sidebar akan dimuat di sini -->
    <div id="sidebar-container"></div>

    <div class="content">
        <section id="about-help">
            <h1>About & Help</h1>
            <h2>About</h2>
            <p>Aplikasi WebGIS ini dikembangkan untuk memvisualisasikan perubahan lanskap di Kecamatan Meuraxa, Kota Banda Aceh, setelah 20 tahun gempa dan tsunami Aceh 2004. Aplikasi ini dirancang untuk memberikan kemudahan kepada pengguna dalam mengeksplorasi data spasial, membandingkan peta dari periode yang berbeda, dan memahami transformasi wilayah secara interaktif.</p>

            <h2>Help</h2>
            <ol>
                <li><strong>Halaman Utama:</strong> Menampilkan peta interaktif dan navigasi ke fitur lainnya.</li>
                <li><strong>Perbandingan Peta:</strong> Menggunakan halaman <em>Comparison</em> untuk membandingkan dua peta secara sinkron.</li>
                <li><strong>Navigasi:</strong> Gunakan menu untuk mengakses data tambahan atau kembali ke halaman utama.</li>
                <li><strong>Interaksi Peta:</strong> Klik dan geser peta untuk melihat wilayah tertentu, serta gunakan fitur zoom untuk detail lebih lanjut.</li>
            </ol>

            <h2>Contact Us</h2>
            <p><strong>Nomor Telepon:</strong> 0895370100111</p>
            <p><strong>Email:</strong> faqih_t20@mhs.usk.ac.id</p>
        </section>
    </div>

    <script src="{{ asset('js/sidebar.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>