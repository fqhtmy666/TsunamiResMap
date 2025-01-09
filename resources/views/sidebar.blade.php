<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('style/style.css') }}">
    <link rel="stylesheet" href="{{ asset('style/sidebar.css') }}">
</head>

<body>
    <div class="sidebar">
        <a href="{{ url('/') }}"><img src="{{ asset('img/newlogo.png') }}" alt="Logo" class="logo"></a>
        <ul class="menu">
            <hr>
            <li><a href="{{ url('/') }}">WebGIS</a></li>
            <hr>
            <li><a href="{{ url('/comparison') }}">Perbandingan</a></li>
            <hr>
        </ul>
        <ul class="menu-bottom">
            <hr>
            <li><a href="{{ url('/about-help') }}">About & Help</a></li>
        </ul>
    </div>
</body>

</html>