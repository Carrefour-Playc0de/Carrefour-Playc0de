import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilParaColorear extends BasePage {

    readonly PARA_COLOREAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PARA_COLOREAR = this.page.locator('//a [@id="menu-item-category-para-colorear"]')
    }

    async clickBazarTextilParaColorear(): Promise<void> {
        await this.click(this.PARA_COLOREAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilParaColorear(): Promise<void> {
        await this.clickBazarTextilParaColorear()
    }
}
