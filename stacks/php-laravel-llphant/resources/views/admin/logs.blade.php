@extends('layouts.app')

@section('content')
    @include('admin.partials.nav')
    <div class="card">
        <h1>Audit Logs</h1>
        <p class="muted">Simple mock logs for management UI.</p>
        <div style="margin-top: 10px;">
            @foreach ($logs as $log)
                <div class="card" style="margin-bottom: 8px;">
                    <div><strong>{{ $log['event'] }}</strong></div>
                    <div class="muted">{{ $log['actor'] }} at {{ $log['time'] }}</div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
