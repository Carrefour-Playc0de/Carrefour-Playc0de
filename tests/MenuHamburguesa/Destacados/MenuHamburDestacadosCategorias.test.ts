import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburDestacados}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Destacados`, async () => {
        await menuHamburDestacados.navigateToMenuHamburDestacados()
    })
})

test('@Smoke @Regression (B2C-TC-840) Verificar que funciona el Menu Destacados: Almacen', async ({menuHamburDestacadosAlmacen}) => {

    await test.step('Click en Almacen', async () => {
        await menuHamburDestacadosAlmacen.clickDestacadosAlmacen()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-835) Verificar que funciona el Menu Destacados: Bajo en Sodio y Sin Sal', async ({menuHamburDestacadosBajoSodioSinSal}) => {

    await test.step('Click en Bajo en Sodio y Sin Sal', async () => {
        await menuHamburDestacadosBajoSodioSinSal.clickDestacadosBajoSodioSinSal()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-857) Verificar que funciona el Menu Destacados: Bangho', async ({menuHamburDestacadosBangho}) => {

    await test.step('Click en Bangho', async () => {
        await menuHamburDestacadosBangho.clickDestacadosBangho()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-839) Verificar que funciona el Menu Destacados: Bebidas', async ({menuHamburDestacadosBebidas}) => {

    await test.step('Click en Bebidas', async () => {
        await menuHamburDestacadosBebidas.clickDestacadosBebidas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-858) Verificar que funciona el Menu Destacados: BGH', async ({menuHamburDestacadosBGH}) => {

    await test.step('Click en BGH', async () => {
        await menuHamburDestacadosBGH.clickDestacadosBGH()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-860) Verificar que funciona el Menu Destacados: Ceven', async ({menuHamburDestacadosCeven}) => {

    await test.step('Click en Ceven', async () => {
        await menuHamburDestacadosCeven.clickDestacadosCeven()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-845) Verificar que funciona el Menu Destacados: Congelados', async ({menuHamburDestacadosCongelados}) => {

    await test.step('Click en Congelados', async () => {
        await menuHamburDestacadosCongelados.clickDestacadosCongelados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-862) Verificar que funciona el Menu Destacados: Decohogar', async ({menuHamburDestacadosDecohogar}) => {

    await test.step('Click en Decohogar', async () => {
        await menuHamburDestacadosDecohogar.clickDestacadosDecohogar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-841) Verificar que funciona el Menu Destacados: Desayuno y Merienda', async ({menuHamburDestacadosDesayunoMerienda}) => {

    await test.step('Click en Desayuno y Merienda', async () => {
        await menuHamburDestacadosDesayunoMerienda.clickDestacadosDesayunoMerienda()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-324) Verificar que funciona el Menu Destacados: La Dietetica', async ({menuHamburDestacadosDietetica}) => {

    await test.step('Click en La Dietetica', async () => {
        await menuHamburDestacadosDietetica.clickDestacadosDietetica()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-853) Verificar que funciona el Menu Destacados: Electro', async ({menuHamburDestacadosElectro}) => {

    await test.step('Click en Electro', async () => {
        await menuHamburDestacadosElectro.clickDestacadosElectro()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-856) Verificar que funciona el Menu Destacados: Electrolux', async ({menuHamburDestacadosElectrolux}) => {

    await test.step('Click en Electrolux', async () => {
        await menuHamburDestacadosElectrolux.clickDestacadosElectrolux()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-864) Verificar que funciona el Menu Destacados: Especial Gamer', async ({menuHamburDestacadosEspecialGamer}) => {

    await test.step('Click en Especial Gamer', async () => {
        await menuHamburDestacadosEspecialGamer.clickDestacadosEspecialGamer()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-842) Verificar que funciona el Menu Destacados: Golosinas y Snacks', async ({menuHamburDestacadosGolosinasSnacks}) => {

    await test.step('Click en Golosinas y Snacks', async () => {
        await menuHamburDestacadosGolosinasSnacks.clickDestacadosGolosinasSnacks()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-851) Verificar que funciona el Menu Destacados: Hogar y Bazar', async ({menuHamburDestacadosHogarBazar}) => {

    await test.step('Click en Hogar y Bazar', async () => {
        await menuHamburDestacadosHogarBazar.clickDestacadosHogarBazar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-837) Verificar que funciona el Menu Destacados: Huella Natural', async ({menuHamburDestacadosHuellaNatural}) => {

    await test.step('Click en Huella Natural', async () => {
        await menuHamburDestacadosHuellaNatural.clickDestacadosHuellaNatural()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-843) Verificar que funciona el Menu Destacados: Lacteos y Productos Frescos', async ({menuHamburDestacadosLacteosProductosFrescos}) => {

    await test.step('Click en Lacteos y Productos Frescos', async () => {
        await menuHamburDestacadosLacteosProductosFrescos.clickDestacadosLacteosProductosFrescos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-848) Verificar que funciona el Menu Destacados: Limpieza', async ({menuHamburDestacadosLimpieza}) => {

    await test.step('Click en Limpieza', async () => {
        await menuHamburDestacadosLimpieza.clickDestacadosLimpieza()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-850) Verificar que funciona el Menu Destacados: Mascotas', async ({menuHamburDestacadosMascotas}) => {

    await test.step('Click en Mascotas', async () => {
        await menuHamburDestacadosMascotas.clickDestacadosMascotas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-849) Verificar que funciona el Menu Destacados: Mundo Bebe', async ({menuHamburDestacadosMundoBebe}) => {

    await test.step('Click en Mundo Bebe', async () => {
        await menuHamburDestacadosMundoBebe.clickDestacadosMundoBebe()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-863) Verificar que funciona el Menu Destacados: Nuevos Productos', async ({menuHamburDestacadosNuevosProductos}) => {

    await test.step('Click en Nuevos Productos', async () => {
        await menuHamburDestacadosNuevosProductos.clickDestacadosNuevosProductos()
    })
})
test('@Regression @MenuHamburguesaa (B2C-TC-832) Verificar que funciona el Menu Destacados: Organico', async ({menuHamburDestacadosOrganico}) => {

    await test.step('Click en Nuevos Organico', async () => {
        await menuHamburDestacadosOrganico.clickDestacadosOrganico()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-846) Verificar que funciona el Menu Destacados: Panaderia', async ({menuHamburDestacadosPanaderia}) => {

    await test.step('Click en Panaderia', async () => {
        await menuHamburDestacadosPanaderia.clickDestacadosPanaderia()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-847) Verificar que funciona el Menu Destacados: Perfumeria', async ({menuHamburDestacadosPerfumeria}) => {

    await test.step('Click en Perfumeria', async () => {
        await menuHamburDestacadosPerfumeria.clickDestacadosPerfumeria()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-838) Verificar que funciona el Menu Destacados: Productos Carrefour', async ({menuHamburDestacadosProductosCarrefour}) => {

    await test.step('Click en Productos Carrefour', async () => {
        await menuHamburDestacadosProductosCarrefour.clickDestacadosProductosCarrefour()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-854) Verificar que funciona el Menu Destacados: Productos Exclusivos Online', async ({menuHamburDestacadosProductosExclusivosOnline}) => {

    await test.step('Click en Productos Exclusivos Online', async () => {
        await menuHamburDestacadosProductosExclusivosOnline.clickDestacadosProductosExclusivosOnline()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-859) Verificar que funciona el Menu Destacados: Punto Deportivo', async ({menuHamburDestacadosPuntoDeportivo}) => {

    await test.step('Click en Punto Deportivo', async () => {
        await menuHamburDestacadosPuntoDeportivo.clickDestacadosPuntoDeportivo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-844) Verificar que funciona el Menu Destacados: Quesos y Fiambres', async ({menuHamburDestacadosQuesosFiambres}) => {

    await test.step('Click en Quesos y Fiambres', async () => {
        await menuHamburDestacadosQuesosFiambres.clickDestacadosQuesosFiambres()
    })
})
test('@Regression @MenuHamburguesaa (B2C-TC-833) Verificar que funciona el Menu Destacados: Reducido y Sin Azucar', async ({menuHamburDestacadosReducidoSinAzucar}) => {

    await test.step('Click en Reducido y Sin Azucar', async () => {
        await menuHamburDestacadosReducidoSinAzucar.clickDestacadosReducidoSinAzucar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-834) Verificar que funciona el Menu Destacados: Reducido y Sin Lactosa', async ({menuHamburDestacadosReducidoSinLactosa}) => {

    await test.step('Click en Reducido y Sin Lactosa', async () => {
        await menuHamburDestacadosReducidoSinLactosa.clickDestacadosReducidoSinLactosa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-852) Verificar que funciona el Menu Destacados: Sin Gluten', async ({menuHamburDestacadosSinGluten}) => {

    await test.step('Click en Sin Gluten', async () => {
        await menuHamburDestacadosSinGluten.clickDestacadosSinGluten()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-831) Verificar que funciona el Menu Destacados: Sin TACC', async ({menuHamburDestacadosSinTACC}) => {

    await test.step('Click en Sin TACC', async () => {
        await menuHamburDestacadosSinTACC.clickDestacadosSinTACC()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-836) Verificar que funciona el Menu Destacados: Vegano y Vegetariano', async ({menuHamburDestacadosVeganoVegetariano}) => {

    await test.step('Click en Vegano y Vegetariano', async () => {
        await menuHamburDestacadosVeganoVegetariano.clickDestacadosVeganoVegetariano()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-861) Verificar que funciona el Menu Destacados: Versus Gaming', async ({menuHamburDestacadosVersusGaming}) => {

    await test.step('Click en Versus Gaming', async () => {
        await menuHamburDestacadosVersusGaming.clickDestacadosVersusGaming()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-855) Verificar que funciona el Menu Destacados: Whirlpool', async ({menuHamburDestacadosWhirlpool}) => {

    await test.step('Click en Whirlpool', async () => {
        await menuHamburDestacadosWhirlpool.clickDestacadosWhirlpool()
    })
})
