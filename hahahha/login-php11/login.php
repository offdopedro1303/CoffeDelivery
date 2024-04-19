<?php
session_start();
include('conexao.php');

if (empty($_POST['usuario']) || empty($_POST['senha'])) {
    $_SESSION['nao_autenticado'] = true;
    header('Location: index.php');
    exit();
}

$usuario = $_POST['usuario'];
$senha = md5($_POST['senha']); // Convertendo a senha para MD5

$query = "SELECT nome FROM usuario WHERE usuario = :usuario AND senha = :senha";
$stmt = $conexao->prepare($query); // Usando $conexao ao invés de $pdo
$stmt->bindParam(':usuario', $usuario);
$stmt->bindParam(':senha', $senha);
$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $_SESSION['nome'] = $result['nome'];
    header('Location: http://localhost:5173/');
    exit();
} else {
    $_SESSION['nao_autenticado'] = true;
    header('Location: index.php');
    exit();
}
?>
