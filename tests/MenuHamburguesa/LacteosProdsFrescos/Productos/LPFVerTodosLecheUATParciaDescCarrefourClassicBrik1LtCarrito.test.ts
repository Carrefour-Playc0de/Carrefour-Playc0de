import test from '../../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda, toastTuUltimoCarritoHaSidoRecuperado, tiendaRetiroDrive, seleccionaTiendaBotonContinuar, retiroDriveSuperProv, retiroDriveSuperProvCiudAutonoBsAs, retiroDriveSuperProvCiudAutonoBsAsPartido, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza, modalSuscribite, menuHamburguesa, menuHamburLacteosProdsFrescos, menuHamburLacteosProdsFrescosVerTodo, lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt, }) => {
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
    await test.step(`Click en boton CONTINUAR > del modal Como querés recibir tu compra`, async () => {
        await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
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
    await test.step('Click en el boton CONTINAUR > del modal Puntos de retiro en tu zona', async () => {
        await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
    })
    await test.step('Click en la X para cerrar el modal Suscribite', async () => {
        await modalSuscribite.navigateToModalSuscribiteAndClose()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Lacteos y Productos Frescos`, async () => {
        await menuHamburLacteosProdsFrescos.navigateToMenuHamburLacteosProdsFrescos()
    })
    await test.step('Click en Lacteos y Productos Frescos VER TODO', async () => {
        await menuHamburLacteosProdsFrescosVerTodo.clickLacteosProdsFrescosVerTodo()
    })
    await test.step('Click en Leche UAT parcialmente descremada Carrefour classic brik 1Lt', async () => {
        await lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt.navigateToLPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt()
    })
})

test('@Regression @TestTiendaSupermercado (B2C-TC-1103) Verificar que al clickear el carrito de Leche UAT parcialmente descremada Carrefour classic brik 1Lt funciona correctamente', async ({carritoProductos}) => {

    await test.step('Click en el carrito Leche UAT parcialmente descremada Carrefour classic brik 1Lt', async () => {
        await carritoProductos.navigateToCarritoProductos()
    })

})

