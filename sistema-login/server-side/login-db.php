<?php

require_once '../config/db.php';

$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

if (!$email || !$senha) {
    echo "Preencha todos os campos";
    exit;
}

$stmt = $pdo->prepare(
    "SELECT * FROM usuarios
    WHERE email = ?"
);

$stmt->execute([$email]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (
    $user &&
    password_verify(
        $senha,
        $user['senha']
    )
) {
    echo "Login válido!";
} else {
    echo "Login inválido!";
}