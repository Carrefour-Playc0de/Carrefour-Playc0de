import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaMagdalenas extends BasePage {

    readonly MAGDALENAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MAGDALENAS = this.page.locator('//a [@id="menu-item-category-magdalenas"]')
    }

    async clickDesayunoMeriendaMagdalenas(): Promise<void> {
        await this.click(this.MAGDALENAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaMagdalenas(): Promise<void> {
        await this.clickDesayunoMeriendaMagdalenas()
    }
}
