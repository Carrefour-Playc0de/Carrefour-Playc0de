import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburDesayunoMerienda extends BasePage {

    readonly DESAYUNO_MERIENDA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESAYUNO_MERIENDA = this.page.locator('//div[contains(text(),\"Desayuno y merienda\")]')
    }

    async clickDesayunoMerienda(): Promise<void> {
        await this.click(this.DESAYUNO_MERIENDA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburDesayunoMerienda(): Promise<void> {
        await this.clickDesayunoMerienda()
    }
}
