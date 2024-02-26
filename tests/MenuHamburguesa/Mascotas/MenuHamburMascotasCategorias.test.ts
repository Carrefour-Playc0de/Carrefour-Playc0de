import test from '../../../config/testManager'

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
test('@Regression @MenuHamburguesa (B2C-TC-1174) Verificar que funciona el Menu Mascotas: Accesorios para Mascotas', async ({menuHamburMascotasAccesoriosMascotas}) => {

    await test.step('Click en Accesorios para Mascotas', async () => {
        await menuHamburMascotasAccesoriosMascotas.clickAccesoriosMascotas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1186) Verificar que funciona el Menu Mascotas: Alimentos para Gatos', async ({menuHamburMascotasAlimentosGatos}) => {

    await test.step('Click en Alimentos para Gatos', async () => {
        await menuHamburMascotasAlimentosGatos.clickAlimentosGatos()
    })
})
test('@@Regression @MenuHamburguesa (B2C-TC-1187) Verificar que funciona el Menu Mascotas: Higiene para Mascotas', async ({menuHamburMascotasHigieneMascotas}) => {

    await test.step('Click en Higiene para Mascotas', async () => {
        await menuHamburMascotasHigieneMascotas.clickHigieneMascotas()
    })
})
