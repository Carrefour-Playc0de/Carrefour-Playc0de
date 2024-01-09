import test from '../../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies, menuHamburguesa, menuHamburBazarTextil}) => {
    await test.step(`Navigate to Carrefour page and Accept Cookies`, async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
    await test.step(`Clickear el Menu Hamburguesa`, async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step(`Click en Bazar y Textil`, async () => {
        await menuHamburBazarTextil.navigateToMenuHamburBazarTextil()
    })
})

test('@Smoke @Regression (B2C-TC-1083) Verificar que funciona el Menu Bazar y Textil: VER TODO', async ({menuHamburBazarTextilVerTodo}) => {

    await test.step('Click en Bazar y Textil VER TODO', async () => {
        await menuHamburBazarTextilVerTodo.clickBazarTextilVerTodo()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-693) Verificar que funciona el Menu Bazar y Textil: Accesorios para Auto', async ({menuHamburBazarTextilAccesoriosAuto}) => {

    await test.step('Click en Accesorios para Auto', async () => {
        await menuHamburBazarTextilAccesoriosAuto.clickBazarTextilAccesoriosAuto()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-749) Verificar que funciona el Menu Bazar y Textil: Accesorios de Ferreteria', async ({menuHamburBazarTextilAccesoriosFerreteria}) => {

    await test.step('Click en Accesorios de Ferreteria', async () => {
        await menuHamburBazarTextilAccesoriosFerreteria.clickBazarTextilAccesoriosFerreteria()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-726) Verificar que funciona el Menu Bazar y Textil: Accesorios de Libreria', async ({menuHamburBazarTextilAccesoriosLibreria}) => {

    await test.step('Click en Accesorios de Libreria', async () => {
        await menuHamburBazarTextilAccesoriosLibreria.clickBazarTextilAccesoriosLibreria()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-730) Verificar que funciona el Menu Bazar y Textil: Adhesivos', async ({menuHamburBazarTextilAdhesivos}) => {

    await test.step('Click en Adhesivos', async () => {
        await menuHamburBazarTextilAdhesivos.clickBazarTextilAdhesivos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-691) Verificar que funciona el Menu Bazar y Textil: Adultos', async ({menuHamburBazarTextilAdultos}) => {

    await test.step('Click en Adultos', async () => {
        await menuHamburBazarTextilAdultos.clickBazarTextilAdultos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-759) Verificar que funciona el Menu Bazar y Textil: Aire Libre', async ({menuHamburBazarTextilAireLibre}) => {

    await test.step('Click en Aire Libre', async () => {
        await menuHamburBazarTextilAireLibre.clickBazarTextilAireLibre()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-747) Verificar que funciona el Menu Bazar y Textil: Alargues y Enchufes', async ({menuHamburBazarTextilAlarguesEnchufes}) => {

    await test.step('Click en Alargues y Enchufes', async () => {
        await menuHamburBazarTextilAlarguesEnchufes.clickBazarTextilAlarguesEnchufes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-684) Verificar que funciona el Menu Bazar y Textil: Almohadas y Almohadones', async ({menuHamburBazarTextilAlmohadasAlmohadones}) => {

    await test.step('Click en Almohadas y Almohadones', async () => {
        await menuHamburBazarTextilAlmohadasAlmohadones.clickBazarTextilAlmohadasAlmohadones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-722) Verificar que funciona el Menu Bazar y Textil: Autoayuda', async ({menuHamburBazarTextilAutoayuda}) => {

    await test.step('Click en Autoayuda', async () => {
        await menuHamburBazarTextilAutoayuda.clickBazarTextilAutoayuda()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-697) Verificar que funciona el Menu Bazar y Textil: Automotor', async ({menuHamburBazarTextilAutomotor}) => {

    await test.step('Click en Automotor', async () => {
        await menuHamburBazarTextilAutomotor.clickBazarTextilAutomotor()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-705) Verificar que funciona el Menu Bazar y Textil: Autos y Pistas de Juguete', async ({menuHamburBazarTextilAutosPistasJuguete}) => {

    await test.step('Click en Autos y Pistas de Juguete', async () => {
        await menuHamburBazarTextilAutosPistasJuguete.clickBazarTextilAutosPistasJuguete()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-685) Verificar que funciona el Menu Bazar y Textil: Banio', async ({menuHamburBazarTextilBanio}) => {

    await test.step('Click en Banio', async () => {
        await menuHamburBazarTextilBanio.clickBazarTextilBanio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-689 Verificar que funciona el Menu Bazar y Textil: Bebes', async ({menuHamburBazarTextilBebes}) => {

    await test.step('Click en Bebes', async () => {
        await menuHamburBazarTextilBebes.clickBazarTextilBebes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-762) Verificar que funciona el Menu Bazar y Textil: Bibliotecas y Organizadores', async ({menuHamburBazarTextilBibliotecasOrganizadores}) => {

    await test.step('Click en Bibliotecas y Organizadores', async () => {
        await menuHamburBazarTextilBibliotecasOrganizadores.clickBazarTextilBibliotecasOrganizadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-738) Verificar que funciona el Menu Bazar y Textil: Bicicletas', async ({menuHamburBazarTextilBicicletas}) => {

    await test.step('Click en Bicicletas', async () => {
        await menuHamburBazarTextilBicicletas.clickBazarTextilBicicletas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-728) Verificar que funciona el Menu Bazar y Textil: Blocks de Dibujo y Cartulinas', async ({menuHamburBazarTextilBlocksDibujoCartulinas}) => {

    await test.step('Click en Blocks de Dibujo y Cartulinas', async () => {
        await menuHamburBazarTextilBlocksDibujoCartulinas.clickBazarTextilBlocksDibujoCartulinas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-737) Verificar que funciona el Menu Bazar y Textil: Bolsos y Valijas', async ({menuHamburBazarTextilBolsosValijas}) => {

    await test.step('Click en Bolsos y Valijas', async () => {
        await menuHamburBazarTextilBolsosValijas.clickBazarTextilBolsosValijas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-761) Verificar que funciona el Menu Bazar y Textil: Camas y Mesas de Luz', async ({menuHamburBazarTextilCamasMesasLuz}) => {

    await test.step('Click en Camas y Mesas de Luz', async () => {
        await menuHamburBazarTextilCamasMesasLuz.clickBazarTextilCamasMesasLuz()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-739) Verificar que funciona el Menu Bazar y Textil: Camping', async ({menuHamburBazarTextilCamping}) => {

    await test.step('Click en Camping', async () => {
        await menuHamburBazarTextilCamping.clickBazarTextilCamping()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-731) Verificar que funciona el Menu Bazar y Textil: Carpetas, Repuestos y Folios', async ({menuHamburBazarTextilCarpetasRepuestosFolios}) => {

    await test.step('Click en Carpetas, Repuestos y Folios', async () => {
        await menuHamburBazarTextilCarpetasRepuestosFolios.clickBazarTextilCarpetasRepuestosFolios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-687) Verificar que funciona el Menu Bazar y Textil: Cocina y Comedor', async ({menuHamburBazarTextilCocinaComedor}) => {

    await test.step('Click en Cocina y Comedor', async () => {
        await menuHamburBazarTextilCocinaComedor.clickBazarTextilCocinaComedor()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-760) Verificar que funciona el Menu Bazar y Textil: Colchones y Sommiers', async ({menuHamburBazarTextilColchonesSommiers}) => {

    await test.step('Click en Colchones y Sommiers', async () => {
        await menuHamburBazarTextilColchonesSommiers.clickBazarTextilColchonesSommiers()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-1027) Verificar que funciona el Menu Bazar y Textil: Construccion', async ({menuHamburBazarTextilConstruccion}) => {

    await test.step('Click en Construccion', async () => {
        await menuHamburBazarTextilConstruccion.clickBazarTextilConstruccion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-721) Verificar que funciona el Menu Bazar y Textil: Cotillon', async ({menuHamburBazarTextilCotillon}) => {

    await test.step('Click en Cotillon', async () => {
        await menuHamburBazarTextilCotillon.clickBazarTextilCotillon()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-732) Verificar que funciona el Menu Bazar y Textil: Cuadernos', async ({menuHamburBazarTextilCuadernos}) => {

    await test.step('Click en Cuadernos', async () => {
        await menuHamburBazarTextilCuadernos.clickBazarTextilCuadernos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-696) Verificar que funciona el Menu Bazar y Textil: Cubierta de Autos', async ({menuHamburBazarTextilCubiertaAutos}) => {

    await test.step('Click en Cubierta de Autos', async () => {
        await menuHamburBazarTextilCubiertaAutos.clickBazarTextilCubiertaAutos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-714) Verificar que funciona el Menu Bazar y Textil: Cubiertos y Utensilios', async ({menuHamburBazarTextilCubiertosUtensilios}) => {

    await test.step('Click en Cubiertos y Utensilios', async () => {
        await menuHamburBazarTextilCubiertosUtensilios.clickBazarTextilCubiertosUtensilios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-718) Verificar que funciona el Menu Bazar y Textil: Deco y Organizacion', async ({menuHamburBazarTextilDecoOrganizacion}) => {

    await test.step('Click en Deco y Organizacion', async () => {
        await menuHamburBazarTextilDecoOrganizacion.clickBazarTextilDecoOrganizacion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-719) Verificar que funciona el Menu Bazar y Textil: Decoracion', async ({menuHamburBazarTextilDecoracion}) => {

    await test.step('Click en Decoracion', async () => {
        await menuHamburBazarTextilDecoracion.clickBazarTextilDecoracion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-741) Verificar que funciona el Menu Bazar y Textil: Deporte', async ({menuHamburBazarTextilDeporte}) => {

    await test.step('Click en Deporte', async () => {
        await menuHamburBazarTextilDeporte.clickBazarTextilDeporte()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-682) Verificar que funciona el Menu Bazar y Textil: Dormitorio', async ({menuHamburBazarTextilDormitorio}) => {

    await test.step('Click en Dormitorio', async () => {
        await menuHamburBazarTextilDormitorio.clickBazarTextilDormitorio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-688) Verificar que funciona el Menu Bazar y Textil: Eco Amigable', async ({menuHamburBazarTextilEcoAmigable}) => {

    await test.step('Click en Eco Amigable', async () => {
        await menuHamburBazarTextilEcoAmigable.clickBazarTextilEcoAmigable()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-740) Verificar que funciona el Menu Bazar y Textil: Entretenimiento', async ({menuHamburBazarTextilEntretenimiento}) => {

    await test.step('Click en Entretenimiento', async () => {
        await menuHamburBazarTextilEntretenimiento.clickBazarTextilEntretenimiento()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-751) Verificar que funciona el Menu Bazar y Textil: Ferreteria y Pintura', async ({menuHamburBazarTextilFerreteriaPintura}) => {

    await test.step('Click en Ferreteria y Pintura', async () => {
        await menuHamburBazarTextilFerreteriaPintura.clickBazarTextilFerreteriaPintura()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-710) Verificar que funciona el Menu Bazar y Textil: Hermeticos y Frascos', async ({menuHamburBazarTextilHermeticosFrascos}) => {

    await test.step('Click en Hermeticos y Frascos', async () => {
        await menuHamburBazarTextilHermeticosFrascos.clickBazarTextilHermeticosFrascos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-748) Verificar que funciona el Menu Bazar y Textil: Herramientas y Escaleras', async ({menuHamburBazarTextilHerramientasEscaleras}) => {

    await test.step('Click en Herramientas y Escaleras', async () => {
        await menuHamburBazarTextilHerramientasEscaleras.clickBazarTextilHerramientasEscaleras()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-752) Verificar que funciona el Menu Bazar y Textil: Herramientas de Jardin', async ({menuHamburBazarTextilHerramientasJardin}) => {

    await test.step('Click en Herramientas de Jardin', async () => {
        await menuHamburBazarTextilHerramientasJardin.clickBazarTextilHerramientasJardin()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-742) Verificar que funciona el Menu Bazar y Textil: Hoverboards y Monopatines', async ({menuHamburBazarTextilHoverboardsMonopatines}) => {

    await test.step('Click en Hoverboards y Monopatines', async () => {
        await menuHamburBazarTextilHoverboardsMonopatines.clickBazarTextilHoverboardsMonopatines()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-708) Verificar que funciona el Menu Bazar y Textil: Humanidades', async ({menuHamburBazarTextilHumanidades}) => {

    await test.step('Click en Humanidades', async () => {
        await menuHamburBazarTextilHumanidades.clickBazarTextilHumanidades()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-692) Verificar que funciona el Menu Bazar y Textil: Indumentaria', async ({menuHamburBazarTextilIndumentaria}) => {

    await test.step('Click en Indumentaria', async () => {
        await menuHamburBazarTextilIndumentaria.clickBazarTextilIndumentaria()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-723) Verificar que funciona el Menu Bazar y Textil: Infantiles y Juveniles', async ({menuHamburBazarTextilInfantilesJuveniles}) => {

    await test.step('Click en Infantiles y Juveniles', async () => {
        await menuHamburBazarTextilInfantilesJuveniles.clickBazarTextilInfantilesJuveniles()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-698) Verificar que funciona el Menu Bazar y Textil: Juegos de Aire Libre', async ({menuHamburBazarTextilJuegosAireLibre}) => {

    await test.step('Click en Juegos de Aire Libre', async () => {
        await menuHamburBazarTextilJuegosAireLibre.clickBazarTextilJuegosAireLibre()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-702) Verificar que funciona el Menu Bazar y Textil: Juegos Didacticos', async ({menuHamburBazarTextilJuegosDidacticos}) => {

    await test.step('Click en Juegos Didacticos', async () => {
        await menuHamburBazarTextilJuegosDidacticos.clickBazarTextilJuegosDidacticos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-701) Verificar que funciona el Menu Bazar y Textil: Juegos de Mesa', async ({menuHamburBazarTextilJuegosMesa}) => {

    await test.step('Click en Juegos de Mesa', async () => {
        await menuHamburBazarTextilJuegosMesa.clickBazarTextilJuegosMesa()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-699) Verificar que funciona el Menu Bazar y Textil: Juegos de Verano', async ({menuHamburBazarTextilJuegosVerano}) => {

    await test.step('Click en Juegos de Verano', async () => {
        await menuHamburBazarTextilJuegosVerano.clickBazarTextilJuegosVerano()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-706) Verificar que funciona el Menu Bazar y Textil: Jugueteria Carrefour', async ({menuHamburBazarTextilJugueteriaCarrefour}) => {

    await test.step('Click en Jugueteria Carrefour', async () => {
        await menuHamburBazarTextilJugueteriaCarrefour.clickBazarTextilJugueteriaCarrefour()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-746) Verificar que funciona el Menu Bazar y Textil: Lamparitas', async ({menuHamburBazarTextilLamparitas}) => {

    await test.step('Click en Lamparitas', async () => {
        await menuHamburBazarTextilLamparitas.clickBazarTextilLamparitas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-700) Verificar que funciona el Menu Bazar y Textil: Lanzadores', async ({menuHamburBazarTextilLanzadores}) => {

    await test.step('Click en Lanzadores', async () => {
        await menuHamburBazarTextilLanzadores.clickBazarTextilLanzadores()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-734) Verificar que funciona el Menu Bazar y Textil: Lapiceras y Lapices', async ({menuHamburBazarTextilLapicerasLapices}) => {

    await test.step('Click en Lapiceras y Lapices', async () => {
        await menuHamburBazarTextilLapicerasLapices.clickBazarTextilLapicerasLapices()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-735) Verificar que funciona el Menu Bazar y Textil: Librerias', async ({menuHamburBazarTextilLibreria}) => {

    await test.step('Click en Librerias', async () => {
        await menuHamburBazarTextilLibreria.clickBazarTextilLibreria()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-729) Verificar que funciona el Menu Bazar y Textil: Libreria Artistica', async ({menuHamburBazarTextilLibreriaArtistica}) => {

    await test.step('Click en Libreria Artistica', async () => {
        await menuHamburBazarTextilLibreriaArtistica.clickBazarTextilLibreriaArtistica()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-725) Verificar que funciona el Menu Bazar y Textil: Libros', async ({menuHamburBazarTextilLibros}) => {

    await test.step('Click en Libros', async () => {
        await menuHamburBazarTextilLibros.clickBazarTextilLibros()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-695) Verificar que funciona el Menu Bazar y Textil: Limpieza de Autos', async ({menuHamburBazarTextilLimpiezaAutos}) => {

    await test.step('Click en Limpieza de Autos', async () => {
        await menuHamburBazarTextilLimpiezaAutos.clickBazarTextilLimpiezaAutos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-754) Verificar que funciona el Menu Bazar y Textil: Limpieza de Piletas', async ({menuHamburBazarTextilLimpiezaPiletas}) => {

    await test.step('Click en Limpieza de Piletas', async () => {
        await menuHamburBazarTextilLimpiezaPiletas.clickBazarTextilLimpiezaPiletas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-724) Verificar que funciona el Menu Bazar y Textil: Literatura y Ficcion', async ({menuHamburBazarTextilLiteraturaFiccion}) => {

    await test.step('Click en Literatura y Ficcion', async () => {
        await menuHamburBazarTextilLiteraturaFiccion.clickBazarTextilLiteraturaFiccion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-694) Verificar que funciona el Menu Bazar y Textil: Lubricantes y Aditivos', async ({menuHamburBazarTextilLubricantesAditivos}) => {

    await test.step('Click en Lubricantes y Aditivos', async () => {
        await menuHamburBazarTextilLubricantesAditivos.clickBazarTextilLubricantesAditivos()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-744) Verificar que funciona el Menu Bazar y Textil: Luces de Emergencia e Iluminacion', async ({menuHamburBazarTextilLucesEmergenciaIluminacion}) => {

    await test.step('Click en Luces de Emergencia e Iluminacion', async () => {
        await menuHamburBazarTextilLucesEmergenciaIluminacion.clickBazarTextilLucesEmergenciaIluminacion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-716) Verificar que funciona el Menu Bazar y Textil: Manteles y Accesorios de Cocina', async ({menuHamburBazarTextilMantelesAccesoriosCocina}) => {

    await test.step('Click en Manteles y Accesorios de Cocina', async () => {
        await menuHamburBazarTextilMantelesAccesoriosCocina.clickBazarTextilMantelesAccesoriosCocina()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-736) Verificar que funciona el Menu Bazar y Textil: Maquinas de Gimnasio', async ({menuHamburBazarTextilMaquinasGimnasio}) => {

    await test.step('Click en Maquinas de Gimnasio', async () => {
        await menuHamburBazarTextilMaquinasGimnasio.clickBazarTextilMaquinasGimnasio()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-764) Verificar que funciona el Menu Bazar y Textil: Mesas y Escritorios', async ({menuHamburBazarTextilMesasEscritorios}) => {

    await test.step('Click en Mesas y Escritorios', async () => {
        await menuHamburBazarTextilMesasEscritorios.clickBazarTextilMesasEscritorios()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-758) Verificar que funciona el Menu Bazar y Textil: Mesas y Juegos de Jardin', async ({menuHamburBazarTextilMesasJuegosJardin}) => {

    await test.step('Click en Mesas y Juegos de Jardin', async () => {
        await menuHamburBazarTextilMesasJuegosJardin.clickBazarTextilMesasJuegosJardin()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-766) Verificar que funciona el Menu Bazar y Textil: Muebles', async ({menuHamburguesaBazarTextilMuebles}) => {

    await test.step('Click en Muebles', async () => {
        await menuHamburguesaBazarTextilMuebles.clickBazarTextilMuebles()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-703) Verificar que funciona el Menu Bazar y Textil: Muniecos y Muniecas', async ({menuHamburBazarTextilMuniecosMuniecas}) => {

    await test.step('Click en Muniecos y Muniecas', async () => {
        await menuHamburBazarTextilMuniecosMuniecas.clickBazarTextilMuniecosMuniecas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-690) Verificar que funciona el Menu Bazar y Textil: Ninios y Ninias', async ({menuHamburBazarTextilNiniosNinias}) => {

    await test.step('Click en Ninios y Ninias', async () => {
        await menuHamburBazarTextilNiniosNinias.clickBazarTextilNiniosNinias()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-709) Verificar que funciona el Menu Bazar y Textil: Ollas, Sartenes y Fuentes', async ({menuHamburBazarTextilOllasSartenesFuentes}) => {

    await test.step('Click en Ollas, Sartenes y Fuentes', async () => {
        await menuHamburBazarTextilOllasSartenesFuentes.clickBazarTextilOllasSartenesFuentes()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-720) Verificar que funciona el Menu Bazar y Textil: Organizacion', async ({menuHamburBazarTextilOrganizacion}) => {

    await test.step('Click en Organizacion', async () => {
        await menuHamburBazarTextilOrganizacion.clickBazarTextilOrganizacion()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-707) Verificar que funciona el Menu Bazar y Textil: Otros Generos', async ({menuHamburBazarTextilOtrosGeneros}) => {

    await test.step('Click en Otros Generos', async () => {
        await menuHamburBazarTextilOtrosGeneros.clickBazarTextilOtrosGeneros()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-717) Verificar que funciona el Menu Bazar y Textil: Papeles de Cocina y Bolsas', async ({menuHamburBazarTextilPapelesCocinaBolsas}) => {

    await test.step('Click en Papeles de Cocina y Bolsas', async () => {
        await menuHamburBazarTextilPapelesCocinaBolsas.clickBazarTextilPapelesCocinaBolsas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-733) Verificar que funciona el Menu Bazar y Textil: Para Colorear', async ({menuHamburBazarTextilParaColorear}) => {

    await test.step('Click en Para Colorear', async () => {
        await menuHamburBazarTextilParaColorear.clickBazarTextilParaColorear()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-756) Verificar que funciona el Menu Bazar y Textil: Parasoles y Sombrillas', async ({menuHamburBazarTextilParasolesSombrillas}) => {

    await test.step('Click en Parasoles y Sombrillas', async () => {
        await menuHamburBazarTextilParasolesSombrillas.clickBazarTextilParasolesSombrillas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-753) Verificar que funciona el Menu Bazar y Textil: Parrillas', async ({menuHamburBazarTextilParrillas}) => {

    await test.step('Click en Parrillas', async () => {
        await menuHamburBazarTextilParrillas.clickBazarTextilParrillas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-704) Verificar que funciona el Menu Bazar y Textil: Peluches', async ({menuHamburBazarTextilPeluches}) => {

    await test.step('Click en Peluches', async () => {
        await menuHamburBazarTextilPeluches.clickBazarTextilPeluches()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-745) Verificar que funciona el Menu Bazar y Textil: Pilas', async ({menuHamburBazarTextilPilas}) => {

    await test.step('Click en Pilas', async () => {
        await menuHamburBazarTextilPilas.clickBazarTextilPilas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-755) Verificar que funciona el Menu Bazar y Textil: Piletas e Inflables', async ({menuHamburBazarTextilPiletasInflables}) => {

    await test.step('Click en Piletas e Inflables', async () => {
        await menuHamburBazarTextilPiletasInflables.clickBazarTextilPiletasInflables()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-750) Verificar que funciona el Menu Bazar y Textil: Pinturas', async ({menuHamburBazarTextilPinturas}) => {

    await test.step('Click en Pinturas', async () => {
        await menuHamburBazarTextilPinturas.clickBazarTextilPinturas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-727) Verificar que funciona el Menu Bazar y Textil: Resmas y Articulos de Oficina', async ({menuHamburBazarTextilResmasArticulosOficina}) => {

    await test.step('Click en Resmas y Articulos de Oficina', async () => {
        await menuHamburBazarTextilResmasArticulosOficina.clickBazarTextilResmasArticulosOficina()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-683) Verificar que funciona el Menu Bazar y Textil: Sabanas y Frazadas', async ({menuHamburBazarTextilSabanasFrazadas}) => {

    await test.step('Click en Sabanas y Frazadas', async () => {
        await menuHamburBazarTextilSabanasFrazadas.clickBazarTextilSabanasFrazadas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-765) Verificar que funciona el Menu Bazar y Textil: Sillas y Banquetas', async ({menuHamburBazarTextilSillasBanquetas}) => {

    await test.step('Click en Sillas y Banquetas', async () => {
        await menuHamburBazarTextilSillasBanquetas.clickBazarTextilSillasBanquetas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-757) Verificar que funciona el Menu Bazar y Textil: Sillas, Reposeras y Hamacas', async ({menuHamburBazarTextilSillasReposerasHamacas}) => {

    await test.step('Click en Sillas, Reposeras y Hamacas', async () => {
        await menuHamburBazarTextilSillasReposerasHamacas.clickBazarTextilSillasReposerasHamacas()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-763) Verificar que funciona el Menu Bazar y Textil: Sillones', async ({menuHamburBazarTextilSillones}) => {

    await test.step('Click en Sillones', async () => {
        await menuHamburBazarTextilSillones.clickBazarTextilSillones()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-715) Verificar que funciona el Menu Bazar y Textil: Termos y Mates', async ({menuHamburBazarTextilTermosMates}) => {

    await test.step('Click en Termos y Mates', async () => {
        await menuHamburBazarTextilTermosMates.clickBazarTextilTermosMates()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-743) Verificar que funciona el Menu Bazar y Textil: Tiempo Libre y Deportes', async ({menuHamburBazarTextilTiempoLibreDeportes}) => {

    await test.step('Click en Tiempo Libre y Deportes', async () => {
        await menuHamburBazarTextilTiempoLibreDeportes.clickBazarTextilTiempoLibreDeportes()
    })
})
test('@Regression @MenuHamburguesaa (B2C-TC-686) Verificar que funciona el Menu Bazar y Textil: Toallas y Toallones', async ({menuHamburBazarTextilToallasToallones}) => {

    await test.step('Click en Toallas y Toallones', async () => {
        await menuHamburBazarTextilToallasToallones.clickBazarTextilToallasToallones()
    })
})
test('@Regression @MenuHamburguesaa (B2C-TC-711) Verificar que funciona el Menu Bazar y Textil: Vajilla', async ({menuHamburBazarTextilVajilla}) => {

    await test.step('Click en Vajilla', async () => {
        await menuHamburBazarTextilVajilla.clickBazarTextilVajilla()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-712) Verificar que funciona el Menu Bazar y Textil: Vajilla Infantil', async ({menuHamburBazarTextilVajillaInfantil}) => {

    await test.step('Click en Vajilla Infantil', async () => {
        await menuHamburBazarTextilVajillaInfantil.clickBazarTextilVajillaInfantil()
    })
})
test('@Regression @MenuHamburguesa (B2C-TC-713) Verificar que funciona el Menu Bazar y Textil: Vasos y Copas', async ({menuHamburBazarTextilVasosCopas}) => {

    await test.step('Click en Vasos y Copas', async () => {
        await menuHamburBazarTextilVasosCopas.clickBazarTextilVasosCopas()
    })
})
