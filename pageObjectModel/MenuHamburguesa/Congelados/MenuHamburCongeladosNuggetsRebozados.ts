import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosNuggetsRebozados extends BasePage {

    readonly NUGGETS_REBOZADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NUGGETS_REBOZADOS = this.page.locator('//a [@id="menu-item-category-limpieza-hogar"]');
    }

    async clickCongeladosNuggetsRebozados(): Promise<void> {
        await this.click(this.NUGGETS_REBOZADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburCongeladosNuggetsRebozados(): Promise<void> {
        await this.clickCongeladosNuggetsRebozados()
    }
}
