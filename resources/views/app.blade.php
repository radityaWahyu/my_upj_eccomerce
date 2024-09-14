<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta http-equiv="expires" content="Day, 01 Mon 2014 00:00:00 GMT" />
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />

    @if(isset($page['props']['event']))
    <meta name="og:author" content="{{ (isset($page['props']['event']['author'])) ? $page['props']['event']['author'] : '' }}" />
    <meta property="og:type" content="post">
    <meta property="og:title" content="{{ isset($page['props']['event']['title']) ? $page['props']['event']['title'] : '' }}" />
    <meta property="og:description" content="{{ (isset($page['props']['event']['description'])) ? $page['props']['event']['description'] : '' }}" />
    <meta property="og:image" content="{{  (isset($page['props']['event']['image'])) ? ($page['props']['event']['image']) : '' }}" />
    <meta property="og:url" content="{{ url()->current() }}" />
    @endif

    @if(isset($page['props']['event']))
    <meta name="author" content="{{ (isset($page['props']['event']['author'])) ? $page['props']['event']['author'] : '' }}" />
    <meta property="type" content="post">
    <meta property="title" content="{{ isset($page['props']['event']['title']) ? $page['props']['event']['title'] : '' }}" />
    <meta name="description" content="{{ (isset($page['props']['event']['description'])) ? $page['props']['event']['description'] : '' }}" />
    <meta property="image" content="{{  (isset($page['props']['event']['image'])) ? ($page['props']['event']['image']) : '' }}" />
    <meta property="url" content="{{ url()->current() }}" />
    @endif

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">


    <!-- Scripts -->
    @routes
    @vite(['resources/css/app.css'])
    @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia

</body>

</html>