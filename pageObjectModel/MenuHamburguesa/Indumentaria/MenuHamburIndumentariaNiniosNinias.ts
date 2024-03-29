import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburIndumentariaNiniosNinias extends BasePage {

    readonly NINIOS_NINIAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NINIOS_NINIAS = this.page.locator('//a [@id="menu-item-category-indumentaria-ninos"]')
    }

    async clickIndumentariaNiniosNinias(): Promise<void> {
        await this.click(this.NINIOS_NINIAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburIndumentariaNiniosNinias(): Promise<void> {
        await this.clickIndumentariaNiniosNinias()
    }
}
