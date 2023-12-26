import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCapsulasCafe extends BasePage {

    readonly CAPSULAS_CAFE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAPSULAS_CAFE = this.page.locator('//a [@id="menu-item-category-capsulas-cafe"]')
    }

    async clickDesayunoMeriendaCapsulasCafe(): Promise<void> {
        await this.click(this.CAPSULAS_CAFE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCapsulasCafe(): Promise<void> {
        await this.clickDesayunoMeriendaCapsulasCafe()
    }
}
