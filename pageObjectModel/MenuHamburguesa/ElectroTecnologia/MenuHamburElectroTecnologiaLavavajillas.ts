import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaLavavajillas extends BasePage {

    readonly LAVAVAJILLAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAVAVAJILLAS =this.page.locator('//a [@id="menu-item-category-lavavajillas"]')
    }

    async clickElectroTecnologiaLavavajillas(): Promise<void> {
        await this.click(this.LAVAVAJILLAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaLavavajillas(): Promise<void> {
        await this.clickElectroTecnologiaLavavajillas()
    }
}
