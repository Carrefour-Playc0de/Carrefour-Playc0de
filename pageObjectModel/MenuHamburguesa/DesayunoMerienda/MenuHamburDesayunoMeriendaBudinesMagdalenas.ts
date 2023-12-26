import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaBudinesMagdalenas extends BasePage {

    readonly BUDINES_MAGDALENAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUDINES_MAGDALENAS = this.page.locator('//a [@id="menu-item-category-budines-magdalenas"]')
    }

    async clickDesayunoMeriendaBudinesMagdalenas(): Promise<void> {
        await this.click(this.BUDINES_MAGDALENAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaBudinesMagdalenas(): Promise<void> {
        await this.clickDesayunoMeriendaBudinesMagdalenas()
    }
}
