@extends('layouts.app')

@section('content')
    @include('admin.partials.nav')
    <div class="card" style="max-width: 640px;">
        <h1>Settings</h1>
        <p class="muted">Placeholder settings form.</p>
        <label>
            App name
            <input value="PHP Laravel Demo">
        </label>
        <label>
            Default model
            <input value="gpt-4.1-mini">
        </label>
        <button class="btn primary" style="margin-top: 14px;" type="button">Save</button>
    </div>
@endsection
