import test from '../../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda, toastTuUltimoCarritoHaSidoRecuperado, tiendaRetiroDrive, seleccionaTiendaBotonContinuar, retiroDriveSuperProv, retiroDriveSuperProvCiudAutonoBsAs, retiroDriveSuperProvCiudAutonoBsAsPartido, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza}) => {
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
    await test.step('Click en Supermercado', async () => {
        await retiroDriveSuperProv.clickSupermercadoFood()
    })
    await test.step('Click en el Select PROVINCIA', async () => {
        await retiroDriveSuperProv.clickProvincia()
    })
    await test.step('Click en opcion Ciudad Autonoma de Buenos Aires', async () => {
        await retiroDriveSuperProvCiudAutonoBsAs.clickCiudadAutonomaBuenosAires()
    })
    await test.step('Click en el Select PARTIDO', async () => {
        await retiroDriveSuperProvCiudAutonoBsAsPartido.clickPartido()
    })
    await test.step('Click en la opcion Agronomia', async () => {
        await retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia.clickAgronomia()
    })
    await test.step('Click en la card Hiper Villa Urquiza', async () => {
        await retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza.clickHiperVillaUrquiza()
    })
})

test('@Regression @TiendaSupermercado (B2C-TC-1047) Verificar que al clickear el boton CONTINAUR > del modal Puntos de retiro en tu zona funciona correctamente', async ({seleccionaTiendaBotonContinuar}) => {

    await test.step('Click en el boton CONTINAUR > del modal Puntos de retiro en tu zona', async () => {
        await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
    })
})
