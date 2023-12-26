import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasAguasSaborizadas extends BasePage {

    readonly AGUAS_SABORIZADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGUAS_SABORIZADAS = this.page.locator('//a [@id="menu-item-category-aguas-saborizadas"]')
    }

    async clickBebidasAguasSaborizadas(): Promise<void> {
        await this.click(this.AGUAS_SABORIZADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasAguasSaborizadas(): Promise<void> {
        await this.clickBebidasAguasSaborizadas()
    }
}
