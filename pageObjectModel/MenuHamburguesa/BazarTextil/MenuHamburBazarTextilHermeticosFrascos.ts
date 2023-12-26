import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilHermeticosFrascos extends BasePage {

    readonly HERMETICOS_FRASCOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HERMETICOS_FRASCOS = this.page.locator('//a [@id="menu-item-category-hermeticos-frascos"]')
    }

    async clickBazarTextilHermeticosFrascos(): Promise<void> {
        await this.click(this.HERMETICOS_FRASCOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilHermeticosFrascos(): Promise<void> {
        await this.clickBazarTextilHermeticosFrascos()
    }
}
