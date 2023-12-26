import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCerealesBarritas extends BasePage {

    readonly CEREALES_BARRITAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CEREALES_BARRITAS = this.page.locator('//a [@id="menu-item-category-cereales-barritas"]')
    }

    async clickDesayunoMeriendaCerealesBarritas(): Promise<void> {
        await this.click(this.CEREALES_BARRITAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCerealesBarritas(): Promise<void> {
        await this.clickDesayunoMeriendaCerealesBarritas()
    }
}
