@extends('layouts.app')

@section('content')
    <div class="card">
        <h1>PHP Laravel Demo</h1>
        <p class="muted">Login, register and admin pages are ready.</p>
        <div class="row" style="margin-top: 14px;">
            @auth
                <a class="btn primary" href="{{ route('admin.dashboard') }}">Go to Admin</a>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button class="btn" type="submit">Logout</button>
                </form>
            @else
                <a class="btn primary" href="{{ route('login') }}">Login</a>
                <a class="btn" href="{{ route('register') }}">Register</a>
            @endauth
        </div>
    </div>
@endsection
