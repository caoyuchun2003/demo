@extends('layouts.app')

@section('content')
    @include('admin.partials.nav')
    <div class="card">
        <h1>Dashboard</h1>
        <p class="muted">Admin overview metrics.</p>
        <div class="row" style="margin-top: 12px;">
            <div class="card" style="flex: 1;">
                <div class="muted">Active users</div>
                <div style="font-size: 24px; font-weight: 600;">{{ $activeUsers }}</div>
            </div>
            <div class="card" style="flex: 1;">
                <div class="muted">Admin users</div>
                <div style="font-size: 24px; font-weight: 600;">{{ $adminUsers }}</div>
            </div>
            <div class="card" style="flex: 1;">
                <div class="muted">Today's registrations</div>
                <div style="font-size: 24px; font-weight: 600;">{{ $todayRegistrations }}</div>
            </div>
        </div>
    </div>
@endsection
