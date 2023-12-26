import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCocinaComedor extends BasePage {

    readonly COCINA_COMEDOR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COCINA_COMEDOR = this.page.locator('//a [@id="menu-item-category-bazar"]');
    }

    async clickBazarTextilCocinaComedor(): Promise<void> {
        await this.click(this.COCINA_COMEDOR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCocinaComedor(): Promise<void> {
        await this.clickBazarTextilCocinaComedor()
    }
}
