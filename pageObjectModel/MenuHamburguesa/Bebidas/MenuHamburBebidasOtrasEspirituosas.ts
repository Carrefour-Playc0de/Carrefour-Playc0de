import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasOtrasEspirituosas extends BasePage {

    readonly OTRAS_ESPIRITUOSAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OTRAS_ESPIRITUOSAS = this.page.locator('//a [@id="menu-item-category-otras-espirituosas"]')
    }

    async clickBebidasOtrasEspirituosas(): Promise<void> {
        await this.click(this.OTRAS_ESPIRITUOSAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasOtrasEspirituosas(): Promise<void> {
        await this.clickBebidasOtrasEspirituosas()
    }
}
