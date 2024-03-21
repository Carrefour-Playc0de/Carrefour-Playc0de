import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaHigieneIntima extends BasePage {

    readonly HIGIENE_INTIMA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HIGIENE_INTIMA = this.page.locator('//* [@id="menu-item-category-higiene-intima"]')
    }

    async clickPerfumeriaHigieneIntima(): Promise<void> {
        await this.click(this.HIGIENE_INTIMA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaHigieneIntima(): Promise<void> {
        await this.clickPerfumeriaHigieneIntima()
    }
}
