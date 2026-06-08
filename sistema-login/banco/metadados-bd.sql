CREATE DATABASE sistema_login
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

CREATE USER 'app_user'@'localhost'
IDENTIFIED BY 'senha_segura_123';

GRANT ALL PRIVILEGES
ON sistema_login.*
TO 'app_user'@'localhost';

FLUSH PRIVILEGES;

USE sistema_login;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);