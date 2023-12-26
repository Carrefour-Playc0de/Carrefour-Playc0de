import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaTablets extends BasePage {

    readonly TABLETS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TABLETS =this.page.locator('//a [@id="menu-item-category-tablets"]')
    }

    async clickElectroTecnologiaTablets(): Promise<void> {
        await this.click(this.TABLETS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaTablets(): Promise<void> {
        await this.clickElectroTecnologiaTablets()
    }
}
