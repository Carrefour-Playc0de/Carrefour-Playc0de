import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCamarasSeguridad extends BasePage {

    readonly CAMARAS_SEGURIDAD: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAMARAS_SEGURIDAD = this.page.locator('//a [@id="menu-item-category-camaras-de-seguridad"]')
    }

    async clickElectroTecnologiaCamarasSeguridad(): Promise<void> {
        await this.click(this.CAMARAS_SEGURIDAD)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCamarasSeguridad(): Promise<void> {
        await this.clickElectroTecnologiaCamarasSeguridad()
    }
}
