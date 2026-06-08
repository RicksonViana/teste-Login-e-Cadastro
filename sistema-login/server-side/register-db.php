<?php

require_once '../config/db.php';

$nome = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

if (!$nome || !$email || !$senha) {
    echo "Preencha todos os campos";
    exit;
}

$stmt = $pdo->prepare(
    "SELECT id FROM usuarios WHERE email = ?"
);

$stmt->execute([$email]);

if ($stmt->fetch()) {
    echo "E-mail já cadastrado";
    exit;
}

$senhaHash = password_hash(
    $senha,
    PASSWORD_DEFAULT
);

$stmt = $pdo->prepare(
    "INSERT INTO usuarios
    (nome,email,senha)
    VALUES (?,?,?)"
);

$stmt->execute([
    $nome,
    $email,
    $senhaHash
]);

echo "Cadastro realizado com sucesso!";