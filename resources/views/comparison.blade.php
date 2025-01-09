<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebGIS Geotagging - Perbandingan Tahun</title>
    <link rel="stylesheet" href="{{ asset('style/comparison.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
</head>

<body>
    <!-- Sidebar akan dimuat di sini -->
    <div id="sidebar-container"></div>

    <main class="container">
        <h1 class="title">Perbandingan</h1>

        <!-- Pilihan tahun untuk peta kiri dan kanan -->
        <section id="control-panel" aria-label="Map Year Control Panel">
            <div class="map-control">
                <label for="year-left">Tahun Peta Kiri:</label>
                <select id="year-left" aria-label="Pilih Tahun Kiri" onchange="updateMap('left')">
                    <option value="" disabled selected>-Pilih Tahun-</option>
                    <option value="2004">2004</option>
                    <option value="2009">2009</option>
                    <option value="2024">2024</option>
                </select>
            </div>
            <div class="map-control">
                <label for="year-right">Tahun Peta Kanan:</label>
                <select id="year-right" aria-label="Pilih Tahun Kanan" onchange="updateMap('right')">
                    <option value="" disabled selected>-Pilih Tahun-</option>
                    <option value="2004">2004</option>
                    <option value="2009">2009</option>
                    <option value="2024">2024</option>
                </select>
            </div>
        </section>

        <!-- Dua peta untuk perbandingan -->
        <section class="map-split" aria-label="Maps Comparison">
            <div id="map-left" aria-label="Map Left">
                <div class="opacity-slider">
                    <label for="shp-opacity-left">SHP:</label>
                    <input id="shp-opacity-left" type="range" min="0" max="1" step="0.1" value="1">
                    <label for="tiff-opacity-left">TIFF:</label>
                    <input id="tiff-opacity-left" type="range" min="0" max="1" step="0.1" value="1">
                </div>
            </div>
            <div id="map-right" aria-label="Map Right">
                <div class="opacity-slider">
                    <label for="shp-opacity-right">SHP:</label>
                    <input id="shp-opacity-right" type="range" min="0" max="1" step="0.1" value="1">
                    <label for="tiff-opacity-right">TIFF:</label>
                    <input id="tiff-opacity-right" type="range" min="0" max="1" step="0.1" value="1">
                </div>
            </div>
        </section>
    </main>

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet.sync"></script> <!-- Sinkronisasi Peta -->
    <script src="{{ asset('js/sidebar.js') }}"></script>
    <script src="{{ asset('js/comparison.js') }}"></script>
</body>

</html>