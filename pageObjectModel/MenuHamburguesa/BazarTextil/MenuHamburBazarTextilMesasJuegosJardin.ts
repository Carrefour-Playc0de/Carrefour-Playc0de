import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilMesasJuegosJardin extends BasePage {

    readonly MESAS_JUEGOS_JARDIN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MESAS_JUEGOS_JARDIN = this.page.locator('//a [@id="menu-item-category-mesas-juegos-aire-libre"]')
    }

    async clickBazarTextilMesasJuegosJardin(): Promise<void> {
        await this.click(this.MESAS_JUEGOS_JARDIN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMesasJuegosJardin(): Promise<void> {
        await this.clickBazarTextilMesasJuegosJardin()
    }
}
