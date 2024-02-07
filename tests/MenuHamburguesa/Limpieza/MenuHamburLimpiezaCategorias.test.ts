import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburLimpieza}) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step('Clickear el Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Limpieza', async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})

test('@Smoke @Regression (B2C-TC-1111) Verificar que funciona el Menu Limpieza: VER TODO', async ({menuHamburLimpiezaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburLimpiezaVerTodo.clickLimpiezaVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpieza de la Ropa', async ({menuHamburLimpiezaLimpiezaDeRopa}) => {

    await test.step('Click en Limpieza de la Ropa', async () => {
        await menuHamburLimpiezaLimpiezaDeRopa.clickLimpiezaLimpiezaDeRopa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Jabones para la Ropa', async ({menuHamburLimpiezaJabonesParaRopa}) => {

    await test.step('Click en Jabones para la Ropa', async () => {
        await menuHamburLimpiezaJabonesParaRopa.clickLimpiezaJabonesParaRopa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Prelavado y Quitamanchas', async ({menuHamburLimpiezaPrelavadoQuitamanchas}) => {

    await test.step('Click en Prelavado y Quitamanchas', async () => {
        await menuHamburLimpiezaPrelavadoQuitamanchas.clickLimpiezaPrelavadoQuitamanchas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Suavizantes para la Ropa', async ({menuHamburLimpiezaSuavizantesRopa}) => {

    await test.step('Click en Suavizantes para la Ropa', async () => {
        await menuHamburLimpiezaSuavizantesRopa.clickLimpiezaSuavizantesRopa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Aprestos', async ({menuHamburLimpiezaAprestos}) => {

    await test.step('Click en Aprestos', async () => {
        await menuHamburLimpiezaAprestos.clickLimpiezaAprestos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Perfumantes para Tela', async ({menuHamburLimpiezaPerfumantesTela}) => {

    await test.step('Click en Perfumantes para Tela', async () => {
        await menuHamburLimpiezaPerfumantesTela.clickLimpiezaPerfumantesTela()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Cuidado del Calzado', async ({menuHamburLimpiezaCuidadoCalzado}) => {

    await test.step('Click en Cuidado del Calzado', async () => {
        await menuHamburLimpiezaCuidadoCalzado.clickLimpiezaCuidadoCalzado()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpieza del Hogar', async ({menuHamburLimpiezaLimpiezaHogar}) => {

    await test.step('Click en Limpieza del Hogar', async () => {
        await menuHamburLimpiezaLimpiezaHogar.clickLimpiezaLimpiezaHogar()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpiadores de Piso', async ({menuHamburLimpiezaLimpiadoresPiso}) => {

    await test.step('Click en Limpiadores de Piso', async () => {
        await menuHamburLimpiezaLimpiadoresPiso.clickLimpiezaLimpiadoresPiso()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Autobrillos y Ceras para Pisos', async ({menuHamburLimpiezaAutobrillosCerasPisos}) => {

    await test.step('Click en Autobrillos y Ceras para Pisos', async () => {
        await menuHamburLimpiezaAutobrillosCerasPisos.clickLimpiezaAutobrillosCerasPisos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpiavidrios', async ({menuHamburLimpiezaLimpiavidrios}) => {

    await test.step('Click en Limpiavidrios', async () => {
        await menuHamburLimpiezaLimpiavidrios.clickLimpiezaLimpiavidrios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Lustramuebles', async ({menuHamburLimpiezaLustramuebles}) => {

    await test.step('Click en Lustramuebles', async () => {
        await menuHamburLimpiezaLustramuebles.clickLimpiezaLustramuebles()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Insecticidas', async ({menuHamburLimpiezaInsecticidas}) => {

    await test.step('Click en Insecticidas', async () => {
        await menuHamburLimpiezaInsecticidas.clickLimpiezaInsecticidas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpieza de Cocina', async ({menuHamburLimpiezaLimpiezaCocina}) => {

    await test.step('Click en Limpieza de Cocina', async () => {
        await menuHamburLimpiezaLimpiezaCocina.clickLimpiezaLimpiezaCocina()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Detergentes', async ({menuHamburLimpiezaDetergentes}) => {

    await test.step('Click en Detergentes', async () => {
        await menuHamburLimpiezaDetergentes.clickLimpiezaDetergentes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpiadores Liquidos', async ({menuHamburLimpiezaLimpiadoresLiquidos}) => {

    await test.step('Click en Limpiadores Liquidos', async () => {
        await menuHamburLimpiezaLimpiadoresLiquidos.clickLimpiezaLimpiadoresLiquidos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpiadores Cremosos', async ({menuHamburLimpiezaLimpiadoresCremosos}) => {

    await test.step('Click en Limpiadores Cremosos', async () => {
        await menuHamburLimpiezaLimpiadoresCremosos.clickLimpiezaLimpiadoresCremosos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Para el Lavavajillas', async ({menuHamburLimpiezaParaLavavajillas}) => {

    await test.step('Click en Para el Lavavajillas', async () => {
        await menuHamburLimpiezaParaLavavajillas.clickLimpiezaParaLavavajillas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Palillos Velas y Fosforos', async ({menuHamburLimpiezaPalillosVelasFosforos}) => {

    await test.step('Click en Palillos Velas y Fosforos', async () => {
        await menuHamburLimpiezaPalillosVelasFosforos.clickLimpiezaPalillosVelasFosforos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Lavandinas', async ({menuHamburLimpiezaLavandinas}) => {

    await test.step('Click en Lavandinas', async () => {
        await menuHamburLimpiezaLavandinas.clickLimpiezaLavandinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Rollos de Cocina y Servilletas', async ({menuHamburLimpiezaRollosCocinaServilletas}) => {

    await test.step('Click en Rollos de Cocina y Servilletas', async () => {
        await menuHamburLimpiezaRollosCocinaServilletas.clickLimpiezaRollosCocinaServilletas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Papeles Higienicos', async ({menuHamburLimpiezaPapelesHigienicos}) => {

    await test.step('Click en Papeles Higienicos', async () => {
        await menuHamburLimpiezaPapelesHigienicos.clickLimpiezaPapelesHigienicos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpieza de Banio', async ({menuHamburLimpiezaLimpiezaBanio}) => {

    await test.step('Click en Limpieza de Banio', async () => {
        await menuHamburLimpiezaLimpiezaBanio.clickLimpiezaLimpiezaBanio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Limpiadores de Banio', async ({menuHamburLimpiezaLimpiadoresBanio}) => {

    await test.step('Click en Limpiadores de Banio', async () => {
        await menuHamburLimpiezaLimpiadoresBanio.clickLimpiezaLimpiadoresBanio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Canastas y Bloques', async ({menuHamburLimpiezaCanastasBloques}) => {

    await test.step('Click en Canastas y Bloques', async () => {
        await menuHamburLimpiezaCanastasBloques.navigateToMenuHamburLimpiezaCanastasBloques()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Desodorantes de Ambiente', async ({menuHamburLimpiezaDesodorantesAmbiente}) => {

    await test.step('Click en Desodorantes de Ambiente', async () => {
        await menuHamburLimpiezaDesodorantesAmbiente.clickLimpiezaDesodorantesAmbiente()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Difusores y Repuestos', async ({menuHamburLimpiezaDifusoresRepuestos}) => {

    await test.step('Click en Difusores y Repuestos', async () => {
        await menuHamburLimpiezaDifusoresRepuestos.clickLimpiezaDifusoresRepuestos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Antihumedad', async ({menuHamburLimpiezaAntihumedad}) => {

    await test.step('Click en Antihumedad', async () => {
        await menuHamburLimpiezaAntihumedad.clickLimpiezaAntihumedad()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Desodorantes y Desinfectantes', async ({menuHamburLimpiezaDesodorantesDesinfectantes}) => {

    await test.step('Click en Desodorantes y Desinfectantes', async () => {
        await menuHamburLimpiezaDesodorantesDesinfectantes.clickLimpiezaDesodorantesDesinfectantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Articulos de Limpieza', async ({menuHamburLimpiezaArticulosLimpieza}) => {

    await test.step('Click en Articulos de Limpieza', async () => {
        await menuHamburLimpiezaArticulosLimpieza.clickLimpiezaArticulosLimpieza()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Baldes y Palanganas', async ({menuHamburLimpiezaBaldesPalanganas}) => {

    await test.step('Click en Baldes y Palanganas', async () => {
        await menuHamburLimpiezaBaldesPalanganas.clickLimpiezaBaldesPalanganas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Cestos de Basuras', async ({menuHamburLimpiezaCestosBasuras}) => {

    await test.step('Click en Cestos de Basuras', async () => {
        await menuHamburLimpiezaCestosBasuras.clickLimpiezaCestosBasuras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Bolsas de Residuos', async ({menuHamburLimpiezaBolsasResiduos}) => {

    await test.step('Click en Bolsas de Residuos', async () => {
        await menuHamburLimpiezaBolsasResiduos.clickLimpiezaBolsasResiduos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Escobas Secadores y Palas', async ({menuHamburLimpiezaEscobasSecadoresPalas}) => {

    await test.step('Click en Escobas Secadores y Palas', async () => {
        await menuHamburLimpiezaEscobasSecadoresPalas.clickLimpiezaEscobasSecadoresPalas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Trapos y Panios', async ({menuHamburLimpiezaTraposPanios}) => {

    await test.step('Click en Trapos y Panios', async () => {
        await menuHamburLimpiezaTraposPanios.clickLimpiezaTraposPanios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Esponjas', async ({menuHamburLimpiezaEsponjas}) => {

    await test.step('Click en Esponjas', async () => {
        await menuHamburLimpiezaEsponjas.clickLimpiezaEsponjas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1163) Verificar que funciona el Menu Limpieza: Guantes', async ({menuHamburLimpiezaGuantes}) => {

    await test.step('Click en Guantes', async () => {
        await menuHamburLimpiezaGuantes.clickLimpiezaGuantes()
    })
})
