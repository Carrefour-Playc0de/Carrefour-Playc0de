import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaChicles extends BasePage {

    readonly CHICLES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CHICLES = this.page.locator('//a [@id="menu-item-category-chicles"]');
    }

    async clickDesayunoMeriendaChicles(): Promise<void> {
        await this.click(this.CHICLES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaChicles(): Promise<void> {
        await this.clickDesayunoMeriendaChicles()
    }
}
