import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaSandwichesEmpanadasTartas extends BasePage {

    readonly SANDWICHES_EMPANADAS_TARTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SANDWICHES_EMPANADAS_TARTAS = this.page.locator('//a [@id="menu-item-category-sandwiches-empanadas-tartas"]')
    }

    async clickPanaderiaSandwichesEmpanadasTartas(): Promise<void> {
        await this.click(this.SANDWICHES_EMPANADAS_TARTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaSandwichesEmpanadasTartas(): Promise<void> {
        await this.clickPanaderiaSandwichesEmpanadasTartas()
    }
}


