###### Create Laravel
`laravel new rayacom`

###### Move to directory
`cd rayacom`

###### Require Milestone/Rayacom
`composer require milestone/rayacom`

###### Publish Assets
`php artisan vendor:publish`
select RayacomServiceProvider from the list

###### Set Configurations @ config > app
`name = Rayacom, url = <The Domain>, timezone = Asia/Kolkata or Asia/Dubai`

###### Comment all routes in routes/web.php

###### Create database and set details in env files
`php artisan migrate`

###### If required dummy data, Publish data files then Seed it
`php artisan vendor:publish`
Select rayacom-dummydata from the list

`php artisan db:seed --class=Milestone\Rayacom\Seeders\DatabaseSeeder`

##### Application Ready
##### If need to test locally, create host and vhost (apache). Then browse through the host address
