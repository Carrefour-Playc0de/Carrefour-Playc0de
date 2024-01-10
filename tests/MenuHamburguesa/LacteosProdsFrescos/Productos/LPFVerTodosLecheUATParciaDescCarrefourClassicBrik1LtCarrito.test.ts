import test from '../../../../config/testManager'
import { ModalSuscribite } from '../../../../pageObjectModel/ModalAndToast/ModalSuscribite'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, loginPage, seleccionaTienda, toastTuUltimoCarritoHaSidoRecuperado, tiendaRetiroDrive, seleccionaTiendaBotonContinuar, retiroDriveSuperProv, retiroDriveSuperProvCiudAutonoBsAs, retiroDriveSuperProvCiudAutonoBsAsPartido, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia, retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza, urlCarrefour, modalSuscribite, carritoHome }) => {
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
    // await test.step('Click en SELECCIONA TIENDA', async () => {
    //     await seleccionaTienda.clickSeleccionaTienda()
    // })
    // await test.step('Click en RETIRO O DRIVE', async () => {
    //     await tiendaRetiroDrive.navigateToTiendaRetiroDrive()
    // })
    // await test.step(`Click en boton CONTINUAR > del modal Como querés recibir tu compra`, async () => {
    //     await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
    // })
    // await test.step('Click en Supermercado', async () => {
    //     await retiroDriveSuperProv.clickSupermercadoFood()
    // })
    // await test.step('Click en el Select PROVINCIA', async () => {
    //     await retiroDriveSuperProv.clickProvincia()
    // })
    // await test.step('Click en opcion Ciudad Autonoma de Buenos Aires', async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAs.clickCiudadAutonomaBuenosAires()
    // })
    // await test.step('Click en el Select PARTIDO', async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAsPartido.clickPartido()
    // })
    // await test.step('Click en la opcion Agronomia', async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia.clickAgronomia()
    // })
    // await test.step('Click en la card Hiper Villa Urquiza', async () => {
    //     await retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza.clickHiperVillaUrquiza()
    // })
    // await test.step('Click en el boton CONTINAUR > del modal Puntos de retiro en tu zona', async () => {
    //     await seleccionaTiendaBotonContinuar.clickSelecTiendaBotonContinuar()
    // })
    // await test.step('Clickear ', async () => {
    //     await urlCarrefour.UrlCarrefour()
    // })

    await test.step('Clickear ', async () => {
        await toastTuUltimoCarritoHaSidoRecuperado.clickCloseXToastTuUltimoCarritoHaSidoRecuperado()
    })

    await test.step('Clickear ', async () => {
        await carritoHome.clickCarritoHome()
    })

})

test('@Test @Regression @TiendaSupermercado (B2C-TC-) Tarjeta Credito', async ({carritoBotonPlusProductoUno}) => {


    await test.step('Clickear en el signo [+]', async () => {
        await carritoBotonPlusProductoUno.clickBotonPlusProductoUno()
    })


    // await test.step('Clickear ', async () => {
    //     await modalSuscribite.clickXModalSuscribite()
    // })

})

