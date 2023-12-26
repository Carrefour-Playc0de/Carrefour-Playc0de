import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaPizzasPrepizzas extends BasePage {

    readonly PIZZAS_PREPIZZAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PIZZAS_PREPIZZAS = this.page.locator('//a [@id="menu-item-category-pizzas-prepizzas"]')
    }

    async clickPanaderiaPizzasPrepizzas(): Promise<void> {
        await this.click(this.PIZZAS_PREPIZZAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaPizzasPrepizzas(): Promise<void> {
        await this.clickPanaderiaPizzasPrepizzas()
    }
}
