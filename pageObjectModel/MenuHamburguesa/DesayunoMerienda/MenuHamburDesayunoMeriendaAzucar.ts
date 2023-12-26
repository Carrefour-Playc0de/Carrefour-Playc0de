import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaAzucar extends BasePage {

    readonly AZUCAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AZUCAR = this.page.locator('//a [@id="menu-item-category-azucar"]')
    }

    async clickDesayunoMeriendaAzucar(): Promise<void> {
        await this.click(this.AZUCAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaAzucar(): Promise<void> {
        await this.clickDesayunoMeriendaAzucar()
    }
}
