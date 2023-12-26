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

test('@Regression @SmokeMenuHamburguesa (B2C-TC-1094) Verificar que al clickear en Menu Lacteos y Productos Frescos funciona correctamente', async ({menuHamburLacteosProdsFrescos}) => {

    await test.step('Click en Lacteos y Productos Frescos', async () => {
        await menuHamburLacteosProdsFrescos.clickLacteosProdsFrescos()
    })
})