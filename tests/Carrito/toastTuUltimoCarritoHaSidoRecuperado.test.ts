import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test('@Regression @Carrito (B2C-TC-1098) Verificar que se cierra el toast Tu ultimo carrito ha sido recuperado al clickear la X del toast', async ({toastTuUltimoCarritoHaSidoRecuperado}) => {

    await test.step('Click en la X del toast Tu Ultimo Carrito Ha Sido Recuperado', async () => {
        await toastTuUltimoCarritoHaSidoRecuperado.clickCloseXToastTuUltimoCarritoHaSidoRecuperado()
    })

})