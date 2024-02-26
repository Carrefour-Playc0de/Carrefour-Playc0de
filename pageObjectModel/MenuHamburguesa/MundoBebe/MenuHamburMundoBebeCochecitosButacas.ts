import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeCochecitosButacas extends BasePage {

    readonly COCHECITOS_BUTACAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COCHECITOS_BUTACAS = this.page.locator('//a [@id="menu-item-category-cochecitos-butacas"]')
    }

    async clickMundoBebeCochecitosButacas(): Promise<void> {
        await this.click(this.COCHECITOS_BUTACAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeCochecitosButacas(): Promise<void> {
        await this.clickMundoBebeCochecitosButacas()
    }
}
