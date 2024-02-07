import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiadoresLiquidos extends BasePage {

    readonly LIMPIADORES_LIQUIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIADORES_LIQUIDOS = this.page.locator('//a [@id="menu-item-category-limpiadores-liquidos"]')
    }

    async clickLimpiezaLimpiadoresLiquidos(): Promise<void> {
        await this.click(this.LIMPIADORES_LIQUIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaLimpiadoresLiquidos(): Promise<void> {
        await this.clickLimpiezaLimpiadoresLiquidos()
    }
}
