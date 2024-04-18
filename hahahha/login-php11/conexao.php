<?php
define('DB_FILE', 'database.sql');

// Cria a conexão com o banco de dados SQLite
try {
    $conexao = new PDO('sqlite:' . DB_FILE);
    // Configura o PDO para lançar exceções em caso de erros
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão estabelecida com sucesso!";
} catch(PDOException $e) {
    die("Erro ao conectar: " . $e->getMessage());
}
?>
