   // O caminho da rota é "(tabs)/<section>"
    // Por exemplo: goToSection('profile') irá direcionar para a aba profile
    // O nome da aba é passado como um parâmetro ao chamar a função goToSection

    const goToSection = (section) => {
        router.navigate(`(tabs)/${section}`);
    }
