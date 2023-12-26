import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaBocaditosConfitesTurrones extends BasePage {

    readonly BOCADITOS_CONFITES_TURRONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BOCADITOS_CONFITES_TURRONES = this.page.locator('//a [@id="menu-item-category-bocaditos-confites-turrones"]')
    }

    async clickDesayunoMeriendaBocaditosConfitesTurrones(): Promise<void> {
        await this.click(this.BOCADITOS_CONFITES_TURRONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaBocaditosConfitesTurrones(): Promise<void> {
        await this.clickDesayunoMeriendaBocaditosConfitesTurrones()
    }
}
