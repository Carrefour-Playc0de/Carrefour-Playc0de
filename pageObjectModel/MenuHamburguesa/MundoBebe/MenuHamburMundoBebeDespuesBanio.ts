import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeDespuesBanio extends BasePage {

    readonly DESPUES_BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESPUES_BANIO = this.page.locator('//a [@id="menu-item-category-despues-baño"]')
    }

    async clickMundoBebeDespuesBanio(): Promise<void> {
        await this.click(this.DESPUES_BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeDespuesBanio(): Promise<void> {
        await this.clickMundoBebeDespuesBanio()
    }
}
