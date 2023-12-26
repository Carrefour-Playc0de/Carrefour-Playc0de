import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburPanaderia extends BasePage {

    readonly PANADERIA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANADERIA = this.page.locator('//div[contains(text(),\"Panadería\")]')
    }

    async clickPanaderia(): Promise<void> {
        await this.click(this.PANADERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPanaderia(): Promise<void> {
        await this.clickPanaderia()
    }
}
