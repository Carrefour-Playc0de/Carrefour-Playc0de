import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/LoginPage/LoginPage'
import { ProfilePage } from '../pageObjectModel/ProfilePage/ProfilePage'
import { MainPageAndAcceptCookies } from '../pageObjectModel/MenuHamburguesa/MainPageAndAcceptCookies'
import {
    RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin,
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin'
import { TiendaRetiroDrive } from '../pageObjectModel/SeleccionaTienda/RetiroDrive/TiendaRetiroDrive'
import {
    RetiroDriveSuperProv
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProv'
import {
    RetiroDriveSuperProvCiudAutonoBsAs
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAs'
import {
    RetiroDriveSuperProvCiudAutonoBsAsPartido
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAsPartido'
import {
    RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia'
import {
    RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto'
import {
    RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza
} from '../pageObjectModel/SeleccionaTienda/RetiroDrive/SupermercadoFood/RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza'
import { MenuHamburguesa } from '../pageObjectModel/MenuHamburguesa/MenuHambur'
import { SeleccionaTienda } from '../pageObjectModel/SeleccionaTienda/SeleccionaTienda'
import { SeleccionaTiendaBotonContinuar } from '../pageObjectModel/SeleccionaTienda/SeleccionaTiendaBotonContinuar'
import { MenuHamburAlmacen } from '../pageObjectModel/MenuHamburguesa/MenuHamburAlmacen'
import {
    MenuHamburAlmacenAceitesAerosol
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesAerosol'
import {
    MenuHamburAlmacenAceitesComunes
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesComunes'
import {
    MenuHamburAlmacenAceitesEspeciales
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesEspeciales'
import { MenuHamburAlmacenAceitesOliva } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesOliva'
import {
    MenuHamburguesaAlmacenAceitesVinagres
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesVinagres'
import {
    MenuHamburAlmacenAceitunasEncurtidos
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitunasEncurtidos'
import { MenuHamburAlmacenArroz } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenArroz'
import {
    MenuHamburAlmacenArrozLegumbres
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenArrozLegumbres'
import { MenuHamburAlmacenAvena } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenAvena'
import { MenuHamburAlmacenCaldos } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenCaldos'
import {
    MenuHamburAlmacenCaldosSopasPure
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenCaldosSopasPure'
import {
    MenuHamburAlmacenCoberturasRellenosSalsas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenCoberturasRellenosSalsas'
import { MenuHamburAlmacenComplementos } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenComplementos'
import {
    MenuHamburAlmacenConservasFrutas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenConservasFrutas'
import {
    MenuHamburAlmacenConservasLegumbresVegetales
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenConservasLegumbresVegetales'
import {
    MenuHamburAlmacenConservasPescado
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenConservasPescado'
import {
    MenuHamburAlmacenConservasSalsasTomate
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenConservasSalsasTomate'
import {
    MenuHamburAlmacenEnlatadosConservas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenEnlatadosConservas'
import {
    MenuHamburAlmacenFideosGuiserosParaSopas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenFideosGuiserosParaSopas'
import { MenuHamburAlmacenFideosLargos } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenFideosLargos'
import { MenuHamburAlmacenGelatinas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenGelatinas'
import { MenuHamburAlmacenHarinas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenHarinas'
import {
    MenuHamburAlmacenHarinasComunesLeudantes
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenHarinasComunesLeudantes'
import {
    MenuHamburAlmacenHierbasSecasEspecias
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenHierbasSecasEspecias'
import { MenuHamburAlmacenLegumbres } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenLegumbres'
import {
    MenuHamburAlmacenNachosManiPalitos
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenNachosManiPalitos'
import { MenuHamburAlmacenOtrasHarinas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenOtrasHarinas'
import {
    MenuHamburAlmacenOtrosSnacksSalados
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenOtrosSnacksSalados'
import {
    MenuHamburAlmacenPapasFritasSnacksMaiz
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPapasFritasSnacksMaiz'
import { MenuHamburAlmacenPastasSecas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPastasSecas'
import {
    MenuHamburAlmacenPastasSecasRellenasListas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPastasSecasRellenasListas'
import {
    MenuHamburAlmacenPicadillosPate
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPicadillosPate'
import {
    MenuHamburAlmacenPostresFlanes
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPostresFlanes'
import {
    MenuHamburAlmacenPremezclasDulces
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPremezclasDulces'
import {
    MenuHamburAlmacenPremezclasSaladas
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPremezclasSaladas'
import {
    MenuHamburAlmacenPuresInstantaneos
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenPuresInstantaneos'
import {
    MenuHamburAlmacenReposteriaPostres
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenReposteriaPostres'
import {
    MenuHamburAlmacenSaborizadores
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSaborizadores'
import { MenuHamburAlmacenSal } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSal'
import {
    MenuHamburAlmacenSalAderezosSaborizadores
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSalAderezosSaborizadores'
import {
    MenuHamburAlmacenSalsasAderezos
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSalsasAderezos'
import { MenuHamburAlmacenSemillas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSemillas'
import { MenuHamburAlmacenSnacks } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSnacks'
import { MenuHamburAlmacenSopas } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenSopas'
import {
    MenuHamburAlmacenTapasAlfajoresMerengues
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenTapasAlfajoresMerengues'
import {
    MenuHamburAlmacenVinagresAcetosLimon
} from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenVinagresAcetosLimon'
import { MenuHamburBazarTextil } from '../pageObjectModel/MenuHamburguesa/MenuHamburBazarTextil'
import {
    MenuHamburBazarTextilAccesoriosAuto
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAccesoriosAuto'
import {
    MenuHamburBazarTextilAccesoriosFerreteria
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAccesoriosFerreteria'
import {
    MenuHamburBazarTextilAccesoriosLibreria
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAccesoriosLibreria'
import {
    MenuHamburBazarTextilAdhesivos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAdhesivos'
import {
    MenuHamburBazarTextilAdultos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAdultos'
import {
    MenuHamburBazarTextilAireLibre
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAireLibre'
import {
    MenuHamburBazarTextilAlarguesEnchufes
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAlarguesEnchufes'
import {
    MenuHamburBazarTextilAlmohadasAlmohadones
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAlmohadasAlmohadones'
import {
    MenuHamburBazarTextilAutoayuda
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAutoayuda'
import {
    MenuHamburBazarTextilAutomotor
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAutomotor'
import {
    MenuHamburBazarTextilAutosPistasJuguete
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAutosPistasJuguete'
import { MenuHamburBazarTextilBanio } from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBanio'
import { MenuHamburBazarTextilBebes } from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBebes'
import {
    MenuHamburBazarTextilBibliotecasOrganizadores
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBibliotecasOrganizadores'
import {
    MenuHamburBazarTextilBicicletas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBicicletas'
import {
    MenuHamburBazarTextilBlocksDibujoCartulinas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBlocksDibujoCartulinas'
import {
    MenuHamburBazarTextilBolsosValijas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilBolsosValijas'
import {
    MenuHamburBazarTextilCamasMesasLuz
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCamasMesasLuz'
import {
    MenuHamburBazarTextilCamping
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCamping'
import {
    MenuHamburBazarTextilCarpetasRepuestosFolios
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCarpetasRepuestosFolios'
import {
    MenuHamburBazarTextilCocinaComedor
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCocinaComedor'
import {
    MenuHamburBazarTextilColchonesSommiers
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilColchonesSommiers'
import {
    MenuHamburBazarTextilConstruccion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilConstruccion'
import {
    MenuHamburBazarTextilCotillon
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCotillon'
import {
    MenuHamburBazarTextilCuadernos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCuadernos'
import {
    MenuHamburBazarTextilCubiertaAutos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCubiertaAutos'
import {
    MenuHamburBazarTextilCubiertosUtensilios
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCubiertosUtensilios'
import {
    MenuHamburBazarTextilDecoOrganizacion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDecoOrganizacion'
import {
    MenuHamburBazarTextilDecoracion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDecoracion'
import {
    MenuHamburBazarTextilDeporte
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDeporte'
import {
    MenuHamburBazarTextilDormitorio
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDormitorio'
import {
    MenuHamburBazarTextilEcoAmigable
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilEcoAmigable'
import {
    MenuHamburBazarTextilEntretenimiento
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilEntretenimiento'
import {
    MenuHamburBazarTextilFerreteriaPintura
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilFerreteriaPintura'
import {
    MenuHamburBazarTextilHermeticosFrascos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilHermeticosFrascos'
import {
    MenuHamburBazarTextilHerramientasEscaleras
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilHerramientasEscaleras'
import {
    MenuHamburBazarTextilHerramientasJardin
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilHerramientasJardin'
import {
    MenuHamburBazarTextilHoverboardsMonopatines
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilHoverboardsMonopatines'
import {
    MenuHamburBazarTextilHumanidades
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilHumanidades'
import {
    MenuHamburBazarTextilIndumentaria
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilIndumentaria'
import {
    MenuHamburBazarTextilInfantilesJuveniles
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilInfantilesJuveniles'
import {
    MenuHamburBazarTextilJuegosAireLibre
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilJuegosAireLibre'
import {
    MenuHamburBazarTextilJuegosDidacticos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilJuegosDidacticos'
import {
    MenuHamburBazarTextilJuegosMesa
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilJuegosMesa'
import {
    MenuHamburBazarTextilJuegosVerano
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilJuegosVerano'
import {
    MenuHamburBazarTextilJugueteriaCarrefour
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilJugueteriaCarrefour'
import {
    MenuHamburBazarTextilLamparitas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLamparitas'
import {
    MenuHamburBazarTextilLanzadores
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLanzadores'
import {
    MenuHamburBazarTextilLapicerasLapices
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLapicerasLapices'
import {
    MenuHamburBazarTextilLibreria
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLibreria'
import {
    MenuHamburBazarTextilLibreriaArtistica
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLibreriaArtistica'
import { MenuHamburBazarTextilLibros } from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLibros'
import {
    MenuHamburBazarTextilLimpiezaAutos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLimpiezaAutos'
import {
    MenuHamburBazarTextilLimpiezaPiletas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLimpiezaPiletas'
import {
    MenuHamburBazarTextilLiteraturaFiccion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLiteraturaFiccion'
import {
    MenuHamburBazarTextilLubricantesAditivos
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLubricantesAditivos'
import {
    MenuHamburBazarTextilLucesEmergenciaIluminacion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLucesEmergenciaIluminacion'
import {
    MenuHamburBazarTextilMantelesAccesoriosCocina
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMantelesAccesoriosCocina'
import {
    MenuHamburBazarTextilMaquinasGimnasio
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMaquinasGimnasio'
import {
    MenuHamburBazarTextilMesasEscritorios
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMesasEscritorios'
import {
    MenuHamburBazarTextilMesasJuegosJardin
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMesasJuegosJardin'
import {
    MenuHamburguesaBazarTextilMuebles
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMuebles'
import {
    MenuHamburBazarTextilMuniecosMuniecas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilMuniecosMuniecas'
import {
    MenuHamburBazarTextilNiniosNinias
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilNiniosNinias'
import {
    MenuHamburBazarTextilOllasSartenesFuentes
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilOllasSartenesFuentes'
import {
    MenuHamburBazarTextilOrganizacion
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilOrganizacion'
import {
    MenuHamburBazarTextilOtrosGeneros
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilOtrosGeneros'
import {
    MenuHamburBazarTextilPapelesCocinaBolsas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilPapelesCocinaBolsas'
import {
    MenuHamburBazarTextilParaColorear
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilParaColorear'
import {
    MenuHamburBazarTextilParasolesSombrillas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilParasolesSombrillas'
import {
    MenuHamburBazarTextilParrillas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilParrillas'
import {
    MenuHamburBazarTextilPeluches
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilPeluches'
import { MenuHamburBazarTextilPilas } from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilPilas'
import {
    MenuHamburBazarTextilPiletasInflables
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilPiletasInflables'
import {
    MenuHamburBazarTextilPinturas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilPinturas'
import {
    MenuHamburBazarTextilResmasArticulosOficina
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilResmasArticulosOficina'
import {
    MenuHamburBazarTextilSabanasFrazadas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilSabanasFrazadas'
import {
    MenuHamburBazarTextilSillasBanquetas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilSillasBanquetas'
import {
    MenuHamburBazarTextilSillasReposerasHamacas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilSillasReposerasHamacas'
import {
    MenuHamburBazarTextilSillones
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilSillones'
import {
    MenuHamburBazarTextilTermosMates
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilTermosMates'
import {
    MenuHamburBazarTextilTiempoLibreDeportes
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilTiempoLibreDeportes'
import {
    MenuHamburBazarTextilToallasToallones
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilToallasToallones'
import {
    MenuHamburBazarTextilVajilla
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVajilla'
import {
    MenuHamburBazarTextilVajillaInfantil
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVajillaInfantil'
import {
    MenuHamburBazarTextilVasosCopas
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVasosCopas'
import { MenuHamburBebidas } from '../pageObjectModel/MenuHamburguesa/MenuHamburBebidas'
import { MenuHamburBebidasAguas } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasAguas'
import {
    MenuHamburBebidasAguasMineralesMesa
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasAguasMineralesMesa'
import {
    MenuHamburBebidasAguasSaborizadas
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasAguasSaborizadas'
import {
    MenuHamburBebidasAperitivosConAlcohol
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasAperitivosConAlcohol'
import { MenuHamburBebidasVerTodo } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVerTodo'
import {
    MenuHamburBazarTextilVerTodo
} from '../pageObjectModel/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVerTodo'
import { MenuHamburAlmacenVerTodo } from '../pageObjectModel/MenuHamburguesa/Almacen/MenuHamburAlmacenVerTodo'
import {
    MenuHamburBebidasAperitivosSinAlcohol
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasAperitivosSinAlcohol'
import {
    MenuHamburBebidasBebidasBlancas
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasBlancas'
import {
    MenuHamburBebidasBebidasEnergizantes
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasEnergizantes'
import {
    MenuHamburBebidasBebidasIsotonicas
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasIsotonicas'
import { MenuHamburguesaBebidasCervezas } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasCervezas'
import { MenuHamburBebidasEspumantes } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasEspumantes'
import {
    MenuHamburBebidasEspumantesSidras
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasEspumantesSidras'
import { MenuHamburBebidasFernet } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasFernet'
import {
    MenuHamburBebidasFernetAperitivos
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasFernetAperitivos'
import { MenuHamburBebidasFrizzantes } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasFrizzantes'
import { MenuHamburBebidasGaseosas } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosas'
import { MenuHamburBebidasGaseosasCola } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosasCola'
import {
    MenuHamburBebidasGaseosasLimon
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosasLimon'
import {
    MenuHamburBebidasGaseosasNaranja
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosasNaranja'
import {
    MenuHamburBebidasGaseosasPomelo
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosasPomelo'
import {
    MenuHamburBebidasGaseosasTonicasOtras
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosasTonicasOtras'
import { MenuHamburBebidasGin } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasGin'
import { MenuHamburBebidasJugos } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasJugos'
import {
    MenuHamburBebidasJugosConcentrados
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasJugosConcentrados'
import { MenuHamburBebidasJugosListos } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasJugosListos'
import { MenuHamburBebidasJugosPolvo } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasJugosPolvo'
import { MenuHamburBebidasLicores } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasLicores'
import {
    MenuHamburBebidasOtrasEspirituosas
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasOtrasEspirituosas'
import { MenuHamburBebidasRon } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasRon'
import { MenuHamburBebidasSidras } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasSidras'
import { MenuHamburBebidasVinos } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVinos'
import { MenuHamburBebidasVinosBlancos } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVinosBlancos'
import {
    MenuHamburBebidasVinosGenerosos
} from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVinosGenerosos'
import { MenuHamburBebidasVinosRosados } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVinosRosados'
import { MenuHamburBebidasVinosTintos } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVinosTintos'
import { MenuHamburBebidasVodka } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasVodka'
import { MenuHamburBebidasWhisky } from '../pageObjectModel/MenuHamburguesa/Bebidas/MenuHamburBebidasWhisky'
import { MenuHamburCarnesPescados } from '../pageObjectModel/MenuHamburguesa/MenuHamburCarnesPescados'
import {
    MenuHamburCarnesPescadosAchurasEmbutidos
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosAchurasEmbutidos'
import {
    MenuHamburCarnesPescadosVerTodo
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosVerTodo'
import {
    MenuHamburCarnesPescadosCarbonEncendido
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosCarbonEncendido'
import {
    MenuHamburCarnesPescadosCarneCerdo
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosCarneCerdo'
import {
    MenuHamburCarnesPescadosCarneVacuna
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosCarneVacuna'
import {
    MenuHamburCarnesPescadosPescadosMariscos
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosPescadosMariscos'
import {
    MenuHamburCarnesPescadosPolloGranja
} from '../pageObjectModel/MenuHamburguesa/CarnesPescados/MenuHamburCarnesPescadosPolloGranja'
import {
    MenuHamburCongeladosVerTodos
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosVerTodos'
import {
    MenuHamburCongeladosHamburguesas
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosHamburguesas'
import { MenuHamburCongelados } from '../pageObjectModel/MenuHamburguesa/MenuHamburCongelados'
import { MenuHamburDesayunoMerienda } from '../pageObjectModel/MenuHamburguesa/MenuHamburDesayunoMerienda'
import {
    MenuHamburDesayunoMeriendaAlfajores
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaAlfajores'
import {
    MenuHamburDesayunoMeriendaVerTodo
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaVerTodo'
import {
    MenuHamburDesayunoMeriendaAzucar
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaAzucar'
import {
    MenuHamburDesayunoMeriendaAzucarEndulzantes
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaAzucarEndulzantes'
import {
    MenuHamburDesayunoMeriendaBarritasCereales
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBarritasCereales'
import {
    MenuHamburDesayunoMeriendaBizcochitos
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBizcochitos'
import {
    MenuHamburDesayunoMeriendaBocaditosConfitesTurrones
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBocaditosConfitesTurrones'
import {
    MenuHamburDesayunoMeriendaBudinesBizcochuelos
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBudinesBizcochuelos'
import {
    MenuHamburDesayunoMeriendaBudinesMagdalenas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBudinesMagdalenas'
import {
    MenuHamburDesayunoMeriendaCacao
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCacao'
import {
    MenuHamburDesayunoMeriendaCafe
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCafe'
import {
    MenuHamburDesayunoMeriendaCafeInstantaneo
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCafeInstantaneo'
import {
    MenuHamburDesayunoMeriendaCafeMolidoGrano
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCafeMolidoGrano'
import {
    MenuHamburDesayunoMeriendaCapsulasCafe
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCapsulasCafe'
import {
    MenuHamburDesayunoMeriendaCaramelosGomitasChupetines
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCaramelosGomitasChupetines'
import {
    MenuHamburDesayunoMeriendaCereales
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCereales'
import {
    MenuHamburDesayunoMeriendaCerealesBarritas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCerealesBarritas'
import {
    MenuHamburDesayunoMeriendaChicles
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaChicles'
import {
    MenuHamburDesayunoMeriendaChocolates
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaChocolates'
import {
    MenuHamburDesayunoMeriendaEdulcorantesEndulzantes
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaEdulcorantesEndulzantes'
import {
    MenuHamburDesayunoMeriendaFiltrosCafe
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaFiltrosCafe'
import {
    MenuHamburDesayunoMeriendaGalletasArroz
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletasArroz'
import {
    MenuHamburDesayunoMeriendaGalletitasAgua
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletitasAgua'
import {
    MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas'
import {
    MenuHamburDesayunoMeriendaGalletitasDulces
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletitasDulces'
import {
    MenuHamburDesayunoMeriendaGolosinasChocolates
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGolosinasChocolates'
import {
    MenuHamburDesayunoMeriendaGranola
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGranola'
import {
    MenuHamburDesayunoMeriendaInfusiones
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaInfusiones'
import {
    MenuHamburDesayunoMeriendaMagdalenas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMagdalenas'
import {
    MenuHamburDesayunoMeriendaMateCocido
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMateCocido'
import {
    MenuHamburDesayunoMeriendaMermeladasDulcesJaleas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMermeladasDulcesJaleas'
import {
    MenuHamburDesayunoMeriendaMermeladasOtrosDulces
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMermeladasOtrosDulces'
import {
    MenuHamburDesayunoMeriendaMiel
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMiel'
import {
    MenuHamburDesayunoMeriendaPastaManiCremaAvellanas
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaPastaManiCremaAvellanas'
import {
    MenuHamburDesayunoMeriendaTe
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaTe'
import {
    MenuHamburDesayunoMeriendaTostadasGrisinesMarineras
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaTostadasGrisinesMarineras'
import {
    MenuHamburDesayunoMeriendaYerba
} from '../pageObjectModel/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaYerba'
import { MenuHamburDestacados } from '../pageObjectModel/MenuHamburguesa/MenuHamburDestacados'
import { MenuHamburDestacadosAlmacen } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosAlmacen'
import {
    MenuHamburDestacadosBajoSodioSinSal
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosBajoSodioSinSal'
import { MenuHamburDestacadosBangho } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosBangho'
import { MenuHamburDestacadosBebidas } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosBebidas'
import { MenuHamburDestacadosBGH } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosBGH'
import { MenuHamburDestacadosCeven } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosCeven'
import {
    MenuHamburDestacadosCongelados
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosCongelados'
import {
    MenuHamburDestacadosDecohogar
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosDecohogar'
import {
    MenuHamburDestacadosDesayunoMerienda
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosDesayunoMerienda'
import {
    MenuHamburDestacadosDietetica
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosDietetica'
import { MenuHamburDestacadosElectro } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosElectro'
import {
    MenuHamburDestacadosElectrolux
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosElectrolux'
import {
    MenuHamburDestacadosEspecialGamer
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosEspecialGamer'
import {
    MenuHamburDestacadosGolosinasSnacks
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosGolosinasSnacks'
import {
    MenuHamburDestacadosHogarBazar
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosHogarBazar'
import {
    MenuHamburDestacadosHuellaNatural
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosHuellaNatural'
import {
    MenuHamburDestacadosLacteosProductosFrescos
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosLacteosProductosFrescos'
import {
    MenuHamburDestacadosLimpieza
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosLimpieza'
import {
    MenuHamburDestacadosMascotas
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosMascotas'
import {
    MenuHamburDestacadosMundoBebe
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosMundoBebe'
import {
    MenuHamburDestacadosNuevosProductos
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosNuevosProductos'
import {
    MenuHamburDestacadosOrganico
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosOrganico'
import {
    MenuHamburDestacadosPanaderia
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosPanaderia'
import {
    MenuHamburDestacadosPerfumeria
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosPerfumeria'
import {
    MenuHamburDestacadosProductosCarrefour
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosProductosCarrefour'
import {
    MenuHamburDestacadosProductosExclusivosOnline
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosProductosExclusivosOnline'
import {
    MenuHamburDestacadosPuntoDeportivo
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosPuntoDeportivo'
import {
    MenuHamburDestacadosQuesosFiambres
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosQuesosFiambres'
import {
    MenuHamburDestacadosReducidoSinAzucar
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosReducidoSinAzucar'
import {
    MenuHamburDestacadosReducidoSinLactosa
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosReducidoSinLactosa'
import {
    MenuHamburDestacadosSinGluten
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosSinGluten'
import { MenuHamburDestacadosSinTACC } from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosSinTACC'
import {
    MenuHamburDestacadosVeganoVegetariano
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosVeganoVegetariano'
import {
    MenuHamburDestacadosVersusGaming
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosVersusGaming'
import {
    MenuHamburDestacadosWhirlpool
} from '../pageObjectModel/MenuHamburguesa/Destacados/MenuHamburDestacadosWhirlpool'
import { MenuHamburElectroTecnologia } from '../pageObjectModel/MenuHamburguesa/MenuHamburElectroTecnologia'
import {
    MenuHamburElectroTecnologiaAccesoriosCelulares
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAccesoriosCelulares'
import {
    MenuHamburElectroTecnologiaVerTodo
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaVerTodo'
import {
    MenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo'
import {
    MenuHamburElectroTecnologiaAiresAcondicionados
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAiresAcondicionados'
import {
    MenuHamburElectroTecnologiaAnafes
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAnafes'
import {
    MenuHamburElectroTecnologiaAspiradoras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAspiradoras'
import {
    MenuHamburElectroTecnologiaAudio
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAudio'
import {
    MenuHamburElectroTecnologiaAudioAutos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAudioAutos'
import {
    MenuHamburElectroTecnologiaAuriculares
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAuriculares'
import {
    MenuHamburElectroTecnologiaAccesoriosInformatica
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaAccesoriosInformatica'
import {
    MenuHamburElectroTecnologiaBatidoras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaBatidoras'
import {
    MenuHamburElectroTecnologiaBienestarSexual
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaBienestarSexual'
import {
    MenuHamburElectroTecnologiaCafeteras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCafeteras'
import {
    MenuHamburElectroTecnologiaCalefaccionElectrica
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCalefaccionElectrica'
import {
    MenuHamburElectroTecnologiaCalefaccionGas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCalefaccionGas'
import {
    MenuHamburElectroTecnologiaCalefaccionLenia
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCalefaccionLenia'
import {
    MenuHamburElectroTecnologiaCalefones
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCalefones'
import {
    MenuHamburElectroTecnologiaCamarasSeguridad
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCamarasSeguridad'
import {
    MenuHamburElectroTecnologiaCampanasPurificadores
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCampanasPurificadores'
import {
    MenuHamburElectroTecnologiaCavas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCavas'
import {
    MenuHamburElectroTecnologiaCelulares
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCelulares'
import {
    MenuHamburElectroTecnologiaCelularesLibres
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCelularesLibres'
import {
    MenuHamburElectroTecnologiaClimatizacion
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaClimatizacion'
import {
    MenuHamburElectroTecnologiaCoccion
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCoccion'
import {
    MenuHamburElectroTecnologiaCocinas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCocinas'
import {
    MenuHamburElectroTecnologiaCocinasHornos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCocinasHornos'
import {
    MenuHamburElectroTecnologiaConsolasJoysticks
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaConsolasJoysticks'
import {
    MenuHamburElectroTecnologiaCuidadoPersonalSalud
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaCuidadoPersonalSalud'
import {
    MenuHamburElectroTecnologiaDepiladoras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaDepiladoras'
import {
    MenuHamburElectroTecnologiaEquiposSonido
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaEquiposSonido'
import {
    MenuHamburElectroTecnologiaFreezers
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaFreezers'
import {
    MenuHamburElectroTecnologiaGaming
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaGaming'
import {
    MenuHamburElectroTecnologiaHeladeras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaHeladeras'
import {
    MenuHamburElectroTecnologiaHeladerasFreezers
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaHeladerasFreezers'
import {
    MenuHamburElectroTecnologiaHornos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaHornos'
import {
    MenuHamburElectroTecnologiaImpresorasCartuchos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaImpresorasCartuchos'
import {
    MenuHamburElectroTecnologiaInformaticaGaming
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaInformaticaGaming'
import {
    MenuHamburElectroTecnologiaJarrasElectricas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaJarrasElectricas'
import {
    MenuHamburElectroTecnologiaJuguerasExprimidores
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaJuguerasExprimidores'
import {
    MenuHamburElectroTecnologiaLavado
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaLavado'
import {
    MenuHamburElectroTecnologiaLavasecarropas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaLavasecarropas'
import {
    MenuHamburElectroTecnologiaLavavajillas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaLavavajillas'
import {
    MenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras'
import {
    MenuHamburElectroTecnologiaMaquinasCoser
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaMaquinasCoser'
import {
    MenuHamburElectroTecnologiaMicroondas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaMicroondas'
import {
    MenuHamburElectroTecnologiaMonitores
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaMonitores'
import {
    MenuHamburElectroTecnologiaNotebooksPC
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaNotebooksPC'
import {
    MenuHamburElectroTecnologiaParlantesPortatiles
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaParlantesPortatiles'
import {
    MenuHamburElectroTecnologiaPequeniosElectrodomesticos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaPequeniosElectrodomesticos'
import {
    MenuHamburElectroTecnologiaPlanchas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaPlanchas'
import {
    MenuHamburElectroTecnologiaPlanchitasPelo
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaPlanchitasPelo'
import {
    MenuHamburElectroTecnologiaRadios
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaRadios'
import {
    MenuHamburElectroTecnologiaSaludBienestar
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSaludBienestar'
import {
    MenuHamburElectroTecnologiaSecadoresPelo
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSecadoresPelo'
import {
    MenuHamburElectroTecnologiaSecarropas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSecarropas'
import {
    MenuHamburElectroTecnologiaSmartTV
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSmartTV'
import {
    MenuHamburElectroTecnologiaSmartTVs
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSmartTVs'
import {
    MenuHamburElectroTecnologiaSoportesAccesorios
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaSoportesAccesorios'
import {
    MenuHamburElectroTecnologiaTablets
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTablets'
import {
    MenuHamburElectroTecnologiaTecladosMouse
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTecladosMouse'
import {
    MenuHamburElectroTecnologiaTelefoFijosInalam
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTelefoFijosInalam'
import {
    MenuHamburElectroTecnologiaTermotanquesCalefones
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTermotanquesCalefones'
import {
    MenuHamburElectroTecnologiaTermotanquesElectricos
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTermotanquesElectricos'
import {
    MenuHamburElectroTecnologiaTermotanquesGas
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTermotanquesGas'
import {
    MenuHamburElectroTecnologiaTostadorasSandwicheras
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaTostadorasSandwicheras'
import {
    MenuHamburElectroTecnologiaVentiladClimatizad
} from '../pageObjectModel/MenuHamburguesa/ElectroTecnologia/MenuHamburElectroTecnologiaVentiladClimatizad'
import { ToastTuUltimoCarritoHaSidoRecuperado } from '../pageObjectModel/Carrito/ToastTuUltimoCarritoHaSidoRecuperado'
import { MenuHamburFrutasVerduras } from '../pageObjectModel/MenuHamburguesa/MenuHamburFrutasVerduras'
import {
    MenuHamburFrutasVerdurasFrutas
} from '../pageObjectModel/MenuHamburguesa/FrutasVerduras/MenuHamburFrutasVerdurasFrutas'
import {
    MenuHamburFrutasVerdurasVerTodos
} from '../pageObjectModel/MenuHamburguesa/FrutasVerduras/MenuHamburFrutasVerdurasVerTodos'
import {
    MenuHamburFrutasVerdurasFrutosSecos
} from '../pageObjectModel/MenuHamburguesa/FrutasVerduras/MenuHamburFrutasVerdurasFrutosSecos'
import {
    MenuHamburFrutasVerdurasVerduras
} from '../pageObjectModel/MenuHamburguesa/FrutasVerduras/MenuHamburFrutasVerdurasVerduras'
import {
    MenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas
} from '../pageObjectModel/MenuHamburguesa/FrutasVerduras/MenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas'
import { MenuHamburLacteosProdsFrescos } from '../pageObjectModel/MenuHamburguesa/MenuHamburLacteosProdsFrescos'
import {
    MenuHamburLacteosProdsFrescosLechesDescremadas
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesDescremadas'
import {
    MenuHamburLacteosProdsFrescosVerTodo
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosVerTodo'
import { MenuHamburIndumentaria } from '../pageObjectModel/MenuHamburguesa/MenuHamburIndumentaria'
import {
    MenuHamburIndumentariaVerTodos
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaVerTodos'
import {
    LPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/Productos/LPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt'
import {
    UrlLecheUATParciaDescCarrefourClassicBrik1Lt
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/Productos/Url/UrlLecheUATParciaDescCarrefourClassicBrik1Lt'
import { UrlProductosCarrito } from '../pageObjectModel/Carrito/UrlProductosCarrito'
import { CarritoHome } from '../pageObjectModel/Carrito/CarritoHome'
import {
    MenuHamburLacteosProdsFrescosCremasDeLeche
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosCremasDeLeche'
import {
    MenuHamburLacteosProdsFrescosDulceDeLeche
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosDulceDeLeche'
import {
    MenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces'
import {
    MenuHamburLacteosProdsFrescosFiambres
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosFiambres'
import {
    MenuHamburLacteosProdsFrescosFiambresFeteados
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosFiambresFeteados'
import {
    MenuHamburLacteosProdsFrescosHuevos
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosHuevos'
import {
    MenuHamburLacteosProdsFrescosLeches
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLeches'
import {
    MenuHamburLacteosProdsFrescosLechesEnteras
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesEnteras'
import {
    MenuHamburLacteosProdsFrescosLechesPolvo
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesPolvo'
import {
    MenuHamburLacteosProdsFrescosLechesSaborizadas
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesSaborizadas'
import {
    MenuHamburLacteosProdsFrescosLechesVegetales
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesVegetales'
import {
    MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras'
import {
    MenuHamburLacteosProdsFrescosPostres
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosPostres'
import {
    MenuHamburLacteosProdsFrescosQuesos
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesos'
import {
    MenuHamburLacteosProdsFrescosQuesosCremasUntables
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosCremasUntables'
import {
    MenuHamburLacteosProdsFrescosQuesosCremososMozzarellas
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosCremososMozzarellas'
import {
    MenuHamburLacteosProdsFrescosQuesosDurosSemiDuros
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosDurosSemiDuros'
import {
    MenuHamburLacteosProdsFrescosQuesosEspeciales
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosEspeciales'
import {
    MenuHamburLacteosProdsFrescosQuesosFeteados
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosFeteados'
import {
    MenuHamburLacteosProdsFrescosQuesosRalladosEnHebras
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesosRalladosEnHebras'
import {
    MenuHamburLacteosProdsFrescosRicota
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosRicota'
import {
    MenuHamburLacteosProdsFrescosSalaminesEmbutidos
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosSalaminesEmbutidos'
import {
    MenuHamburLacteosProdsFrescosSalchichas
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosSalchichas'
import {
    MenuHamburLacteosProdsFrescosTapasPastasFrescas
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosTapasPastasFrescas'
import {
    MenuHamburLacteosProdsFrescosYogures
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosYogures'
import {
    MenuHamburLacteosProdsFrescosYoguresDescremados
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosYoguresDescremados'
import {
    MenuHamburLacteosProdsFrescosYoguresEnteros
} from '../pageObjectModel/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosYoguresEnteros'
import { MenuHamburLimpieza } from '../pageObjectModel/MenuHamburguesa/MenuHamburLimpieza'
import {
    MenuHamburLimpiezaLimpiezaDeRopa
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaRopa'
import { MenuHamburLimpiezaVerTodo } from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaVerTodo'
import { MenuHamburMascotas } from '../pageObjectModel/MenuHamburguesa/MenuHamburMascotas'
import {
    MenuHamburMascotasAlimentosSnacksPerros
} from '../pageObjectModel/MenuHamburguesa/Mascotas/MenuHamburMascotasAlimentosSnacksPerros'
import { MenuHamburMascotasVerTodos } from '../pageObjectModel/MenuHamburguesa/Mascotas/MenuHamburMascotasVerTodos'
import { MenuHamburMundoBebe } from '../pageObjectModel/MenuHamburguesa/MenuHamburMundoBebe'
import { MenuHamburMundoBebePaniales } from '../pageObjectModel/MenuHamburguesa/MundoBebe/MenuHamburMundoBebePaniales'
import { MenuHamburMundoBebeVerTodos } from '../pageObjectModel/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeVerTodos'
import { MenuHamburPanaderia } from '../pageObjectModel/MenuHamburguesa/MenuHamburPanaderia'
import {
    MenuHamburPanaderiaBizcochuelosPiononos
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaBizcochuelosPiononos'
import { MenuHamburPanaderiaVerTodos } from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaVerTodos'
import {
    MenuHamburPanaderiaElaboracionCarrefour
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaElaboracionCarrefour'
import {
    MenuHamburPanaderiaEspecialidadesDulces
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaEspecialidadesDulces'
import {
    MenuHamburPanaderiaEspecialidadesSaladas
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaEspecialidadesSaladas'
import {
    MenuHamburPanaderiaPanesLacteadosDeMesa
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanesLacteadosDeMesa'
import {
    MenuHamburPanaderiaPanHamburguesasPanchos
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanHamburguesasPanchos'
import {
    MenuHamburPanaderiaPanificados
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanificados'
import {
    MenuHamburPanaderiaPanRalladoRebozadores
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanRalladoRebozadores'
import {
    MenuHamburPanaderiaPizzasPrepizzas
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPizzasPrepizzas'
import {
    MenuHamburPanaderiaSandwichesEmpanadasTartas
} from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaSandwichesEmpanadasTartas'
import { MenuHamburPanaderiaTortillas } from '../pageObjectModel/MenuHamburguesa/Panaderia/MenuHamburPanaderiaTortillas'
import { MenuHamburPerfumeria } from '../pageObjectModel/MenuHamburguesa/MenuHamburPerfumeria'
import {
    MenuHamburPerfumeriaCuidadoDelCabello
} from '../pageObjectModel/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoDelCabello'
import {
    MenuHamburPerfumeriaVerTodos
} from '../pageObjectModel/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaVerTodos'
import { ModalSuscribite } from '../pageObjectModel/ModalAndToast/ModalSuscribite'
import { OnlyAcceptCookies } from '../pageObjectModel/OnlyAcceptCookies'
import {
    CerrarModalComoQueresRecibirCompra
} from '../pageObjectModel/SeleccionaTienda/CerrarModalComoQueresRecibirCompra'
import { MainHomePage } from '../pageObjectModel/MainHomePage'
import { CarritoProductos } from '../pageObjectModel/Carrito/CarritoProductos'
import { UrlCarrefour } from '../pageObjectModel/UrlCarrefour'
import { CarritoBotonPlusProductoUno } from '../pageObjectModel/Carrito/CarritoBotonPlusProductoUno'
import { CarritoBotonFinalizarCompra } from '../pageObjectModel/Carrito/CarritoBotonFinalizarCompra'
import {
    MenuHamburCongeladosNuggetsRebozados
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosNuggetsRebozados'
import { MenuHamburCongeladosPapas } from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosPapas'
import {
    MenuHamburCongeladosVerdurasFrutas
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosVerdurasFrutas'
import {
    MenuHamburCongeladosComidasPanificados
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosComidasPanificados'
import {
    MenuHamburCongeladosHeladosPostres
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosHeladosPostres'
import { MenuHamburCongeladosPollos } from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosPollos'
import {
    MenuHamburCongeladosPescadosMariscos
} from '../pageObjectModel/MenuHamburguesa/Congelados/MenuHamburCongeladosPescadosMariscos'
import {
    MenuHamburIndumentariaAdultos
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaAdultos'
import {
    MenuHamburIndumentariaHombre
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaHombre'
import {
    MenuHamburIndumentariaMujer
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaMujer'
import {
    MenuHamburIndumentariaBebes
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaBebes'
import {
    MenuHamburIndumentariaNiniosNinias
} from '../pageObjectModel/MenuHamburguesa/Indumentaria/MenuHamburIndumentariaNiniosNinias'
import {
    MenuHamburLimpiezaJabonesParaRopa
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaJabonesParaRopa'
import {
    MenuHamburLimpiezaPrelavadoQuitamanchas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPrelavadoQuitamanchas'
import {
    MenuHamburLimpiezaSuavizantesRopa
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaSuavizantesRopa'
import { MenuHamburLimpiezaAprestos } from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaAprestos'
import {
    MenuHamburLimpiezaPerfumantesTela
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPerfumantesTela'
import {
    MenuHamburLimpiezaCuidadoCalzado
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaCuidadoCalzado'
import {
    MenuHamburLimpiezaLimpiezaHogar
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaHogar'
import {
    MenuHamburLimpiezaLimpiadoresPiso
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiadoresPiso'
import {
    MenuHamburLimpiezaAutobrillosCerasPisos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaAutobrillosCerasPisos'
import {
    MenuHamburLimpiezaLimpiavidrios
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiavidrios'
import {
    MenuHamburLimpiezaLustramuebles
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLustramuebles'
import {
    MenuHamburLimpiezaInsecticidas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaInsecticidas'
import {
    MenuHamburLimpiezaLimpiezaCocina
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaCocina'
import {
    MenuHamburLimpiezaDetergentes
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDetergentes'
import {
    MenuHamburLimpiezaLimpiadoresLiquidos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiadoresLiquidos'
import {
    MenuHamburLimpiezaLimpiadoresCremosos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiadoresCremosos'
import {
    MenuHamburLimpiezaParaLavavajillas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaParaLavavajillas'
import {
    MenuHamburLimpiezaPalillosVelasFosforos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPalillosVelasFosforos'
import { MenuHamburLimpiezaLavandinas } from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLavandinas'
import {
    MenuHamburLimpiezaRollosCocinaServilletas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaRollosCocinaServilletas'
import {
    MenuHamburLimpiezaPapelesHigienicos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPapelesHigienicos'
import {
    MenuHamburLimpiezaLimpiezaBanio
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaBanio'
import {
    MenuHamburLimpiezaLimpiadoresBanio
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiadoresBanio'
import {
    MenuHamburLimpiezaCanastasBloques
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaCanastasBloques'
import {
    MenuHamburLimpiezaDesodorantesAmbiente
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDesodorantesAmbiente'
import {
    MenuHamburLimpiezaDifusoresRepuestos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDifusoresRepuestos'
import {
    MenuHamburLimpiezaAntihumedad
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaAntihumedad'
import {
    MenuHamburLimpiezaDesodorantesDesinfectantes
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDesodorantesDesinfectantes'
import {
    MenuHamburLimpiezaArticulosLimpieza
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaArticulosLimpieza'
import {
    MenuHamburLimpiezaBaldesPalanganas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaBaldesPalanganas'
import {
    MenuHamburLimpiezaCestosBasuras
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaCestosBasuras'
import {
    MenuHamburLimpiezaBolsasResiduos
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaBolsasResiduos'
import {
    MenuHamburLimpiezaEscobasSecadoresPalas
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaEscobasSecadoresPalas'
import {
    MenuHamburLimpiezaTraposPanios
} from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaTraposPanios'
import { MenuHamburLimpiezaEsponjas } from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaEsponjas'
import { MenuHamburLimpiezaGuantes } from '../pageObjectModel/MenuHamburguesa/Limpieza/MenuHamburLimpiezaGuantes'



const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    loginPage: LoginPage
    profilePage: ProfilePage
    mainPageAndAcceptCookies: MainPageAndAcceptCookies

    tiendaRetiroDrive: TiendaRetiroDrive
    seleccionaTienda: SeleccionaTienda
    seleccionaTiendaBotonContinuar: SeleccionaTiendaBotonContinuar
    retiroDriveSuperProv: RetiroDriveSuperProv
    retiroDriveSuperProvCiudAutonoBsAs: RetiroDriveSuperProvCiudAutonoBsAs
    retiroDriveSuperProvCiudAutonoBsAsPartido: RetiroDriveSuperProvCiudAutonoBsAsPartido
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia: RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin: RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin
    retiroDriveSuperCiudAutonoBsAsAgronomiaHSanMartin: RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto: RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza: RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza

    menuHamburguesa: MenuHamburguesa
    menuHamburAlmacen: MenuHamburAlmacen
    menuHamburAlmacenAceitesAerosol: MenuHamburAlmacenAceitesAerosol
    menuHamburAlmacenAceitesComunes: MenuHamburAlmacenAceitesComunes
    menuHamburAlmacenAceitesEspeciales: MenuHamburAlmacenAceitesEspeciales
    menuHamburAlmacenAceitesOliva: MenuHamburAlmacenAceitesOliva
    menuHamburguesaAlmacenAceitesVinagres: MenuHamburguesaAlmacenAceitesVinagres
    menuHamburAlmacenAceitunasEncurtidos: MenuHamburAlmacenAceitunasEncurtidos
    menuHamburAlmacenArroz: MenuHamburAlmacenArroz
    menuHamburAlmacenArrozLegumbres: MenuHamburAlmacenArrozLegumbres
    menuHamburAlmacenAvena: MenuHamburAlmacenAvena
    menuHamburAlmacenCaldos: MenuHamburAlmacenCaldos
    menuHamburAlmacenCaldosSopasPure: MenuHamburAlmacenCaldosSopasPure
    menuHamburAlmacenCoberturasRellenosSalsas: MenuHamburAlmacenCoberturasRellenosSalsas
    menuHamburAlmacenComplementos: MenuHamburAlmacenComplementos
    menuHamburAlmacenConservasFrutas: MenuHamburAlmacenConservasFrutas
    menuHamburAlmacenConservasLegumbresVegetales: MenuHamburAlmacenConservasLegumbresVegetales
    menuHamburAlmacenConservasPescado: MenuHamburAlmacenConservasPescado
    menuHamburAlmacenConservasSalsasTomate: MenuHamburAlmacenConservasSalsasTomate
    menuHamburAlmacenEnlatadosConservas: MenuHamburAlmacenEnlatadosConservas
    menuHamburAlmacenFideosGuiserosParaSopas: MenuHamburAlmacenFideosGuiserosParaSopas
    menuHamburAlmacenFideosLargos: MenuHamburAlmacenFideosLargos
    menuHamburAlmacenGelatinas: MenuHamburAlmacenGelatinas
    menuHamburAlmacenHarinas: MenuHamburAlmacenHarinas
    menuHamburAlmacenHarinasComunesLeudantes: MenuHamburAlmacenHarinasComunesLeudantes
    menuHamburAlmacenHierbasSecasEspecias: MenuHamburAlmacenHierbasSecasEspecias
    menuHamburAlmacenLegumbres: MenuHamburAlmacenLegumbres
    menuHamburAlmacenNachosManiPalitos: MenuHamburAlmacenNachosManiPalitos
    menuHamburAlmacenOtrasHarinas: MenuHamburAlmacenOtrasHarinas
    menuHamburAlmacenOtrosSnacksSalados: MenuHamburAlmacenOtrosSnacksSalados
    menuHamburAlmacenPapasFritasSnacksMaiz: MenuHamburAlmacenPapasFritasSnacksMaiz
    menuHamburAlmacenPastasSecas: MenuHamburAlmacenPastasSecas
    menuHamburAlmacenPastasSecasRellenasListas: MenuHamburAlmacenPastasSecasRellenasListas
    menuHamburAlmacenPicadillosPate: MenuHamburAlmacenPicadillosPate
    menuHamburAlmacenPostresFlanes: MenuHamburAlmacenPostresFlanes
    menuHamburAlmacenPremezclasDulces: MenuHamburAlmacenPremezclasDulces
    menuHamburAlmacenPremezclasSaladas: MenuHamburAlmacenPremezclasSaladas
    menuHamburAlmacenPuresInstantaneos: MenuHamburAlmacenPuresInstantaneos
    menuHamburAlmacenReposteriaPostres: MenuHamburAlmacenReposteriaPostres
    menuHamburAlmacenSaborizadores: MenuHamburAlmacenSaborizadores
    menuHamburAlmacenSal: MenuHamburAlmacenSal
    menuHamburAlmacenSalAderezosSaborizadores: MenuHamburAlmacenSalAderezosSaborizadores
    menuHamburAlmacenSalsasAderezos: MenuHamburAlmacenSalsasAderezos
    menuHamburAlmacenSemillas: MenuHamburAlmacenSemillas
    menuHamburAlmacenSnacks: MenuHamburAlmacenSnacks
    menuHamburAlmacenSopas: MenuHamburAlmacenSopas
    menuHamburAlmacenTapasAlfajoresMerengues: MenuHamburAlmacenTapasAlfajoresMerengues
    menuHamburAlmacenVinagresAcetosLimon: MenuHamburAlmacenVinagresAcetosLimon
    menuHamburBazarTextil: MenuHamburBazarTextil
    menuHamburBazarTextilAccesoriosAuto: MenuHamburBazarTextilAccesoriosAuto
    menuHamburBazarTextilAccesoriosFerreteria: MenuHamburBazarTextilAccesoriosFerreteria
    menuHamburBazarTextilAccesoriosLibreria: MenuHamburBazarTextilAccesoriosLibreria
    menuHamburBazarTextilAdhesivos: MenuHamburBazarTextilAdhesivos
    menuHamburBazarTextilAdultos: MenuHamburBazarTextilAdultos
    menuHamburBazarTextilAireLibre: MenuHamburBazarTextilAireLibre
    menuHamburBazarTextilAlarguesEnchufes: MenuHamburBazarTextilAlarguesEnchufes
    menuHamburBazarTextilAlmohadasAlmohadones: MenuHamburBazarTextilAlmohadasAlmohadones
    menuHamburBazarTextilAutoayuda: MenuHamburBazarTextilAutoayuda
    menuHamburBazarTextilAutomotor: MenuHamburBazarTextilAutomotor
    menuHamburBazarTextilAutosPistasJuguete: MenuHamburBazarTextilAutosPistasJuguete
    menuHamburBazarTextilBanio: MenuHamburBazarTextilBanio
    menuHamburBazarTextilBebes: MenuHamburBazarTextilBebes
    menuHamburBazarTextilBibliotecasOrganizadores: MenuHamburBazarTextilBibliotecasOrganizadores
    menuHamburBazarTextilBicicletas: MenuHamburBazarTextilBicicletas
    menuHamburBazarTextilBlocksDibujoCartulinas: MenuHamburBazarTextilBlocksDibujoCartulinas
    menuHamburBazarTextilBolsosValijas: MenuHamburBazarTextilBolsosValijas
    menuHamburBazarTextilCamasMesasLuz: MenuHamburBazarTextilCamasMesasLuz
    menuHamburBazarTextilCamping: MenuHamburBazarTextilCamping
    menuHamburBazarTextilCarpetasRepuestosFolios: MenuHamburBazarTextilCarpetasRepuestosFolios
    menuHamburBazarTextilCocinaComedor: MenuHamburBazarTextilCocinaComedor
    menuHamburBazarTextilColchonesSommiers: MenuHamburBazarTextilColchonesSommiers
    menuHamburBazarTextilConstruccion: MenuHamburBazarTextilConstruccion
    menuHamburBazarTextilCotillon: MenuHamburBazarTextilCotillon
    menuHamburBazarTextilCuadernos: MenuHamburBazarTextilCuadernos
    menuHamburBazarTextilCubiertaAutos: MenuHamburBazarTextilCubiertaAutos
    menuHamburBazarTextilCubiertosUtensilios: MenuHamburBazarTextilCubiertosUtensilios
    menuHamburBazarTextilDecoOrganizacion: MenuHamburBazarTextilDecoOrganizacion
    menuHamburBazarTextilDecoracion: MenuHamburBazarTextilDecoracion
    menuHamburBazarTextilDeporte: MenuHamburBazarTextilDeporte
    menuHamburBazarTextilDormitorio: MenuHamburBazarTextilDormitorio
    menuHamburBazarTextilEcoAmigable: MenuHamburBazarTextilEcoAmigable
    menuHamburBazarTextilEntretenimiento: MenuHamburBazarTextilEntretenimiento
    menuHamburBazarTextilFerreteriaPintura: MenuHamburBazarTextilFerreteriaPintura
    menuHamburBazarTextilHermeticosFrascos: MenuHamburBazarTextilHermeticosFrascos
    menuHamburBazarTextilHerramientasEscaleras: MenuHamburBazarTextilHerramientasEscaleras
    menuHamburBazarTextilHerramientasJardin: MenuHamburBazarTextilHerramientasJardin
    menuHamburBazarTextilHoverboardsMonopatines: MenuHamburBazarTextilHoverboardsMonopatines
    menuHamburBazarTextilHumanidades: MenuHamburBazarTextilHumanidades
    menuHamburBazarTextilIndumentaria: MenuHamburBazarTextilIndumentaria
    menuHamburBazarTextilInfantilesJuveniles: MenuHamburBazarTextilInfantilesJuveniles
    menuHamburBazarTextilJuegosAireLibre: MenuHamburBazarTextilJuegosAireLibre
    menuHamburBazarTextilJuegosDidacticos: MenuHamburBazarTextilJuegosDidacticos
    menuHamburBazarTextilJuegosMesa: MenuHamburBazarTextilJuegosMesa
    menuHamburBazarTextilJuegosVerano: MenuHamburBazarTextilJuegosVerano
    menuHamburBazarTextilJugueteriaCarrefour: MenuHamburBazarTextilJugueteriaCarrefour
    menuHamburBazarTextilLamparitas: MenuHamburBazarTextilLamparitas
    menuHamburBazarTextilLanzadores: MenuHamburBazarTextilLanzadores
    menuHamburBazarTextilLapicerasLapices: MenuHamburBazarTextilLapicerasLapices
    menuHamburBazarTextilLibreria: MenuHamburBazarTextilLibreria
    menuHamburBazarTextilLibreriaArtistica: MenuHamburBazarTextilLibreriaArtistica
    menuHamburBazarTextilLibros: MenuHamburBazarTextilLibros
    menuHamburBazarTextilLimpiezaAutos: MenuHamburBazarTextilLimpiezaAutos
    menuHamburBazarTextilLimpiezaPiletas: MenuHamburBazarTextilLimpiezaPiletas
    menuHamburBazarTextilLiteraturaFiccion: MenuHamburBazarTextilLiteraturaFiccion
    menuHamburBazarTextilLubricantesAditivos: MenuHamburBazarTextilLubricantesAditivos
    menuHamburBazarTextilLucesEmergenciaIluminacion: MenuHamburBazarTextilLucesEmergenciaIluminacion
    menuHamburBazarTextilMantelesAccesoriosCocina: MenuHamburBazarTextilMantelesAccesoriosCocina
    menuHamburBazarTextilMaquinasGimnasio: MenuHamburBazarTextilMaquinasGimnasio
    menuHamburBazarTextilMesasEscritorios: MenuHamburBazarTextilMesasEscritorios
    menuHamburBazarTextilMesasJuegosJardin: MenuHamburBazarTextilMesasJuegosJardin
    menuHamburguesaBazarTextilMuebles: MenuHamburguesaBazarTextilMuebles
    menuHamburBazarTextilMuniecosMuniecas: MenuHamburBazarTextilMuniecosMuniecas
    menuHamburBazarTextilNiniosNinias: MenuHamburBazarTextilNiniosNinias
    menuHamburBazarTextilOllasSartenesFuentes: MenuHamburBazarTextilOllasSartenesFuentes
    menuHamburBazarTextilOrganizacion: MenuHamburBazarTextilOrganizacion
    menuHamburBazarTextilOtrosGeneros: MenuHamburBazarTextilOtrosGeneros
    menuHamburBazarTextilPapelesCocinaBolsas: MenuHamburBazarTextilPapelesCocinaBolsas
    menuHamburBazarTextilParaColorear: MenuHamburBazarTextilParaColorear
    menuHamburBazarTextilParasolesSombrillas: MenuHamburBazarTextilParasolesSombrillas
    menuHamburBazarTextilParrillas: MenuHamburBazarTextilParrillas
    menuHamburBazarTextilPeluches: MenuHamburBazarTextilPeluches
    menuHamburBazarTextilPilas: MenuHamburBazarTextilPilas
    menuHamburBazarTextilPiletasInflables: MenuHamburBazarTextilPiletasInflables
    menuHamburBazarTextilPinturas: MenuHamburBazarTextilPinturas
    menuHamburBazarTextilResmasArticulosOficina: MenuHamburBazarTextilResmasArticulosOficina
    menuHamburBazarTextilSabanasFrazadas: MenuHamburBazarTextilSabanasFrazadas
    menuHamburBazarTextilSillasBanquetas: MenuHamburBazarTextilSillasBanquetas
    menuHamburBazarTextilSillasReposerasHamacas: MenuHamburBazarTextilSillasReposerasHamacas
    menuHamburBazarTextilSillones: MenuHamburBazarTextilSillones
    menuHamburBazarTextilTermosMates: MenuHamburBazarTextilTermosMates
    menuHamburBazarTextilTiempoLibreDeportes: MenuHamburBazarTextilTiempoLibreDeportes
    menuHamburBazarTextilToallasToallones: MenuHamburBazarTextilToallasToallones
    menuHamburBazarTextilVajilla: MenuHamburBazarTextilVajilla
    menuHamburBazarTextilVajillaInfantil: MenuHamburBazarTextilVajillaInfantil
    menuHamburBazarTextilVasosCopas: MenuHamburBazarTextilVasosCopas
    menuHamburBebidas: MenuHamburBebidas
    menuHamburBebidasAguas: MenuHamburBebidasAguas
    menuHamburBebidasAguasMineralesMesa: MenuHamburBebidasAguasMineralesMesa
    menuHamburBebidasAguasSaborizadas: MenuHamburBebidasAguasSaborizadas
    menuHamburBebidasAperitivosConAlcohol: MenuHamburBebidasAperitivosConAlcohol
    menuHamburBebidasVerTodo: MenuHamburBebidasVerTodo
    menuHamburBazarTextilVerTodo: MenuHamburBazarTextilVerTodo
    menuHamburAlmacenVerTodo: MenuHamburAlmacenVerTodo
    menuHamburBebidasAperitivosSinAlcohol: MenuHamburBebidasAperitivosSinAlcohol
    menuHamburBebidasBebidasBlancas: MenuHamburBebidasBebidasBlancas
    menuHamburBebidasBebidasEnergizantes: MenuHamburBebidasBebidasEnergizantes
    menuHamburBebidasBebidasIsotonicas: MenuHamburBebidasBebidasIsotonicas
    menuHamburguesaBebidasCervezas: MenuHamburguesaBebidasCervezas
    menuHamburBebidasEspumantes: MenuHamburBebidasEspumantes
    menuHamburBebidasEspumantesSidras: MenuHamburBebidasEspumantesSidras
    menuHamburBebidasFernet: MenuHamburBebidasFernet
    menuHamburBebidasFernetAperitivos: MenuHamburBebidasFernetAperitivos
    menuHamburBebidasFrizzantes: MenuHamburBebidasFrizzantes
    menuHamburBebidasGaseosas: MenuHamburBebidasGaseosas
    menuHamburBebidasGaseosasCola: MenuHamburBebidasGaseosasCola
    menuHamburBebidasGaseosasLimon: MenuHamburBebidasGaseosasLimon
    menuHamburBebidasGaseosasNaranja: MenuHamburBebidasGaseosasNaranja
    menuHamburBebidasGaseosasPomelo: MenuHamburBebidasGaseosasPomelo
    menuHamburBebidasGaseosasTonicasOtras: MenuHamburBebidasGaseosasTonicasOtras
    menuHamburBebidasGin: MenuHamburBebidasGin
    menuHamburBebidasJugos: MenuHamburBebidasJugos
    menuHamburBebidasJugosConcentrados: MenuHamburBebidasJugosConcentrados
    menuHamburBebidasJugosListos: MenuHamburBebidasJugosListos
    menuHamburBebidasJugosPolvo: MenuHamburBebidasJugosPolvo
    menuHamburBebidasLicores: MenuHamburBebidasLicores
    menuHamburBebidasOtrasEspirituosas: MenuHamburBebidasOtrasEspirituosas
    menuHamburBebidasRon: MenuHamburBebidasRon
    menuHamburBebidasSidras: MenuHamburBebidasSidras
    menuHamburBebidasVinos: MenuHamburBebidasVinos
    menuHamburBebidasVinosBlancos: MenuHamburBebidasVinosBlancos
    menuHamburBebidasVinosGenerosos: MenuHamburBebidasVinosGenerosos
    menuHamburBebidasVinosRosados: MenuHamburBebidasVinosRosados
    menuHamburBebidasVinosTintos: MenuHamburBebidasVinosTintos
    menuHamburBebidasVodka: MenuHamburBebidasVodka
    menuHamburBebidasWhisky: MenuHamburBebidasWhisky
    menuHamburCarnesPescados: MenuHamburCarnesPescados
    menuHamburCarnesPescadosAchurasEmbutidos: MenuHamburCarnesPescadosAchurasEmbutidos
    menuHamburCarnesPescadosVerTodo: MenuHamburCarnesPescadosVerTodo
    menuHamburCarnesPescadosCarbonEncendido: MenuHamburCarnesPescadosCarbonEncendido
    menuHamburCarnesPescadosCarneCerdo: MenuHamburCarnesPescadosCarneCerdo
    menuHamburCarnesPescadosCarneVacuna: MenuHamburCarnesPescadosCarneVacuna
    menuHamburCarnesPescadosPescadosMariscos: MenuHamburCarnesPescadosPescadosMariscos
    menuHamburCarnesPescadosPolloGranja: MenuHamburCarnesPescadosPolloGranja
    menuHamburCongeladosVerTodos: MenuHamburCongeladosVerTodos
    menuHamburCongeladosHamburguesas: MenuHamburCongeladosHamburguesas
    menuHamburCongelados: MenuHamburCongelados
    menuHamburDesayunoMerienda: MenuHamburDesayunoMerienda
    menuHamburDesayunoMeriendaVerTodo: MenuHamburDesayunoMeriendaVerTodo
    menuHamburDesayunoMeriendaAlfajores: MenuHamburDesayunoMeriendaAlfajores
    menuHamburDesayunoMeriendaAzucar: MenuHamburDesayunoMeriendaAzucar
    menuHamburDesayunoMeriendaAzucarEndulzantes: MenuHamburDesayunoMeriendaAzucarEndulzantes
    menuHamburDesayunoMeriendaBarritasCereales: MenuHamburDesayunoMeriendaBarritasCereales
    menuHamburDesayunoMeriendaBizcochitos: MenuHamburDesayunoMeriendaBizcochitos
    menuHamburDesayunoMeriendaBocaditosConfitesTurrones: MenuHamburDesayunoMeriendaBocaditosConfitesTurrones
    menuHamburDesayunoMeriendaBudinesBizcochuelos: MenuHamburDesayunoMeriendaBudinesBizcochuelos
    menuHamburDesayunoMeriendaBudinesMagdalenas: MenuHamburDesayunoMeriendaBudinesMagdalenas
    menuHamburDesayunoMeriendaCacao:MenuHamburDesayunoMeriendaCacao
    menuHamburDesayunoMeriendaCafe: MenuHamburDesayunoMeriendaCafe
    menuHamburDesayunoMeriendaCafeInstantaneo: MenuHamburDesayunoMeriendaCafeInstantaneo
    menuHamburDesayunoMeriendaCafeMolidoGrano: MenuHamburDesayunoMeriendaCafeMolidoGrano
    menuHamburDesayunoMeriendaCapsulasCafe: MenuHamburDesayunoMeriendaCapsulasCafe
    menuHamburDesayunoMeriendaCaramelosGomitasChupetines: MenuHamburDesayunoMeriendaCaramelosGomitasChupetines
    menuHamburDesayunoMeriendaCereales: MenuHamburDesayunoMeriendaCereales
    menuHamburDesayunoMeriendaCerealesBarritas: MenuHamburDesayunoMeriendaCerealesBarritas
    menuHamburDesayunoMeriendaChicles: MenuHamburDesayunoMeriendaChicles
    menuHamburDesayunoMeriendaChocolates: MenuHamburDesayunoMeriendaChocolates
    menuHamburDesayunoMeriendaEdulcorantesEndulzantes: MenuHamburDesayunoMeriendaEdulcorantesEndulzantes
    menuHamburDesayunoMeriendaFiltrosCafe: MenuHamburDesayunoMeriendaFiltrosCafe
    menuHamburDesayunoMeriendaGalletasArroz: MenuHamburDesayunoMeriendaGalletasArroz
    menuHamburDesayunoMeriendaGalletitasAgua: MenuHamburDesayunoMeriendaGalletitasAgua
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
    menuHamburDesayunoMeriendaGalletitasDulces: MenuHamburDesayunoMeriendaGalletitasDulces
    menuHamburDesayunoMeriendaGolosinasChocolates: MenuHamburDesayunoMeriendaGolosinasChocolates
    menuHamburDesayunoMeriendaGranola: MenuHamburDesayunoMeriendaGranola
    menuHamburDesayunoMeriendaInfusiones: MenuHamburDesayunoMeriendaInfusiones
    menuHamburDesayunoMeriendaMagdalenas: MenuHamburDesayunoMeriendaMagdalenas
    menuHamburDesayunoMeriendaMateCocido: MenuHamburDesayunoMeriendaMateCocido
    menuHamburDesayunoMeriendaMermeladasDulcesJaleas: MenuHamburDesayunoMeriendaMermeladasDulcesJaleas
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: MenuHamburDesayunoMeriendaMermeladasOtrosDulces
    menuHamburDesayunoMeriendaMiel: MenuHamburDesayunoMeriendaMiel
    menuHamburDesayunoMeriendaPastaManiCremaAvellanas: MenuHamburDesayunoMeriendaPastaManiCremaAvellanas
    menuHamburDesayunoMeriendaTe: MenuHamburDesayunoMeriendaTe
    menuHamburDesayunoMeriendaTostadasGrisinesMarineras: MenuHamburDesayunoMeriendaTostadasGrisinesMarineras
    menuHamburDesayunoMeriendaYerba: MenuHamburDesayunoMeriendaYerba
    menuHamburDestacados: MenuHamburDestacados
    menuHamburDestacadosAlmacen: MenuHamburDestacadosAlmacen
    menuHamburDestacadosBajoSodioSinSal: MenuHamburDestacadosBajoSodioSinSal
    menuHamburDestacadosBangho: MenuHamburDestacadosBangho
    menuHamburDestacadosBebidas: MenuHamburDestacadosBebidas
    menuHamburDestacadosBGH: MenuHamburDestacadosBGH
    menuHamburDestacadosCeven: MenuHamburDestacadosCeven
    menuHamburDestacadosCongelados: MenuHamburDestacadosCongelados
    menuHamburDestacadosDecohogar: MenuHamburDestacadosDecohogar
    menuHamburDestacadosDesayunoMerienda: MenuHamburDestacadosDesayunoMerienda
    menuHamburDestacadosDietetica: MenuHamburDestacadosDietetica
    menuHamburDestacadosElectro: MenuHamburDestacadosElectro
    menuHamburDestacadosElectrolux: MenuHamburDestacadosElectrolux
    menuHamburDestacadosEspecialGamer: MenuHamburDestacadosEspecialGamer
    menuHamburDestacadosGolosinasSnacks: MenuHamburDestacadosGolosinasSnacks
    menuHamburDestacadosHogarBazar: MenuHamburDestacadosHogarBazar
    menuHamburDestacadosHuellaNatural: MenuHamburDestacadosHuellaNatural
    menuHamburDestacadosLacteosProductosFrescos: MenuHamburDestacadosLacteosProductosFrescos
    menuHamburDestacadosLimpieza: MenuHamburDestacadosLimpieza
    menuHamburDestacadosMascotas: MenuHamburDestacadosMascotas
    menuHamburDestacadosMundoBebe: MenuHamburDestacadosMundoBebe
    menuHamburDestacadosNuevosProductos: MenuHamburDestacadosNuevosProductos
    menuHamburDestacadosOrganico: MenuHamburDestacadosOrganico
    menuHamburDestacadosPanaderia: MenuHamburDestacadosPanaderia
    menuHamburDestacadosPerfumeria: MenuHamburDestacadosPerfumeria
    menuHamburDestacadosProductosCarrefour: MenuHamburDestacadosProductosCarrefour
    menuHamburDestacadosProductosExclusivosOnline: MenuHamburDestacadosProductosExclusivosOnline
    menuHamburDestacadosPuntoDeportivo: MenuHamburDestacadosPuntoDeportivo
    menuHamburDestacadosQuesosFiambres: MenuHamburDestacadosQuesosFiambres
    menuHamburDestacadosReducidoSinAzucar: MenuHamburDestacadosReducidoSinAzucar
    menuHamburDestacadosReducidoSinLactosa: MenuHamburDestacadosReducidoSinLactosa
    menuHamburDestacadosSinGluten: MenuHamburDestacadosSinGluten
    menuHamburDestacadosSinTACC: MenuHamburDestacadosSinTACC
    menuHamburDestacadosVeganoVegetariano: MenuHamburDestacadosVeganoVegetariano
    menuHamburDestacadosVersusGaming: MenuHamburDestacadosVersusGaming
    menuHamburDestacadosWhirlpool: MenuHamburDestacadosWhirlpool
    menuHamburElectroTecnologia: MenuHamburElectroTecnologia
    menuHamburElectroTecnologiaAccesoriosCelulares: MenuHamburElectroTecnologiaAccesoriosCelulares
    menuHamburElectroTecnologiaVerTodo: MenuHamburElectroTecnologiaVerTodo
    menuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo: MenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo
    menuHamburElectroTecnologiaAiresAcondicionados: MenuHamburElectroTecnologiaAiresAcondicionados
    menuHamburElectroTecnologiaAnafes: MenuHamburElectroTecnologiaAnafes
    menuHamburElectroTecnologiaAspiradoras: MenuHamburElectroTecnologiaAspiradoras
    menuHamburElectroTecnologiaAudio: MenuHamburElectroTecnologiaAudio
    menuHamburElectroTecnologiaAudioAutos: MenuHamburElectroTecnologiaAudioAutos
    menuHamburElectroTecnologiaAuriculares: MenuHamburElectroTecnologiaAuriculares
    menuHamburElectroTecnologiaAccesoriosInformatica: MenuHamburElectroTecnologiaAccesoriosInformatica
    menuHamburElectroTecnologiaBatidoras: MenuHamburElectroTecnologiaBatidoras
    menuHamburElectroTecnologiaBienestarSexual: MenuHamburElectroTecnologiaBienestarSexual
    menuHamburElectroTecnologiaCafeteras: MenuHamburElectroTecnologiaCafeteras
    menuHamburElectroTecnologiaCalefaccionElectrica: MenuHamburElectroTecnologiaCalefaccionElectrica
    menuHamburElectroTecnologiaCalefaccionGas: MenuHamburElectroTecnologiaCalefaccionGas
    menuHamburElectroTecnologiaCalefaccionLenia: MenuHamburElectroTecnologiaCalefaccionLenia
    menuHamburElectroTecnologiaCalefones: MenuHamburElectroTecnologiaCalefones
    menuHamburElectroTecnologiaCamarasSeguridad: MenuHamburElectroTecnologiaCamarasSeguridad
    menuHamburElectroTecnologiaCampanasPurificadores: MenuHamburElectroTecnologiaCampanasPurificadores
    menuHamburElectroTecnologiaCavas: MenuHamburElectroTecnologiaCavas
    menuHamburElectroTecnologiaCelulares: MenuHamburElectroTecnologiaCelulares
    menuHamburElectroTecnologiaCelularesLibres: MenuHamburElectroTecnologiaCelularesLibres
    menuHamburElectroTecnologiaClimatizacion: MenuHamburElectroTecnologiaClimatizacion
    menuHamburElectroTecnologiaCoccion: MenuHamburElectroTecnologiaCoccion
    menuHamburElectroTecnologiaCocinas: MenuHamburElectroTecnologiaCocinas
    menuHamburElectroTecnologiaCocinasHornos: MenuHamburElectroTecnologiaCocinasHornos
    menuHamburElectroTecnologiaConsolasJoysticks: MenuHamburElectroTecnologiaConsolasJoysticks
    menuHamburElectroTecnologiaCuidadoPersonalSalud: MenuHamburElectroTecnologiaCuidadoPersonalSalud
    menuHamburElectroTecnologiaDepiladoras: MenuHamburElectroTecnologiaDepiladoras
    menuHamburElectroTecnologiaEquiposSonido: MenuHamburElectroTecnologiaEquiposSonido
    menuHamburElectroTecnologiaFreezers: MenuHamburElectroTecnologiaFreezers
    menuHamburElectroTecnologiaGaming: MenuHamburElectroTecnologiaGaming
    menuHamburElectroTecnologiaHeladeras: MenuHamburElectroTecnologiaHeladeras
    menuHamburElectroTecnologiaHeladerasFreezers: MenuHamburElectroTecnologiaHeladerasFreezers
    menuHamburElectroTecnologiaHornos: MenuHamburElectroTecnologiaHornos
    menuHamburElectroTecnologiaImpresorasCartuchos: MenuHamburElectroTecnologiaImpresorasCartuchos
    menuHamburElectroTecnologiaInformaticaGaming: MenuHamburElectroTecnologiaInformaticaGaming
    menuHamburElectroTecnologiaJarrasElectricas: MenuHamburElectroTecnologiaJarrasElectricas
    menuHamburElectroTecnologiaJuguerasExprimidores: MenuHamburElectroTecnologiaJuguerasExprimidores
    menuHamburElectroTecnologiaLavado: MenuHamburElectroTecnologiaLavado
    menuHamburElectroTecnologiaLavasecarropas: MenuHamburElectroTecnologiaLavasecarropas
    menuHamburElectroTecnologiaLavavajillas: MenuHamburElectroTecnologiaLavavajillas
    menuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras: MenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras
    menuHamburElectroTecnologiaMaquinasCoser: MenuHamburElectroTecnologiaMaquinasCoser
    menuHamburElectroTecnologiaMicroondas: MenuHamburElectroTecnologiaMicroondas
    menuHamburElectroTecnologiaMonitores: MenuHamburElectroTecnologiaMonitores
    menuHamburElectroTecnologiaNotebooksPC: MenuHamburElectroTecnologiaNotebooksPC
    menuHamburElectroTecnologiaParlantesPortatiles: MenuHamburElectroTecnologiaParlantesPortatiles
    menuHamburElectroTecnologiaPequeniosElectrodomesticos: MenuHamburElectroTecnologiaPequeniosElectrodomesticos
    menuHamburElectroTecnologiaPlanchas: MenuHamburElectroTecnologiaPlanchas
    menuHamburElectroTecnologiaPlanchitasPelo: MenuHamburElectroTecnologiaPlanchitasPelo
    menuHamburElectroTecnologiaRadios: MenuHamburElectroTecnologiaRadios
    menuHamburElectroTecnologiaSaludBienestar: MenuHamburElectroTecnologiaSaludBienestar
    menuHamburElectroTecnologiaSecadoresPelo: MenuHamburElectroTecnologiaSecadoresPelo
    menuHamburElectroTecnologiaSecarropas: MenuHamburElectroTecnologiaSecarropas
    menuHamburElectroTecnologiaSmartTV: MenuHamburElectroTecnologiaSmartTV
    menuHamburElectroTecnologiaSmartTVs: MenuHamburElectroTecnologiaSmartTVs
    menuHamburElectroTecnologiaSoportesAccesorios: MenuHamburElectroTecnologiaSoportesAccesorios
    menuHamburElectroTecnologiaTablets: MenuHamburElectroTecnologiaTablets
    menuHamburElectroTecnologiaTecladosMouse: MenuHamburElectroTecnologiaTecladosMouse
    menuHamburElectroTecnologiaTelefoFijosInalam: MenuHamburElectroTecnologiaTelefoFijosInalam
    menuHamburElectroTecnologiaTermotanquesCalefones: MenuHamburElectroTecnologiaTermotanquesCalefones
    menuHamburElectroTecnologiaTermotanquesElectricos: MenuHamburElectroTecnologiaTermotanquesElectricos
    menuHamburElectroTecnologiaTermotanquesGas: MenuHamburElectroTecnologiaTermotanquesGas
    menuHamburElectroTecnologiaTostadorasSandwicheras: MenuHamburElectroTecnologiaTostadorasSandwicheras
    menuHamburElectroTecnologiaVentiladClimatizad: MenuHamburElectroTecnologiaVentiladClimatizad
    toastTuUltimoCarritoHaSidoRecuperado: ToastTuUltimoCarritoHaSidoRecuperado
    menuHamburFrutasVerduras: MenuHamburFrutasVerduras
    menuHamburFrutasVerdurasFrutas: MenuHamburFrutasVerdurasFrutas
    menuHamburFrutasVerdurasVerTodos: MenuHamburFrutasVerdurasVerTodos
    menuHamburFrutasVerdurasFrutosSecos: MenuHamburFrutasVerdurasFrutosSecos
    menuHamburFrutasVerdurasVerduras: MenuHamburFrutasVerdurasVerduras
    menuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas: MenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas
    menuHamburLacteosProdsFrescos: MenuHamburLacteosProdsFrescos
    menuHamburLacteosProdsFrescosLechesDescremadas: MenuHamburLacteosProdsFrescosLechesDescremadas
    menuHamburLacteosProdsFrescosVerTodo: MenuHamburLacteosProdsFrescosVerTodo
    menuHamburIndumentaria: MenuHamburIndumentaria
    menuHamburIndumentariaVerTodos: MenuHamburIndumentariaVerTodos
    menuHamburLacteosProdsFrescosCremasDeLeche: MenuHamburLacteosProdsFrescosCremasDeLeche
    menuHamburLacteosProdsFrescosDulceDeLeche: MenuHamburLacteosProdsFrescosDulceDeLeche
    menuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces: MenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces
    menuHamburLacteosProdsFrescosFiambres: MenuHamburLacteosProdsFrescosFiambres
    menuHamburLacteosProdsFrescosFiambresFeteados: MenuHamburLacteosProdsFrescosFiambresFeteados
    menuHamburLacteosProdsFrescosHuevos: MenuHamburLacteosProdsFrescosHuevos
    menuHamburLacteosProdsFrescosLeches: MenuHamburLacteosProdsFrescosLeches
    menuHamburLacteosProdsFrescosLechesEnteras: MenuHamburLacteosProdsFrescosLechesEnteras
    menuHamburLacteosProdsFrescosLechesPolvo: MenuHamburLacteosProdsFrescosLechesPolvo
    menuHamburLacteosProdsFrescosLechesSaborizadas: MenuHamburLacteosProdsFrescosLechesSaborizadas
    menuHamburLacteosProdsFrescosLechesVegetales: MenuHamburLacteosProdsFrescosLechesVegetales
    menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras: MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras
    menuHamburLacteosProdsFrescosPostres: MenuHamburLacteosProdsFrescosPostres
    menuHamburLacteosProdsFrescosQuesos: MenuHamburLacteosProdsFrescosQuesos
    menuHamburLacteosProdsFrescosQuesosCremasUntables: MenuHamburLacteosProdsFrescosQuesosCremasUntables
    menuHamburLacteosProdsFrescosQuesosCremososMozzarellas: MenuHamburLacteosProdsFrescosQuesosCremososMozzarellas
    menuHamburLacteosProdsFrescosQuesosDurosSemiDuros: MenuHamburLacteosProdsFrescosQuesosDurosSemiDuros
    menuHamburLacteosProdsFrescosQuesosEspeciales: MenuHamburLacteosProdsFrescosQuesosEspeciales
    menuHamburLacteosProdsFrescosQuesosFeteados: MenuHamburLacteosProdsFrescosQuesosFeteados
    menuHamburLacteosProdsFrescosQuesosRalladosEnHebras: MenuHamburLacteosProdsFrescosQuesosRalladosEnHebras
    menuHamburLacteosProdsFrescosRicota: MenuHamburLacteosProdsFrescosRicota
    menuHamburLacteosProdsFrescosSalaminesEmbutidos: MenuHamburLacteosProdsFrescosSalaminesEmbutidos
    menuHamburLacteosProdsFrescosSalchichas: MenuHamburLacteosProdsFrescosSalchichas
    menuHamburLacteosProdsFrescosTapasPastasFrescas: MenuHamburLacteosProdsFrescosTapasPastasFrescas
    menuHamburLacteosProdsFrescosYogures: MenuHamburLacteosProdsFrescosYogures
    menuHamburLacteosProdsFrescosYoguresDescremados: MenuHamburLacteosProdsFrescosYoguresDescremados
    menuHamburLacteosProdsFrescosYoguresEnteros: MenuHamburLacteosProdsFrescosYoguresEnteros
    menuHamburLimpieza: MenuHamburLimpieza
    menuHamburLimpiezaLimpiezaDeRopa: MenuHamburLimpiezaLimpiezaDeRopa
    menuHamburLimpiezaVerTodo: MenuHamburLimpiezaVerTodo
    menuHamburMascotas: MenuHamburMascotas
    menuHamburMascotasAlimentosSnacksPerros: MenuHamburMascotasAlimentosSnacksPerros
    menuHamburMascotasVerTodos: MenuHamburMascotasVerTodos
    menuHamburMundoBebe: MenuHamburMundoBebe
    menuHamburMundoBebePaniales: MenuHamburMundoBebePaniales
    menuHamburMundoBebeVerTodos: MenuHamburMundoBebeVerTodos
    menuHamburPanaderia: MenuHamburPanaderia
    menuHamburPanaderiaBizcochuelosPiononos: MenuHamburPanaderiaBizcochuelosPiononos
    menuHamburPanaderiaVerTodos: MenuHamburPanaderiaVerTodos
    menuHamburPanaderiaElaboracionCarrefour: MenuHamburPanaderiaElaboracionCarrefour
    menuHamburPanaderiaEspecialidadesDulces: MenuHamburPanaderiaEspecialidadesDulces
    menuHamburPanaderiaEspecialidadesSaladas: MenuHamburPanaderiaEspecialidadesSaladas
    menuHamburPanaderiaPanesLacteadosDeMesa: MenuHamburPanaderiaPanesLacteadosDeMesa
    menuHamburPanaderiaPanHamburguesasPanchos: MenuHamburPanaderiaPanHamburguesasPanchos
    menuHamburPanaderiaPanificados: MenuHamburPanaderiaPanificados
    menuHamburPanaderiaPanRalladoRebozadores: MenuHamburPanaderiaPanRalladoRebozadores
    menuHamburPanaderiaPizzasPrepizzas: MenuHamburPanaderiaPizzasPrepizzas
    menuHamburPanaderiaSandwichesEmpanadasTartas: MenuHamburPanaderiaSandwichesEmpanadasTartas
    menuHamburPanaderiaTortillas: MenuHamburPanaderiaTortillas
    menuHamburPerfumeria: MenuHamburPerfumeria
    menuHamburPerfumeriaCuidadoDelCabello: MenuHamburPerfumeriaCuidadoDelCabello
    menuHamburPerfumeriaVerTodos: MenuHamburPerfumeriaVerTodos
    lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt: LPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt
    urlLecheUATParciaDescCarrefourClassicBrik1Lt: UrlLecheUATParciaDescCarrefourClassicBrik1Lt
    urlProductosCarrito: UrlProductosCarrito
    carritoHome: CarritoHome
    modalSuscribite: ModalSuscribite
    onlyAcceptCookies: OnlyAcceptCookies
    mainHomePage: MainHomePage
    cerrarModalComoQueresRecibirCompra: CerrarModalComoQueresRecibirCompra
    carritoProductos: CarritoProductos
    urlCarrefour: UrlCarrefour
    carritoBotonPlusProductoUno: CarritoBotonPlusProductoUno
    carritoBotonFinalizarCompra: CarritoBotonFinalizarCompra
    menuHamburCongeladosNuggetsRebozados: MenuHamburCongeladosNuggetsRebozados
    menuHamburCongeladosPapas: MenuHamburCongeladosPapas
    menuHamburCongeladosVerdurasFrutas: MenuHamburCongeladosVerdurasFrutas
    menuHamburCongeladosComidasPanificados: MenuHamburCongeladosComidasPanificados
    menuHamburCongeladosHeladosPostres: MenuHamburCongeladosHeladosPostres
    menuHamburCongeladosPollos: MenuHamburCongeladosPollos
    menuHamburCongeladosPescadosMariscos: MenuHamburCongeladosPescadosMariscos
    menuHamburIndumentariaAdultos: MenuHamburIndumentariaAdultos
    menuHamburIndumentariaHombre: MenuHamburIndumentariaHombre
    menuHamburIndumentariaMujer: MenuHamburIndumentariaMujer
    menuHamburIndumentariaBebes: MenuHamburIndumentariaBebes
    menuHamburIndumentariaNiniosNinias: MenuHamburIndumentariaNiniosNinias
    menuHamburLimpiezaJabonesParaRopa: MenuHamburLimpiezaJabonesParaRopa
    menuHamburLimpiezaPrelavadoQuitamanchas: MenuHamburLimpiezaPrelavadoQuitamanchas
    menuHamburLimpiezaSuavizantesRopa: MenuHamburLimpiezaSuavizantesRopa
    menuHamburLimpiezaAprestos: MenuHamburLimpiezaAprestos
    menuHamburLimpiezaPerfumantesTela: MenuHamburLimpiezaPerfumantesTela
    menuHamburLimpiezaCuidadoCalzado: MenuHamburLimpiezaCuidadoCalzado
    menuHamburLimpiezaLimpiezaHogar: MenuHamburLimpiezaLimpiezaHogar
    menuHamburLimpiezaLimpiadoresPiso: MenuHamburLimpiezaLimpiadoresPiso
    menuHamburLimpiezaAutobrillosCerasPisos: MenuHamburLimpiezaAutobrillosCerasPisos
    menuHamburLimpiezaLimpiavidrios: MenuHamburLimpiezaLimpiavidrios
    menuHamburLimpiezaLustramuebles: MenuHamburLimpiezaLustramuebles
    menuHamburLimpiezaInsecticidas: MenuHamburLimpiezaInsecticidas
    menuHamburLimpiezaLimpiezaCocina: MenuHamburLimpiezaLimpiezaCocina
    menuHamburLimpiezaDetergentes: MenuHamburLimpiezaDetergentes
    menuHamburLimpiezaLimpiadoresLiquidos: MenuHamburLimpiezaLimpiadoresLiquidos
    menuHamburLimpiezaLimpiadoresCremosos: MenuHamburLimpiezaLimpiadoresCremosos
    menuHamburLimpiezaParaLavavajillas: MenuHamburLimpiezaParaLavavajillas
    menuHamburLimpiezaPalillosVelasFosforos: MenuHamburLimpiezaPalillosVelasFosforos
    menuHamburLimpiezaLavandinas: MenuHamburLimpiezaLavandinas
    menuHamburLimpiezaRollosCocinaServilletas :MenuHamburLimpiezaRollosCocinaServilletas
    menuHamburLimpiezaPapelesHigienicos: MenuHamburLimpiezaPapelesHigienicos
    menuHamburLimpiezaLimpiezaBanio: MenuHamburLimpiezaLimpiezaBanio
    menuHamburLimpiezaLimpiadoresBanio: MenuHamburLimpiezaLimpiadoresBanio
    menuHamburLimpiezaCanastasBloques: MenuHamburLimpiezaCanastasBloques
    menuHamburLimpiezaDesodorantesAmbiente: MenuHamburLimpiezaDesodorantesAmbiente
    menuHamburLimpiezaDifusoresRepuestos: MenuHamburLimpiezaDifusoresRepuestos
    menuHamburLimpiezaAntihumedad: MenuHamburLimpiezaAntihumedad
    menuHamburLimpiezaDesodorantesDesinfectantes: MenuHamburLimpiezaDesodorantesDesinfectantes
    menuHamburLimpiezaArticulosLimpieza: MenuHamburLimpiezaArticulosLimpieza
    menuHamburLimpiezaBaldesPalanganas: MenuHamburLimpiezaBaldesPalanganas
    menuHamburLimpiezaCestosBasuras: MenuHamburLimpiezaCestosBasuras
    menuHamburLimpiezaBolsasResiduos: MenuHamburLimpiezaBolsasResiduos
    menuHamburLimpiezaEscobasSecadoresPalas: MenuHamburLimpiezaEscobasSecadoresPalas
    menuHamburLimpiezaTraposPanios: MenuHamburLimpiezaTraposPanios
    menuHamburLimpiezaEsponjas: MenuHamburLimpiezaEsponjas
    menuHamburLimpiezaGuantes: MenuHamburLimpiezaGuantes

}>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context, environment)
        await use(loginPage)
    },

    mainPageAndAcceptCookies: async ({ page, context }, use) => {
        await use(new MainPageAndAcceptCookies(page, context, environment))
    },
    onlyAcceptCookies: async ({ page, context }, use) => {
        await use(new OnlyAcceptCookies(page, context, environment))
    },
    mainHomePage: async ({ page, context }, use) => {
        await use(new MainHomePage(page, context, environment))
    },
    urlCarrefour: async ({ page, context }, use) => {
        await use(new UrlCarrefour(page, context, environment))
    },




    // CARRITO
    toastTuUltimoCarritoHaSidoRecuperado: async ({ page, context }, use) => {
        await use(new ToastTuUltimoCarritoHaSidoRecuperado(page, context, environment))
    },
    urlProductosCarrito: async ({ page, context }, use) => {
        await use(new UrlProductosCarrito(page, context, environment))
    },
    carritoHome: async ({ page, context }, use) => {
        await use(new CarritoHome(page, context, environment))
    },
    cerrarModalComoQueresRecibirCompra: async ({ page, context }, use) => {
        await use(new CerrarModalComoQueresRecibirCompra(page, context, environment))
    },
    carritoProductos: async ({ page, context }, use) => {
        await use(new CarritoProductos(page, context, environment))
    },
    carritoBotonPlusProductoUno: async ({ page, context }, use) => {
        await use(new CarritoBotonPlusProductoUno(page, context, environment))
    },
    carritoBotonFinalizarCompra: async ({ page, context }, use) => {
        await use(new CarritoBotonFinalizarCompra(page, context, environment))
    },





    //MODALS
    modalSuscribite: async ({ page, context }, use) => {
        await use(new ModalSuscribite(page, context, environment))
    },


    //TIENDA - RETIRO O DRIVE
    seleccionaTienda: async ({ page, context }, use) => {
        await use(new SeleccionaTienda(page, context, environment))
    },
    seleccionaTiendaBotonContinuar: async ({ page, context }, use) => {
        await use(new SeleccionaTiendaBotonContinuar(page, context, environment))
    },
    tiendaRetiroDrive: async ({ page, context }, use) => {
        await use(new TiendaRetiroDrive(page, context, environment))
    },
    retiroDriveSuperProv: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProv(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAs: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAs(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAsPartido: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAsPartido(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomia(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHSanMartin(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVDevoto(page, context, environment))
    },
    retiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza: async ({ page, context }, use) => {
        await use(new RetiroDriveSuperProvCiudAutonoBsAsPartidoAgronomiaHVUrquiza(page, context, environment))
    },



    // MENU HAMBURGUESA - LACTEOS Y PRODUCTOS FRESCOS
    lPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt: async ({ page, context }, use) => {
        await use(new LPFVerTodosLecheUATParciaDescCarrefourClassicBrik1Lt(page, context, environment))
    },
    urlLecheUATParciaDescCarrefourClassicBrik1Lt: async ({ page, context }, use) => {
        await use(new UrlLecheUATParciaDescCarrefourClassicBrik1Lt(page, context, environment))
    },









    // MENU HAMBURGUESA
    menuHamburguesa: async ({ page, context }, use) => {
        await use(new MenuHamburguesa(page, context, environment))
    },
    menuHamburAlmacen: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacen(page, context, environment))
    },
    menuHamburBazarTextil: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextil(page, context, environment))
    },
    menuHamburBebidas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidas(page, context, environment))
    },
    menuHamburCarnesPescados: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescados(page, context, environment))
    },
    menuHamburCongelados: async ({ page, context }, use) => {
        await use(new MenuHamburCongelados(page, context, environment))
    },
    menuHamburDesayunoMerienda: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMerienda(page, context, environment))
    },
    menuHamburDestacados: async ({ page, context }, use) => {
        await use(new MenuHamburDestacados(page, context, environment))
    },
    menuHamburElectroTecnologia: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologia(page, context, environment))
    },
    menuHamburLacteosProdsFrescos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescos(page, context, environment))
    },
    menuHamburFrutasVerduras: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerduras(page, context, environment))
    },
    menuHamburLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpieza(page, context, environment))
    },
    menuHamburMascotas: async ({ page, context }, use) => {
        await use(new MenuHamburMascotas(page, context, environment))
    },
    menuHamburMundoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebe(page, context, environment))
    },
    menuHamburPanaderia: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderia(page, context, environment))
    },
    menuHamburPerfumeria: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeria(page, context, environment))
    },
    menuHamburIndumentaria: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentaria(page, context, environment))
    },






    // MENU HAMBURGUESA - INDUMENTARIAS
    menuHamburIndumentariaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaVerTodos(page, context, environment))
    },
    menuHamburIndumentariaAdultos: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaAdultos(page, context, environment))
    },
    menuHamburIndumentariaHombre: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaHombre(page, context, environment))
    },
    menuHamburIndumentariaMujer: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaMujer(page, context, environment))
    },
    menuHamburIndumentariaBebes: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaBebes(page, context, environment))
    },
    menuHamburIndumentariaNiniosNinias: async ({ page, context }, use) => {
        await use(new MenuHamburIndumentariaNiniosNinias(page, context, environment))
    },


    // MENU HAMBURGUESA - CONGELADOS
    menuHamburCongeladosVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosVerTodos(page, context, environment))
    },
    menuHamburCongeladosHamburguesas: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosHamburguesas(page, context, environment))
    },
    menuHamburCongeladosNuggetsRebozados: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosNuggetsRebozados(page, context, environment))
    },
    menuHamburCongeladosPapas: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosPapas(page, context, environment))
    },
    menuHamburCongeladosVerdurasFrutas: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosVerdurasFrutas(page, context, environment))
    },
    menuHamburCongeladosComidasPanificados: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosComidasPanificados(page, context, environment))
    },
    menuHamburCongeladosHeladosPostres: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosHeladosPostres(page, context, environment))
    },
    menuHamburCongeladosPollos: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosPollos(page, context, environment))
    },
    menuHamburCongeladosPescadosMariscos: async ({ page, context }, use) => {
        await use(new MenuHamburCongeladosPescadosMariscos(page, context, environment))
    },


    // MENU HAMBURGUESA - LIMPIEZA
    menuHamburLimpiezaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaVerTodo(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaDeRopa: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaDeRopa(page, context, environment))
    },
    menuHamburLimpiezaJabonesParaRopa: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaJabonesParaRopa(page, context, environment))
    },
    menuHamburLimpiezaPrelavadoQuitamanchas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPrelavadoQuitamanchas(page, context, environment))
    },
    menuHamburLimpiezaSuavizantesRopa: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaSuavizantesRopa(page, context, environment))
    },
    menuHamburLimpiezaAprestos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaAprestos(page, context, environment))
    },
    menuHamburLimpiezaPerfumantesTela: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPerfumantesTela(page, context, environment))
    },
    menuHamburLimpiezaCuidadoCalzado: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaCuidadoCalzado(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaHogar: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaHogar(page, context, environment))
    },
    menuHamburLimpiezaLimpiadoresPiso: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiadoresPiso(page, context, environment))
    },
    menuHamburLimpiezaAutobrillosCerasPisos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaAutobrillosCerasPisos(page, context, environment))
    },
    menuHamburLimpiezaLimpiavidrios: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiavidrios(page, context, environment))
    },
    menuHamburLimpiezaLustramuebles: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLustramuebles(page, context, environment))
    },
    menuHamburLimpiezaInsecticidas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaInsecticidas(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaCocina: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaCocina(page, context, environment))
    },
    menuHamburLimpiezaDetergentes: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDetergentes(page, context, environment))
    },
    menuHamburLimpiezaLimpiadoresLiquidos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiadoresLiquidos(page, context, environment))
    },
    menuHamburLimpiezaLimpiadoresCremosos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiadoresCremosos(page, context, environment))
    },
    menuHamburLimpiezaParaLavavajillas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaParaLavavajillas(page, context, environment))
    },
    menuHamburLimpiezaPalillosVelasFosforos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPalillosVelasFosforos(page, context, environment))
    },
    menuHamburLimpiezaLavandinas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLavandinas(page, context, environment))
    },
    menuHamburLimpiezaRollosCocinaServilletas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaRollosCocinaServilletas(page, context, environment))
    },
    menuHamburLimpiezaPapelesHigienicos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPapelesHigienicos(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaBanio: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaBanio(page, context, environment))
    },
    menuHamburLimpiezaLimpiadoresBanio: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiadoresBanio(page, context, environment))
    },
    menuHamburLimpiezaCanastasBloques: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaCanastasBloques(page, context, environment))
    },
    menuHamburLimpiezaDesodorantesAmbiente: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDesodorantesAmbiente(page, context, environment))
    },
    menuHamburLimpiezaDifusoresRepuestos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDifusoresRepuestos(page, context, environment))
    },
    menuHamburLimpiezaAntihumedad: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaAntihumedad(page, context, environment))
    },
    menuHamburLimpiezaDesodorantesDesinfectantes: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDesodorantesDesinfectantes(page, context, environment))
    },
    menuHamburLimpiezaArticulosLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaArticulosLimpieza(page, context, environment))
    },
    menuHamburLimpiezaBaldesPalanganas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaBaldesPalanganas(page, context, environment))
    },
    menuHamburLimpiezaCestosBasuras: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaCestosBasuras(page, context, environment))
    },
    menuHamburLimpiezaBolsasResiduos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaBolsasResiduos(page, context, environment))
    },
    menuHamburLimpiezaEscobasSecadoresPalas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaEscobasSecadoresPalas(page, context, environment))
    },
    menuHamburLimpiezaTraposPanios: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaTraposPanios(page, context, environment))
    },
    menuHamburLimpiezaEsponjas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaEsponjas(page, context, environment))
    },
    menuHamburLimpiezaGuantes: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaGuantes(page, context, environment))
    },


    // MENU HAMBURGUESA - MASCOTAS
    menuHamburMascotasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasVerTodos(page, context, environment))
    },
    menuHamburMascotasAlimentosSnacksPerros: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasAlimentosSnacksPerros(page, context, environment))
    },


    // MENU HAMBURGUESA - MUNDO BEBE
    menuHamburMundoBebeVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeVerTodos(page, context, environment))
    },
    menuHamburMundoBebePaniales: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebePaniales(page, context, environment))
    },


    // MENU HAMBURGUESA - PERFUMERIA
    menuHamburPerfumeriaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaVerTodos(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoDelCabello: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoDelCabello(page, context, environment))
    },



    // MENU HAMBURGUESA - PANADERIA
    menuHamburPanaderiaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaVerTodos(page, context, environment))
    },
    menuHamburPanaderiaBizcochuelosPiononos: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaBizcochuelosPiononos(page, context, environment))
    },
    menuHamburPanaderiaElaboracionCarrefour: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaElaboracionCarrefour(page, context, environment))
    },
    menuHamburPanaderiaEspecialidadesDulces: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaEspecialidadesDulces(page, context, environment))
    },
    menuHamburPanaderiaEspecialidadesSaladas: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaEspecialidadesSaladas(page, context, environment))
    },
    menuHamburPanaderiaPanesLacteadosDeMesa: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanesLacteadosDeMesa(page, context, environment))
    },
    menuHamburPanaderiaPanHamburguesasPanchos: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanHamburguesasPanchos(page, context, environment))
    },
    menuHamburPanaderiaPanificados: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanificados(page, context, environment))
    },
    menuHamburPanaderiaPanRalladoRebozadores: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanRalladoRebozadores(page, context, environment))
    },
    menuHamburPanaderiaPizzasPrepizzas: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPizzasPrepizzas(page, context, environment))
    },
    menuHamburPanaderiaSandwichesEmpanadasTartas: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaSandwichesEmpanadasTartas(page, context, environment))
    },
    menuHamburPanaderiaTortillas: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaTortillas(page, context, environment))
    },


    // MENU HAMBURGUESA - LACTEOS Y PRODUCTOS FRESCOS
    menuHamburLacteosProdsFrescosVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosVerTodo(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesDescremadas: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesDescremadas(page, context, environment))
    },
    menuHamburLacteosProdsFrescosCremasDeLeche: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosCremasDeLeche(page, context, environment))
    },
    menuHamburLacteosProdsFrescosDulceDeLeche: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosDulceDeLeche(page, context, environment))
    },
    menuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces(page, context, environment))
    },
    menuHamburLacteosProdsFrescosFiambres: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosFiambres(page, context, environment))
    },
    menuHamburLacteosProdsFrescosFiambresFeteados: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosFiambresFeteados(page, context, environment))
    },
    menuHamburLacteosProdsFrescosHuevos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosHuevos(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLeches: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLeches(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesEnteras: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesEnteras(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesPolvo: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesPolvo(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesSaborizadas: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesSaborizadas(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesVegetales: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesVegetales(page, context, environment))
    },
    menuHamburLacteosProdsFrescosMantecasMargarinasLevaduras: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosMantecasMargarinasLevaduras(page, context, environment))
    },
    menuHamburLacteosProdsFrescosPostres: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosPostres(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesos(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosCremasUntables: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosCremasUntables(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosCremososMozzarellas: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosCremososMozzarellas(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosDurosSemiDuros: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosDurosSemiDuros(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosEspeciales: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosEspeciales(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosFeteados: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosFeteados(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesosRalladosEnHebras: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesosRalladosEnHebras(page, context, environment))
    },
    menuHamburLacteosProdsFrescosRicota: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosRicota(page, context, environment))
    },
    menuHamburLacteosProdsFrescosSalaminesEmbutidos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosSalaminesEmbutidos(page, context, environment))
    },
    menuHamburLacteosProdsFrescosSalchichas: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosSalchichas(page, context, environment))
    },
    menuHamburLacteosProdsFrescosTapasPastasFrescas: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosTapasPastasFrescas(page, context, environment))
    },
    menuHamburLacteosProdsFrescosYogures: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosYogures(page, context, environment))
    },
    menuHamburLacteosProdsFrescosYoguresDescremados: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosYoguresDescremados(page, context, environment))
    },
    menuHamburLacteosProdsFrescosYoguresEnteros: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosYoguresEnteros(page, context, environment))
    },


    // MENU HAMBURGUESA - FRUTAS Y VERDURAS
    menuHamburFrutasVerdurasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerdurasVerTodos(page, context, environment))
    },
    menuHamburFrutasVerdurasFrutas: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerdurasFrutas(page, context, environment))
    },
    menuHamburFrutasVerdurasFrutosSecos: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerdurasFrutosSecos(page, context, environment))
    },
    menuHamburFrutasVerdurasVerduras: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerdurasVerduras(page, context, environment))
    },
    menuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas: async ({ page, context }, use) => {
        await use(new MenuHamburFrutasVerdurasVerdurasCortadasEnsaladasPreparadas(page, context, environment))
    },


    // MENU HAMBURGUESA - ELECTRO TECNOLOGIA
    menuHamburElectroTecnologiaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaVerTodo(page, context, environment))
    },
    menuHamburElectroTecnologiaAccesoriosCelulares: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAccesoriosCelulares(page, context, environment))
    },
    menuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAfeitadorasCortabarbaCortapelo(page, context, environment))
    },
    menuHamburElectroTecnologiaAiresAcondicionados: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAiresAcondicionados(page, context, environment))
    },
    menuHamburElectroTecnologiaAnafes: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAnafes(page, context, environment))
    },
    menuHamburElectroTecnologiaAspiradoras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAspiradoras(page, context, environment))
    },
    menuHamburElectroTecnologiaAudio: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAudio(page, context, environment))
    },
    menuHamburElectroTecnologiaAudioAutos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAudioAutos(page, context, environment))
    },
    menuHamburElectroTecnologiaAuriculares: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAuriculares(page, context, environment))
    },
    menuHamburElectroTecnologiaAccesoriosInformatica: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaAccesoriosInformatica(page, context, environment))
    },
    menuHamburElectroTecnologiaBatidoras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaBatidoras(page, context, environment))
    },
    menuHamburElectroTecnologiaBienestarSexual: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaBienestarSexual(page, context, environment))
    },
    menuHamburElectroTecnologiaCafeteras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCafeteras(page, context, environment))
    },
    menuHamburElectroTecnologiaCalefaccionElectrica: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCalefaccionElectrica(page, context, environment))
    },
    menuHamburElectroTecnologiaCalefaccionGas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCalefaccionGas(page, context, environment))
    },
    menuHamburElectroTecnologiaCalefaccionLenia: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCalefaccionLenia(page, context, environment))
    },
    menuHamburElectroTecnologiaCalefones: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCalefones(page, context, environment))
    },
    menuHamburElectroTecnologiaCamarasSeguridad: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCamarasSeguridad(page, context, environment))
    },
    menuHamburElectroTecnologiaCampanasPurificadores: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCampanasPurificadores(page, context, environment))
    },
    menuHamburElectroTecnologiaCavas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCavas(page, context, environment))
    },
    menuHamburElectroTecnologiaCelulares: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCelulares(page, context, environment))
    },
    menuHamburElectroTecnologiaCelularesLibres: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCelularesLibres(page, context, environment))
    },
    menuHamburElectroTecnologiaClimatizacion: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaClimatizacion(page, context, environment))
    },
    menuHamburElectroTecnologiaCoccion: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCoccion(page, context, environment))
    },
    menuHamburElectroTecnologiaCocinas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCocinas(page, context, environment))
    },
    menuHamburElectroTecnologiaCocinasHornos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCocinasHornos(page, context, environment))
    },
    menuHamburElectroTecnologiaConsolasJoysticks: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaConsolasJoysticks(page, context, environment))
    },
    menuHamburElectroTecnologiaCuidadoPersonalSalud: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaCuidadoPersonalSalud(page, context, environment))
    },
    menuHamburElectroTecnologiaDepiladoras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaDepiladoras(page, context, environment))
    },
    menuHamburElectroTecnologiaEquiposSonido: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaEquiposSonido(page, context, environment))
    },
    menuHamburElectroTecnologiaFreezers: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaFreezers(page, context, environment))
    },
    menuHamburElectroTecnologiaGaming: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaGaming(page, context, environment))
    },
    menuHamburElectroTecnologiaHeladeras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaHeladeras(page, context, environment))
    },
    menuHamburElectroTecnologiaHeladerasFreezers: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaHeladerasFreezers(page, context, environment))
    },
    menuHamburElectroTecnologiaHornos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaHornos(page, context, environment))
    },
    menuHamburElectroTecnologiaImpresorasCartuchos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaImpresorasCartuchos(page, context, environment))
    },
    menuHamburElectroTecnologiaInformaticaGaming: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaInformaticaGaming(page, context, environment))
    },
    menuHamburElectroTecnologiaJarrasElectricas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaJarrasElectricas(page, context, environment))
    },
    menuHamburElectroTecnologiaJuguerasExprimidores: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaJuguerasExprimidores(page, context, environment))
    },
    menuHamburElectroTecnologiaLavado: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaLavado(page, context, environment))
    },
    menuHamburElectroTecnologiaLavasecarropas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaLavasecarropas(page, context, environment))
    },
    menuHamburElectroTecnologiaLavavajillas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaLavavajillas(page, context, environment))
    },
    menuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaLicuadorasProcesadorasGasificadoras(page, context, environment))
    },
    menuHamburElectroTecnologiaMaquinasCoser: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaMaquinasCoser(page, context, environment))
    },
    menuHamburElectroTecnologiaMicroondas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaMicroondas(page, context, environment))
    },
    menuHamburElectroTecnologiaMonitores: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaMonitores(page, context, environment))
    },
    menuHamburElectroTecnologiaNotebooksPC: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaNotebooksPC(page, context, environment))
    },
    menuHamburElectroTecnologiaParlantesPortatiles: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaParlantesPortatiles(page, context, environment))
    },
    menuHamburElectroTecnologiaPequeniosElectrodomesticos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaPequeniosElectrodomesticos(page, context, environment))
    },
    menuHamburElectroTecnologiaPlanchas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaPlanchas(page, context, environment))
    },
    menuHamburElectroTecnologiaPlanchitasPelo: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaPlanchitasPelo(page, context, environment))
    },
    menuHamburElectroTecnologiaRadios: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaRadios(page, context, environment))
    },
    menuHamburElectroTecnologiaSaludBienestar: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSaludBienestar(page, context, environment))
    },
    menuHamburElectroTecnologiaSecadoresPelo: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSecadoresPelo(page, context, environment))
    },
    menuHamburElectroTecnologiaSecarropas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSecarropas(page, context, environment))
    },
    menuHamburElectroTecnologiaSmartTV: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSmartTV(page, context, environment))
    },
    menuHamburElectroTecnologiaSmartTVs: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSmartTVs(page, context, environment))
    },
    menuHamburElectroTecnologiaSoportesAccesorios: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaSoportesAccesorios(page, context, environment))
    },
    menuHamburElectroTecnologiaTablets: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTablets(page, context, environment))
    },
    menuHamburElectroTecnologiaTecladosMouse: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTecladosMouse(page, context, environment))
    },
    menuHamburElectroTecnologiaTelefoFijosInalam: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTelefoFijosInalam(page, context, environment))
    },
    menuHamburElectroTecnologiaTermotanquesCalefones: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTermotanquesCalefones(page, context, environment))
    },
    menuHamburElectroTecnologiaTermotanquesElectricos: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTermotanquesElectricos(page, context, environment))
    },
    menuHamburElectroTecnologiaTermotanquesGas: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTermotanquesGas(page, context, environment))
    },
    menuHamburElectroTecnologiaTostadorasSandwicheras: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaTostadorasSandwicheras(page, context, environment))
    },
    menuHamburElectroTecnologiaVentiladClimatizad: async ({ page, context }, use) => {
        await use(new MenuHamburElectroTecnologiaVentiladClimatizad(page, context, environment))
    },


    // MENU HAMBURGUESA - DESTACADOS
    menuHamburDestacadosAlmacen: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosAlmacen(page, context, environment))
    },
    menuHamburDestacadosBajoSodioSinSal: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosBajoSodioSinSal(page, context, environment))
    },
    menuHamburDestacadosBangho: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosBangho(page, context, environment))
    },
    menuHamburDestacadosBebidas: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosBebidas(page, context, environment))
    },
    menuHamburDestacadosBGH: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosBGH(page, context, environment))
    },
    menuHamburDestacadosCeven: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosCeven(page, context, environment))
    },
    menuHamburDestacadosCongelados: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosCongelados(page, context, environment))
    },
    menuHamburDestacadosDecohogar: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosDecohogar(page, context, environment))
    },
    menuHamburDestacadosDesayunoMerienda: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosDesayunoMerienda(page, context, environment))
    },
    menuHamburDestacadosDietetica: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosDietetica(page, context, environment))
    },
    menuHamburDestacadosElectro: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosElectro(page, context, environment))
    },
    menuHamburDestacadosElectrolux: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosElectrolux(page, context, environment))
    },
    menuHamburDestacadosEspecialGamer: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosEspecialGamer(page, context, environment))
    },
    menuHamburDestacadosGolosinasSnacks: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosGolosinasSnacks(page, context, environment))
    },
    menuHamburDestacadosHogarBazar: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosHogarBazar(page, context, environment))
    },
    menuHamburDestacadosHuellaNatural: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosHuellaNatural(page, context, environment))
    },
    menuHamburDestacadosLacteosProductosFrescos: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosLacteosProductosFrescos(page, context, environment))
    },
    menuHamburDestacadosLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosLimpieza(page, context, environment))
    },
    menuHamburDestacadosMascotas: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosMascotas(page, context, environment))
    },
    menuHamburDestacadosMundoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosMundoBebe(page, context, environment))
    },
    menuHamburDestacadosNuevosProductos: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosNuevosProductos(page, context, environment))
    },
    menuHamburDestacadosOrganico: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosOrganico(page, context, environment))
    },
    menuHamburDestacadosPanaderia: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosPanaderia(page, context, environment))
    },
    menuHamburDestacadosPerfumeria: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosPerfumeria(page, context, environment))
    },
    menuHamburDestacadosProductosCarrefour: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosProductosCarrefour(page, context, environment))
    },
    menuHamburDestacadosProductosExclusivosOnline: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosProductosExclusivosOnline(page, context, environment))
    },
    menuHamburDestacadosPuntoDeportivo: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosPuntoDeportivo(page, context, environment))
    },
    menuHamburDestacadosQuesosFiambres: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosQuesosFiambres(page, context, environment))
    },
    menuHamburDestacadosReducidoSinAzucar: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosReducidoSinAzucar(page, context, environment))
    },
    menuHamburDestacadosReducidoSinLactosa: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosReducidoSinLactosa(page, context, environment))
    },
    menuHamburDestacadosSinGluten: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosSinGluten(page, context, environment))
    },
    menuHamburDestacadosSinTACC: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosSinTACC(page, context, environment))
    },
    menuHamburDestacadosVeganoVegetariano: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosVeganoVegetariano(page, context, environment))
    },
    menuHamburDestacadosVersusGaming: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosVersusGaming(page, context, environment))
    },
    menuHamburDestacadosWhirlpool: async ({ page, context }, use) => {
        await use(new MenuHamburDestacadosWhirlpool(page, context, environment))
    },


    // MENU HAMBURGUESA - DESAYUNO Y MERIENDA
    menuHamburDesayunoMeriendaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaVerTodo(page, context, environment))
    },
    menuHamburDesayunoMeriendaAlfajores: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaAlfajores(page, context, environment))
    },
    menuHamburDesayunoMeriendaAzucar: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaAzucar(page, context, environment))
    },
    menuHamburDesayunoMeriendaAzucarEndulzantes: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaAzucarEndulzantes(page, context, environment))
    },
    menuHamburDesayunoMeriendaBarritasCereales: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBarritasCereales(page, context, environment))
    },
    menuHamburDesayunoMeriendaBizcochitos: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBizcochitos(page, context, environment))
    },
    menuHamburDesayunoMeriendaBocaditosConfitesTurrones: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBocaditosConfitesTurrones(page, context, environment))
    },
    menuHamburDesayunoMeriendaBudinesBizcochuelos: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBudinesBizcochuelos(page, context, environment))
    },
    menuHamburDesayunoMeriendaBudinesMagdalenas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBudinesMagdalenas(page, context, environment))
    },
    menuHamburDesayunoMeriendaCacao: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCacao(page, context, environment))
    },
    menuHamburDesayunoMeriendaCafe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCafe(page, context, environment))
    },
    menuHamburDesayunoMeriendaCafeInstantaneo: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCafeInstantaneo(page, context, environment))
    },
    menuHamburDesayunoMeriendaCafeMolidoGrano: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCafeMolidoGrano(page, context, environment))
    },
    menuHamburDesayunoMeriendaCapsulasCafe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCapsulasCafe(page, context, environment))
    },
    menuHamburDesayunoMeriendaCaramelosGomitasChupetines: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCaramelosGomitasChupetines(page, context, environment))
    },
    menuHamburDesayunoMeriendaCereales: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCereales(page, context, environment))
    },
    menuHamburDesayunoMeriendaCerealesBarritas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCerealesBarritas(page, context, environment))
    },
    menuHamburDesayunoMeriendaChicles: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaChicles(page, context, environment))
    },
    menuHamburDesayunoMeriendaChocolates: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaChocolates(page, context, environment))
    },
    menuHamburDesayunoMeriendaEdulcorantesEndulzantes: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaEdulcorantesEndulzantes(page, context, environment))
    },
    menuHamburDesayunoMeriendaFiltrosCafe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaFiltrosCafe(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletasArroz: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletasArroz(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletitasAgua: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletitasAgua(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletitasDulces: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletitasDulces(page, context, environment))
    },
    menuHamburDesayunoMeriendaGolosinasChocolates: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGolosinasChocolates(page, context, environment))
    },
    menuHamburDesayunoMeriendaGranola: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGranola(page, context, environment))
    },
    menuHamburDesayunoMeriendaInfusiones: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaInfusiones(page, context, environment))
    },
    menuHamburDesayunoMeriendaMagdalenas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMagdalenas(page, context, environment))
    },
    menuHamburDesayunoMeriendaMateCocido: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMateCocido(page, context, environment))
    },
    menuHamburDesayunoMeriendaMermeladasDulcesJaleas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMermeladasDulcesJaleas(page, context, environment))
    },
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMermeladasOtrosDulces(page, context, environment))
    },
    menuHamburDesayunoMeriendaMiel: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMiel(page, context, environment))
    },
    menuHamburDesayunoMeriendaPastaManiCremaAvellanas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaPastaManiCremaAvellanas(page, context, environment))
    },
    menuHamburDesayunoMeriendaTe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaTe(page, context, environment))
    },
    menuHamburDesayunoMeriendaTostadasGrisinesMarineras: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaTostadasGrisinesMarineras(page, context, environment))
    },
    menuHamburDesayunoMeriendaYerba: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaYerba(page, context, environment))
    },


    // MENU HAMBURGUESA - BEBIDAS
    menuHamburCarnesPescadosVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosVerTodo(page, context, environment))
    },
    menuHamburCarnesPescadosAchurasEmbutidos: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosAchurasEmbutidos(page, context, environment))
    },
    menuHamburCarnesPescadosCarbonEncendido: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosCarbonEncendido(page, context, environment))
    },
    menuHamburCarnesPescadosCarneCerdo: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosCarneCerdo(page, context, environment))
    },
    menuHamburCarnesPescadosCarneVacuna: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosCarneVacuna(page, context, environment))
    },
    menuHamburCarnesPescadosPescadosMariscos: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosPescadosMariscos(page, context, environment))
    },
    menuHamburCarnesPescadosPolloGranja: async ({ page, context }, use) => {
        await use(new MenuHamburCarnesPescadosPolloGranja(page, context, environment))
    },


    // MENU HAMBURGUESA - BEBIDAS
    menuHamburBebidasAguas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAguas(page, context, environment))
    },
    menuHamburBebidasAguasMineralesMesa: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAguasMineralesMesa(page, context, environment))
    },
    menuHamburBebidasAguasSaborizadas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAguasSaborizadas(page, context, environment))
    },
    menuHamburBebidasAperitivosConAlcohol: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAperitivosConAlcohol(page, context, environment))
    },
    menuHamburBebidasVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVerTodo(page, context, environment))
    },
    menuHamburBebidasAperitivosSinAlcohol: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAperitivosSinAlcohol(page, context, environment))
    },
    menuHamburBebidasBebidasBlancas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasBlancas(page, context, environment))
    },
    menuHamburBebidasBebidasEnergizantes: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasEnergizantes(page, context, environment))
    },
    menuHamburBebidasBebidasIsotonicas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasIsotonicas(page, context, environment))
    },
    menuHamburguesaBebidasCervezas: async ({ page, context }, use) => {
        await use(new MenuHamburguesaBebidasCervezas(page, context, environment))
    },
    menuHamburBebidasEspumantes: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasEspumantes(page, context, environment))
    },
    menuHamburBebidasEspumantesSidras: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasEspumantesSidras(page, context, environment))
    },
    menuHamburBebidasFernet: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasFernet(page, context, environment))
    },
    menuHamburBebidasFernetAperitivos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasFernetAperitivos(page, context, environment))
    },
    menuHamburBebidasFrizzantes: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasFrizzantes(page, context, environment))
    },
    menuHamburBebidasGaseosas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosas(page, context, environment))
    },
    menuHamburBebidasGaseosasCola: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosasCola(page, context, environment))
    },
    menuHamburBebidasGaseosasLimon: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosasLimon(page, context, environment))
    },
    menuHamburBebidasGaseosasNaranja: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosasNaranja(page, context, environment))
    },
    menuHamburBebidasGaseosasPomelo: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosasPomelo(page, context, environment))
    },
    menuHamburBebidasGaseosasTonicasOtras: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosasTonicasOtras(page, context, environment))
    },
    menuHamburBebidasGin: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGin(page, context, environment))
    },
    menuHamburBebidasJugos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugos(page, context, environment))
    },
    menuHamburBebidasJugosConcentrados: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugosConcentrados(page, context, environment))
    },
    menuHamburBebidasJugosListos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugosListos(page, context, environment))
    },
    menuHamburBebidasJugosPolvo: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugosPolvo(page, context, environment))
    },
    menuHamburBebidasLicores: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasLicores(page, context, environment))
    },
    menuHamburBebidasOtrasEspirituosas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasOtrasEspirituosas(page, context, environment))
    },
    menuHamburBebidasRon: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasRon(page, context, environment))
    },
    menuHamburBebidasSidras: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasSidras(page, context, environment))
    },
    menuHamburBebidasVinos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinos(page, context, environment))
    },
    menuHamburBebidasVinosBlancos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinosBlancos(page, context, environment))
    },
    menuHamburBebidasVinosGenerosos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinosGenerosos(page, context, environment))
    },
    menuHamburBebidasVinosRosados: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinosRosados(page, context, environment))
    },
    menuHamburBebidasVinosTintos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinosTintos(page, context, environment))
    },
    menuHamburBebidasVodka: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVodka(page, context, environment))
    },
    menuHamburBebidasWhisky: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasWhisky(page, context, environment))
    },


    // MENU HAMBURGUESA - BAZAR Y TEXTIL
    menuHamburBazarTextilVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVerTodo(page, context, environment))
    },
    menuHamburBazarTextilAccesoriosAuto: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAccesoriosAuto(page, context, environment))
    },
    menuHamburBazarTextilAccesoriosFerreteria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAccesoriosFerreteria(page, context, environment))
    },
    menuHamburBazarTextilAccesoriosLibreria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAccesoriosLibreria(page, context, environment))
    },
    menuHamburBazarTextilAdhesivos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAdhesivos(page, context, environment))
    },
    menuHamburBazarTextilAdultos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAdultos(page, context, environment))
    },
    menuHamburBazarTextilAireLibre: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAireLibre(page, context, environment))
    },
    menuHamburBazarTextilAlarguesEnchufes: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAlarguesEnchufes(page, context, environment))
    },
    menuHamburBazarTextilAlmohadasAlmohadones: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAlmohadasAlmohadones(page, context, environment))
    },
    menuHamburBazarTextilAutoayuda: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAutoayuda(page, context, environment))
    },
    menuHamburBazarTextilAutomotor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAutomotor(page, context, environment))
    },
    menuHamburBazarTextilAutosPistasJuguete: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAutosPistasJuguete(page, context, environment))
    },
    menuHamburBazarTextilBanio: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBanio(page, context, environment))
    },
    menuHamburBazarTextilBebes: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBebes(page, context, environment))
    },
    menuHamburBazarTextilBibliotecasOrganizadores: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBibliotecasOrganizadores(page, context, environment))
    },
    menuHamburBazarTextilBicicletas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBicicletas(page, context, environment))
    },
    menuHamburBazarTextilBlocksDibujoCartulinas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBlocksDibujoCartulinas(page, context, environment))
    },
    menuHamburBazarTextilBolsosValijas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilBolsosValijas(page, context, environment))
    },
    menuHamburBazarTextilCamasMesasLuz: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCamasMesasLuz(page, context, environment))
    },
    menuHamburBazarTextilCamping: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCamping(page, context, environment))
    },
    menuHamburBazarTextilCarpetasRepuestosFolios: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCarpetasRepuestosFolios(page, context, environment))
    },
    menuHamburBazarTextilCocinaComedor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCocinaComedor(page, context, environment))
    },
    menuHamburBazarTextilColchonesSommiers: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilColchonesSommiers(page, context, environment))
    },
    menuHamburBazarTextilConstruccion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilConstruccion(page, context, environment))
    },
    menuHamburBazarTextilCotillon: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCotillon(page, context, environment))
    },
    menuHamburBazarTextilCuadernos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCuadernos(page, context, environment))
    },
    menuHamburBazarTextilCubiertaAutos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCubiertaAutos(page, context, environment))
    },
    menuHamburBazarTextilCubiertosUtensilios: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCubiertosUtensilios(page, context, environment))
    },
    menuHamburBazarTextilDecoOrganizacion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDecoOrganizacion(page, context, environment))
    },
    menuHamburBazarTextilDecoracion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDecoracion(page, context, environment))
    },
    menuHamburBazarTextilDeporte: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDeporte(page, context, environment))
    },
    menuHamburBazarTextilDormitorio: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDormitorio(page, context, environment))
    },
    menuHamburBazarTextilEcoAmigable: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilEcoAmigable(page, context, environment))
    },
    menuHamburBazarTextilEntretenimiento: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilEntretenimiento(page, context, environment))
    },
    menuHamburBazarTextilFerreteriaPintura: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilFerreteriaPintura(page, context, environment))
    },
    menuHamburBazarTextilHermeticosFrascos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilHermeticosFrascos(page, context, environment))
    },
    menuHamburBazarTextilHerramientasEscaleras: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilHerramientasEscaleras(page, context, environment))
    },
    menuHamburBazarTextilHerramientasJardin: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilHerramientasJardin(page, context, environment))
    },
    menuHamburBazarTextilHoverboardsMonopatines: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilHoverboardsMonopatines(page, context, environment))
    },
    menuHamburBazarTextilHumanidades: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilHumanidades(page, context, environment))
    },
    menuHamburBazarTextilIndumentaria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilIndumentaria(page, context, environment))
    },
    menuHamburBazarTextilInfantilesJuveniles: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilInfantilesJuveniles(page, context, environment))
    },
    menuHamburBazarTextilJuegosAireLibre: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilJuegosAireLibre(page, context, environment))
    },
    menuHamburBazarTextilJuegosDidacticos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilJuegosDidacticos(page, context, environment))
    },
    menuHamburBazarTextilJuegosMesa: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilJuegosMesa(page, context, environment))
    },
    menuHamburBazarTextilJuegosVerano: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilJuegosVerano(page, context, environment))
    },
    menuHamburBazarTextilJugueteriaCarrefour: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilJugueteriaCarrefour(page, context, environment))
    },
    menuHamburBazarTextilLamparitas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLamparitas(page, context, environment))
    },
    menuHamburBazarTextilLanzadores: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLanzadores(page, context, environment))
    },
    menuHamburBazarTextilLapicerasLapices: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLapicerasLapices(page, context, environment))
    },
    menuHamburBazarTextilLibreria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLibreria(page, context, environment))
    },
    menuHamburBazarTextilLibreriaArtistica: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLibreriaArtistica(page, context, environment))
    },
    menuHamburBazarTextilLibros: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLibros(page, context, environment))
    },
    menuHamburBazarTextilLimpiezaAutos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLimpiezaAutos(page, context, environment))
    },
    menuHamburBazarTextilLimpiezaPiletas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLimpiezaPiletas(page, context, environment))
    },
    menuHamburBazarTextilLiteraturaFiccion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLiteraturaFiccion(page, context, environment))
    },
    menuHamburBazarTextilLubricantesAditivos: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLubricantesAditivos(page, context, environment))
    },
    menuHamburBazarTextilLucesEmergenciaIluminacion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLucesEmergenciaIluminacion(page, context, environment))
    },
    menuHamburBazarTextilMantelesAccesoriosCocina: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilMantelesAccesoriosCocina(page, context, environment))
    },
    menuHamburBazarTextilMaquinasGimnasio: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilMaquinasGimnasio(page, context, environment))
    },
    menuHamburBazarTextilMesasEscritorios: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilMesasEscritorios(page, context, environment))
    },
    menuHamburBazarTextilMesasJuegosJardin: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilMesasJuegosJardin(page, context, environment))
    },
    menuHamburguesaBazarTextilMuebles: async ({ page, context }, use) => {
        await use(new MenuHamburguesaBazarTextilMuebles(page, context, environment))
    },
    menuHamburBazarTextilMuniecosMuniecas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilMuniecosMuniecas(page, context, environment))
    },
    menuHamburBazarTextilNiniosNinias: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilNiniosNinias(page, context, environment))
    },
    menuHamburBazarTextilOllasSartenesFuentes: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilOllasSartenesFuentes(page, context, environment))
    },
    menuHamburBazarTextilOrganizacion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilOrganizacion(page, context, environment))
    },
    menuHamburBazarTextilOtrosGeneros: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilOtrosGeneros(page, context, environment))
    },
    menuHamburBazarTextilPapelesCocinaBolsas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilPapelesCocinaBolsas(page, context, environment))
    },
    menuHamburBazarTextilParaColorear: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilParaColorear(page, context, environment))
    },
    menuHamburBazarTextilParasolesSombrillas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilParasolesSombrillas(page, context, environment))
    },
    menuHamburBazarTextilParrillas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilParrillas(page, context, environment))
    },
    menuHamburBazarTextilPeluches: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilPeluches(page, context, environment))
    },
    menuHamburBazarTextilPilas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilPilas(page, context, environment))
    },
    menuHamburBazarTextilPiletasInflables: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilPiletasInflables(page, context, environment))
    },
    menuHamburBazarTextilPinturas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilPinturas(page, context, environment))
    },
    menuHamburBazarTextilResmasArticulosOficina: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilResmasArticulosOficina(page, context, environment))
    },
    menuHamburBazarTextilSabanasFrazadas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilSabanasFrazadas(page, context, environment))
    },
    menuHamburBazarTextilSillasBanquetas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilSillasBanquetas(page, context, environment))
    },
    menuHamburBazarTextilSillasReposerasHamacas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilSillasReposerasHamacas(page, context, environment))
    },
    menuHamburBazarTextilSillones: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilSillones(page, context, environment))
    },
    menuHamburBazarTextilTermosMates: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilTermosMates(page, context, environment))
    },
    menuHamburBazarTextilTiempoLibreDeportes: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilTiempoLibreDeportes(page, context, environment))
    },
    menuHamburBazarTextilToallasToallones: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilToallasToallones(page, context, environment))
    },
    menuHamburBazarTextilVajilla: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVajilla(page, context, environment))
    },
    menuHamburBazarTextilVajillaInfantil: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVajillaInfantil(page, context, environment))
    },
    menuHamburBazarTextilVasosCopas: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVasosCopas(page, context, environment))
    },


    // MENU HAMBURGUESA - ALMACEN
    menuHamburAlmacenVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenVerTodo(page, context, environment))
    },
    menuHamburAlmacenAceitesAerosol: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAceitesAerosol(page, context, environment))
    },
    menuHamburAlmacenAceitesComunes: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAceitesComunes(page, context, environment))
    },
    menuHamburAlmacenAceitesEspeciales: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAceitesEspeciales(page, context, environment))
    },
    menuHamburAlmacenAceitesOliva: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAceitesOliva(page, context, environment))
    },
    menuHamburguesaAlmacenAceitesVinagres: async ({ page, context }, use) => {
        await use(new MenuHamburguesaAlmacenAceitesVinagres(page, context, environment))
    },
    menuHamburAlmacenAceitunasEncurtidos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAceitunasEncurtidos(page, context, environment))
    },
    menuHamburAlmacenArroz: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenArroz(page, context, environment))
    },
    menuHamburAlmacenArrozLegumbres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenArrozLegumbres(page, context, environment))
    },
    menuHamburAlmacenAvena: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenAvena(page, context, environment))
    },
    menuHamburAlmacenCaldos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenCaldos(page, context, environment))
    },
    menuHamburAlmacenCaldosSopasPure: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenCaldosSopasPure(page, context, environment))
    },
    menuHamburAlmacenCoberturasRellenosSalsas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenCoberturasRellenosSalsas(page, context, environment))
    },
    menuHamburAlmacenComplementos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenComplementos(page, context, environment))
    },
    menuHamburAlmacenConservasFrutas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenConservasFrutas(page, context, environment))
    },
    menuHamburAlmacenConservasLegumbresVegetales: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenConservasLegumbresVegetales(page, context, environment))
    },
    menuHamburAlmacenConservasPescado: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenConservasPescado(page, context, environment))
    },
    menuHamburAlmacenConservasSalsasTomate: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenConservasSalsasTomate(page, context, environment))
    },
    menuHamburAlmacenEnlatadosConservas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenEnlatadosConservas(page, context, environment))
    },
    menuHamburAlmacenFideosGuiserosParaSopas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenFideosGuiserosParaSopas(page, context, environment))
    },
    menuHamburAlmacenFideosLargos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenFideosLargos(page, context, environment))
    },
    menuHamburAlmacenGelatinas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenGelatinas(page, context, environment))
    },
    menuHamburAlmacenHarinas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenHarinas(page, context, environment))
    },
    menuHamburAlmacenHarinasComunesLeudantes: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenHarinasComunesLeudantes(page, context, environment))
    },
    menuHamburAlmacenHierbasSecasEspecias: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenHierbasSecasEspecias(page, context, environment))
    },
    menuHamburAlmacenLegumbres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenLegumbres(page, context, environment))
    },
    menuHamburAlmacenNachosManiPalitos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenNachosManiPalitos(page, context, environment))
    },
    menuHamburAlmacenOtrasHarinas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenOtrasHarinas(page, context, environment))
    },
    menuHamburAlmacenOtrosSnacksSalados: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenOtrosSnacksSalados(page, context, environment))
    },
    menuHamburAlmacenPapasFritasSnacksMaiz: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPapasFritasSnacksMaiz(page, context, environment))
    },
    menuHamburAlmacenPastasSecas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPastasSecas(page, context, environment))
    },
    menuHamburAlmacenPastasSecasRellenasListas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPastasSecasRellenasListas(page, context, environment))
    },
    menuHamburAlmacenPicadillosPate: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPicadillosPate(page, context, environment))
    },
    menuHamburAlmacenPostresFlanes: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPostresFlanes(page, context, environment))
    },
    menuHamburAlmacenPremezclasDulces: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPremezclasDulces(page, context, environment))
    },
    menuHamburAlmacenPremezclasSaladas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPremezclasSaladas(page, context, environment))
    },
    menuHamburAlmacenPuresInstantaneos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPuresInstantaneos(page, context, environment))
    },
    menuHamburAlmacenReposteriaPostres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenReposteriaPostres(page, context, environment))
    },
    menuHamburAlmacenSaborizadores: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSaborizadores(page, context, environment))
    },
    menuHamburAlmacenSal: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSal(page, context, environment))
    },
    menuHamburAlmacenSalAderezosSaborizadores: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSalAderezosSaborizadores(page, context, environment))
    },
    menuHamburAlmacenSalsasAderezos: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSalsasAderezos(page, context, environment))
    },
    menuHamburAlmacenSemillas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSemillas(page, context, environment))
    },
    menuHamburAlmacenSnacks: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSnacks(page, context, environment))
    },
    menuHamburAlmacenSopas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSopas(page, context, environment))
    },
    menuHamburAlmacenTapasAlfajoresMerengues: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenTapasAlfajoresMerengues(page, context, environment))
    },
    menuHamburAlmacenVinagresAcetosLimon: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenVinagresAcetosLimon(page, context, environment))
    },









})

export default test
