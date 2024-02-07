import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaInsecticidas extends BasePage {

    readonly INSECTICIDAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INSECTICIDAS = this.page.locator('//a [@id="menu-item-category-insecticidas"]')
        // Insecticidas
    }

    async clickLimpiezaInsecticidas(): Promise<void> {
        await this.click(this.INSECTICIDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaInsecticidas(): Promise<void> {
        await this.clickLimpiezaInsecticidas()
    }
}
