<?php
require_once("bootstrap.php");

$templateparams["titolo"] = "Blog TW - Articolo";
$templateparams["nome"] = "singolo-articolo.php";
$templateparams["articolicasuali"] = $dbh->getRandomPosts(2);
$templateparams["categorie"] = $dbh->getCategories();

$idarticolo = -1;
if(isset($_GET["id"])) {
    $idarticolo = $_GET["id"];
}
$templateparams["articolo"] = $dbh->getPostByID($idarticolo);

require("template/base.php");

?>