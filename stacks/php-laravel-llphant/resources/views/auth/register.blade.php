@extends('layouts.app')

@section('content')
    <div class="card" style="max-width: 520px; margin: 24px auto;">
        <h1>Register</h1>
        <p class="muted">Create an account and access admin pages.</p>

        <form method="POST" action="{{ route('register.submit') }}">
            @csrf
            <label>
                Name
                <input name="name" type="text" value="{{ old('name') }}" required>
            </label>
            <label>
                Email
                <input name="email" type="email" value="{{ old('email') }}" required>
            </label>
            <label>
                Password
                <input name="password" type="password" required>
            </label>
            <label>
                Confirm password
                <input name="password_confirmation" type="password" required>
            </label>
            @if ($errors->any())
                <p class="error">{{ $errors->first() }}</p>
            @endif
            <button class="btn primary" style="margin-top: 14px;" type="submit">Register</button>
        </form>

        <p class="muted" style="margin-top: 14px;">Have an account? <a href="{{ route('login') }}">Login</a></p>
    </div>
@endsection
