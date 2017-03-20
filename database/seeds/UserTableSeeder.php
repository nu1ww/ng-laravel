<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        App\User::create([
            'name' =>'Nuwan Wijethilaka',
            'email' => 'nu1.rock@gmail.com',
            'password'=> bcrypt('123'),
        ]);
    }
}
