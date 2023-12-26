import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburguesaBebidasCervezas extends BasePage {

    readonly CERVEZAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CERVEZAS = this.page.locator('//*[@id="menu-item-category-cervezas"]/div[contains(text(),\'Cervezas\')]');
    }

    async clickBebidasCervezas(): Promise<void> {
        await this.click(this.CERVEZAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasCervezas(): Promise<void> {
        await this.clickBebidasCervezas()
    }
}
