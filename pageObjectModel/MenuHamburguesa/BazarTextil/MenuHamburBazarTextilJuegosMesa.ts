import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilJuegosMesa extends BasePage {

    readonly JUEGOS_MESA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JUEGOS_MESA = this.page.locator('//a [@id="menu-item-category-juegos-mesa"]')
    }

    async clickBazarTextilJuegosMesa(): Promise<void> {
        await this.click(this.JUEGOS_MESA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilJuegosMesa(): Promise<void> {
        await this.clickBazarTextilJuegosMesa()
    }
}
