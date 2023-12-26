import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilHerramientasJardin extends BasePage {

    readonly HERRAMIENTAS_JARDIN: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HERRAMIENTAS_JARDIN = this.page.locator('//a [@id="menu-item-category-herramientas-aire-libre"]')
    }

    async clickBazarTextilHerramientasJardin(): Promise<void> {
        await this.click(this.HERRAMIENTAS_JARDIN)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilHerramientasJardin(): Promise<void> {
        await this.clickBazarTextilHerramientasJardin()
    }
}
