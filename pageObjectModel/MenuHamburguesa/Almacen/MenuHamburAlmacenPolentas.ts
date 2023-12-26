import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPolentas extends BasePage {

    readonly POLENTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.POLENTAS = this.page.locator('//a [@id="menu-item-category-polentas"]')
    }

    async clickAlmacenPolentas(): Promise<void> {
        await this.click(this.POLENTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPolentas(): Promise<void> {
        await this.clickAlmacenPolentas()
    }
}
