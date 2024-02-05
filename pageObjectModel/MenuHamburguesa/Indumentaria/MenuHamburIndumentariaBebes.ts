import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaBebes extends BasePage {

    readonly BEBE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.BEBE = this.page.locator('//a [@id="menu-item-category-indumentaria-bebes"]')
        this.BEBE = this.page.locator("(//div[contains(text(),'Bebés')])[1]")
    }

    async clickIndumentariaBebes(): Promise<void> {
        await this.click(this.BEBE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburIndumentariaBebes(): Promise<void> {
        await this.clickIndumentariaBebes()
    }
}
