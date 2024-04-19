<?php
session_start();
include("conexao.php");

$nome = $_POST['nome'];
$usuario = $_POST['usuario'];
$senha = md5($_POST['senha']);

// Verificar se o usuário já existe
$query = "SELECT COUNT(*) AS total FROM usuario WHERE usuario = ?";
$stmt = $conexao->prepare($query);
$stmt->execute([$usuario]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

if($row['total'] == 1) {
    $_SESSION['usuario_existe'] = true;
    header('Location: cadastro.php');
    exit;
}

// Preparar e executar a inserção
$query = "INSERT INTO usuario (nome, usuario, senha, data_cadastro) VALUES (?, ?, ?, datetime('now'))";
$stmt = $conexao->prepare($query);
$stmt->execute([$nome, $usuario, $senha]);

$_SESSION['status_cadastro'] = true;

header('Location: login.php');
exit;
?>
