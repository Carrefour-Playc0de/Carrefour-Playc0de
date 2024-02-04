import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCongeladosComidasPanificados extends BasePage {

    readonly COMIDAS_PANIFICADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COMIDAS_PANIFICADOS = this.page.locator('//a [@id="menu-item-category-lavandinas"]');
    }

    async clickCongeladosComidasPanificados(): Promise<void> {
        await this.click(this.COMIDAS_PANIFICADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(5000)
    }

    async navigateToMenuHamburCongeladosComidasPanificados(): Promise<void> {
        await this.clickCongeladosComidasPanificados()
    }
}
