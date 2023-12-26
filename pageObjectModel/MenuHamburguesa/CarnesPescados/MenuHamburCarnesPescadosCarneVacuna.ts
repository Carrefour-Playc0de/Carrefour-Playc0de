import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosCarneVacuna extends BasePage {

    readonly CARNE_VACUNA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CARNE_VACUNA = this.page.locator('//a [@id="menu-item-category-carne-vacuna"]')
    }

    async clickCarnesPescadosCarneVacuna(): Promise<void> {
        await this.click(this.CARNE_VACUNA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosCarneVacuna(): Promise<void> {
        await this.clickCarnesPescadosCarneVacuna()
    }
}
