import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAceitesOliva extends BasePage {

    readonly ACEITES_OLIVA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_OLIVA = this.page.locator('//a [@id="menu-item-category-aceites-oliva"]')
    }

    async clickAlmacenAceitesOliva(): Promise<void> {
        await this.click(this.ACEITES_OLIVA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitesOliva(): Promise<void> {
        await this.clickAlmacenAceitesOliva()
    }
}
