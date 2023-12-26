import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class MenuHamburMascotas extends BasePage {

    readonly MASCOTAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MASCOTAS = this.page.locator('//div[contains(text(),\"Mascotas\")]')
    }

    async clickMascotas(): Promise<void> {
        await this.click(this.MASCOTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMascotas(): Promise<void> {
        await this.clickMascotas()
    }
}
