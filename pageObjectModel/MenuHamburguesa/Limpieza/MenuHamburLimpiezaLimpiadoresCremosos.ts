import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiadoresCremosos extends BasePage {

    readonly LIMPIADORES_CREMOSOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIADORES_CREMOSOS = this.page.locator('//a [@id="menu-item-category-limpiadores-cremosos"]')
    }

    async clickLimpiezaLimpiadoresCremosos(): Promise<void> {
        await this.click(this.LIMPIADORES_CREMOSOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaLimpiadoresCremosos(): Promise<void> {
        await this.clickLimpiezaLimpiadoresCremosos()
    }
}
