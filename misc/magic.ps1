$intro = "SCRIPT TOP TIER"
$intro > 'out.txt'
$categoria = Read-Host "Categoria"
[Int]$strtnum = Read-Host "Ultimo numero de la categoria?"
++$strtnum

$songs = Get-Item * -Exclude *.ps1, *txt

$sols = Get-Content 'sols.txt'

[Int]$i = 0
foreach ($song in $songs) {
    $newname = $strtnum.ToString() + ".mp3"
    $song.Name.Replace($song.Name,$newname)
    Rename-item -Path $song $newname
    $solu = $sols[$i]
    $codejs =  'new SongData("../src/music/' + $categoria + '/' +$strtnum+ '.mp3", ['+$solu+']),'
    $codejs >> 'out.txt'
    $strtnum += 1
    $i += 1
}

