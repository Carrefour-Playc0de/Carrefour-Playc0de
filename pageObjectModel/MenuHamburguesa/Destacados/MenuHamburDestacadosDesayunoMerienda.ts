import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosDesayunoMerienda extends BasePage {

    readonly DESAYUNO_MERIENDA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DESAYUNO_MERIENDA = this.page.locator('//a [@id="menu-item-category-desayuno-merienda"]')
    }

    async clickDestacadosDesayunoMerienda(): Promise<void> {
        await this.click(this.DESAYUNO_MERIENDA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosDesayunoMerienda(): Promise<void> {
        await this.clickDestacadosDesayunoMerienda()
    }
}
