import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSaludBienestar extends BasePage {

    readonly SALUD_BIENESTAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SALUD_BIENESTAR =this.page.locator('//a [@id="menu-item-category-salud-bienestar"]')
    }

    async clickElectroTecnologiaSaludBienestar(): Promise<void> {
        await this.click(this.SALUD_BIENESTAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSaludBienestar(): Promise<void> {
        await this.clickElectroTecnologiaSaludBienestar()
    }
}
