import test from '../../../../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({urlLecheUATParciaDescCarrefourClassicBrik1Lt, onlyAcceptCookies, urlProductosCarrito, loginPage, tiendaRetiroDrive}) => {
    await test.step(`Navigate to Leche UAT Parcialmente Descremada Carrefour Classic Bbrik 1Lt`, async () => {
        await urlLecheUATParciaDescCarrefourClassicBrik1Lt.navigateToUrlLecheUATParciaDescCarrefourClassicBrik1Lt()
    })
    await test.step(`Clickear en el boton Aceptar Cookies`, async () => {
        await onlyAcceptCookies.navigateToPageAndAcceptCookies()
    })
    await test.step(`Clickear en el Carrito del producto`, async () => {
        await urlProductosCarrito.navigateToUrlProductosCarrito()
    })
    await test.step('Clickear el boton Ingresar con mail y contrasenia', async () => {
        await loginPage.loginMailPassword();
    })
    await test.step('Ingresar Username and Password', async () => {
        await loginPage.fillCredentials();
    })
    await test.step('Clickear el boton ENTRAR', async () => {
        await loginPage.endLoginProcess();
    })
    await test.step('Clickear el boton ENTRAR', async () => {
        await loginPage.endLoginProcess();
    })
    await test.step('Clickear el boton ENTRAR', async () => {
        await loginPage.endLoginProcess();
    })

    // await test.step(`Clickear en Retiro o Drive`, async () => {
    //     await tiendaRetiroDrive.navigateToTiendaRetiroDrive()
    // })
    // await test.step(`Clickear el boton CONTINUAR >`, async () => {
    //     await seleccionaTiendaBotonContinuar.navigateToSelecTiendaBotonContinuar()
    // })

    // // await test.step(`Clickear en Supermercado`, async () => {
    // //     await retiroDriveSuperProv.clickSupermercadoFood()
    // // })
    // // await test.step(`Clickear en el Select PROVINCIA`, async () => {
    // //     await retiroDriveSuperProv.clickProvincia()
    // // })
    // await test.step(`Clickear el boton Supermercado y luego en el Select PROVINCIA`, async () => {
    //     await retiroDriveSuperProv.navigateToTiendaRetiroDriveSuperProv()
    // })
    // await test.step(`Clickear la opcion Ciudad Autonoma de Buenos Aires`, async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAs.navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAs()
    // })
    // await test.step(`Clickear el Select PARTIDO`, async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAsPartido.navigateToTiendaRetiroDriveSuperProvCiudAutonoBsAsPartido()
    // })
    // await test.step(`Clickear la opcion Agronomia`, async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia.navigateToTiendaRetiroDriveSuperCiudAutonoBsAsAgronomia()
    // })

})

test('(ID por definir) ', async ({tiendaRetiroDrive}) => {






})

