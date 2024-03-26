import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaDesmaquillantes extends BasePage {

    readonly DESMAQUILLANTES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESMAQUILLANTES = this.page.locator('//*[@id="menu-item-category-desmaquillantes"]')
    }

    async clickPerfumeriaDesmaquillantes(): Promise<void> {
        await this.click(this.DESMAQUILLANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaDesmaquillantes(): Promise<void> {
        await this.clickPerfumeriaDesmaquillantes()
    }
}
