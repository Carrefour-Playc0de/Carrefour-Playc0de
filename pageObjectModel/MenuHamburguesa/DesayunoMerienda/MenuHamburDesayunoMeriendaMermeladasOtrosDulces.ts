import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaMermeladasOtrosDulces extends BasePage {

    readonly MERMELADAS_OTROS_DULCES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MERMELADAS_OTROS_DULCES = this.page.locator('//a [@id="menu-item-category-dulce-leche-mermelada"]')
    }

    async clickDesayunoMeriendaMermeladasOtrosDulces(): Promise<void> {
        await this.click(this.MERMELADAS_OTROS_DULCES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaMermeladasOtrosDulces(): Promise<void> {
        await this.clickDesayunoMeriendaMermeladasOtrosDulces()
    }
}
