import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilEntretenimiento extends BasePage {

    readonly ENTRETENIMIENTO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ENTRETENIMIENTO = this.page.locator('//a [@id="menu-item-category-entretenimiento"]')
    }

    async clickBazarTextilEntretenimiento(): Promise<void> {
        await this.click(this.ENTRETENIMIENTO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilEntretenimiento(): Promise<void> {
        await this.clickBazarTextilEntretenimiento()
    }
}
