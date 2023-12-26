import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosCarbonEncendido extends BasePage {

    readonly CARBON_ENCENDIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARBON_ENCENDIDO = this.page.locator('//a [@id="menu-item-category-carbon-encendido"]')
    }

    async clickCarnesPescadosCarbonEncendido(): Promise<void> {
        await this.click(this.CARBON_ENCENDIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosCarbonEncendido(): Promise<void> {
        await this.clickCarnesPescadosCarbonEncendido()
    }
}
