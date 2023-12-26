import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilSillasBanquetas extends BasePage {

    readonly SEMILLAS_BANQUETAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SEMILLAS_BANQUETAS = this.page.locator('//a [@id="menu-item-category-sillas-banquetas"]')
    }

    async clickBazarTextilSillasBanquetas(): Promise<void> {
        await this.click(this.SEMILLAS_BANQUETAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilSillasBanquetas(): Promise<void> {
        await this.clickBazarTextilSillasBanquetas()
    }
}
