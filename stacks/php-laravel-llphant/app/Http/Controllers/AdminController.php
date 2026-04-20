<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'activeUsers' => User::count(),
            'adminUsers' => User::where('role', 'admin')->count(),
            'todayRegistrations' => User::whereDate('created_at', now()->toDateString())->count(),
        ]);
    }

    public function users(): Response
    {
        return Inertia::render('Admin/Users', [
            'users' => User::orderByDesc('created_at')->get(),
        ]);
    }

    public function logs(): Response
    {
        return Inertia::render('Admin/Logs', [
            'logs' => [
                ['event' => 'User login', 'actor' => 'admin@example.com', 'time' => now()->subMinutes(10)->format('Y-m-d H:i')],
                ['event' => 'User registration', 'actor' => 'user@example.com', 'time' => now()->subHour()->format('Y-m-d H:i')],
            ],
        ]);
    }

    public function settings(): Response
    {
        return Inertia::render('Admin/Settings');
    }
}
