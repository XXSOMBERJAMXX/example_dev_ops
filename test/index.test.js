const hash = require('./testindex');

test('Verificar hash SHA-256', () => {
    const mensaje = 'contraseña';
    const hashtest = hash(mensaje);
    expect(hashtest).toEqual('edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5');
});


//para commit para master
