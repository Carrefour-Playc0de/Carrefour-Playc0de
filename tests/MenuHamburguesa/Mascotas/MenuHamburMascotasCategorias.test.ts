import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburMascotas}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Mascotas`, async () => {
        menuHamburMascotas.navigateToMenuHamburMascotas()
    })
})

test('@Smoke @Regression (B2C-TC-1112) Verificar que funciona el Menu Mascotas: VER TODO', async ({menuHamburMascotasVerTodos}) => {

    await test.step('Click en Mascotas VER TODO', async () => {
        await menuHamburMascotasVerTodos.clickMascotasVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-338) Verificar que funciona el Menu Mascotas: Alimentos y Snacks para Perros', async ({menuHamburMascotasAlimentosSnacksPerros}) => {

    await test.step('Click en Alimentos y Snacks para Perros', async () => {
        await menuHamburMascotasAlimentosSnacksPerros.clickMascotasAlimentosSnacksPerros()
    })
})
