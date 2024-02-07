import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburIndumentaria}) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Clickear el Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Indumentaria', async () => {
        await menuHamburIndumentaria.navigateToMenuHamburIndumentaria()
    })
})

test('@Smoke @Regression (B2C-TC-1138) Verificar que funciona el Menu Indumentaria: VER TODO', async ({menuHamburIndumentariaVerTodos}) => {

    await test.step('Click en VER TODO', async () => {
        await menuHamburIndumentariaVerTodos.clickIndumentariaVerTodos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1164) Verificar que funciona el Menu Indumentaria: Adultos', async ({menuHamburIndumentariaAdultos}) => {

    await test.step('Click en Adultos', async () => {
        await menuHamburIndumentariaAdultos.clickIndumentariaAdultos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1164) Verificar que funciona el Menu Indumentaria: Hombre', async ({menuHamburIndumentariaHombre}) => {

    await test.step('Click en Hombre', async () => {
        await menuHamburIndumentariaHombre.clickIndumentariaHombre()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1164) Verificar que funciona el Menu Indumentaria: Mujer', async ({menuHamburIndumentariaMujer}) => {

    await test.step('Click en Mujer', async () => {
        await menuHamburIndumentariaMujer.clickIndumentariaMujer()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1164) Verificar que funciona el Menu Indumentaria: Bebes', async ({menuHamburIndumentariaBebes}) => {

    await test.step('Click en Bebes', async () => {
        await menuHamburIndumentariaBebes.clickIndumentariaBebes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1164) Verificar que funciona el Menu Indumentaria: Ninios y Ninias', async ({menuHamburIndumentariaNiniosNinias}) => {

    await test.step('Click en Ninios y Ninias', async () => {
        await menuHamburIndumentariaNiniosNinias.clickIndumentariaNiniosNinias()
    })
})
