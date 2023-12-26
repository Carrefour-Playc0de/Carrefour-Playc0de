import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGalletitasDulces extends BasePage {

    readonly GALLETITAS_DULCES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GALLETITAS_DULCES = this.page.locator('//a [@id="menu-item-category-galletitas-dulces"]')
    }

    async clickDesayunoMeriendaGalletitasDulces(): Promise<void> {
        await this.click(this.GALLETITAS_DULCES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGalletitasDulces(): Promise<void> {
        await this.clickDesayunoMeriendaGalletitasDulces()
    }
}
