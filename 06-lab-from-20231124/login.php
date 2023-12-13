<?php
require_once("bootstrap.php");

if(isset($_POST["username"]) && isset($_POST["password"])) {
    $login_result = $dbh->checkLogin($_POST["username"], $_POST["password"]);
    if(count($login_result) == 0) {
        // Login failed
        $templateparams["errorelogin"] = "Errore! Verificare username e/o password";
    } else {
        registerLoggedUser($login_result[0]);
    }
}

if(isUserLoggedIn()) {
    $templateparams["titolo"] = "Blog TW - Admin";
    $templateparams["nome"] = "login-home.php";
    $templateparams["articoli"] = $dbh->getPostsByAuthorID($_SESSION["idautore"]);

    if(isset($_GET["formmsg"])) {
        $templateparams["formmsg"] = $_GET["formmsg"];
    }

} else {
    $templateparams["titolo"] = "Blog TW - Login";
    $templateparams["nome"] = "login-form.php";
}

$templateparams["articolicasuali"] = $dbh->getRandomPosts(2);
$templateparams["categorie"] = $dbh->getCategories();

require("template/base.php");

?>