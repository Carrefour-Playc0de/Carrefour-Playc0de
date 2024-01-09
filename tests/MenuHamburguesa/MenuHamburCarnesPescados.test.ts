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

test('@Smoke @Regression (B2C-TC-1085) Verificar que al clickear en Menu Carnes y Pescados funciona correctamente', async ({menuHamburCarnesPescados}) => {

    await test.step('Click en Carnes y Pescados', async () => {
        await menuHamburCarnesPescados.clickCarnesPescados()
    })
})