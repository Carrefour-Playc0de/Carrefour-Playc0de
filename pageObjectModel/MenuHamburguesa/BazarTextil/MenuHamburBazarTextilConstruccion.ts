import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilConstruccion extends BasePage {

    readonly CONSTRUCCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSTRUCCION = this.page.locator('//a [@id="menu-item-category-construccion"]')
    }

    async clickBazarTextilConstruccion(): Promise<void> {
        await this.click(this.CONSTRUCCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilConstruccion(): Promise<void> {
        await this.clickBazarTextilConstruccion()
    }
}
