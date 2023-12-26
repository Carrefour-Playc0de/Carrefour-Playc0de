import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaRadios extends BasePage {

    readonly RADIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RADIOS =this.page.locator('//a [@id="menu-item-category-radios"]')
    }

    async clickElectroTecnologiaRadios(): Promise<void> {
        await this.click(this.RADIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaRadios(): Promise<void> {
        await this.clickElectroTecnologiaRadios()
    }
}
