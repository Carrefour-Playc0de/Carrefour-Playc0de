import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburBebidas extends BasePage {

    readonly BEBIDAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BEBIDAS = this.page.locator('//div[contains(text(),\'Bebidas\')]')
    }

    async clickBebidas(): Promise<void> {
        await this.click(this.BEBIDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburBebidas(): Promise<void> {
        await this.clickBebidas()
    }
}
