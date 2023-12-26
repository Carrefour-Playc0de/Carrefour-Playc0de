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

test('@Regression @SmokeMenuHamburguesa (B2C-TC-1091) Verificar que al clickear en Menu Destacados funciona correctamente', async ({menuHamburDestacados}) => {

    await test.step('Click en Destacados', async () => {
        await menuHamburDestacados.clickDestacados()
    })
})