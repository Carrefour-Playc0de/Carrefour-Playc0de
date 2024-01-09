import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburAlmacen}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Almacen`, async () => {
        await menuHamburAlmacen.navigateToMenuHamburAlmacen()
    })
})

test('@Smoke @Regression (B2C-TC-1084) Verificar que funciona el Menu Almacen: VER TODO', async ({menuHamburAlmacenVerTodo}) => {

    await test.step('Click en Almacen VER TODO', async () => {
        await menuHamburAlmacenVerTodo.clickAlmacenVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-868) Verificar que funciona el Menu Almacen: Aceites en Aerosol', async ({menuHamburAlmacenAceitesAerosol}) => {

    await test.step('Click en Aceites en Aerosol', async () => {
        await menuHamburAlmacenAceitesAerosol.clickAlmacenAceitesAerosol()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-865) Verificar que funciona el Menu Almacen: Aceites Comunes', async ({menuHamburAlmacenAceitesComunes}) => {

    await test.step('Click en Aceites Comunes', async () => {
        await menuHamburAlmacenAceitesComunes.clickAlmacenAceitesComunes()
    })
})

test('@Regression @MenuHamburguesa (B2C-TC-867) Verificar que funciona el Menu Almacen: Aceites Especiales', async ({menuHamburAlmacenAceitesEspeciales}) => {

    await test.step('Click en Aceites Especiales', async () => {
        await menuHamburAlmacenAceitesEspeciales.clickAlmacenAceitesEspeciales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-866) Verificar que funciona el Menu Almacen: Aceites de Oliva', async ({menuHamburAlmacenAceitesOliva}) => {

    await test.step('Click en Aceites de Oliva', async () => {
        await menuHamburAlmacenAceitesOliva.clickAlmacenAceitesOliva()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-327) Verificar que funciona el Menu Almacen: Aceites y Vinagres', async ({menuHamburguesaAlmacenAceitesVinagres}) => {

    await test.step('Click en Aceites y Vinagres', async () => {
        await menuHamburguesaAlmacenAceitesVinagres.clickAlmacenAceitesVinagres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-888) Verificar que funciona el Menu Almacen: Aceitunas y Encurtidos', async ({menuHamburAlmacenAceitunasEncurtidos}) => {

    await test.step('Click en Aceitunas y Encurtidos', async () => {
        await menuHamburAlmacenAceitunasEncurtidos.clickAlmacenAceitunasEncurtidos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-875) Verificar que funciona el Menu Almacen: Arroz', async ({menuHamburAlmacenArroz}) => {

    await test.step('Click en Arroz', async () => {
        await menuHamburAlmacenArroz.clickAlmacenArroz()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-874) Verificar que funciona el Menu Almacen: Arroz y Legumbres', async ({menuHamburAlmacenArrozLegumbres}) => {

    await test.step('Click en Arroz y Legumbres', async () => {
        await menuHamburAlmacenArrozLegumbres.clickAlmacenArrozLegumbres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-882) Verificar que funciona el Menu Almacen: Avena', async ({menuHamburAlmacenAvena}) => {

    await test.step('Click en Avena', async () => {
        await menuHamburAlmacenAvena.clickAlmacenAvena()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-897) Verificar que funciona el Menu Almacen: Caldos', async ({menuHamburAlmacenCaldos}) => {

    await test.step('Click en Caldos', async () => {
        await menuHamburAlmacenCaldos.clickAlmacenCaldos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-896) Verificar que funciona el Menu Almacen: Caldos Sopas y Pure', async ({menuHamburAlmacenCaldosSopasPure}) => {

    await test.step('Click en Caldos Sopas y Pure', async () => {
        await menuHamburAlmacenCaldosSopasPure.clickAlmacenCaldosSopasPure()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-902) Verificar que funciona el Menu Almacen: Coberturas Rellenos y Salsas', async ({menuHamburAlmacenCoberturasRellenosSalsas}) => {

    await test.step('Click en Coberturas Rellenos y Salsas', async () => {
        await menuHamburAlmacenCoberturasRellenosSalsas.clickAlmacenCoberturasRellenosSalsas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-903) Verificar que funciona el Menu Almacen: Complementos', async ({menuHamburAlmacenComplementos}) => {

    await test.step('Click en Complementos', async () => {
        await menuHamburAlmacenComplementos.clickAlmacenComplementos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-889) Verificar que funciona el Menu Almacen: Conservas de Frutas', async ({menuHamburAlmacenConservasFrutas}) => {

    await test.step('Click en Conservas de Frutas', async () => {
        await menuHamburAlmacenConservasFrutas.clickAlmacenConservasFrutas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-887) Verificar que funciona el Menu Almacen: Conservas de Legumbres y Vegetales', async ({menuHamburAlmacenConservasLegumbresVegetales}) => {

    await test.step('Click en Conservas de Legumbres y Vegetales', async () => {
        await menuHamburAlmacenConservasLegumbresVegetales.clickAlmacenConservasLegumbresVegetales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-885) Verificar que funciona el Menu Almacen: Conservas de Pescado', async ({menuHamburAlmacenConservasPescado}) => {

    await test.step('Click en Conservas de Pescado', async () => {
        await menuHamburAlmacenConservasPescado.clickAlmacenConservasPescado()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-886) Verificar que funciona el Menu Almacen: Conservas y Salsas de Tomate', async ({menuHamburAlmacenConservasSalsasTomate}) => {

    await test.step('Click en Conservas y Salsas de Tomate', async () => {
        await menuHamburAlmacenConservasSalsasTomate.clickAlmacenConservasSalsasTomate()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-884) Verificar que funciona el Menu Almacen: Enlatados y Conservas', async ({menuHamburAlmacenEnlatadosConservas}) => {

    await test.step('Click en Enlatados y Conservas', async () => {
        await menuHamburAlmacenEnlatadosConservas.clickAlmacenEnlatadosConservas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-872) Verificar que funciona el Menu Almacen: Fideos Guiseros y Para Sopas', async ({menuHamburAlmacenFideosGuiserosParaSopas}) => {

    await test.step('Click en Fideos Guiseros y Para Sopas', async () => {
        await menuHamburAlmacenFideosGuiserosParaSopas.clickAlmacenFideosGuiserosParaSopas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-871) Verificar que funciona el Menu Almacen: Fideos Largos', async ({menuHamburAlmacenFideosLargos}) => {

    await test.step('Click en Fideos Largos', async () => {
        await menuHamburAlmacenFideosLargos.clickAlmacenFideosLargos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-904) Verificar que funciona el Menu Almacen: Gelatinas', async ({menuHamburAlmacenGelatinas}) => {

    await test.step('Click en Gelatinas', async () => {
        await menuHamburAlmacenGelatinas.clickAlmacenGelatinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-878) Verificar que funciona el Menu Almacen: Harinas', async ({menuHamburAlmacenHarinas}) => {

    await test.step('Click en Harinas', async () => {
        await menuHamburAlmacenHarinas.clickAlmacenHarinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-879) Verificar que funciona el Menu Almacen: Harinas Comunes y Leudantes', async ({menuHamburAlmacenHarinasComunesLeudantes}) => {

    await test.step('Click en Harinas Comunes y Leudantes', async () => {
        await menuHamburAlmacenHarinasComunesLeudantes.clickAlmacenHarinasComunesLeudantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-894) Verificar que funciona el Menu Almacen: Hierbas Secas y Especias', async ({menuHamburAlmacenHierbasSecasEspecias}) => {

    await test.step('Click en Hierbas Secas y Especias', async () => {
        await menuHamburAlmacenHierbasSecasEspecias.clickAlmacenHierbasSecasEspecias()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-876) Verificar que funciona el Menu Almacen: Legumbres', async ({menuHamburAlmacenLegumbres}) => {

    await test.step('Click en Legumbres', async () => {
        await menuHamburAlmacenLegumbres.clickAlmacenLegumbres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-909) Verificar que funciona el Menu Almacen: Nachos Mani y Palitos', async ({menuHamburAlmacenNachosManiPalitos}) => {

    await test.step('Click en Nachos Mani y Palitos', async () => {
        await menuHamburAlmacenNachosManiPalitos.clickAlmacenNachosManiPalitos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-883) Verificar que funciona el Menu Almacen: Otras Harinas', async ({menuHamburAlmacenOtrasHarinas}) => {

    await test.step('Click en Otras Harinas', async () => {
        await menuHamburAlmacenOtrasHarinas.clickAlmacenOtrasHarinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-910) Verificar que funciona el Menu Almacen: Otros Snacks Salados', async ({menuHamburAlmacenOtrosSnacksSalados}) => {

    await test.step('Click en Otros Snacks Salados', async () => {
        await menuHamburAlmacenOtrosSnacksSalados.clickAlmacenOtrosSnacksSalados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-908) Verificar que funciona el Menu Almacen: Papas Fritas y Snacks de Maiz', async ({menuHamburAlmacenPapasFritasSnacksMaiz}) => {

    await test.step('Click en Papas Fritas y Snacks de Maiz', async () => {
        await menuHamburAlmacenPapasFritasSnacksMaiz.clickAlmacenPapasFritasSnacksMaiz()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-870) Verificar que funciona el Menu Almacen: Pastas Secas', async ({menuHamburAlmacenPastasSecas}) => {

    await test.step('Click en Pastas Secas', async () => {
        await menuHamburAlmacenPastasSecas.clickAlmacenPastasSecas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-873) Verificar que funciona el Menu Almacen: Pastas Secas Rellenas y Listas', async ({menuHamburAlmacenPastasSecasRellenasListas}) => {

    await test.step('Click en Pastas Secas Rellenas y Listas', async () => {
        await menuHamburAlmacenPastasSecasRellenasListas.clickAlmacenPastasSecasRellenasListas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-890) Verificar que funciona el Menu Almacen: Picadillos y Pate', async ({menuHamburAlmacenPicadillosPate}) => {

    await test.step('Click en Picadillos y Pate', async () => {
        await menuHamburAlmacenPicadillosPate.clickAlmacenPicadillosPate()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-905) Verificar que funciona el Menu Almacen: Postres y flanes', async ({menuHamburAlmacenPostresFlanes}) => {

    await test.step('Click en Postres y flanes', async () => {
        await menuHamburAlmacenPostresFlanes.clickAlmacenPostresFlanes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-901) Verificar que funciona el Menu Almacen: Premezclas Dulces', async ({menuHamburAlmacenPremezclasDulces}) => {

    await test.step('Click en Premezclas Dulces', async () => {
        await menuHamburAlmacenPremezclasDulces.clickAlmacenPremezclasDulces()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-880) Verificar que funciona el Menu Almacen: Premezclas Saladas', async ({menuHamburAlmacenPremezclasSaladas}) => {

    await test.step('Click en Premezclas Saladas', async () => {
        await menuHamburAlmacenPremezclasSaladas.clickAlmacenPremezclasSaladas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-899) Verificar que funciona el Menu Almacen: Pures Instantaneos', async ({menuHamburAlmacenPuresInstantaneos}) => {

    await test.step('Click en Pures Instantaneos', async () => {
        await menuHamburAlmacenPuresInstantaneos.clickAlmacenPuresInstantaneos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-900) Verificar que funciona el Menu Almacen: Reposteria y Postres', async ({menuHamburAlmacenReposteriaPostres}) => {

    await test.step('Click en Reposteria y Postres', async () => {
        await menuHamburAlmacenReposteriaPostres.clickAlmacenReposteriaPostres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-895) Verificar que funciona el Menu Almacen: Saborizadores', async ({menuHamburAlmacenSaborizadores}) => {

    await test.step('Click en Saborizadores', async () => {
        await menuHamburAlmacenSaborizadores.clickAlmacenSaborizadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-892) Verificar que funciona el Menu Almacen: Sal', async ({menuHamburAlmacenSal}) => {

    await test.step('Click en Sal', async () => {
        await menuHamburAlmacenSal.clickAlmacenSal()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-891) Verificar que funciona el Menu Almacen: Sal Aderezos y Saborizadores', async ({menuHamburAlmacenSalAderezosSaborizadores}) => {

    await test.step('Click en Sal Aderezos y Saborizadores', async () => {
        await menuHamburAlmacenSalAderezosSaborizadores.clickAlmacenSalAderezosSaborizadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-893) Verificar que funciona el Menu Almacen: Salsas y Aderezos', async ({menuHamburAlmacenSalsasAderezos}) => {

    await test.step('Click en Salsas y Aderezos', async () => {
        await menuHamburAlmacenSalsasAderezos.clickAlmacenSalsasAderezos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-877) Verificar que funciona el Menu Almacen: Semillas', async ({menuHamburAlmacenSemillas}) => {

    await test.step('Click en Semillas', async () => {
        await menuHamburAlmacenSemillas.clickAlmacenSemillas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-907) Verificar que funciona el Menu Almacen: Snacks', async ({menuHamburAlmacenSnacks}) => {

    await test.step('Click en Snacks', async () => {
        await menuHamburAlmacenSnacks.clickAlmacenSnacks()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-898) Verificar que funciona el Menu Almacen: Sopas', async ({menuHamburAlmacenSopas}) => {

    await test.step('Click en Sopas', async () => {
        await menuHamburAlmacenSopas.clickAlmacenSopas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-906) Verificar que funciona el Menu Almacen: Tapas de Alfajores y Merengues', async ({menuHamburAlmacenTapasAlfajoresMerengues}) => {

    await test.step('Click en Tapas de Alfajores y Merengues', async () => {
        await menuHamburAlmacenTapasAlfajoresMerengues.clickAlmacenTapasAlfajoresMerengues()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-869) Verificar que funciona el Menu Almacen: Vinagres, Acetos y Limon', async ({menuHamburAlmacenVinagresAcetosLimon}) => {

    await test.step('Click en Vinagres, Acetos y Limon', async () => {
        await menuHamburAlmacenVinagresAcetosLimon.clickAlmacenVinagresAcetosLimon()
    })
})
