<section>
    <h2>Autori del Blog</h2>
    <table>
        <!-- <tr>
            <th id="autore" scope="col">Autore</th><th id="email" scope="col">Email</th><th id="argomenti" scope="col">Argomenti</th>
        </tr>
        <tr>
            <th id="gino" scope="row">Gino Pino</th><td headers="email gino"><a href="mailto:ginopino@blogtw.com">ginopino@blogtw.com</a></td><td headers="argomenti gino"><abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheet">CSS</abbr>, JavaScript</td>
        </tr>
        <tr>
            <th id="cippa" scope="row">Cippa Lippa</th><td headers="email cippa"><a href="mailto:cippalippa@blogtw.com">cippalippa@blogtw.com</a></td><td headers="argomenti cippa"><abbr title="PHP HyperText Preprocessor">PHP</abbr></td>
        </tr> -->
        <tr>
            <th id="autore" scope="col">Autore</th><th id="email" scope="col">Email</th><th id="argomenti" scope="col">Argomenti</th>
        </tr>
        <?php foreach ($templateparams["autori"] as $autore): ?>
            <tr>
                <th id="<?php echo getIDFromName($autore["nome"]);?>" scope="row"><?php echo $autore["nome"];?></th>
                <td headers="email <?php echo getIDFromName($autore["nome"]);?>"><a href="mailto:<?php echo $autore["username"];?>"><?php echo $autore["username"];?></a></td>
                <td headers="argomenti <?php echo getIDFromName($autore["nome"]);?>"><?php echo $autore["argomenti"];?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</section>