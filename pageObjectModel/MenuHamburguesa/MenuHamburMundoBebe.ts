import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburMundoBebe extends BasePage {

    readonly MUNDO_BEBE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MUNDO_BEBE = this.page.locator('//div[contains(text(),\"Mundo bebé\")]')
    }

    async clickMundoBebe(): Promise<void> {
        await this.click(this.MUNDO_BEBE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMundoBebe(): Promise<void> {
        await this.clickMundoBebe()
    }
}
