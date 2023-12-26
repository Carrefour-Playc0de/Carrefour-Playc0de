import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCotillon extends BasePage {

    readonly COTILLON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COTILLON = this.page.locator('//a [@id="menu-item-category-cotillon"]')
    }

    async clickBazarTextilCotillon(): Promise<void> {
        await this.click(this.COTILLON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCotillon(): Promise<void> {
        await this.clickBazarTextilCotillon()
    }
}
