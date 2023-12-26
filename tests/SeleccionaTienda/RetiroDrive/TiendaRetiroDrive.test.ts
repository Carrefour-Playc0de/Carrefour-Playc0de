import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda}) => {
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
        await seleccionaTienda.navigateToSeleccionaTienda()
    })
})

test('@Regression @TiendaSupermercado (B2C-TC-1042) Verificar que al clickear en RETIRO O DRIVE funciona correctamente', async ({tiendaRetiroDrive}) => {

    await test.step('Click en RETIRO O DRIVE', async () => {
        await tiendaRetiroDrive.navigateToTiendaRetiroDrive()
    })
})

