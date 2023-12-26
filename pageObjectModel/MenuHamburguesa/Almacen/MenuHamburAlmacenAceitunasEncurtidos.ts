import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAceitunasEncurtidos extends BasePage {

    readonly ACEITUNAS_ENCURTIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITUNAS_ENCURTIDOS = this.page.locator('//a [@id="menu-item-category-aceitunas-encurtidos"]')
    }

    async clickAlmacenAceitunasEncurtidos(): Promise<void> {
        await this.click(this.ACEITUNAS_ENCURTIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitunasEncurtidos(): Promise<void> {
        await this.clickAlmacenAceitunasEncurtidos()
    }
}
