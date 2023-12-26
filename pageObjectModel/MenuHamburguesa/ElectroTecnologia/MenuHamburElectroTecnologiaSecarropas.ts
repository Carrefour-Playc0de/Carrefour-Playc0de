import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaSecarropas extends BasePage {

    readonly SECARROPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SECARROPAS =this.page.locator('//a [@id="menu-item-category-secarropas"]')
    }

    async clickElectroTecnologiaSecarropas(): Promise<void> {
        await this.click(this.SECARROPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaSecarropas(): Promise<void> {
        await this.clickElectroTecnologiaSecarropas()
    }
}
