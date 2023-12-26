import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburMundoBebe}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Mundo Bebe`, async () => {
        await menuHamburMundoBebe.navigateToMenuHamburMundoBebe()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1114) Verificar que funciona el Menu Mundo Bebe: VER TODO', async ({menuHamburMundoBebeVerTodos}) => {

    await test.step('Click en Mundo Bebe VER TODO', async () => {
        await menuHamburMundoBebeVerTodos.clickMundoBebeVerTodos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Paniales', async ({menuHamburMundoBebePaniales}) => {

    await test.step('Click en Paniales', async () => {
        await menuHamburMundoBebePaniales.clickMundoBebePaniales()
    })
})
