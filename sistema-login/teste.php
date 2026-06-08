<?php

try {

    $pdo = new PDO(
        "mysql:host=localhost;dbname=sistema_login;charset=utf8mb4",
        "root",
        ""
    );

    echo "Conectado com sucesso!";

} catch (PDOException $e) {

    echo $e->getMessage();
}