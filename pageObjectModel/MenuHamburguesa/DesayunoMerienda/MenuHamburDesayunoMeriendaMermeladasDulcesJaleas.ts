import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaMermeladasDulcesJaleas extends BasePage {

    readonly MERMELADAS_DULCES_JALEAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MERMELADAS_DULCES_JALEAS = this.page.locator('//a [@id="menu-item-category-mermelada-dulce-jaleas"]')
    }

    async clickDesayunoMeriendaMermeladasDulcesJaleas (): Promise<void> {
        await this.click(this.MERMELADAS_DULCES_JALEAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaMermeladasDulcesJaleas (): Promise<void> {
        await this.clickDesayunoMeriendaMermeladasDulcesJaleas()
    }
}
