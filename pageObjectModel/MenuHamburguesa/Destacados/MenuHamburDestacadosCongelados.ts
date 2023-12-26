import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosCongelados extends BasePage {

    readonly CONGELADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONGELADOS = this.page.locator('//a [@id="menu-item-category-congelados"]')
    }

    async clickDestacadosCongelados(): Promise<void> {
        await this.click(this.CONGELADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosCongelados(): Promise<void> {
        await this.clickDestacadosCongelados()
    }
}
