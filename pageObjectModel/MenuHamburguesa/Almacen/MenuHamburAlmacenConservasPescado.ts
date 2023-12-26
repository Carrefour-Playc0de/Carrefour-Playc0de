import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenConservasPescado extends BasePage {

    readonly CONSERVAS_PESCADO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSERVAS_PESCADO = this.page.locator('//a [@id="menu-item-category-conservas-pescado"]')
    }

    async clickAlmacenConservasPescado(): Promise<void> {
        await this.click(this.CONSERVAS_PESCADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenConservasPescado(): Promise<void> {
        await this.clickAlmacenConservasPescado()
    }
}
