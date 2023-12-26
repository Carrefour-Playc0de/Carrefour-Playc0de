import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGalletasArroz extends BasePage {

    readonly GALLETAS_ARROZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GALLETAS_ARROZ = this.page.locator('//a [@id="menu-item-category-galletitas-arroz"]')
    }

    async clickDesayunoMeriendaGalletasArroz(): Promise<void> {
        await this.click(this.GALLETAS_ARROZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGalletasArroz(): Promise<void> {
        await this.clickDesayunoMeriendaGalletasArroz()
    }
}
