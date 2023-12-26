import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAceitesComunes extends BasePage {
    readonly ACEITES_COMUNES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_COMUNES = this.page.locator('//a [@id="menu-item-category-aceites-comunes"]')
    }

    async clickAlmacenAceitesComunes(): Promise<void> {
        await this.click(this.ACEITES_COMUNES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitesComunes(): Promise<void> {
        await this.clickAlmacenAceitesComunes()
    }
}
