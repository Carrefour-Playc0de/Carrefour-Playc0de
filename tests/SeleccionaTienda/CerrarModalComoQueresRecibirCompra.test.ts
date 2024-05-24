import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Enter to login page', async () => {
        await loginPage.navigateToLoginPage()
    })
    await test.step('Login using mail and password', async () => {
        await loginPage.loginMailPassword()
    })
    await test.step('Write the username and password', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Finish the login process', async () => {
        await loginPage.endLoginProcess()
    })
    await test.step('Click en SELECCIONA TIENDA', async () => {
        await seleccionaTienda.clickSeleccionaTienda()
    })
})

test('@Regression @TiendaSupermercado (B2C-TC-1127) Verificar que al clickear la X del modal Como Queres Recibir tu Compra se cierra correctamente', async ({cerrarModalComoQueresRecibirCompra}) => {

    await test.step('Click en la X del modal Como Queres Recibir tu Compra', async () => {
        await cerrarModalComoQueresRecibirCompra.navigateToCerrarModalComoQueresRecibirCompra()
    })
})