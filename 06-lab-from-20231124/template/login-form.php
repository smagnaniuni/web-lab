<section>
    <h2>Login</h2>
    <?php if(isset($templateparams["errorelogin"])): ?>
        <p><?php echo $templateparams["errorelogin"]; ?></p>
    <?php endif ?>
    <form action="#" method="post">
        <ul>
            <li>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Inserisci il tuo username"/>
            </li>
            <li>
                <label for="passwd">Password:</label>
                <input type="password" id="passwd" name="password" placeholder="Inserisci la tua password"/>
            </li>
            <li><input type="submit" name="submit" value="Invia"/></li>
        </ul>
    </form>
</section>