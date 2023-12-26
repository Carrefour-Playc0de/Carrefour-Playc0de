import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilPilas extends BasePage {

    readonly PILAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PILAS = this.page.locator('//a [@id="menu-item-category-pilas"]')
    }

    async clickBazarTextilPilas(): Promise<void> {
        await this.click(this.PILAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilPilas(): Promise<void> {
        await this.clickBazarTextilPilas()
    }
}
