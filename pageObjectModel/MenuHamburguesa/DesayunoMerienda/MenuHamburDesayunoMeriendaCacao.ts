import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaCacao extends BasePage {

    readonly CACAO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CACAO = this.page.locator('//a [@id="menu-item-category-cacao"]')
    }

    async clickDesayunoMeriendaCacao(): Promise<void> {
        await this.click(this.CACAO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaCacao(): Promise<void> {
        await this.clickDesayunoMeriendaCacao()
    }
}
