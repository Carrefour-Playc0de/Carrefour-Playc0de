import test from '../../../config/testManager'

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
test('@Regression @MenuHamburguesa (B2C-TC-1173) Verificar que funciona el Menu Mundo Bebe: Toallitas Humedas', async ({menuHamburMundoBebeToallitasHumedas}) => {

    await test.step('Click en Toallitas Humedas', async () => {
        await menuHamburMundoBebeToallitasHumedas.clickMundoBebeToallitasHumedas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1188) Verificar que funciona el Menu Mundo Bebe: Para el Banio', async ({menuHamburMundoBebeParaBanio}) => {

    await test.step('Click en Para el Banio', async () => {
        await menuHamburMundoBebeParaBanio.clickMundoBebeParaBanio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1189) Verificar que funciona el Menu Mundo Bebe: Shampoos y Acondicionadores', async ({menuHamburMundoBebeShampoosAcondicionadores}) => {

    await test.step('Click en Shampoos y Acondicionadores', async () => {
        await menuHamburMundoBebeShampoosAcondicionadores.clickMundoBebeShampoosAcondicionadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1190) Verificar que funciona el Menu Mundo Bebe: Jabones', async ({menuHamburMundoBebeJabones}) => {

    await test.step('Click en Jabones', async () => {
        await menuHamburMundoBebeJabones.clickMundoBebeJabones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1191) Verificar que funciona el Menu Mundo Bebe: Despues del Banio', async ({menuHamburMundoBebeDespuesBanio}) => {

    await test.step('Click en Despues del Banio', async () => {
        await menuHamburMundoBebeDespuesBanio.clickMundoBebeDespuesBanio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1192) Verificar que funciona el Menu Mundo Bebe: Oleo Calcareo y Talco', async ({menuHamburMundoBebeOleoCalcareoTalco}) => {

    await test.step('Click en Oleo Calcareo y Talco', async () => {
        await menuHamburMundoBebeOleoCalcareoTalco.clickMundoBebeOleoCalcareoTalco()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1193) Verificar que funciona el Menu Mundo Bebe: Colonias', async ({menuHamburMundoBebeColonias}) => {

    await test.step('Click en Colonias', async () => {
        await menuHamburMundoBebeColonias.clickMundoBebeColonias()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1194) Verificar que funciona el Menu Mundo Bebe: Aceites Cremas y Lociones', async ({menuHamburMundoBebeAceitesCremasLociones}) => {

    await test.step('Click en Aceites Cremas y Lociones', async () => {
        await menuHamburMundoBebeAceitesCremasLociones.clickMundoBebeAceitesCremasLociones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1195) Verificar que funciona el Menu Mundo Bebe: Alimento para Bebe', async ({menuHamburMundoBebeAlimentoBebe}) => {

    await test.step('Click en Alimento para Bebe', async () => {
        await menuHamburMundoBebeAlimentoBebe.clickMundoBebeAlimentoBebe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1196) Verificar que funciona el Menu Mundo Bebe: Leches Infantiles', async ({menuHamburMundoBebeLechesInfantiles}) => {

    await test.step('Click en Leches Infantiles', async () => {
        await menuHamburMundoBebeLechesInfantiles.clickMundoBebeLechesInfantiles()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1197) Verificar que funciona el Menu Mundo Bebe: Cereales y Papillas', async ({menuHamburMundoBebeCerealesPapillas}) => {

    await test.step('Click en Cereales y Papillas', async () => {
        await menuHamburMundoBebeCerealesPapillas.clickMundoBebeCerealesPapillas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1198) Verificar que funciona el Menu Mundo Bebe: Cuidado Maternal', async ({menuHamburMundoBebeCuidadoMaternal}) => {

    await test.step('Click en Cuidado Maternal', async () => {
        await menuHamburMundoBebeCuidadoMaternal.clickMundoBebeCuidadoMaternal()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1199) Verificar que funciona el Menu Mundo Bebe: Chupetes Mamaderas y Accesorios', async ({menuHamburMundoBebeChupetesMamaderasAccesorios}) => {

    await test.step('Click en Chupetes Mamaderas y Accesorios', async () => {
        await menuHamburMundoBebeChupetesMamaderasAccesorios.clickMundoBebeChupetesMamaderasAccesorios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1200) Verificar que funciona el Menu Mundo Bebe: Pelelas y Banieras', async ({menuHamburMundoBebePelelasBanieras}) => {

    await test.step('Click en Pelelas y Banieras', async () => {
        await menuHamburMundoBebePelelasBanieras.clickMundoBebePelelasBanieras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1201) Verificar que funciona el Menu Mundo Bebe: Cochecitos y Butacas', async ({menuHamburMundoBebeCochecitosButacas}) => {

    await test.step('Click en Cochecitos y Butacas', async () => {
        await menuHamburMundoBebeCochecitosButacas.clickMundoBebeCochecitosButacas()
    })
})
