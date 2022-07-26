<?php

return [

    /*
    |--------------------------------------------------------------------------
    | cache_key
    |--------------------------------------------------------------------------
    |
    | These value decides in what variable name the application's master data and time to be stored
    | Whenever an update occurs in corresponding db table, corresponding cache will also get refreshed
    |
    */

    'cache_key' => [
        'db_masters'  =>  'DB_MASTERS',
        'db_master_data_max_times'  =>  'DB_MASTER_DATA_MAX_TIME',
        'db_properties'  =>  'DB_PROPERTIES',
        'db_properties_last_updated_time'  =>  'DB_PROPERTIES_LAST_UPDATED_TIME',
        'db_master_data'  =>  'DB_MASTER_DATA',
        'db_master_prop_max_time'  =>  'DB_MASTER_PROP_MAX_TIME',
        'db_prop_master_max_time'  =>  'DB_PROP_MASTER_MAX_TIME',
        'db_orders_last_updated_time'  =>  'DB_ORDERS_LAST_UPDATED_TIME',
        'db_leaves_last_updated_time'  =>  'DB_LEAVES_LAST_UPDATED_TIME',
        'db_reviews_last_updated_time'  =>  'DB_REVIEWS_LAST_UPDATED_TIME',
        'db_offers_last_updated_time'  =>  'DB_OFFERS_LAST_UPDATED_TIME',
    ],

    'brand_colors' => [
        "primary" => "#02112E",
        "secondary" => "#F27420",
        "accent" => "#9C27B0",
        "positive" => "#21BA45",
        "negative" => "#C10015",
        "info" => "#31CCEC",
        "warning" => "#F2C037",
        "dark" => "#1D1D1D",
        "dark-page" => "#121212"
    ]
];
