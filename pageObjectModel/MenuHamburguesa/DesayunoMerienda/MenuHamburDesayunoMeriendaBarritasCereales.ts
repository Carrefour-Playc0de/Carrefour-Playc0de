import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaBarritasCereales extends BasePage {

    readonly BARRITAS_CEREALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BARRITAS_CEREALES = this.page.locator('//a [@id="menu-item-category-barritas-cereales"]')
    }

    async clickDesayunoMeriendaBarritasCereales(): Promise<void> {
        await this.click(this.BARRITAS_CEREALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaBarritasCereales(): Promise<void> {
        await this.clickDesayunoMeriendaBarritasCereales()
    }
}
