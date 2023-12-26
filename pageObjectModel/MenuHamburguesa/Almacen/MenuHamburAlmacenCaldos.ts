import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenCaldos extends BasePage {

    readonly CALDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CALDOS = this.page.locator('//a [@id="menu-item-category-caldos"]')
    }

    async clickAlmacenCaldos(): Promise<void> {
        await this.click(this.CALDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenCaldos(): Promise<void> {
        await this.clickAlmacenCaldos()
    }
}
