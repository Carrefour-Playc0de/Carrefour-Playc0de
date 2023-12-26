import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosVeganoVegetariano extends BasePage {

    readonly VEGANO_VEGETARIANO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VEGANO_VEGETARIANO = this.page.locator('//div[contains(text(),\'Vegano y vegetariano\')]')
    }

    async clickDestacadosVeganoVegetariano(): Promise<void> {
        await this.click(this.VEGANO_VEGETARIANO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosVeganoVegetariano(): Promise<void> {
        await this.clickDestacadosVeganoVegetariano()
    }
}
