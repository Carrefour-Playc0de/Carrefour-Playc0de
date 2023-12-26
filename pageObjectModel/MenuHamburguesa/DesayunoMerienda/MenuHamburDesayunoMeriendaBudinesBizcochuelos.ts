import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaBudinesBizcochuelos extends BasePage {

    readonly BUDINES_BIZCOCHUELOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BUDINES_BIZCOCHUELOS = this.page.locator('//a [@id="menu-item-category-budines-bizcochuelos"]')
    }

    async clickDesayunoMeriendaBudinesBizcochuelos(): Promise<void> {
        await this.click(this.BUDINES_BIZCOCHUELOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaBudinesBizcochuelos(): Promise<void> {
        await this.clickDesayunoMeriendaBudinesBizcochuelos()
    }
}
