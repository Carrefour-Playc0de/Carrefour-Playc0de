import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeToallitasHumedas extends BasePage {

    readonly TOALLITAS_HUMEDAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TOALLITAS_HUMEDAS = this.page.locator('//a [@id="menu-item-category-toallitas-humedas"]')
    }

    async clickMundoBebeToallitasHumedas(): Promise<void> {
        await this.click(this.TOALLITAS_HUMEDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeToallitasHumedas(): Promise<void> {
        await this.clickMundoBebeToallitasHumedas()
    }
}
