import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburCarnesPescados}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Carnes y Pescados`, async () => {
        await menuHamburCarnesPescados.navigateToMenuHamburCarnesPescados()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1086) Verificar que funciona el Menu Carnes y Pescados: VER TODO', async ({menuHamburCarnesPescadosVerTodo}) => {

    await test.step('Click en Carnes y Pescados VER TODO', async () => {
        await menuHamburCarnesPescadosVerTodo.clickCarnesPescadosVerTodo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1010) Verificar que funciona el Menu Carnes y Pescados: Achuras y Embutidos', async ({menuHamburCarnesPescadosAchurasEmbutidos}) => {

    await test.step('Click en Achuras y Embutidos', async () => {
        await menuHamburCarnesPescadosAchurasEmbutidos.clickCarnesPescadosAchurasEmbutidos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1012) Verificar que funciona el Menu Carnes y Pescados: Carbon y Encendido', async ({menuHamburCarnesPescadosCarbonEncendido}) => {

    await test.step('Click en Carbon y Encendido', async () => {
        await menuHamburCarnesPescadosCarbonEncendido.clickCarnesPescadosCarbonEncendido()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1009) Verificar que funciona el Menu Carnes y Pescados: Carne de Cerdo', async ({menuHamburCarnesPescadosCarneCerdo}) => {

    await test.step('Click en Carne de Cerdo', async () => {
        await menuHamburCarnesPescadosCarneCerdo.clickCarnesPescadosCarneCerdo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-331) Verificar que funciona el Menu Carnes y Pescados: Carne Vacuna', async ({menuHamburCarnesPescadosCarneVacuna}) => {

    await test.step('Click en Carne Vacuna', async () => {
        await menuHamburCarnesPescadosCarneVacuna.clickCarnesPescadosCarneVacuna()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1011) Verificar que funciona el Menu Carnes y Pescados: Pescados y Mariscos', async ({menuHamburCarnesPescadosPescadosMariscos}) => {

    await test.step('Click en Pescados y Mariscos', async () => {
        await menuHamburCarnesPescadosPescadosMariscos.clickCarnesPescadosPescadosMariscos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1008) Verificar que funciona el Menu Carnes y Pescados: Pollo y Granja', async ({menuHamburCarnesPescadosPolloGranja}) => {

    await test.step('Click en Pollo y Granja', async () => {
        await menuHamburCarnesPescadosPolloGranja.clickCarnesPescadosPolloGranja()
    })
})
