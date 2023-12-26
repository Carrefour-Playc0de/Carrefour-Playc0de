import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaGaming extends BasePage {

    readonly GAMING: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.GAMING =this.page.locator('//a [@id="menu-item-category-gaming"]')
    }

    async clickElectroTecnologiaGaming(): Promise<void> {
        await this.click(this.GAMING)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaGaming(): Promise<void> {
        await this.clickElectroTecnologiaGaming()
    }
}
