import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLanzadores extends BasePage {

    readonly LANZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LANZADORES = this.page.locator('//a [@id="menu-item-category-lanzadores"]')
    }

    async clickBazarTextilLanzadores(): Promise<void> {
        await this.click(this.LANZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLanzadores(): Promise<void> {
        await this.clickBazarTextilLanzadores()
    }
}
