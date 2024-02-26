import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeJabones extends BasePage {

    readonly JABONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.JABONES = this.page.locator('//a [@id="menu-item-category-jabones-baño"]')
    }

    async clickMundoBebeJabones(): Promise<void> {
        await this.click(this.JABONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMundoBebeJabones(): Promise<void> {
        await this.clickMundoBebeJabones()
    }
}
