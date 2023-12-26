import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburPanaderia}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Panaderia`, async () => {
        await menuHamburPanaderia.navigateToMenuHamburPanaderia()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1115) Verificar que funciona el Menu Panaderia: VER TODO', async ({menuHamburPanaderiaVerTodos}) => {

    await test.step('Click en Panaderia VER TODO', async () => {
        await menuHamburPanaderiaVerTodos.clickPanaderiaVerTodos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1022) Verificar que funciona el Menu Panaderia: Bizcochuelos y Piononos', async ({menuHamburPanaderiaBizcochuelosPiononos}) => {

    await test.step('Click en Bizcochuelos y Piononos', async () => {
        await menuHamburPanaderiaBizcochuelosPiononos.clickPanaderiaBizcochuelosPiononos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1016) Verificar que funciona el Menu Panaderia: Especialidades Dulces', async ({menuHamburPanaderiaEspecialidadesDulces}) => {

    await test.step('Click en Especialidades Dulces', async () => {
        await menuHamburPanaderiaEspecialidadesDulces.clickPanaderiaEspecialidadesDulces()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1018) Verificar que funciona el Menu Panaderia: Panificados', async ({menuHamburPanaderiaPanificados}) => {

    await test.step('Click en Panificados', async () => {
        await menuHamburPanaderiaPanificados.clickPanaderiaPanificados()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1019) Verificar que funciona el Menu Panaderia: Panes Lacteados y de Mesa', async ({menuHamburPanaderiaPanesLacteadosDeMesa}) => {

    await test.step('Click en Panes Lacteados y de Mesa', async () => {
        await menuHamburPanaderiaPanesLacteadosDeMesa.clickPanaderiaPanesLacteadosDeMesa()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1020) Verificar que funciona el Menu Panaderia: Pan Para Hamburguesas y Panchos', async ({menuHamburPanaderiaPanHamburguesasPanchos}) => {

    await test.step('Click en Pan Para Hamburguesas y Panchos', async () => {
        await menuHamburPanaderiaPanHamburguesasPanchos.clickPanaderiaPanHamburguesasPanchos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1021) Verificar que funciona el Menu Panaderia: Tortillas', async ({menuHamburPanaderiaTortillas}) => {

    await test.step('Click en Tortillas', async () => {
        await menuHamburPanaderiaTortillas.clickPanaderiaTortillas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1023) Verificar que funciona el Menu Panaderia: Pan Rallado y Rebozadores', async ({menuHamburPanaderiaPanRalladoRebozadores}) => {

    await test.step('Click en Pan Rallado y Rebozadores', async () => {
        await menuHamburPanaderiaPanRalladoRebozadores.clickPanaderiaPanRalladoRebozadores()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1024) Verificar que funciona el Menu Panaderia: Pizzas y Prepizzas', async ({menuHamburPanaderiaPizzasPrepizzas}) => {

    await test.step('Click en Pizzas y Prepizzas', async () => {
        await menuHamburPanaderiaPizzasPrepizzas.clickPanaderiaPizzasPrepizzas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1025) Verificar que funciona el Menu Panaderia: Sandwiches Empanadas y Tartas', async ({menuHamburPanaderiaSandwichesEmpanadasTartas}) => {

    await test.step('Click en Sandwiches Empanadas y Tartas', async () => {
        await menuHamburPanaderiaSandwichesEmpanadasTartas.clickPanaderiaSandwichesEmpanadasTartas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1017) Verificar que funciona el Menu Panaderia: Especialidades Saladas', async ({menuHamburPanaderiaEspecialidadesSaladas}) => {

    await test.step('Click en Especialidades Saladas', async () => {
        await menuHamburPanaderiaEspecialidadesSaladas.clickPanaderiaEspecialidadesSaladas()
    })
})
