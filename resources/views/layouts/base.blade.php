<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konti - @yield('title') </title>

    @vite('resources/css/app.css')
    @yield('headerScripts')
</head>
<body class="antialiased">
    <div id="kontiApp">
        @yield('content')
    </div>

    @include('partials/footer')
    @yield('footerScripts')
</body>
</html>