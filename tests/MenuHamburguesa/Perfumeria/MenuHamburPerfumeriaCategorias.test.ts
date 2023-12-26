import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburPerfumeria}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Limpieza`, async () => {
        await menuHamburPerfumeria.navigateToMenuHamburPerfumeria()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1113) Verificar que funciona el Menu Perfumería: VER TODO', async ({menuHamburPerfumeriaVerTodos}) => {

    await test.step('Click en Perfumería VER TODO', async () => {
        await menuHamburPerfumeriaVerTodos.clickPerfumeriaVerTodos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-336) Verificar que funciona el Menu Perfumería: Cuidado del Cabello', async ({menuHamburPerfumeriaCuidadoDelCabello}) => {

    await test.step('Click en Cuidado del Cabello', async () => {
        await menuHamburPerfumeriaCuidadoDelCabello.clickPerfumeriaCuidadoDelCabello()
    })
})
