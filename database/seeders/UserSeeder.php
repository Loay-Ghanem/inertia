<?php

namespace Database\Seeders;

use App\Enums\UserType;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->info('Seeding users...');

        $types = UserType::getValues();

        foreach ($types as $type) {
            $typeLowerCase = strtolower($type);

            User::updateOrCreate(
            ['email' => "{$typeLowerCase}@{$typeLowerCase}.com"],    
            [
                'name'      => $type . ' User',
                'email'     => "{$typeLowerCase}@{$typeLowerCase}.com",
                'user_type' => $type,
                'password'  => bcrypt('password'),
            ]);
        }

        $this->command->info('Users seeded successfully!');
    }
}
