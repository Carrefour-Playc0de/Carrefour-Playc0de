import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAlarguesEnchufes extends BasePage {

    readonly ALARGUES_ENCHUFES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALARGUES_ENCHUFES = this.page.locator('//a [@id="menu-item-category-alargues-enchufes"]')
    }

    async clickBazarTextilAlarguesEnchufes(): Promise<void> {
        await this.click(this.ALARGUES_ENCHUFES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAlarguesEnchufes(): Promise<void> {
        await this.clickBazarTextilAlarguesEnchufes()
    }
}
