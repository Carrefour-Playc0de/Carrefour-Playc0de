import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilVajillaInfantil extends BasePage {

    readonly VAJILLA_INFANTIL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.VAJILLA_INFANTIL = this.page.locator('//a [@id="menu-item-category-vajilla-infantil"]')
    }

    async clickBazarTextilVajillaInfantil(): Promise<void> {
        await this.click(this.VAJILLA_INFANTIL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilVajillaInfantil(): Promise<void> {
        await this.clickBazarTextilVajillaInfantil()
    }
}
