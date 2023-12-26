import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaMateCocido extends BasePage {

    readonly MATE_COCIDO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MATE_COCIDO = this.page.locator('//a [@id="menu-item-category-mate-cocido"]')
    }

    async clickDesayunoMeriendaMateCocido(): Promise<void> {
        await this.click(this.MATE_COCIDO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaMateCocido(): Promise<void> {
        await this.clickDesayunoMeriendaMateCocido()
    }
}
