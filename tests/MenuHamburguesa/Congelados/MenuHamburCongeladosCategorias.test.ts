import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburCongelados}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Congelados`, async () => {
        await menuHamburCongelados.navigateToMenuHamburCongelados()
    })
})

test('@Smoke @Regression (B2C-TC-1088) Verificar que funciona el Menu Congelados: VER TODO', async ({menuHamburCongeladosVerTodos}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburCongeladosVerTodos.clickCongeladosVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-334) Verificar que funciona el Menu Congelados: Hamburguesas', async ({menuHamburCongeladosHamburguesas}) => {

    await test.step('Click en Hamburguesas', async () => {
        await menuHamburCongeladosHamburguesas.clickCongeladosHamburguesas()
    })
})
