import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaHombre extends BasePage {

    readonly HOMBRE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.HOMBRE = this.page.locator('//a [@id="menu-item-category-indumentaria-adultos-hombre"]')
        this.HOMBRE = this.page.locator("(//div[contains(text(),'Hombre')])[1]")
    }

    async clickIndumentariaHombre(): Promise<void> {
        await this.click(this.HOMBRE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async MenuHamburIndumentariaHombre(): Promise<void> {
        await this.clickIndumentariaHombre()
    }
}
