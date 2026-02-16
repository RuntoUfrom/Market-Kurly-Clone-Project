$files = Get-ChildItem "src\assets\productimages\beautymarket\thumbnail" | Sort-Object Name
$i = 1
foreach ($file in $files) {
    if ($file.PSIsContainer) { continue }
    $newName = "PB{0:D4}-Thumb{1}" -f $i, $file.Extension
    $newPath = Join-Path $file.DirectoryName $newName
    if ($file.FullName -ne $newPath) {
        Rename-Item -Path $file.FullName -NewName $newName
    }
    $i++
}
Get-ChildItem "src\assets\productimages\beautymarket\thumbnail" | Select-Object Name
