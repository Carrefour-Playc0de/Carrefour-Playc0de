import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeParaBanio extends BasePage {

    readonly PARA_BANIO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARA_BANIO = this.page.locator('//a [@id="menu-item-category-para-baño"]')
    }

    async clickMundoBebeParaBanio(): Promise<void> {
        await this.click(this.PARA_BANIO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMundoBebeParaBanio(): Promise<void> {
        await this.clickMundoBebeParaBanio()
    }
}
