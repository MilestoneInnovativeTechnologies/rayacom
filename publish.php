<?php

exec('DEL /Q /S milestone\\rayacom\\public\\assets\\*.*');
exec('XCOPY dist\\spa\\assets milestone\\rayacom\\public\\assets /EHRYI');

$json = [];
preg_match_all('/(href|src)="\/assets\/index\.(.{8})\.(css|js)/',file_get_contents(implode(DIRECTORY_SEPARATOR,[__DIR__,'..','..','dist','spa','index.html'])),$matches);
foreach ($matches[3] as $idx => $ext){
  if(!array_key_exists($ext,$json)) $json[$ext] = [];
  if(!in_array($matches[2][$idx],$json[$ext])) $json[$ext][] =  $matches[2][$idx];
}
file_put_contents(implode(DIRECTORY_SEPARATOR,[__DIR__,'public','static','assets.json']),json_encode($json));

