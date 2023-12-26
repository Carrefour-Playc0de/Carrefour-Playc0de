import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({mainPageAndAcceptCookies, menuHamburguesa}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Smoke @Regression @SmokeMenuHamburguesa (B2C-TC-1107) Verificar que al clickear en Menu Frutas y Verduras funciona correctamente', async ({menuHamburFrutasVerduras}) => {

    await test.step('Click en Frutas y Verduras', async () => {
        await menuHamburFrutasVerduras.navigateToMenuHamburFrutasVerduras()
    })
})