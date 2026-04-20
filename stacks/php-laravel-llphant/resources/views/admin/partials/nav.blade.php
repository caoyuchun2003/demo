<div class="card" style="margin-bottom: 16px;">
    <div class="row" style="justify-content: space-between; align-items: center;">
        <div class="row">
            <a class="btn" href="{{ route('admin.dashboard') }}">Dashboard</a>
            <a class="btn" href="{{ route('admin.users') }}">Users</a>
            <a class="btn" href="{{ route('admin.logs') }}">Logs</a>
            <a class="btn" href="{{ route('admin.settings') }}">Settings</a>
        </div>
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button class="btn" type="submit">Logout</button>
        </form>
    </div>
</div>
