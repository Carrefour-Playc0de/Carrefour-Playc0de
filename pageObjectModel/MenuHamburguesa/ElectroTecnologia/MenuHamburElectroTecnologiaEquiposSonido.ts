import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaEquiposSonido extends BasePage {

    readonly EQUIPOS_SONIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EQUIPOS_SONIDO =this.page.locator('//a [@id="menu-item-category-equipos-sonido"]')
    }

    async clickElectroTecnologiaEquiposSonido(): Promise<void> {
        await this.click(this.EQUIPOS_SONIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaEquiposSonido(): Promise<void> {
        await this.clickElectroTecnologiaEquiposSonido()
    }
}
