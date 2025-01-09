<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebGIS Geotagging</title>
    <link rel="stylesheet" href="{{ asset('public/style/style.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-fullscreen/dist/leaflet.fullscreen.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div id="sidebar-container"></div>
    <div class="container">

        <div id="judul">
            <h1>WebGIS</h1>
        </div>

        <!-- Carousel untuk memilih tahun -->
        <div id="carouselExampleControls" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h5>Data Tahun 2004</h5>
                </div>
                <div class="carousel-item">
                    <h5>Data Tahun 2009</h5>
                </div>
                <div class="carousel-item">
                    <h5>Data Tahun 2024</h5>
                </div>
            </div>
        </div>

        <!-- Peta berada di dalam kotak -->
        <div id="map-container">
            <div id="map"></div>

            <!-- Tombol carousel di atas peta -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-arrow-left" aria-hidden="true">&lt;</span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-arrow-right" aria-hidden="true">&gt;</span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- Data tampil di bawah peta -->
        <div id="data-info">
            <div id="opacity-legend-wrapper">
                <div id="legend-container">
                    <h6>Legenda:</h6>
                    <img id="legend" alt="Legend akan muncul di sini">
                </div>
                <div id="layer-opacity-controls"></div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="https://unpkg.com/leaflet-fullscreen/dist/Leaflet.fullscreen.min.js"></script>
    <script src="{{ url('assets/leaflet.ajax.js') }}"></script>
    <script src="{{ url('js/sidebar.js') }}"></script>
    <script src="{{ url('js/app.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>
