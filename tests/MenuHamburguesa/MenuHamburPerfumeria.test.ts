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

test('@Regression @SmokeMenuHamburguesa (B2C-TC-1110) Verificar que al clickear en Menu Perfumería funciona correctamente', async ({menuHamburPerfumeria}) => {

    await test.step('Click en Perfumería', async () => {
        await menuHamburPerfumeria.clickPerfumeria()
    })
})