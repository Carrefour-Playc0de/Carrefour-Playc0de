import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburLimpieza}) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Clickear el Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Limpieza', async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})

test('@Smoke @Regression (B2C-TC-1111) Verificar que funciona el Menu Limpieza: VER TODO', async ({menuHamburLimpiezaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburLimpiezaVerTodo.clickLimpiezaVerTodo()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpieza de la Ropa', async ({menuHamburLimpiezaLimpiezaDeRopa}) => {

    await test.step('Click en Limpieza de la Ropa', async () => {
        await menuHamburLimpiezaLimpiezaDeRopa.clickLimpiezaLimpiezaDeRopa()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Jabones para la Ropa', async ({menuHamburLimpiezaJabonesParaRopa}) => {

    await test.step('Click en Jabones para la Ropa', async () => {
        await menuHamburLimpiezaJabonesParaRopa.clickLimpiezaJabonesParaRopa()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Prelavado y Quitamanchas', async ({menuHamburLimpiezaPrelavadoQuitamanchas}) => {

    await test.step('Click en Prelavado y Quitamanchas', async () => {
        await menuHamburLimpiezaPrelavadoQuitamanchas.clickLimpiezaPrelavadoQuitamanchas()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Suavizantes para la Ropa', async ({menuHamburLimpiezaSuavizantesRopa}) => {

    await test.step('Click en Suavizantes para la Ropa', async () => {
        await menuHamburLimpiezaSuavizantesRopa.clickLimpiezaSuavizantesRopa()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Aprestos', async ({menuHamburLimpiezaAprestos}) => {

    await test.step('Click en Aprestos', async () => {
        await menuHamburLimpiezaAprestos.clickLimpiezaAprestos()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Perfumantes para Tela', async ({menuHamburLimpiezaPerfumantesTela}) => {

    await test.step('Click en Perfumantes para Tela', async () => {
        await menuHamburLimpiezaPerfumantesTela.clickLimpiezaPerfumantesTela()
    })
})
test('@Test @Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Cuidado del Calzado', async ({menuHamburLimpiezaCuidadoCalzado}) => {

    await test.step('Click en Cuidado del Calzado', async () => {
        await menuHamburLimpiezaCuidadoCalzado.clickLimpiezaCuidadoCalzado()
    })
})














