import test from '../../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({mainPageAndAcceptCookies, menuHamburguesa, menuHamburLacteosProdsFrescos, menuHamburLacteosProdsFrescosVerTodo}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Lacteos y Productos Frescos`, async () => {
        await menuHamburLacteosProdsFrescos.navigateToMenuHamburLacteosProdsFrescos()
    })
    await test.step('Click en VER TODO', async () => {
        await menuHamburLacteosProdsFrescosVerTodo.navigateToMenuHamburLacteosProdsFrescosVerTodo()
    })
})

test('@Smoke @Regression @Productos (B2C-TC-1102) Verificar que al clickear en Leche UAT parcialmente descremada Carrefour classic brik 1Lt funciona correctamente', async ({lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt}) => {

    await test.step('Click en Leche UAT parcialmente descremada Carrefour classic brik 1Lt', async () => {
        await lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt.navigateToLPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt()
    })
})

