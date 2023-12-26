import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburElectroTecnologia}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Electro y Tecnologia`, async () => {
        await menuHamburElectroTecnologia.navigateToMenuHamburElectroTecnologia()
    })
})

test('@Smoke @Regression @MenuHamburguesa (B2C-TC-1093) Verificar que funciona el Menu Electro y Tecnologia: VER TODO', async ({menuHamburElectroTecnologiaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburElectroTecnologiaVerTodo.clickElectroTecnologiaVerTodo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-772) Verificar que funciona el Menu Electro y Tecnologia: Accesorios de Celulares', async ({menuHamburElectroTecnologiaAccesoriosCelulares}) => {

    await test.step('Click en Accesorios de Celulares', async () => {
        await menuHamburElectroTecnologiaAccesoriosCelulares.clickElectroTecnologiaAccesoriosCelulares()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-812) Verificar que funciona el Menu Electro y Tecnologia: Afeitadoras, Cortabarba y Cortapelo', async ({menuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo}) => {

    await test.step('Click en Afeitadoras, Cortabarba y Cortapelo', async () => {
        await menuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo.clickElectroTecnologiaAfeitadorasCortabarbaCortapelo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-774) Verificar que funciona el Menu Electro y Tecnologia: Aires Acondicionados', async ({menuHamburElectroTecnologiaAiresAcondicionados}) => {

    await test.step('Click en Aires Acondicionados', async () => {
        await menuHamburElectroTecnologiaAiresAcondicionados.clickElectroTecnologiaAiresAcondicionados()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-793) Verificar que funciona el Menu Electro y Tecnologia: Anafes', async ({menuHamburElectroTecnologiaAnafes}) => {

    await test.step('Click en Anafes', async () => {
        await menuHamburElectroTecnologiaAnafes.clickElectroTecnologiaAnafes()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-806) Verificar que funciona el Menu Electro y Tecnologia: Aspiradoras', async ({menuHamburElectroTecnologiaAspiradoras}) => {

    await test.step('Click en Aspiradoras', async () => {
        await menuHamburElectroTecnologiaAspiradoras.clickElectroTecnologiaAspiradoras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-825) Verificar que funciona el Menu Electro y Tecnologia: Audio', async ({menuHamburElectroTecnologiaAudio}) => {

    await test.step('Click en Audio', async () => {
        await menuHamburElectroTecnologiaAudio.clickElectroTecnologiaAudio()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-829) Verificar que funciona el Menu Electro y Tecnologia: Audio para Autos', async ({menuHamburElectroTecnologiaAudioAutos}) => {

    await test.step('Click en Audio para Autos', async () => {
        await menuHamburElectroTecnologiaAudioAutos.clickElectroTecnologiaAudioAutos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-828) Verificar que funciona el Menu Electro y Tecnologia: Auriculares', async ({menuHamburElectroTecnologiaAuriculares}) => {

    await test.step('Click en Auriculares', async () => {
        await menuHamburElectroTecnologiaAuriculares.clickElectroTecnologiaAuriculares()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-822) Verificar que funciona el Menu Electro y Tecnologia: Accesorios de Informatica', async ({menuHamburElectroTecnologiaAccesoriosInformatica}) => {

    await test.step('Click en Accesorios de Informatica', async () => {
        await menuHamburElectroTecnologiaAccesoriosInformatica.clickElectroTecnologiaAccesoriosInformatica()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-803) Verificar que funciona el Menu Electro y Tecnologia: Batidoras', async ({menuHamburElectroTecnologiaBatidoras}) => {

    await test.step('Click en Batidoras', async () => {
        await menuHamburElectroTecnologiaBatidoras.clickElectroTecnologiaBatidoras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-814) Verificar que funciona el Menu Electro y Tecnologia: Bienestar Sexual', async ({menuHamburElectroTecnologiaBienestarSexual}) => {

    await test.step('Click en Bienestar Sexual', async () => {
        await menuHamburElectroTecnologiaBienestarSexual.clickElectroTecnologiaBienestarSexual()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-798) Verificar que funciona el Menu Electro y Tecnologia: Cafeteras', async ({menuHamburElectroTecnologiaCafeteras}) => {

    await test.step('Click en Cafeteras', async () => {
        await menuHamburElectroTecnologiaCafeteras.clickElectroTecnologiaCafeteras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-776) Verificar que funciona el Menu Electro y Tecnologia: Calefaccion Electrica', async ({menuHamburElectroTecnologiaCalefaccionElectrica}) => {

    await test.step('Click en Calefaccion Electrica', async () => {
        await menuHamburElectroTecnologiaCalefaccionElectrica.clickElectroTecnologiaCalefaccionElectrica()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-777) Verificar que funciona el Menu Electro y Tecnologia: Calefaccion a Gas', async ({menuHamburElectroTecnologiaCalefaccionGas}) => {

    await test.step('Click en Calefaccion a Gas', async () => {
        await menuHamburElectroTecnologiaCalefaccionGas.clickElectroTecnologiaCalefaccionGas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-778) Verificar que funciona el Menu Electro y Tecnologia: Calefaccion a Lenia', async ({menuHamburElectroTecnologiaCalefaccionLenia}) => {

    await test.step('Click en Calefaccion a Lenia', async () => {
        await menuHamburElectroTecnologiaCalefaccionLenia.clickElectroTecnologiaCalefaccionLenia()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-788) Verificar que funciona el Menu Electro y Tecnologia: Calefones', async ({menuHamburElectroTecnologiaCalefones}) => {

    await test.step('Click en Calefones', async () => {
        await menuHamburElectroTecnologiaCalefones.clickElectroTecnologiaCalefones()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-824) Verificar que funciona el Menu Electro y Tecnologia: Camaras de Seguridad', async ({menuHamburElectroTecnologiaCamarasSeguridad}) => {

    await test.step('Click en Camaras de Seguridad', async () => {
        await menuHamburElectroTecnologiaCamarasSeguridad.clickElectroTecnologiaCamarasSeguridad()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-796) Verificar que funciona el Menu Electro y Tecnologia: Campanas y Purificadores', async ({menuHamburElectroTecnologiaCampanasPurificadores}) => {

    await test.step('Click en Campanas y Purificadores', async () => {
        await menuHamburElectroTecnologiaCampanasPurificadores.clickElectroTecnologiaCampanasPurificadores()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-782) Verificar que funciona el Menu Electro y Tecnologia: Cavas', async ({menuHamburElectroTecnologiaCavas}) => {

    await test.step('Click en Cavas', async () => {
        await menuHamburElectroTecnologiaCavas.clickElectroTecnologiaCavas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-769) Verificar que funciona el Menu Electro y Tecnologia: Celulares', async ({menuHamburElectroTecnologiaCelulares}) => {

    await test.step('Click en Celulares', async () => {
        await menuHamburElectroTecnologiaCelulares.clickElectroTecnologiaCelulares()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-770) Verificar que funciona el Menu Electro y Tecnologia: Celulares Libres', async ({menuHamburElectroTecnologiaCelularesLibres}) => {

    await test.step('Click en Celulares Libres', async () => {
        await menuHamburElectroTecnologiaCelularesLibres.clickElectroTecnologiaCelularesLibres()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-773) Verificar que funciona el Menu Electro y Tecnologia: Climatizacion', async ({menuHamburElectroTecnologiaClimatizacion}) => {

    await test.step('Click en Climatizacion', async () => {
        await menuHamburElectroTecnologiaClimatizacion.clickElectroTecnologiaClimatizacion()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-804) Verificar que funciona el Menu Electro y Tecnologia: Coccion', async ({menuHamburElectroTecnologiaCoccion}) => {

    await test.step('Click en Coccion', async () => {
        await menuHamburElectroTecnologiaCoccion.clickElectroTecnologiaCoccion()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-792) Verificar que funciona el Menu Electro y Tecnologia: Cocinas', async ({menuHamburElectroTecnologiaCocinas}) => {

    await test.step('Click en Cocinas', async () => {
        await menuHamburElectroTecnologiaCocinas.clickElectroTecnologiaCocinas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-791) Verificar que funciona el Menu Electro y Tecnologia: Cocinas y Hornos', async ({menuHamburElectroTecnologiaCocinasHornos}) => {

    await test.step('Click en Cocinas y Hornos', async () => {
        await menuHamburElectroTecnologiaCocinasHornos.clickElectroTecnologiaCocinasHornos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-817) Verificar que funciona el Menu Electro y Tecnologia: Consolas y Joysticks', async ({menuHamburElectroTecnologiaConsolasJoysticks}) => {

    await test.step('Click en Consolas y Joysticks', async () => {
        await menuHamburElectroTecnologiaConsolasJoysticks.clickElectroTecnologiaConsolasJoysticks()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-808) Verificar que funciona el Menu Electro y Tecnologia: Cuidado Personal y Salud', async ({menuHamburElectroTecnologiaCuidadoPersonalSalud}) => {

    await test.step('Click en Cuidado Personal y Salud', async () => {
        await menuHamburElectroTecnologiaCuidadoPersonalSalud.clickElectroTecnologiaCuidadoPersonalSalud()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-811) Verificar que funciona el Menu Electro y Tecnologia: Depiladoras', async ({menuHamburElectroTecnologiaDepiladoras}) => {

    await test.step('Click en Depiladoras', async () => {
        await menuHamburElectroTecnologiaDepiladoras.clickElectroTecnologiaDepiladoras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-827) Verificar que funciona el Menu Electro y Tecnologia: Equipos de Sonido', async ({menuHamburElectroTecnologiaEquiposSonido}) => {

    await test.step('Click en Equipos de Sonido', async () => {
        await menuHamburElectroTecnologiaEquiposSonido.clickElectroTecnologiaEquiposSonido()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-781) Verificar que funciona el Menu Electro y Tecnologia: Freezers', async ({menuHamburElectroTecnologiaFreezers}) => {

    await test.step('Click en Freezers', async () => {
        await menuHamburElectroTecnologiaFreezers.clickElectroTecnologiaFreezers()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-823) Verificar que funciona el Menu Electro y Tecnologia: Gaming', async ({menuHamburElectroTecnologiaGaming}) => {

    await test.step('Click en Gaming', async () => {
        await menuHamburElectroTecnologiaGaming.clickElectroTecnologiaGaming()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-780) Verificar que funciona el Menu Electro y Tecnologia: Heladeras', async ({menuHamburElectroTecnologiaHeladeras}) => {

    await test.step('Click en Heladeras', async () => {
        await menuHamburElectroTecnologiaHeladeras.clickElectroTecnologiaHeladeras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-779) Verificar que funciona el Menu Electro y Tecnologia: Heladeras y Freezers', async ({menuHamburElectroTecnologiaHeladerasFreezers}) => {

    await test.step('Click en Heladeras y Freezers', async () => {
        await menuHamburElectroTecnologiaHeladerasFreezers.clickElectroTecnologiaHeladerasFreezers()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-794) Verificar que funciona el Menu Electro y Tecnologia: Hornos', async ({menuHamburElectroTecnologiaHornos}) => {

    await test.step('Click en Hornos', async () => {
        await menuHamburElectroTecnologiaHornos.clickElectroTecnologiaHornos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-818) Verificar que funciona el Menu Electro y Tecnologia: Impresoras y Cartuchos', async ({menuHamburElectroTecnologiaImpresorasCartuchos}) => {

    await test.step('Click en Impresoras y Cartuchos', async () => {
        await menuHamburElectroTecnologiaImpresorasCartuchos.clickElectroTecnologiaImpresorasCartuchos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-815) Verificar que funciona el Menu Electro y Tecnologia: Informatica y Gaming', async ({menuHamburElectroTecnologiaInformaticaGaming}) => {

    await test.step('Click en Informatica y Gaming', async () => {
        await menuHamburElectroTecnologiaInformaticaGaming.clickElectroTecnologiaInformaticaGaming()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-799) Verificar que funciona el Menu Electro y Tecnologia: Jarras Electricas', async ({menuHamburElectroTecnologiaJarrasElectricas}) => {

    await test.step('Click en Jarras Electricas', async () => {
        await menuHamburElectroTecnologiaJarrasElectricas.clickElectroTecnologiaJarrasElectricas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-800) Verificar que funciona el Menu Electro y Tecnologia: Jugueras y Exprimidores', async ({menuHamburElectroTecnologiaJuguerasExprimidores}) => {

    await test.step('Click en Jugueras y Exprimidores', async () => {
        await menuHamburElectroTecnologiaJuguerasExprimidores.clickElectroTecnologiaJuguerasExprimidores()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-783) Verificar que funciona el Menu Electro y Tecnologia: Lavado', async ({menuHamburElectroTecnologiaLavado}) => {

    await test.step('Click en Lavado', async () => {
        await menuHamburElectroTecnologiaLavado.clickElectroTecnologiaLavado()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-785) Verificar que funciona el Menu Electro y Tecnologia: Lavasecarropas', async ({menuHamburElectroTecnologiaLavasecarropas}) => {

    await test.step('Click en Lavasecarropas', async () => {
        await menuHamburElectroTecnologiaLavasecarropas.clickElectroTecnologiaLavasecarropas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-786) Verificar que funciona el Menu Electro y Tecnologia: Lavavajillas', async ({menuHamburElectroTecnologiaLavavajillas}) => {

    await test.step('Click en Lavavajillas', async () => {
        await menuHamburElectroTecnologiaLavavajillas.clickElectroTecnologiaLavavajillas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-802) Verificar que funciona el Menu Electro y Tecnologia: Licuadoras, Procesadoras y Gasificadoras', async ({menuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras}) => {

    await test.step('Click en Licuadoras, Procesadoras y Gasificadoras', async () => {
        await menuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras.clickElectroTecnologiaLicuadorasProcesadorasGasificadoras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-807) Verificar que funciona el Menu Electro y Tecnologia: Maquinas de Coser', async ({menuHamburElectroTecnologiaMaquinasCoser}) => {

    await test.step('Click en Maquinas de Coser', async () => {
        await menuHamburElectroTecnologiaMaquinasCoser.clickElectroTecnologiaMaquinasCoser()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-795) Verificar que funciona el Menu Electro y Tecnologia: Microondas', async ({menuHamburElectroTecnologiaMicroondas}) => {

    await test.step('Click en Microondas', async () => {
        await menuHamburElectroTecnologiaMicroondas.clickElectroTecnologiaMicroondas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-820) Verificar que funciona el Menu Electro y Tecnologia: Monitores', async ({menuHamburElectroTecnologiaMonitores}) => {

    await test.step('Click en Monitores', async () => {
        await menuHamburElectroTecnologiaMonitores.clickElectroTecnologiaMonitores()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-816) Verificar que funciona el Menu Electro y Tecnologia: Notebooks y PC', async ({menuHamburElectroTecnologiaNotebooksPC}) => {

    await test.step('Click en Notebooks y PC', async () => {
        await menuHamburElectroTecnologiaNotebooksPC.clickElectroTecnologiaNotebooksPC()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-826) Verificar que funciona el Menu Electro y Tecnologia: Parlantes Portatiles', async ({menuHamburElectroTecnologiaParlantesPortatiles}) => {

    await test.step('Click en Parlantes Portatiles', async () => {
        await menuHamburElectroTecnologiaParlantesPortatiles.clickElectroTecnologiaParlantesPortatiles()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-797) Verificar que funciona el Menu Electro y Tecnologia: Pequenios Electrodomesticos', async ({menuHamburElectroTecnologiaPequeniosElectrodomesticos}) => {

    await test.step('Click en Pequenios Electrodomesticos', async () => {
        await menuHamburElectroTecnologiaPequeniosElectrodomesticos.clickElectroTecnologiaPequeniosElectrodomesticos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-805) Verificar que funciona el Menu Electro y Tecnologia: Planchas', async ({menuHamburElectroTecnologiaPlanchas}) => {

    await test.step('Click en Planchas', async () => {
        await menuHamburElectroTecnologiaPlanchas.clickElectroTecnologiaPlanchas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-809) Verificar que funciona el Menu Electro y Tecnologia: Planchitas de Pelo', async ({menuHamburElectroTecnologiaPlanchitasPelo}) => {

    await test.step('Click en Planchitas de Pelo', async () => {
        await menuHamburElectroTecnologiaPlanchitasPelo.clickElectroTecnologiaPlanchitasPelo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-830) Verificar que funciona el Menu Electro y Tecnologia: Radios', async ({menuHamburElectroTecnologiaRadios}) => {

    await test.step('Click en Radios', async () => {
        await menuHamburElectroTecnologiaRadios.clickElectroTecnologiaRadios()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-813) Verificar que funciona el Menu Electro y Tecnologia: Salud y Bienestar', async ({menuHamburElectroTecnologiaSaludBienestar}) => {

    await test.step('Click en Salud y Bienestar', async () => {
        await menuHamburElectroTecnologiaSaludBienestar.clickElectroTecnologiaSaludBienestar()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-810) Verificar que funciona el Menu Electro y Tecnologia: Secadores de Pelo', async ({menuHamburElectroTecnologiaSecadoresPelo}) => {

    await test.step('Click en Secadores de Pelo', async () => {
        await menuHamburElectroTecnologiaSecadoresPelo.clickElectroTecnologiaSecadoresPelo()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-784) Verificar que funciona el Menu Electro y Tecnologia: Secarropas', async ({menuHamburElectroTecnologiaSecarropas}) => {

    await test.step('Click en Secarropas', async () => {
        await menuHamburElectroTecnologiaSecarropas.clickElectroTecnologiaSecarropas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-767) Verificar que funciona el Menu Electro y Tecnologia: Smart TV', async ({menuHamburElectroTecnologiaSmartTV}) => {

    await test.step('Click en Smart TV', async () => {
        await menuHamburElectroTecnologiaSmartTV.clickElectroTecnologiaSmartTV()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-325) Verificar que funciona el Menu Electro y Tecnologia: Smart TVs', async ({menuHamburElectroTecnologiaSmartTVs}) => {

    await test.step('Click en Smart TVs', async () => {
        await menuHamburElectroTecnologiaSmartTVs.clickElectroTecnologiaSmartTVs()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-768) Verificar que funciona el Menu Electro y Tecnologia: Soportes y Accesorios', async ({menuHamburElectroTecnologiaSoportesAccesorios}) => {

    await test.step('Click en Soportes y Accesorios', async () => {
        await menuHamburElectroTecnologiaSoportesAccesorios.clickElectroTecnologiaSoportesAccesorios()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-819) Verificar que funciona el Menu Electro y Tecnologia: Tablets', async ({menuHamburElectroTecnologiaTablets}) => {

    await test.step('Click en Tablets', async () => {
        await menuHamburElectroTecnologiaTablets.clickElectroTecnologiaTablets()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-821) Verificar que funciona el Menu Electro y Tecnologia: Teclados y Mouse', async ({menuHamburElectroTecnologiaTecladosMouse}) => {

    await test.step('Click en Teclados y Mouse', async () => {
        await menuHamburElectroTecnologiaTecladosMouse.clickElectroTecnologiaTecladosMouse()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-771) Verificar que funciona el Menu Electro y Tecnologia: Telefonos Fijos e Inalambricos', async ({menuHamburElectroTecnologiaTelefoFijosInalam}) => {

    await test.step('Click en Telefonos Fijos e Inalambricos', async () => {
        await menuHamburElectroTecnologiaTelefoFijosInalam.clickElectroTecnologiaTelefoFijosInalam()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-787) Verificar que funciona el Menu Electro y Tecnologia: Termotanques Calefones', async ({menuHamburElectroTecnologiaTermotanquesCalefones}) => {

    await test.step('Click en Termotanques Calefones', async () => {
        await menuHamburElectroTecnologiaTermotanquesCalefones.clickElectroTecnologiaTermotanquesCalefones()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-790) Verificar que funciona el Menu Electro y Tecnologia: Termotanques Electricos', async ({menuHamburElectroTecnologiaTermotanquesElectricos}) => {

    await test.step('Click en Termotanques Electricos', async () => {
        await menuHamburElectroTecnologiaTermotanquesElectricos.clickElectroTecnologiaTermotanquesElectricos()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-789) Verificar que funciona el Menu Electro y Tecnologia: Termotanques a Gas', async ({menuHamburElectroTecnologiaTermotanquesGas}) => {

    await test.step('Click en Termotanques a Gas', async () => {
        await menuHamburElectroTecnologiaTermotanquesGas.clickElectroTecnologiaTermotanquesGas()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-801) Verificar que funciona el Menu Electro y Tecnologia: Tostadoras y Sandwicheras', async ({menuHamburElectroTecnologiaTostadorasSandwicheras}) => {

    await test.step('Click en Tostadoras y Sandwicheras', async () => {
        await menuHamburElectroTecnologiaTostadorasSandwicheras.clickElectroTecnologiaTostadorasSandwicheras()
    })
})
test('@Smoke @Regression @MenuHamburguesa (B2C-TC-775) Verificar que funciona el Menu Electro y Tecnologia: Ventiladores y Climatizadores', async ({menuHamburElectroTecnologiaVentiladClimatizad}) => {

    await test.step('Click en Ventiladores y Climatizadores', async () => {
        await menuHamburElectroTecnologiaVentiladClimatizad.clickElectroTecnologiaVentiladClimatizad()
    })
})
