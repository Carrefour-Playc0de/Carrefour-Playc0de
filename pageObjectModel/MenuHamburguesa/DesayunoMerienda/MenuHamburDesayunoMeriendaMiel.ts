import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaMiel extends BasePage {

    readonly MIEL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MIEL = this.page.locator('//a [@id="menu-item-category-dulce-leche"]')
    }

    async clickDesayunoMeriendaMiel(): Promise<void> {
        await this.click(this.MIEL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaMiel(): Promise<void> {
        await this.clickDesayunoMeriendaMiel()
    }
}
