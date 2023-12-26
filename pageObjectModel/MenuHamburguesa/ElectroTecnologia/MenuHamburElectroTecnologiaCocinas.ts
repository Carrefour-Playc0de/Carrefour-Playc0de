import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaCocinas extends BasePage {

    readonly COCINAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.COCINAS =this.page.locator('//a [@id="menu-item-category-cocinas"]')
    }

    async clickElectroTecnologiaCocinas(): Promise<void> {
        await this.click(this.COCINAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaCocinas(): Promise<void> {
        await this.clickElectroTecnologiaCocinas()
    }
}
