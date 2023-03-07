const char = createSorcerer('Vinicius');
const monster = createLittleMonster();

stage.start (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);