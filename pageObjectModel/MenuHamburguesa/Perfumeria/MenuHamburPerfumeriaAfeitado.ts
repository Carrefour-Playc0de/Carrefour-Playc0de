import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaAfeitado extends BasePage {

    readonly AFEITADO: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AFEITADO = this.page.locator('//* [@id="menu-item-category-afeitado"]')
    }

    async clickPerfumeriaAfeitado(): Promise<void> {
        await this.click(this.AFEITADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaAfeitado(): Promise<void> {
        await this.clickPerfumeriaAfeitado()
    }
}
