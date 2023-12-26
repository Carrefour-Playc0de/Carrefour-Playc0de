import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosFiambres extends BasePage {

    readonly FIAMBRES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FIAMBRES = this.page.locator('//a [@id="menu-item-category-fiambres"]')
    }

    async clickLacteosProdsFrescosFiambres(): Promise<void> {
        await this.click(this.FIAMBRES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosFiambres(): Promise<void> {
        await this.clickLacteosProdsFrescosFiambres()
    }
}
