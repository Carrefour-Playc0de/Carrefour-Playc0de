import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasVinosRosados extends BasePage {

    readonly VINOS_ROSADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VINOS_ROSADOS = this.page.locator('//a [@id="menu-item-category-vinos-rosados"]')
    }

    async clickBebidasVinosRosados(): Promise<void> {
        await this.click(this.VINOS_ROSADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasVinosRosados(): Promise<void> {
        await this.clickBebidasVinosRosados()
    }
}
