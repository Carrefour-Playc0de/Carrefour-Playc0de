import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosMascotas extends BasePage {

    readonly MASCOTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MASCOTAS = this.page.locator('//a [@id="menu-item-category-mascotas"]')
    }

    async clickDestacadosMascotas(): Promise<void> {
        await this.click(this.MASCOTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosMascotas(): Promise<void> {
        await this.clickDestacadosMascotas()
    }
}
