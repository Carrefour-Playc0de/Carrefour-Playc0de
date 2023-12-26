import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAutomotor extends BasePage {

    readonly AUTOMOTOR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AUTOMOTOR = this.page.locator('//a [@id="menu-item-category-automotor"]');
    }

    async clickBazarTextilAutomotor(): Promise<void> {
        await this.click(this.AUTOMOTOR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAutomotor(): Promise<void> {
        await this.clickBazarTextilAutomotor()
    }
}
