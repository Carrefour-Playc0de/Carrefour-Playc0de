import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGalletitasAgua extends BasePage {

    readonly GALLETITAS_AGUA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GALLETITAS_AGUA = this.page.locator('//a [@id="menu-item-category-galletitas-agua"]')
    }

    async clickDesayunoMeriendaGalletitasAgua(): Promise<void> {
        await this.click(this.GALLETITAS_AGUA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGalletitasAgua(): Promise<void> {
        await this.clickDesayunoMeriendaGalletitasAgua()
    }
}
