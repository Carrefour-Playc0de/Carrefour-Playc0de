import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburFrutasVerduras}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Frutas y Verduras`, async () => {
        menuHamburFrutasVerduras.navigateToMenuHamburFrutasVerduras()
    })
})

test('@Smoke @Smoke @Regression @MenuHamburguesa () Verificar que funciona el Menu Frutas y Verduras: VER TODO', async ({menuHamburFrutasVerdurasVerTodos}) => {

    await test.step('Click en VER TODO', async () => {
        await menuHamburFrutasVerdurasVerTodos.clickFrutasVerdurasVerTodos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-332) Verificar que funciona el Menu Frutas y Verduras: Frutas', async ({menuHamburFrutasVerdurasFrutas}) => {

    await test.step('Click en Frutas', async () => {
        await menuHamburFrutasVerdurasFrutas.clickFrutasVerdurasFrutas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1015) Verificar que funciona el Menu Frutas y Verduras: Frutos Secos', async ({menuHamburFrutasVerdurasFrutosSecos}) => {

    await test.step('Click en Frutos Secos', async () => {
        await menuHamburFrutasVerdurasFrutosSecos.clickFrutasVerdurasFrutosSecos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1013) Verificar que funciona el Menu Frutas y Verduras: Verduras', async ({menuHamburFrutasVerdurasVerduras}) => {

    await test.step('Click en Frutos Secos', async () => {
        await menuHamburFrutasVerdurasVerduras.clickFrutasVerdurasVerduras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1014) Verificar que funciona el Menu Frutas y Verduras: Verduras Cortadas y Ensaladas Preparadas', async ({menuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas}) => {

    await test.step('Click en Frutos Secos', async () => {
        await menuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas.clickFrutasVerdurasVerdurasCortadasEnsaladasPreparadas()
    })
})
