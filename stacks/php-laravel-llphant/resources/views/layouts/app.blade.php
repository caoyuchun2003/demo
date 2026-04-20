<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP AI Demo</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: #f4f4f5; color: #18181b; }
        .container { max-width: 1024px; margin: 0 auto; padding: 24px; }
        .card { background: #fff; border: 1px solid #e4e4e7; border-radius: 12px; padding: 20px; }
        .row { display: flex; gap: 10px; flex-wrap: wrap; }
        a.btn, button.btn { display: inline-block; text-decoration: none; border: 1px solid #d4d4d8; background: #fff; color: #18181b; border-radius: 8px; padding: 8px 12px; }
        a.btn.primary, button.btn.primary { background: #18181b; color: #fff; border-color: #18181b; }
        input { width: 100%; box-sizing: border-box; border: 1px solid #d4d4d8; border-radius: 8px; padding: 10px; margin-top: 6px; }
        label { display: block; margin-top: 12px; font-size: 14px; }
        .error { color: #b91c1c; font-size: 13px; margin-top: 8px; }
        .muted { color: #52525b; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 10px; border-top: 1px solid #e4e4e7; text-align: left; }
    </style>
</head>
<body>
<div class="container">
    @yield('content')
</div>
</body>
</html>
