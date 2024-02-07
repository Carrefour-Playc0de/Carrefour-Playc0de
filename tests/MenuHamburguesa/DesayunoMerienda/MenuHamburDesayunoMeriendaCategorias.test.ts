import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburDesayunoMerienda}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Desayuno y Merienda`, async () => {
        await menuHamburDesayunoMerienda.navigateToMenuHamburDesayunoMerienda()
    })
})

test('@Smoke @Regression (B2C-TC-1090) Verificar que funciona el Menu Desayuno y Merienda: VER TODO', async ({menuHamburDesayunoMeriendaVerTodo}) => {

    await test.step('Click en ', async () => {
        await menuHamburDesayunoMeriendaVerTodo.clickDesayunoMeriendaVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-942) Verificar que funciona el Menu Desayuno y Merienda: Alfajores', async ({menuHamburDesayunoMeriendaAlfajores}) => {

    await test.step('Click en Alfajores', async () => {
        await menuHamburDesayunoMeriendaAlfajores.clickDesayunoMeriendaAlfajores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-930) Verificar que funciona el Menu Desayuno y Merienda: Azucar', async ({menuHamburDesayunoMeriendaAzucar}) => {

    await test.step('Click en Azucar', async () => {
        await menuHamburDesayunoMeriendaAzucar.clickDesayunoMeriendaAzucar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-929) Verificar que funciona el Menu Desayuno y Merienda: Azucar y Endulzantes', async ({menuHamburDesayunoMeriendaAzucarEndulzantes}) => {

    await test.step('Click en Azucar y Endulzantes', async () => {
        await menuHamburDesayunoMeriendaAzucarEndulzantes.clickDesayunoMeriendaAzucarEndulzantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-938) Verificar que funciona el Menu Desayuno y Merienda: Barritas de Cereales', async ({menuHamburDesayunoMeriendaBarritasCereales}) => {

    await test.step('Click en Barritas de Cereales', async () => {
        await menuHamburDesayunoMeriendaBarritasCereales.clickDesayunoMeriendaBarritasCereales()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-912) Verificar que funciona el Menu Desayuno y Merienda: Bizcochitos', async ({menuHamburDesayunoMeriendaBizcochitos}) => {

    await test.step('Click en Bizcochitos', async () => {
        await menuHamburDesayunoMeriendaBizcochitos.clickDesayunoMeriendaBizcochitos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-945) Verificar que funciona el Menu Desayuno y Merienda: Bocaditos Confites y Turrones', async ({menuHamburDesayunoMeriendaBocaditosConfitesTurrones}) => {

    await test.step('Click en Bocaditos Confites y Turrones', async () => {
        await menuHamburDesayunoMeriendaBocaditosConfitesTurrones.clickDesayunoMeriendaBocaditosConfitesTurrones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-917) Verificar que funciona el Menu Desayuno y Merienda: Budines y Bizcochuelos', async ({menuHamburDesayunoMeriendaBudinesBizcochuelos}) => {

    await test.step('Click en Budines y Bizcochuelos', async () => {
        await menuHamburDesayunoMeriendaBudinesBizcochuelos.clickDesayunoMeriendaBudinesBizcochuelos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-916) Verificar que funciona el Menu Desayuno y Merienda: Budines y Magdalenas', async ({menuHamburDesayunoMeriendaBudinesMagdalenas}) => {

    await test.step('Click en Budines y Magdalenas', async () => {
        await menuHamburDesayunoMeriendaBudinesMagdalenas.clickDesayunoMeriendaBudinesMagdalenas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-927) Verificar que funciona el Menu Desayuno y Merienda: Cacao', async ({menuHamburDesayunoMeriendaCacao}) => {

    await test.step('Click en Cacao', async () => {
        await menuHamburDesayunoMeriendaCacao.clickDesayunoMeriendaCacao()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-920) Verificar que funciona el Menu Desayuno y Merienda: Cafe', async ({menuHamburDesayunoMeriendaCafe}) => {

    await test.step('Click en Cafe', async () => {
        await menuHamburDesayunoMeriendaCafe.clickDesayunoMeriendaCafe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-922) Verificar que funciona el Menu Desayuno y Merienda: Cafe Instantaneo', async ({menuHamburDesayunoMeriendaCafeInstantaneo}) => {

    await test.step('Click en Cafe Instantaneo', async () => {
        await menuHamburDesayunoMeriendaCafeInstantaneo.clickDesayunoMeriendaCafeInstantaneo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-921) Verificar que funciona el Menu Desayuno y Merienda: Cafe Molido y en Grano', async ({menuHamburDesayunoMeriendaCafeMolidoGrano}) => {

    await test.step('Click en Cafe Molido y en Grano', async () => {
        await menuHamburDesayunoMeriendaCafeMolidoGrano.clickDesayunoMeriendaCafeMolidoGrano()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-923) Verificar que funciona el Menu Desayuno y Merienda: Capsulas de Cafe', async ({menuHamburDesayunoMeriendaCapsulasCafe}) => {

    await test.step('Click en Capsulas de Cafe', async () => {
        await menuHamburDesayunoMeriendaCapsulasCafe.clickDesayunoMeriendaCapsulasCafe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-943) Verificar que funciona el Menu Desayuno y Merienda: Caramelos Gomitas y Chupetines', async ({menuHamburDesayunoMeriendaCaramelosGomitasChupetines}) => {

    await test.step('Click en Caramelos Gomitas y Chupetines', async () => {
        await menuHamburDesayunoMeriendaCaramelosGomitasChupetines.clickDesayunoMeriendaCaramelosGomitasChupetines()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-937) Verificar que funciona el Menu Desayuno y Merienda: Cereales', async ({menuHamburDesayunoMeriendaCereales}) => {

    await test.step('Click en Cereales', async () => {
        await menuHamburDesayunoMeriendaCereales.clickDesayunoMeriendaCereales()
    })
})
test('@Regression @MenuHamburguesaa (B2C-TC-936) Verificar que funciona el Menu Desayuno y Merienda: Cereales y Barritas', async ({menuHamburDesayunoMeriendaCerealesBarritas}) => {

    await test.step('Click en Cereales y Barritas', async () => {
        await menuHamburDesayunoMeriendaCerealesBarritas.clickDesayunoMeriendaCerealesBarritas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-944) Verificar que funciona el Menu Desayuno y Merienda: Chicles', async ({menuHamburDesayunoMeriendaChicles}) => {

    await test.step('Click en Chicles', async () => {
        await menuHamburDesayunoMeriendaChicles.clickDesayunoMeriendaChicles()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-941) Verificar que funciona el Menu Desayuno y Merienda: Chocolates', async ({menuHamburDesayunoMeriendaChocolates}) => {

    await test.step('Click en Chocolates', async () => {
        await menuHamburDesayunoMeriendaChocolates.clickDesayunoMeriendaChocolates()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-931) Verificar que funciona el Menu Desayuno y Merienda: Edulcorantes y Endulzantes', async ({menuHamburDesayunoMeriendaEdulcorantesEndulzantes}) => {

    await test.step('Click en Edulcorantes y Endulzantes', async () => {
        await menuHamburDesayunoMeriendaEdulcorantesEndulzantes.clickDesayunoMeriendaEdulcorantesEndulzantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-924) Verificar que funciona el Menu Desayuno y Merienda: Filtros de Cafe', async ({menuHamburDesayunoMeriendaFiltrosCafe}) => {

    await test.step('Click en Filtros de Cafe', async () => {
        await menuHamburDesayunoMeriendaFiltrosCafe.clickDesayunoMeriendaFiltrosCafe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-914) Verificar que funciona el Menu Desayuno y Merienda: Galletas de Arroz', async ({menuHamburDesayunoMeriendaGalletasArroz}) => {

    await test.step('Click en Galletas de Arroz', async () => {
        await menuHamburDesayunoMeriendaGalletasArroz.clickDesayunoMeriendaGalletasArroz()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-913) Verificar que funciona el Menu Desayuno y Merienda: Galletitas de Agua', async ({menuHamburDesayunoMeriendaGalletitasAgua}) => {

    await test.step('Click en Galletitas de Agua', async () => {
        await menuHamburDesayunoMeriendaGalletitasAgua.clickDesayunoMeriendaGalletitasAgua()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-328) Verificar que funciona el Menu Desayuno y Merienda: Galletitas Bizcochitos y Tostadas', async ({menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas}) => {

    await test.step('Click en Galletitas Bizcochitos y Tostadas', async () => {
        await menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas.clickDesayunoMeriendaGalletitasBizcochitosTostadas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-911) Verificar que funciona el Menu Desayuno y Merienda: Galletitas Dulces', async ({menuHamburDesayunoMeriendaGalletitasDulces}) => {

    await test.step('Click en Galletitas Dulces', async () => {
        await menuHamburDesayunoMeriendaGalletitasDulces.clickDesayunoMeriendaGalletitasDulces()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-940) Verificar que funciona el Menu Desayuno y Merienda: Golosinas y Chocolates', async ({menuHamburDesayunoMeriendaGolosinasChocolates}) => {

    await test.step('Click en Golosinas y Chocolates', async () => {
        await menuHamburDesayunoMeriendaGolosinasChocolates.clickDesayunoMeriendaGolosinasChocolates()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-939) Verificar que funciona el Menu Desayuno y Merienda: Granola', async ({menuHamburDesayunoMeriendaGranola}) => {

    await test.step('Click en Granola', async () => {
        await menuHamburDesayunoMeriendaGranola.clickDesayunoMeriendaGranola()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-925) Verificar que funciona el Menu Desayuno y Merienda: Infusiones', async ({menuHamburDesayunoMeriendaInfusiones}) => {

    await test.step('Click en Infusiones', async () => {
        await menuHamburDesayunoMeriendaInfusiones.clickDesayunoMeriendaInfusiones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-918) Verificar que funciona el Menu Desayuno y Merienda: Magdalenas', async ({menuHamburDesayunoMeriendaMagdalenas}) => {

    await test.step('Click en Magdalenas', async () => {
        await menuHamburDesayunoMeriendaMagdalenas.clickDesayunoMeriendaMagdalenas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-928) Verificar que funciona el Menu Desayuno y Merienda: Mate Cocido', async ({menuHamburDesayunoMeriendaMateCocido}) => {

    await test.step('Click en Mate Cocido', async () => {
        await menuHamburDesayunoMeriendaMateCocido.clickDesayunoMeriendaMateCocido()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-934) Verificar que funciona el Menu Desayuno y Merienda: Mermeladas Dulces y Jaleas', async ({menuHamburDesayunoMeriendaMermeladasDulcesJaleas}) => {

    await test.step('Click en Mermeladas Dulces y Jaleas', async () => {
        await menuHamburDesayunoMeriendaMermeladasDulcesJaleas.clickDesayunoMeriendaMermeladasDulcesJaleas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-932) Verificar que funciona el Menu Desayuno y Merienda: Mermeladas y Otros Dulces', async ({menuHamburDesayunoMeriendaMermeladasOtrosDulces}) => {

    await test.step('Click en Mermeladas y Otros Dulces', async () => {
        await menuHamburDesayunoMeriendaMermeladasOtrosDulces.clickDesayunoMeriendaMermeladasOtrosDulces()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-933) Verificar que funciona el Menu Desayuno y Merienda: Miel', async ({menuHamburDesayunoMeriendaMiel}) => {

    await test.step('Click en Miel', async () => {
        await menuHamburDesayunoMeriendaMiel.clickDesayunoMeriendaMiel()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-935) Verificar que funciona el Menu Desayuno y Merienda: Pasta de Mani y Crema de Avellanas', async ({menuHamburDesayunoMeriendaPastaManiCremaAvellanas}) => {

    await test.step('Click en Pasta de Mani y Crema de Avellanas', async () => {
        await menuHamburDesayunoMeriendaPastaManiCremaAvellanas.clickDesayunoMeriendaPastaManiCremaAvellanas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-926) Verificar que funciona el Menu Desayuno y Merienda: Te', async ({menuHamburDesayunoMeriendaTe}) => {

    await test.step('Click en Te', async () => {
        await menuHamburDesayunoMeriendaTe.clickDesayunoMeriendaTe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-915) Verificar que funciona el Menu Desayuno y Merienda: Tostadas Grisines y Marineras', async ({menuHamburDesayunoMeriendaTostadasGrisinesMarineras}) => {

    await test.step('Click en Tostadas Grisines y Marineras', async () => {
        await menuHamburDesayunoMeriendaTostadasGrisinesMarineras.clickDesayunoMeriendaTostadasGrisinesMarineras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-919) Verificar que funciona el Menu Desayuno y Merienda: Yerba', async ({menuHamburDesayunoMeriendaYerba}) => {

    await test.step('Click en Yerba', async () => {
        await menuHamburDesayunoMeriendaYerba.clickDesayunoMeriendaYerba()
    })
})
