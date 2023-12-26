import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({mainPageAndAcceptCookies, menuHamburguesa}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
})

test('@Regression @SmokeMenuHamburguesa (B2C-TC-1092) Verificar que al clickear en Menu Electro y Tecnologia funciona correctamente', async ({menuHamburElectroTecnologia}) => {

    await test.step('Click en Electro y Tecnologia', async () => {
        await menuHamburElectroTecnologia.clickElectroTecnologia()
    })
})