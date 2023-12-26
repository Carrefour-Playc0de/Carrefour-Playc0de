import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosReducidoSinLactosa extends BasePage {

    readonly REDUCIDO_SIN_LACTOSA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.REDUCIDO_SIN_LACTOSA = this.page.locator('//div[contains(text(),\'Reducido y sin lactosa\')]')
    }

    async clickDestacadosReducidoSinLactosa(): Promise<void> {
        await this.click(this.REDUCIDO_SIN_LACTOSA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosReducidoSinLactosa(): Promise<void> {
        await this.clickDestacadosReducidoSinLactosa()
    }
}
