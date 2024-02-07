import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaRollosCocinaServilletas extends BasePage {

    readonly ROLLOS_COCINA_SERVILLETAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ROLLOS_COCINA_SERVILLETAS = this.page.locator('//a [@id="menu-item-category-lecrollos-cocina-servilletashe"]')
        // Rollos de Cocina y Servilletas
    }

    async clickLimpiezaRollosCocinaServilletas(): Promise<void> {
        await this.click(this.ROLLOS_COCINA_SERVILLETAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaRollosCocinaServilletas(): Promise<void> {
        await this.clickLimpiezaRollosCocinaServilletas()
    }
}
