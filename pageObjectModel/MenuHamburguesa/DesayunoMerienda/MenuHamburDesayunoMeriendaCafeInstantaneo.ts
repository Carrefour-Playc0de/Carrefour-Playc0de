import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCafeInstantaneo extends BasePage {

    readonly CAFE_INSTANTANEO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAFE_INSTANTANEO = this.page.locator('//a [@id="menu-item-category-cafe-instrantaneo"]')
    }

    async clickDesayunoMeriendaCafeInstantaneo(): Promise<void> {
        await this.click(this.CAFE_INSTANTANEO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCafeInstantaneo(): Promise<void> {
        await this.clickDesayunoMeriendaCafeInstantaneo()
    }
}
