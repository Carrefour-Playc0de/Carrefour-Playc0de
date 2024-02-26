import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburMundoBebe}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Mundo Bebe`, async () => {
        await menuHamburMundoBebe.navigateToMenuHamburMundoBebe()
    })
})

test('@Smoke @Regression (B2C-TC-1114) Verificar que funciona el Menu Mundo Bebe: VER TODO', async ({menuHamburMundoBebeVerTodos}) => {

    await test.step('Click en Mundo Bebe VER TODO', async () => {
        await menuHamburMundoBebeVerTodos.clickMundoBebeVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Paniales', async ({menuHamburMundoBebePaniales}) => {

    await test.step('Click en Paniales', async () => {
        await menuHamburMundoBebePaniales.clickMundoBebePaniales()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Toallitas Humedas', async ({menuHamburMundoBebeToallitasHumedas}) => {

    await test.step('Click en Toallitas Humedas', async () => {
        await menuHamburMundoBebeToallitasHumedas.clickMundoBebeToallitasHumedas()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Para el Banio', async ({menuHamburMundoBebeParaBanio}) => {

    await test.step('Click en Para el Banio', async () => {
        await menuHamburMundoBebeParaBanio.clickMundoBebeParaBanio()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Shampoos y Acondicionadores', async ({menuHamburMundoBebeShampoosAcondicionadores}) => {

    await test.step('Click en Shampoos y Acondicionadores', async () => {
        await menuHamburMundoBebeShampoosAcondicionadores.clickMundoBebeShampoosAcondicionadores()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Jabones', async ({menuHamburMundoBebeJabones}) => {

    await test.step('Click en Jabones', async () => {
        await menuHamburMundoBebeJabones.clickMundoBebeJabones()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Despues del Banio', async ({menuHamburMundoBebeDespuesBanio}) => {

    await test.step('Click en Despues del Banio', async () => {
        await menuHamburMundoBebeDespuesBanio.clickMundoBebeDespuesBanio()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Oleo Calcareo y Talco', async ({menuHamburMundoBebeOleoCalcareoTalco}) => {

    await test.step('Click en Oleo Calcareo y Talco', async () => {
        await menuHamburMundoBebeOleoCalcareoTalco.clickMundoBebeOleoCalcareoTalco()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Colonias', async ({menuHamburMundoBebeColonias}) => {

    await test.step('Click en Colonias', async () => {
        await menuHamburMundoBebeColonias.clickMundoBebeColonias()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Aceites Cremas y Lociones', async ({menuHamburMundoBebeAceitesCremasLociones}) => {

    await test.step('Click en Aceites Cremas y Lociones', async () => {
        await menuHamburMundoBebeAceitesCremasLociones.clickMundoBebeAceitesCremasLociones()
    })
})
test('@Regression @MundoBebe (B2C-TC-337) Verificar que funciona el Menu Mundo Bebe: Alimento para Bebe', async ({menuHamburMundoBebeAlimentoBebe}) => {

    await test.step('Click en Alimento para Bebe', async () => {
        await menuHamburMundoBebeAlimentoBebe.clickMundoBebeAlimentoBebe()
    })
})















