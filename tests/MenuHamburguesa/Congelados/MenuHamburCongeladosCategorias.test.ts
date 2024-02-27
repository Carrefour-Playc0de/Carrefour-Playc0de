import test from '../../../config/testManager'

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
test('@Regression @MenuHamburguesa (B2C-TC-1162) Verificar que funciona el Menu Congelados: Nuggets Rebozados', async ({menuHamburCongeladosNuggetsRebozados}) => {

    await test.step('Click en Nuggets Rebozados', async () => {
        await menuHamburCongeladosNuggetsRebozados.clickCongeladosNuggetsRebozados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1202) Verificar que funciona el Menu Congelados: Papas', async ({menuHamburCongeladosPapas}) => {

    await test.step('Click en Papas', async () => {
        await menuHamburCongeladosPapas.clickCongeladosPapas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1203) Verificar que funciona el Menu Congelados: Verduras y Frutas', async ({menuHamburCongeladosVerdurasFrutas}) => {

    await test.step('Click en Verduras y Frutas', async () => {
        await menuHamburCongeladosVerdurasFrutas.clickCongeladosVerdurasFrutas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1204) Verificar que funciona el Menu Congelados: Comidas y Panificados', async ({menuHamburCongeladosComidasPanificados}) => {

    await test.step('Click en Comidas y Panificados', async () => {
        await menuHamburCongeladosComidasPanificados.clickCongeladosComidasPanificados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1205) Verificar que funciona el Menu Congelados: Helados y Postres', async ({menuHamburCongeladosHeladosPostres}) => {

    await test.step('Click en Helados y Postres', async () => {
        await menuHamburCongeladosHeladosPostres.clickCongeladosHeladosPostres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1206) Verificar que funciona el Menu Congelados: Pollos', async ({menuHamburCongeladosPollos}) => {

    await test.step('Click en Pollos', async () => {
        await menuHamburCongeladosPollos.clickCongeladosPollos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1207) Verificar que funciona el Menu Congelados: Pescados y Mariscos', async ({menuHamburCongeladosPescadosMariscos}) => {

    await test.step('Click en Pescados y Mariscos', async () => {
        await menuHamburCongeladosPescadosMariscos.clickCongeladosPescadosMariscos()
    })
})
