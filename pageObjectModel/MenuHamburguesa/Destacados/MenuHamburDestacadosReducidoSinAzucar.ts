import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosReducidoSinAzucar extends BasePage {

    readonly REDUCIDO_SIN_AZUCAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.REDUCIDO_SIN_AZUCAR = this.page.locator('//div[contains(text(),\'Reducido y sin azúcar\')]')
    }

    async clickDestacadosReducidoSinAzucar(): Promise<void> {
        await this.click(this.REDUCIDO_SIN_AZUCAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosReducidoSinAzucar(): Promise<void> {
        await this.clickDestacadosReducidoSinAzucar()
    }
}
