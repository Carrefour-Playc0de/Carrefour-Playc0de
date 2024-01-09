import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburIndumentaria}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Indumentaria`, async () => {
        await menuHamburIndumentaria.navigateToMenuHamburIndumentaria()
    })
})

test('@Smoke @Regression (B2C-TC-1138) Verificar que funciona el Menu Indumentaria: VER TODO', async ({menuHamburIndumentariaVerTodos}) => {

    await test.step('Click en VER TODO', async () => {
        await menuHamburIndumentariaVerTodos.clickIndumentariaVerTodos()
    })
})

