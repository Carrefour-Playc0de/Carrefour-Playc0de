import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaAdultos extends BasePage {

    readonly ADULTOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ADULTOS = this.page.locator('//a [@id="menu-item-category-indumentaria-adultos"]')
    }

    async clickIndumentariaAdultos(): Promise<void> {
        await this.click(this.ADULTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburIndumentariaAdultos(): Promise<void> {
        await this.clickIndumentariaAdultos()
    }
}
