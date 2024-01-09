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

test('@Smoke @Regression (B2C-TC-339) Verificar que funciona el Menu Indumentaria', async ({menuHamburIndumentaria}) => {

    await test.step('Click en Indumentaria', async () => {
        await menuHamburIndumentaria.navigateToMenuHamburIndumentaria()
    })
})
