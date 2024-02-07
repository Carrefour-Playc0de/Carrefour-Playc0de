import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaPapelesHigienicos extends BasePage {

    readonly PAPELES_HIGIENICOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PAPELES_HIGIENICOS = this.page.locator('//a [@id="menu-item-category-papel-higienico"]')
    }

    async clickLimpiezaPapelesHigienicos(): Promise<void> {
        await this.click(this.PAPELES_HIGIENICOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLimpiezaPapelesHigienicos(): Promise<void> {
        await this.clickLimpiezaPapelesHigienicos()
    }
}
