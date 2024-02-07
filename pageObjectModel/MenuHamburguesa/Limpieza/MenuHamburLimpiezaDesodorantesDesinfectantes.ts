import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaDesodorantesDesinfectantes extends BasePage {

    readonly DESODORANTES_DESINFECTANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESODORANTES_DESINFECTANTES = this.page.locator('//a [@id="menu-item-category-desodorantes-desinfectantes"]')
    }

    async clickLimpiezaDesodorantesDesinfectantes(): Promise<void> {
        await this.click(this.DESODORANTES_DESINFECTANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaDesodorantesDesinfectantes(): Promise<void> {
        await this.clickLimpiezaDesodorantesDesinfectantes()
    }
}
