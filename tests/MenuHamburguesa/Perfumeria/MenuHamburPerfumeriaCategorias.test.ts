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
test('@Regression @MenuHamburguesa (B2C-TC-1261) Verificar que funciona el Menu Perfumería: Cuidado Dental', async ({menuHamburPerfumeriaCuidadoDental}) => {

    await test.step('Click en Cuidado Dental', async () => {
        await menuHamburPerfumeriaCuidadoDental.clickPerfumeriaCuidadoDental()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1262) Verificar que funciona el Menu Perfumería: Pasta Dental', async ({menuHamburPerfumeriaPastaDental}) => {

    await test.step('Click en Pasta Dental', async () => {
        await menuHamburPerfumeriaPastaDental.clickPerfumeriaPastaDental()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1263) Verificar que funciona el Menu Perfumería: Enjuagues Bucales', async ({menuHamburPerfumeriaEnjuaguesBucales}) => {

    await test.step('Click en Enjuagues Bucales', async () => {
        await menuHamburPerfumeriaEnjuaguesBucales.clickPerfumeriaEnjuaguesBucales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1264) Verificar que funciona el Menu Perfumería: Cepillos de Dientes', async ({menuHamburPerfumeriaCepillosDientes}) => {

    await test.step('Click en Cepillos de Dientes', async () => {
        await menuHamburPerfumeriaCepillosDientes.clickPerfumeriaCepillosDientes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1265) Verificar que funciona el Menu Perfumería: Hilos Dentales', async ({menuHamburPerfumeriaHilosDentales}) => {

    await test.step('Click en Hilos Dentales', async () => {
        await menuHamburPerfumeriaHilosDentales.clickPerfumeriaHilosDentales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1266) Verificar que funciona el Menu Perfumería: Para Protesis Dentales', async ({menuHamburPerfumeriaParaProtesisDentales}) => {

    await test.step('Click en Para Protesis Dentales', async () => {
        await menuHamburPerfumeriaParaProtesisDentales.clickPerfumeriaParaProtesisDentales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1267) Verificar que funciona el Menu Perfumería: Jabones', async ({menuHamburPerfumeriaJabones}) => {

    await test.step('Click en Jabones', async () => {
        await menuHamburPerfumeriaJabones.clickPerfumeriaJabones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1268) Verificar que funciona el Menu Perfumería: Jabones Liquidos', async ({menuHamburPerfumeriaJabonesLiquidos}) => {

    await test.step('Click en Jabones Liquidos', async () => {
        await menuHamburPerfumeriaJabonesLiquidos.clickPerfumeriaJabonesLiquidos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1269) Verificar que funciona el Menu Perfumería: Jabones en Barra', async ({menuHamburPerfumeriaJabonesBarra}) => {

    await test.step('Click en Jabones en Barra', async () => {
        await menuHamburPerfumeriaJabonesBarra.clickPerfumeriaJabonesBarra()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1270) Verificar que funciona el Menu Perfumería: Esponjas y otros Accesorios', async ({menuHamburPerfumeriaEsponjasOtrosAccesorios}) => {

    await test.step('Click en Esponjas y otros Accesorios', async () => {
        await menuHamburPerfumeriaEsponjasOtrosAccesorios.clickPerfumeriaEsponjasOtrosAccesorios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1271) Verificar que funciona el Menu Perfumería: Proteccion Femenina', async ({menuHamburPerfumeriaProteccionFemenina}) => {

    await test.step('Click en Proteccion Femenina', async () => {
        await menuHamburPerfumeriaProteccionFemenina.clickPerfumeriaProteccionFemenina()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1272) Verificar que funciona el Menu Perfumería: Toallitas Femeninas', async ({menuHamburPerfumeriaToallitasFemeninas}) => {

    await test.step('Click en Toallitas Femeninas', async () => {
        await menuHamburPerfumeriaToallitasFemeninas.clickPerfumeriaToallitasFemeninas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1273) Verificar que funciona el Menu Perfumería: Protectores Diarios', async ({menuHamburPerfumeriaProtectoresDiarios}) => {

    await test.step('Click en Protectores Diarios', async () => {
        await menuHamburPerfumeriaProtectoresDiarios.clickPerfumeriaProtectoresDiarios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1274) Verificar que funciona el Menu Perfumería: Tampones', async ({menuHamburPerfumeriaTampones}) => {

    await test.step('Click en Tampones', async () => {
        await menuHamburPerfumeriaTampones.clickPerfumeriaTampones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1275) Verificar que funciona el Menu Perfumería: Higiene Intima', async ({menuHamburPerfumeriaHigieneIntima}) => {

    await test.step('Click en Higiene Intima', async () => {
        await menuHamburPerfumeriaHigieneIntima.clickPerfumeriaHigieneIntima()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1276) Verificar que funciona el Menu Perfumería: Cuidado de la Piel', async ({menuHamburPerfumeriaCuidadoPiel}) => {

    await test.step('Click en Cuidado de la Piel', async () => {
        await menuHamburPerfumeriaCuidadoPiel.clickPerfumeriaCuidadoPiel()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1277) Verificar que funciona el Menu Perfumería: Cremas Faciales', async ({menuHamburPerfumeriaCremasFaciales}) => {

    await test.step('Click en Cremas Faciales', async () => {
        await menuHamburPerfumeriaCremasFaciales.clickPerfumeriaCremasFaciales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1278) Verificar que funciona el Menu Perfumería: Limpieza Facial y Exfoliantes', async ({menuHamburPerfumeriaLimpiezaFacialExfoliantes}) => {

    await test.step('Click en Limpieza Facial y Exfoliantes', async () => {
        await menuHamburPerfumeriaLimpiezaFacialExfoliantes.clickPerfumeriaLimpiezaFacialExfoliantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1279) Verificar que funciona el Menu Perfumería: Desmaquillantes', async ({menuHamburPerfumeriaDesmaquillantes}) => {

    await test.step('Click en Desmaquillantes', async () => {
        await menuHamburPerfumeriaDesmaquillantes.clickPerfumeriaDesmaquillantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1280) Verificar que funciona el Menu Perfumería: Cremas Corporales', async ({menuHamburPerfumeriaCremasCorporales}) => {

    await test.step('Click en Cremas Corporales', async () => {
        await menuHamburPerfumeriaCremasCorporales.clickPerfumeriaCremasCorporales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1281) Verificar que funciona el Menu Perfumería: Cremas para Manos', async ({menuHamburPerfumeriaCremasManos}) => {

    await test.step('Click en Cremas para Manos', async () => {
        await menuHamburPerfumeriaCremasManos.clickPerfumeriaCremasManos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1282) Verificar que funciona el Menu Perfumería: Cuidado Labial', async ({menuHamburPerfumeriaCuidadoLabial}) => {

    await test.step('Click en Cuidado Labial', async () => {
        await menuHamburPerfumeriaCuidadoLabial.clickPerfumeriaCuidadoLabial()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1283) Verificar que funciona el Menu Perfumería: Proteccion Solar', async ({menuHamburPerfumeriaProteccionSolar}) => {

    await test.step('Click en Proteccion Solar', async () => {
        await menuHamburPerfumeriaProteccionSolar.clickPerfumeriaProteccionSolar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1284) Verificar que funciona el Menu Perfumería: Antitranspirantes y Desodorantes', async ({menuHamburPerfumeriaAntitranspirantesDesodorantes}) => {

    await test.step('Click en Antitranspirantes y Desodorantes', async () => {
        await menuHamburPerfumeriaAntitranspirantesDesodorantes.clickPerfumeriaAntitranspirantesDesodorantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1285) Verificar que funciona el Menu Perfumería: En Aerosol', async ({menuHamburPerfumeriaEnAerosol}) => {

    await test.step('Click en En Aerosol', async () => {
        await menuHamburPerfumeriaEnAerosol.clickPerfumeriaEnAerosol()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1286) Verificar que funciona el Menu Perfumería: En Barra y Roll On', async ({menuHamburPerfumeriaEnBarraRollOn}) => {

    await test.step('Click en En Barra y Roll On', async () => {
        await menuHamburPerfumeriaEnBarraRollOn.clickPerfumeriaEnBarraRollOn()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1287) Verificar que funciona el Menu Perfumería: Cuidado Corporal', async ({menuHamburPerfumeriaCuidadoCorporal}) => {

    await test.step('Click en Cuidado Corporal', async () => {
        await menuHamburPerfumeriaCuidadoCorporal.clickPerfumeriaCuidadoCorporal()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1288) Verificar que funciona el Menu Perfumería: Depilacion', async ({menuHamburPerfumeriaDepilacion}) => {

    await test.step('Click en Depilacion', async () => {
        await menuHamburPerfumeriaDepilacion.clickPerfumeriaDepilacion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1289) Verificar que funciona el Menu Perfumería: Afeitado', async ({menuHamburPerfumeriaAfeitado}) => {

    await test.step('Click en Afeitado', async () => {
        await menuHamburPerfumeriaAfeitado.clickPerfumeriaAfeitado()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1290) Verificar que funciona el Menu Perfumería: Cuidado de los Pies', async ({menuHamburPerfumeriaCuidadoPies}) => {

    await test.step('Click en Cuidado de los Pies', async () => {
        await menuHamburPerfumeriaCuidadoPies.clickPerfumeriaCuidadoPies()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1291) Verificar que funciona el Menu Perfumería: Repelentes', async ({menuHamburPerfumeriaRepelentes}) => {

    await test.step('Click en Repelentes', async () => {
        await menuHamburPerfumeriaRepelentes.clickPerfumeriaRepelentes()
    })
})
// test('@xyz () Verificar que funciona el Menu Perfumería: ', async ({}) => {
//
//     await test.step('Click en ', async () => {
//         await menuHamburPerfumeriaCremasFaciales.clickPerfumeriaCremasFaciales()
//     })
// })



















