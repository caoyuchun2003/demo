<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            ['name' => 'Admin', 'password' => 'Admin123456', 'role' => 'admin']
        );

        User::updateOrCreate(
            ['email' => 'user@example.com'],
            ['name' => 'Demo User', 'password' => 'User123456', 'role' => 'user']
        );
    }
}
