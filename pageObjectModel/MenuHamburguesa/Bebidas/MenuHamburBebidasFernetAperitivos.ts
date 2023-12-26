import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasFernetAperitivos extends BasePage {

    readonly FERNET_APERITIVOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FERNET_APERITIVOS = this.page.locator('//a [@id="menu-item-category-fernet-aperitivos"]')
    }

    async clickBebidasFernetAperitivos(): Promise<void> {
        await this.click(this.FERNET_APERITIVOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasFernetAperitivos(): Promise<void> {
        await this.clickBebidasFernetAperitivos()
    }
}
