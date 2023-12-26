import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilPeluches extends BasePage {

    readonly PELUCHES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PELUCHES = this.page.locator('//a [@id="menu-item-category-peluches"]')
    }

    async clickBazarTextilPeluches(): Promise<void> {
        await this.click(this.PELUCHES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilPeluches(): Promise<void> {
        await this.clickBazarTextilPeluches()
    }
}
