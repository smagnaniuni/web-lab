<?php
require_once("bootstrap.php");

$templateparams["titolo"] = "Blog TW - Contatti";
$templateparams["nome"] = "contatti.php";
$templateparams["articolicasuali"] = $dbh->getRandomPosts(2);
$templateparams["categorie"] = $dbh->getCategories();

$templateparams["autori"] = $dbh->getAuthors();

require("template/base.php");

?>