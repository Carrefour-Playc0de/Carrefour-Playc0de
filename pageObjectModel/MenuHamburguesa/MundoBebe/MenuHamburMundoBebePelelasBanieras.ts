import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebePelelasBanieras extends BasePage {

    readonly PELELAS_BANIERAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PELELAS_BANIERAS = this.page.locator('//a [@id="menu-item-category-pelelas-bañeras"]')
    }

    async clickMundoBebePelelasBanieras(): Promise<void> {
        await this.click(this.PELELAS_BANIERAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebePelelasBanieras(): Promise<void> {
        await this.clickMundoBebePelelasBanieras()
    }
}
