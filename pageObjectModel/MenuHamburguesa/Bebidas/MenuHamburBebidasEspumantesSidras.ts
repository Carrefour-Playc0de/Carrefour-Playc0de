import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasEspumantesSidras extends BasePage {

    readonly ESPUMANTES_SIDRAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPUMANTES_SIDRAS = this.page.locator('//a [@id="menu-item-category-espumantes-sidras"]')
    }

    async clickBebidasEspumantesSidras(): Promise<void> {
        await this.click(this.ESPUMANTES_SIDRAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasEspumantesSidras(): Promise<void> {
        await this.clickBebidasEspumantesSidras()
    }
}
