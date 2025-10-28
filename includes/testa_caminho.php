<?php
// Este é o caminho exato que você está usando nos seus includes:
$caminho = '../img/logo/logo-menu.png';

// Testa se o arquivo realmente existe
if (file_exists($caminho)) {
    echo "SUCESSO! O caminho '$caminho' está correto.";
} else {
    echo "FALHA. O caminho está incorreto. O arquivo não foi encontrado.";
    echo "<br>Verifique a sua estrutura de pastas. Você pode precisar ajustar o número de ../";
}
?>