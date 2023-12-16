<?php if(count($templateparams["articolo"]) == 0): ?>
<article>
    <p>Articolo non presente</p>
</article>

<?php
else
    $articolo = $templateparams["articolo"][0];
?>

<article>
    <header>
        <img src="<?php echo UPLOAD_DIR . "img/" . $articolo["imgarticolo"]; ?>" alt="">
        <h2><?php echo $articolo["titoloarticolo"]; ?></h2>
        <p><?php echo $articolo["dataarticolo"] . " - " . $articolo["nome"]; ?></p>
    </header>
    <section>
        <p><?php echo $articolo["testoarticolo"]; ?></p>
    </section>
</article>

<?php endif ?>
