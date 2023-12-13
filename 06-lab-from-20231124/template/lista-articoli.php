<?php if(isset($templateparams["titolo"])): ?>
    <h2><?php echo $templateparams["titolo"]; ?></h2>
<?php endif; ?>

<?php foreach ($templateparams["articoli"] as $articolo): ?>
    <article>
        <header>
            <img src="<?php echo UPLOAD_DIR.$articolo["imgarticolo"]; ?>" alt="">
            <h2><?php echo $articolo["titoloarticolo"]; ?></h2>
            <p><?php echo $articolo["dataarticolo"] . " - " . $articolo["nome"]; ?></p>
        </header>
        <section>
            <p><?php echo $articolo["anteprimaarticolo"]; ?></p>
        </section>
        <footer>
            <a href="articolo.php?id=<?php echo $articolo["idarticolo"]; ?>">Leggi tutto</a>
        </footer>
    </article>
<?php endforeach; ?>