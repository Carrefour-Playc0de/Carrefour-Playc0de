import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAnafes extends BasePage {

    readonly ANAFES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.ANAFES = this.page.locator('//div[contains(text(),\'Anafes\')]')
        this.ANAFES = this.page.locator('//a [@id="menu-item-category-anafes"]')
    }

    async clickElectroTecnologiaAnafes(): Promise<void> {
        await this.click(this.ANAFES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAnafes(): Promise<void> {
        await this.clickElectroTecnologiaAnafes()
    }
}
