import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburLimpieza extends BasePage {

    readonly LIMPIEZA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA = this.page.locator('//div[contains(text(),\"Limpieza\")]')
    }

    async clickLimpieza(): Promise<void> {
        await this.click(this.LIMPIEZA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpieza(): Promise<void> {
        await this.clickLimpieza()
    }
}
