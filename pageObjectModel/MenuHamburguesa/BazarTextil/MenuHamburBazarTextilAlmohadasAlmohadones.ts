import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAlmohadasAlmohadones extends BasePage {

    readonly ALMOHADAS_ALMOHADONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ALMOHADAS_ALMOHADONES = this.page.locator('//a [@id="menu-item-category-almohadas-y-almohadones"]')
    }

    async clickBazarTextilAlmohadasAlmohadones(): Promise<void> {
        await this.click(this.ALMOHADAS_ALMOHADONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAlmohadasAlmohadones(): Promise<void> {
        await this.clickBazarTextilAlmohadasAlmohadones()
    }
}
