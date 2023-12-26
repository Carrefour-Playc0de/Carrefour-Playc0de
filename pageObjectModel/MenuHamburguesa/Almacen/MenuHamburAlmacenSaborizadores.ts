import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenSaborizadores extends BasePage {

    readonly SABORIZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SABORIZADORES = this.page.locator('//a [@id="menu-item-category-saborizadores"]')
    }

    async clickAlmacenSaborizadores(): Promise<void> {
        await this.click(this.SABORIZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenSaborizadores(): Promise<void> {
        await this.clickAlmacenSaborizadores()
    }
}
