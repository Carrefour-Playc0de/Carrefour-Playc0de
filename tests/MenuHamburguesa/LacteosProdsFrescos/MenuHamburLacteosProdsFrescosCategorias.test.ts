import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburLacteosProdsFrescos }) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Clickear el Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Lacteos y Productos Frescos', async () => {
        await menuHamburLacteosProdsFrescos.navigateToMenuHamburLacteosProdsFrescos()
    })
})

test('@Smoke @Regression (B2C-TC-1116) Verificar que funciona el Menu Lacteos y Productos Frescos: VER TODO', async ({menuHamburLacteosProdsFrescosVerTodo}) => {

    await test.step('Click en Lacteos y Productos Frescos VER TODO', async () => {
        await menuHamburLacteosProdsFrescosVerTodo.clickLacteosProdsFrescosVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-991) Verificar que funciona el Menu Lacteos y Productos Frescos: Cremas De Leche', async ({menuHamburLacteosProdsFrescosCremasDeLeche}) => {

    await test.step('Click en Cremas De Leche', async () => {
        await menuHamburLacteosProdsFrescosCremasDeLeche.clickLacteosProdsFrescosCremasDeLeche()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-990) Verificar que funciona el Menu Lacteos y Productos Frescos: Dulce de Leche', async ({menuHamburLacteosProdsFrescosDulceDeLeche}) => {

    await test.step('Click en Dulce de Leche', async () => {
        await menuHamburLacteosProdsFrescosDulceDeLeche.clickLacteosProdsFrescosDulceDeLeche()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-995) Verificar que funciona el Menu Lacteos y Productos Frescos: Dulce de Membrillo y Otros Dulces', async ({menuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces}) => {

    await test.step('Click en Dulce de Membrillo y Otros Dulces', async () => {
        await menuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces.clickLacteosProdsFrescosDulceMembrilloOtrosDulces()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1005) Verificar que funciona el Menu Lacteos y Productos Frescos: Fiambres', async ({menuHamburLacteosProdsFrescosFiambres}) => {

    await test.step('Click en Fiambres', async () => {
        await menuHamburLacteosProdsFrescosFiambres.clickLacteosProdsFrescosFiambres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1006) Verificar que funciona el Menu Lacteos y Productos Frescos: Fiambres Feteados', async ({menuHamburLacteosProdsFrescosFiambresFeteados}) => {

    await test.step('Click en Fiambres Feteados', async () => {
        await menuHamburLacteosProdsFrescosFiambresFeteados.clickLacteosProdsFrescosFiambresFeteados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-993) Verificar que funciona el Menu Lacteos y Productos Frescos: Huevos', async ({menuHamburLacteosProdsFrescosHuevos}) => {

    await test.step('Click en Huevos', async () => {
        await menuHamburLacteosProdsFrescosHuevos.clickLacteosProdsFrescosHuevos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-330) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches', async ({menuHamburLacteosProdsFrescosLeches}) => {

    await test.step('Click en Leches', async () => {
        await menuHamburLacteosProdsFrescosLeches.clickLacteosProdsFrescosLeches()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-982) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches Descremadas', async ({menuHamburLacteosProdsFrescosLechesDescremadas}) => {

    await test.step('Click en Leches Descremadas', async () => {
        await menuHamburLacteosProdsFrescosLechesDescremadas.clickLacteosProdsFrescosLechesDescremadas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-981) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches Enteras', async ({menuHamburLacteosProdsFrescosLechesEnteras}) => {

    await test.step('Click en Leches Enteras', async () => {
        await menuHamburLacteosProdsFrescosLechesEnteras.clickLacteosProdsFrescosLechesEnteras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-985) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches en Polvo', async ({menuHamburLacteosProdsFrescosLechesPolvo}) => {

    await test.step('Click en Leches en Polvo', async () => {
        await menuHamburLacteosProdsFrescosLechesPolvo.clickLacteosProdsFrescosLechesPolvo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-984) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches Saborizadas', async ({menuHamburLacteosProdsFrescosLechesSaborizadas}) => {

    await test.step('Click en Leches Saborizadas', async () => {
        await menuHamburLacteosProdsFrescosLechesSaborizadas.clickLacteosProdsFrescosLechesSaborizadas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-983) Verificar que funciona el Menu Lacteos y Productos Frescos: Leches Vegetales', async ({menuHamburLacteosProdsFrescosLechesVegetales}) => {

    await test.step('Click en Leches Vegetales', async () => {
        await menuHamburLacteosProdsFrescosLechesVegetales.clickLacteosProdsFrescosLechesVegetales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-989) Verificar que funciona el Menu Lacteos y Productos Frescos: Mantecas Margarinas y Levaduras', async ({menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras}) => {

    await test.step('Click en Mantecas Margarinas y Levaduras', async () => {
        await menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras.clickLacteosProdsFrescosMantecasMargarinasLevaduras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-992) Verificar que funciona el Menu Lacteos y Productos Frescos: Postres', async ({menuHamburLacteosProdsFrescosPostres}) => {

    await test.step('Click en Postres', async () => {
        await menuHamburLacteosProdsFrescosPostres.clickLacteosProdsFrescosPostres()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-997) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos', async ({menuHamburLacteosProdsFrescosQuesos}) => {

    await test.step('Click en Quesos', async () => {
        await menuHamburLacteosProdsFrescosQuesos.clickLacteosProdsFrescosQuesos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-998) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Cremas y Untables', async ({menuHamburLacteosProdsFrescosQuesosCremasUntables}) => {

    await test.step('Click en Quesos Cremas y Untables', async () => {
        await menuHamburLacteosProdsFrescosQuesosCremasUntables.clickLacteosProdsFrescosQuesosCremasUntables()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-999) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Cremosos y Mozzarellas', async ({menuHamburLacteosProdsFrescosQuesosCremososMozzarellas}) => {

    await test.step('Click en Quesos Cremosos y Mozzarellas', async () => {
        await menuHamburLacteosProdsFrescosQuesosCremososMozzarellas.clickLacteosProdsFrescosQuesosCremososMozzarellas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1000) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Duros y Semi Duros', async ({menuHamburLacteosProdsFrescosQuesosDurosSemiDuros}) => {

    await test.step('Click en Quesos Duros y Semi Duros', async () => {
        await menuHamburLacteosProdsFrescosQuesosDurosSemiDuros.clickLacteosProdsFrescosQuesosDurosSemiDuros()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1002) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Especiales', async ({menuHamburLacteosProdsFrescosQuesosEspeciales}) => {

    await test.step('Click en Quesos Especiales', async () => {
        await menuHamburLacteosProdsFrescosQuesosEspeciales.clickLacteosProdsFrescosQuesosEspeciales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1003) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Feteados', async ({menuHamburLacteosProdsFrescosQuesosFeteados}) => {

    await test.step('Click en Quesos Feteados', async () => {
        await menuHamburLacteosProdsFrescosQuesosFeteados.clickLacteosProdsFrescosQuesosFeteados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1001) Verificar que funciona el Menu Lacteos y Productos Frescos: Quesos Rallados y En Hebras', async ({menuHamburLacteosProdsFrescosQuesosRalladosEnHebras}) => {

    await test.step('Click en Quesos Rallados y En Hebras', async () => {
        await menuHamburLacteosProdsFrescosQuesosRalladosEnHebras.clickLacteosProdsFrescosQuesosRalladosEnHebras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1004) Verificar que funciona el Menu Lacteos y Productos Frescos: Ricota', async ({menuHamburLacteosProdsFrescosRicota}) => {

    await test.step('Click en Ricota', async () => {
        await menuHamburLacteosProdsFrescosRicota.clickLacteosProdsFrescosRicota()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1007) Verificar que funciona el Menu Lacteos y Productos Frescos: Salamines y Embutidos', async ({menuHamburLacteosProdsFrescosSalaminesEmbutidos}) => {

    await test.step('Click en Salamines y Embutidos', async () => {
        await menuHamburLacteosProdsFrescosSalaminesEmbutidos.clickLacteosProdsFrescosSalaminesEmbutidos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-996) Verificar que funciona el Menu Lacteos y Productos Frescos: Salchichas', async ({menuHamburLacteosProdsFrescosSalchichas}) => {

    await test.step('Click en Salchichas', async () => {
        await menuHamburLacteosProdsFrescosSalchichas.clickLacteosProdsFrescosSalchichas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-994) Verificar que funciona el Menu Lacteos y Productos Frescos: Tapas y Pastas Frescas', async ({menuHamburLacteosProdsFrescosTapasPastasFrescas}) => {

    await test.step('Click en Tapas y Pastas Frescas', async () => {
        await menuHamburLacteosProdsFrescosTapasPastasFrescas.clickLacteosProdsFrescosTapasPastasFrescas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-986) Verificar que funciona el Menu Lacteos y Productos Frescos: Yogures', async ({menuHamburLacteosProdsFrescosYogures}) => {

    await test.step('Click en Yogures', async () => {
        await menuHamburLacteosProdsFrescosYogures.clickLacteosProdsFrescosYogures()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-988) Verificar que funciona el Menu Lacteos y Productos Frescos: Yogures Descremados', async ({menuHamburLacteosProdsFrescosYoguresDescremados}) => {

    await test.step('Click en Yogures Descremados', async () => {
        await menuHamburLacteosProdsFrescosYoguresDescremados.clickLacteosProdsFrescosYoguresDescremados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-987) Verificar que funciona el Menu Lacteos y Productos Frescos: Yogures Enteros', async ({menuHamburLacteosProdsFrescosYoguresEnteros}) => {

    await test.step('Click en Yogures Enteros', async () => {
        await menuHamburLacteosProdsFrescosYoguresEnteros.clickLacteosProdsFrescosYoguresEnteros()
    })
})
