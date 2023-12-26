import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaBizcochitos extends BasePage {

    readonly BIZCOCHITOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BIZCOCHITOS = this.page.locator('//a [@id="menu-item-category-bizcochitos"]');
    }

    async clickDesayunoMeriendaBizcochitos(): Promise<void> {
        await this.click(this.BIZCOCHITOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaBizcochitos(): Promise<void> {
        await this.clickDesayunoMeriendaBizcochitos()
    }
}
