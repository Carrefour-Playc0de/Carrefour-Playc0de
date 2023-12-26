import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaGranola extends BasePage {

    readonly GRANOLA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GRANOLA = this.page.locator('//a [@id="menu-item-category-granola"]')
    }

    async clickDesayunoMeriendaGranola(): Promise<void> {
        await this.click(this.GRANOLA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaGranola(): Promise<void> {
        await this.clickDesayunoMeriendaGranola()
    }
}
