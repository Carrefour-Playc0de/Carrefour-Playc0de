import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaYerba extends BasePage {

    readonly YERBA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.YERBA = this.page.locator('//a [@id="menu-item-category-yerba"]')
    }

    async clickDesayunoMeriendaYerba(): Promise<void> {
        await this.click(this.YERBA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaYerba(): Promise<void> {
        await this.clickDesayunoMeriendaYerba()
    }
}
