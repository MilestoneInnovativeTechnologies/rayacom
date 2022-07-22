<?php

namespace Milestone\Rayacom\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    use WithoutModelEvents;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        ini_set("memory_limit","1024M");
        $this->call([
            MasterSeeder::class,
            PropertySeeder::class,
            AreaSeeder::class,
            CustomerSeeder::class,
            AreaCustomerSeeder::class,
            SalesExecutiveSeeder::class,
            ExecutiveAreaSeeder::class,
            ItemSeeder::class,
        ]);
    }
}
