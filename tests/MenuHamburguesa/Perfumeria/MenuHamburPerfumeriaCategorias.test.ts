import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburPerfumeria}) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Clickear el Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Perfumaria', async () => {
        await menuHamburPerfumeria.navigateToMenuHamburPerfumeria()
    })
})

test('@Smoke @Regression (B2C-TC-1113) Verificar que funciona el Menu Perfumería: VER TODO', async ({menuHamburPerfumeriaVerTodos}) => {

    await test.step('Click en Perfumería VER TODO', async () => {
        await menuHamburPerfumeriaVerTodos.clickPerfumeriaVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-336) Verificar que funciona el Menu Perfumería: Cuidado del Cabello', async ({menuHamburPerfumeriaCuidadoDelCabello}) => {

    await test.step('Click en Cuidado del Cabello', async () => {
        await menuHamburPerfumeriaCuidadoDelCabello.navigateToMenuHamburPerfumeriaCuidadoDelCabello()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1253) Verificar que funciona el Menu Perfumería: Shampoos', async ({menuHamburPerfumeriaShampoos}) => {

    await test.step('Click en Shampoos', async () => {
        await menuHamburPerfumeriaShampoos.clickPerfumeriaShampoos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1254) Verificar que funciona el Menu Perfumería: Acondicionadores', async ({menuHamburPerfumeriaAcondicionadores}) => {

    await test.step('Click en Acondicionadores', async () => {
        await menuHamburPerfumeriaAcondicionadores.clickPerfumeriaAcondicionadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1255) Verificar que funciona el Menu Perfumería: Tratamientos Capilares', async ({menuHamburPerfumeriaTratamientosCapilares}) => {

    await test.step('Click en Tratamientos Capilares', async () => {
        await menuHamburPerfumeriaTratamientosCapilares.clickPerfumeriaTratamientosCapilares()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1256) Verificar que funciona el Menu Perfumería: Cremas para Peinar', async ({menuHamburPerfumeriaCremasPeinar}) => {

    await test.step('Click en Cremas para Peinar', async () => {
        await menuHamburPerfumeriaCremasPeinar.clickPerfumeriCremasPeinar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1257) Verificar que funciona el Menu Perfumería: Coloracion', async ({menuHamburPerfumeriaColoracion}) => {

    await test.step('Click en Coloracion', async () => {
        await menuHamburPerfumeriaColoracion.clickPerfumeriaColoracion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1258) Verificar que funciona el Menu Perfumería: Gel y Fijadores', async ({menuHamburPerfumeriaGelFijadores}) => {

    await test.step('Click en Gel y Fijadores', async () => {
        await menuHamburPerfumeriaGelFijadores.clickPerfumeriaGelFijadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1259) Verificar que funciona el Menu Perfumería: Piojicidas', async ({menuHamburPerfumeriaPiojicidas}) => {

    await test.step('Click en Piojicidas', async () => {
        await menuHamburPerfumeriaPiojicidas.clickPerfumeriaPiojicidas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1260) Verificar que funciona el Menu Perfumería: Accesorios para el Cabello', async ({menuHamburPerfumeriaAccesoriosCabello}) => {

    await test.step('Click en Accesorios para el Cabello', async () => {
        await menuHamburPerfumeriaAccesoriosCabello.clickPerfumeriaAccesoriosCabello()
    })
})












