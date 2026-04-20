@extends('layouts.app')

@section('content')
    @include('admin.partials.nav')
    <div class="card">
        <h1>Users</h1>
        <p class="muted">Registered users from database.</p>
        <table style="margin-top: 10px;">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($users as $user)
                <tr>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                    <td>{{ $user->role }}</td>
                    <td>{{ $user->created_at?->format('Y-m-d H:i') }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
