Invoke-SqlCmd -ServerInstance 'localhost' -inputfile C:\Users\Matej\Desktop\SQLQuery.sql
function insertToDb($line, $PlaylistId){
  
    $position = $line.ToString().Split(',').Get(0)
    $songName = $line.ToString().Split(',').Get(1)
    $artistName = $line.ToString().Split(',').Get(2)
    $link = $line.ToString().Split(',').Get(4)

    $PlaylistId = $PlaylistId.Replace('"',"")
    $songName = $songName.Replace('"',"")
    $artistName = $artistName.Replace('"',"")
    $songName = $songName.Replace("'","")
    $artistName = $artistName.Replace("'","")

    $convertedId = [int]($PlaylistId)

    $insertSongQuery = "
        INSERT INTO SONG
            (position,name,artist,link,playlist_id)
        VALUES
            ('$position',N'$songName',N'$artistName','$link','$convertedId')
        GO
    "
    Write-Output $songName
    if($line.ToString().Split(',').Length -eq 5)
    {
     Invoke-SQLcmd -ServerInstance 'localhost' -query $insertSongQuery -U vikiUser -Password 1234 -Database ProjectDb
    }
   
}

function getPlaylist{
    $shortName = $PSItem.ToString().Split(',').Get(0);
    $name = $PSItem.ToString().Split(',').Get(1);
    $insertquery = "
     INSERT INTO PLAYLIST
           (name, type) 
     VALUES 
           ('$name','country') 
     GO 
    "
    $getPlaylistIdQuery = "
        SELECT ID
        FROM PLAYLIST 
        WHERE PLAYLIST.name = '$name'
        GO
    "
    Invoke-SQLcmd -ServerInstance 'localhost' -query $insertquery -U vikiUser -Password 1234 -Database ProjectDb 
    $convertedid =(Invoke-SQLcmd -ServerInstance 'localhost' -query $getPlaylistIdQuery -U vikiUser -Password 1234 -Database ProjectDb )| ConvertTo-Csv | Select-Object -Skip 2


    (Invoke-WebRequest -Uri https://spotifycharts.com/regional/$shortName/daily/latest/download).Content > out.csv

    cat out.csv | Select-Object -Skip 2 | select -First 15 | ForEach-Object {insertToDb $_ $convertedid}
    

}


cat C:\Users\Matej\Desktop\countries.txt | ForEach-Object {getPlaylist($_)}