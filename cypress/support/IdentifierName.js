export function GerarIdentifier() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let name = '';

    for (let i = 0; i < 10; i++) {
        name += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return name;
}
