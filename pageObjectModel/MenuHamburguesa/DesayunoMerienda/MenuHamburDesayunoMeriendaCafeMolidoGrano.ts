import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCafeMolidoGrano extends BasePage {

    readonly CAFE_MOLIDO_GRANO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAFE_MOLIDO_GRANO = this.page.locator('//a [@id="menu-item-category-cafe-molino-grano"]')
    }

    async clickDesayunoMeriendaCafeMolidoGrano(): Promise<void> {
        await this.click(this.CAFE_MOLIDO_GRANO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCafeMolidoGrano(): Promise<void> {
        await this.clickDesayunoMeriendaCafeMolidoGrano()
    }
}
