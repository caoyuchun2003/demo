@extends('layouts.app')

@section('content')
    <div class="card" style="max-width: 520px; margin: 24px auto;">
        <h1>Login</h1>
        <p class="muted">Use test accounts for quick login.</p>

        <form method="POST" action="{{ route('login.submit') }}">
            @csrf
            <label>
                Email
                <input id="email" name="email" type="email" value="{{ old('email') }}" required>
            </label>
            <label>
                Password
                <input id="password" name="password" type="password" required>
            </label>
            @error('email') <p class="error">{{ $message }}</p> @enderror
            <button class="btn primary" style="margin-top: 14px;" type="submit">Login</button>
        </form>

        <div style="margin-top: 16px; background: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 10px;">
            <strong>Test accounts</strong>
            <div class="row" style="margin-top: 8px;">
                <button
                    type="button"
                    class="btn"
                    onclick="fillTestAccount('admin@example.com', 'Admin123456')"
                >
                    Fill Admin
                </button>
                <button
                    type="button"
                    class="btn"
                    onclick="fillTestAccount('user@example.com', 'User123456')"
                >
                    Fill User
                </button>
            </div>
            <p class="muted" style="margin: 6px 0 0;">admin@example.com / Admin123456</p>
            <p class="muted" style="margin: 4px 0 0;">user@example.com / User123456</p>
        </div>

        <p class="muted" style="margin-top: 14px;">No account? <a href="{{ route('register') }}">Register</a></p>
    </div>

    <script>
        function fillTestAccount(email, password) {
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            if (emailInput) emailInput.value = email;
            if (passwordInput) passwordInput.value = password;
        }
    </script>
@endsection
