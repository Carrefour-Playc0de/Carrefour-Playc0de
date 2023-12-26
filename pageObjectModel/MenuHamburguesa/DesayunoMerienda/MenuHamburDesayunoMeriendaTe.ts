import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaTe extends BasePage {

    readonly TE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TE = this.page.locator('//a [@id="menu-item-category-te"]')
    }

    async clickDesayunoMeriendaTe(): Promise<void> {
        await this.click(this.TE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaTe(): Promise<void> {
        await this.clickDesayunoMeriendaTe()
    }
}
