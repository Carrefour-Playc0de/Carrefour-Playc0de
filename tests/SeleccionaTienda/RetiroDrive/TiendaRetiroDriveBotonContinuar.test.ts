import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda, toastTuUltimoCarritoHaSidoRecuperado, tiendaRetiroDrive}) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
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
    await test.step('Click en RETIRO O DRIVE', async () => {
        await tiendaRetiroDrive.navigateToTiendaRetiroDrive()
    })
})

test('@Regression @TiendaSupermercado (B2C-TC-1126) Verificar que al clickear el boton CONTINUAR > del modal RETIRO O DRIVER se direcciona correctamente', async ({seleccionaTiendaBotonContinuar}) => {

    await test.step('Click en boton CONTINUAR > del modal Como querés recibir tu compra', async () => {
        await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
    })
})

