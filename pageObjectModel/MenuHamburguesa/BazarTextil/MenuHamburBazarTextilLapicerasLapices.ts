import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLapicerasLapices extends BasePage {

    readonly LAPICERAS_LAPICES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAPICERAS_LAPICES = this.page.locator('//a [@id="menu-item-category-lapiceras-lapices"]')
    }

    async clickBazarTextilLapicerasLapices(): Promise<void> {
        await this.click(this.LAPICERAS_LAPICES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLapicerasLapices(): Promise<void> {
        await this.clickBazarTextilLapicerasLapices()
    }
}
