import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburLimpieza}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Limpieza`, async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})

test('@Smoke @Regression (B2C-TC-1111) Verificar que funciona el Menu Limpieza: VER TODO', async ({menuHamburLimpiezaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburLimpiezaVerTodo.clickLimpiezaVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-335) Verificar que funciona el Menu Limpieza: Limpieza de la Ropa', async ({menuHamburLimpiezaLimpiezaDeRopa}) => {

    await test.step('Click en Limpieza de la Ropa', async () => {
        await menuHamburLimpiezaLimpiezaDeRopa.clickLimpiezaLimpiezaDeRopa()
    })
})
