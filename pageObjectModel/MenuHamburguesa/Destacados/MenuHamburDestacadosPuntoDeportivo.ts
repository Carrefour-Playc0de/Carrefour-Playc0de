import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosPuntoDeportivo extends BasePage {

    readonly PUNTO_DEPORTIVO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PUNTO_DEPORTIVO = this.page.locator('//div[contains(text(),\'Punto Deportivo\')]')
    }

    async clickDestacadosPuntoDeportivo(): Promise<void> {
        await this.click(this.PUNTO_DEPORTIVO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosPuntoDeportivo(): Promise<void> {
        await this.clickDestacadosPuntoDeportivo()
    }
}
