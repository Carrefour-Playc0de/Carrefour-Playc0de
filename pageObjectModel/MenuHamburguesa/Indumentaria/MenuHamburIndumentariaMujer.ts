import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaMujer extends BasePage {

    readonly MUJER: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.MUJER = this.page.locator('//a [@id="menu-item-category-indumentaria-adultos-mujer"]')
        this.MUJER = this.page.locator("(//div[contains(text(),'Mujer')])[1]")
    }

    async clickIndumentariaMujer(): Promise<void> {
        await this.click(this.MUJER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburIndumentariaMujer(): Promise<void> {
        await this.clickIndumentariaMujer()
    }
}
