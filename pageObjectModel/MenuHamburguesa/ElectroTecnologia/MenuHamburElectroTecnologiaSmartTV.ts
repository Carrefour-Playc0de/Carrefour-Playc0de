import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSmartTV extends BasePage {

    readonly SMART_TV: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SMART_TV =this.page.locator('//a [@id="menu-item-category-smart"]')
    }

    async clickElectroTecnologiaSmartTV(): Promise<void> {
        await this.click(this.SMART_TV)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSmartTV(): Promise<void> {
        await this.clickElectroTecnologiaSmartTV()
    }
}
