import test from '../../../config/testManager'

test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburBebidas}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Bebidas`, async () => {
        await menuHamburBebidas.navigateToMenuHamburBebidas()
    })
})

test('@Smoke @Regression (B2C-TC-1082) Verificar que funciona el Menu Bebidas: VER TODO', async ({menuHamburBebidasVerTodo}) => {

    await test.step('Click en Bebidas VER TODO', async () => {
        await menuHamburBebidasVerTodo.clickBebidasVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-968) Verificar que funciona el Menu Bebidas: Aguas', async ({menuHamburBebidasAguas}) => {

    await test.step('Click en Aguas', async () => {
        await menuHamburBebidasAguas.clickBebidasAguas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-969) Verificar que funciona el Menu Bebidas: Aguas Minerales y de Mesa', async ({menuHamburBebidasAguasMineralesMesa}) => {

    await test.step('Click en Aguas Minerales y de Mesa', async () => {
        await menuHamburBebidasAguasMineralesMesa.clickBebidasAguasMineralesMesa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-970) Verificar que funciona el Menu Bebidas: Aguas Saborizadas', async ({menuHamburBebidasAguasSaborizadas}) => {

    await test.step('Click en Aguas Saborizadas', async () => {
        await menuHamburBebidasAguasSaborizadas.clickBebidasAguasSaborizadas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-953) Verificar que funciona el Menu Bebidas: Aperitivos Con Alcohol', async ({menuHamburBebidasAperitivosConAlcohol}) => {

    await test.step('Click en Aperitivos Con Alcohol', async () => {
        await menuHamburBebidasAperitivosConAlcohol.clickBebidasAperitivosConAlcohol()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-954) Verificar que funciona el Menu Bebidas: Aperitivos Sin Alcohol', async ({menuHamburBebidasAperitivosSinAlcohol}) => {

    await test.step('Click en Aperitivos Sin Alcohol', async () => {
        await menuHamburBebidasAperitivosSinAlcohol.clickBebidasAperitivosSinAlcohol()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-955) Verificar que funciona el Menu Bebidas: Bebidas Blancas', async ({menuHamburBebidasBebidasBlancas}) => {

    await test.step('Click en Bebidas Blancas', async () => {
        await menuHamburBebidasBebidasBlancas.clickBebidasBebidasBlancas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-976) Verificar que funciona el Menu Bebidas: Bebidas Energizantes', async ({menuHamburBebidasBebidasEnergizantes}) => {

    await test.step('Click en Bebidas Energizantes', async () => {
        await menuHamburBebidasBebidasEnergizantes.clickBebidasBebidasEnergizantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-975) Verificar que funciona el Menu Bebidas: Bebidas Isotonicas', async ({menuHamburBebidasBebidasIsotonicas}) => {

    await test.step('Click en Bebidas Isotonicas', async () => {
        await menuHamburBebidasBebidasIsotonicas.clickBebidasBebidasIsotonicas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-329) Verificar que funciona el Menu Bebidas: Cervezas', async ({menuHamburguesaBebidasCervezas}) => {

    await test.step('Click en Cervezas', async () => {
        await menuHamburguesaBebidasCervezas.clickBebidasCervezas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-978) Verificar que funciona el Menu Bebidas: Espumantes', async ({menuHamburBebidasEspumantes}) => {

    await test.step('Click en Espumantes', async () => {
        await menuHamburBebidasEspumantes.clickBebidasEspumantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-977) Verificar que funciona el Menu Bebidas: Espumantes y Sidras', async ({menuHamburBebidasEspumantesSidras}) => {

    await test.step('Click en Espumantes y Sidras', async () => {
        await menuHamburBebidasEspumantesSidras.clickBebidasEspumantesSidras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-952) Verificar que funciona el Menu Bebidas: Fernet', async ({menuHamburBebidasFernet}) => {

    await test.step('Click en Fernet', async () => {
        await menuHamburBebidasFernet.clickBebidasFernet()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-951) Verificar que funciona el Menu Bebidas: Fernet y Aperitivos', async ({menuHamburBebidasFernetAperitivos}) => {

    await test.step('Click en Fernet y Aperitivos', async () => {
        await menuHamburBebidasFernetAperitivos.clickBebidasFernetAperitivos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-980) Verificar que funciona el Menu Bebidas: Frizzantes', async ({menuHamburBebidasFrizzantes}) => {

    await test.step('Click en Frizzantes', async () => {
        await menuHamburBebidasFrizzantes.clickBebidasFrizzantes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-962) Verificar que funciona el Menu Bebidas: Gaseosas', async ({menuHamburBebidasGaseosas}) => {

    await test.step('Click en Gaseosas', async () => {
        await menuHamburBebidasGaseosas.clickBebidasGaseosas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-963) Verificar que funciona el Menu Bebidas: Gaseosas Cola', async ({menuHamburBebidasGaseosasCola}) => {

    await test.step('Click en Gaseosas Cola', async () => {
        await menuHamburBebidasGaseosasCola.clickBebidasGaseosasCola()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-965) Verificar que funciona el Menu Bebidas: Gaseosas Limon', async ({menuHamburBebidasGaseosasLimon}) => {

    await test.step('Click en Gaseosas Limon', async () => {
        await menuHamburBebidasGaseosasLimon.clickBebidasGaseosasLimon()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-964) Verificar que funciona el Menu Bebidas: Gaseosas Naranja', async ({menuHamburBebidasGaseosasNaranja}) => {

    await test.step('Click en Gaseosas Naranja', async () => {
        await menuHamburBebidasGaseosasNaranja.clickBebidasGaseosasNaranja()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-966) Verificar que funciona el Menu Bebidas: Gaseosas Pomelo', async ({menuHamburBebidasGaseosasPomelo}) => {

    await test.step('Click en Gaseosas Pomelo', async () => {
        await menuHamburBebidasGaseosasPomelo.clickBebidasGaseosasPomelo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-967) Verificar que funciona el Menu Bebidas: Gaseosas Tonicas y Otras', async ({menuHamburBebidasGaseosasTonicasOtras}) => {

    await test.step('Click en Gaseosas Tonicas y Otras', async () => {
        await menuHamburBebidasGaseosasTonicasOtras.clickBebidasGaseosasTonicasOtras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-959) Verificar que funciona el Menu Bebidas: Gin', async ({menuHamburBebidasGin}) => {

    await test.step('Click en Gin', async () => {
        await menuHamburBebidasGin.clickBebidasGin()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-971) Verificar que funciona el Menu Bebidas: Jugos', async ({menuHamburBebidasJugos}) => {

    await test.step('Click en Jugos', async () => {
        await menuHamburBebidasJugos.clickBebidasJugos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-974) Verificar que funciona el Menu Bebidas: Jugos Concentrados', async ({menuHamburBebidasJugosConcentrados}) => {

    await test.step('Click en Jugos Concentrados', async () => {
        await menuHamburBebidasJugosConcentrados.clickBebidasJugosConcentrados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-973) Verificar que funciona el Menu Bebidas: Jugos Listos', async ({menuHamburBebidasJugosListos}) => {

    await test.step('Click en Jugos Listos', async () => {
        await menuHamburBebidasJugosListos.clickBebidasJugosListos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-972) Verificar que funciona el Menu Bebidas: Jugos en Polvo', async ({menuHamburBebidasJugosPolvo}) => {

    await test.step('Click en Jugos en Polvo', async () => {
        await menuHamburBebidasJugosPolvo.clickBebidasJugosPolvo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-960) Verificar que funciona el Menu Bebidas: Licores', async ({menuHamburBebidasLicores}) => {

    await test.step('Click en Licores', async () => {
        await menuHamburBebidasLicores.clickBebidasLicores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-961) Verificar que funciona el Menu Bebidas: Otras Espirituosas', async ({menuHamburBebidasOtrasEspirituosas}) => {

    await test.step('Click en Otras Espirituosas', async () => {
        await menuHamburBebidasOtrasEspirituosas.clickBebidasOtrasEspirituosas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-958) Verificar que funciona el Menu Bebidas: Ron', async ({menuHamburBebidasRon}) => {

    await test.step('Click en Ron', async () => {
        await menuHamburBebidasRon.clickBebidasRon()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-979) Verificar que funciona el Menu Bebidas: Sidras', async ({menuHamburBebidasSidras}) => {

    await test.step('Click en Sidras', async () => {
        await menuHamburBebidasSidras.clickBebidasSidras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-946) Verificar que funciona el Menu Bebidas: Vinos', async ({menuHamburBebidasVinos}) => {

    await test.step('Click en Vinos', async () => {
        await menuHamburBebidasVinos.clickBebidasVinos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-948) Verificar que funciona el Menu Bebidas: Vinos Blancos', async ({menuHamburBebidasVinosBlancos}) => {

    await test.step('Click en Vinos Blancos', async () => {
        await menuHamburBebidasVinosBlancos.clickBebidasVinosBlancos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-950) Verificar que funciona el Menu Bebidas: Vinos Generosos', async ({menuHamburBebidasVinosGenerosos}) => {

    await test.step('Click en Vinos Generosos', async () => {
        await menuHamburBebidasVinosGenerosos.clickBebidasVinosGenerosos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-949) Verificar que funciona el Menu Bebidas: Vinos Rosados', async ({menuHamburBebidasVinosRosados}) => {

    await test.step('Click en Vinos Rosados', async () => {
        await menuHamburBebidasVinosRosados.clickBebidasVinosRosados()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-947) Verificar que funciona el Menu Bebidas: Vinos Tintos', async ({menuHamburBebidasVinosTintos}) => {

    await test.step('Click en Vinos Tintos', async () => {
        await menuHamburBebidasVinosTintos.clickBebidasVinosTintos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-957) Verificar que funciona el Menu Bebidas: Vodka', async ({menuHamburBebidasVodka}) => {

    await test.step('Click en Vodka', async () => {
        await menuHamburBebidasVodka.clickBebidasVodka()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-956) Verificar que funciona el Menu Bebidas: Whisky', async ({menuHamburBebidasWhisky}) => {

    await test.step('Click en Whisky', async () => {
        await menuHamburBebidasWhisky.clickBebidasWhisky()
    })
})
