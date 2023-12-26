import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaLavasecarropas extends BasePage {

    readonly LAVASECARROPAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAVASECARROPAS =this.page.locator('//a [@id="menu-item-category-lavasecarropas"]')
    }

    async clickElectroTecnologiaLavasecarropas(): Promise<void> {
        await this.click(this.LAVASECARROPAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaLavasecarropas(): Promise<void> {
        await this.clickElectroTecnologiaLavasecarropas()
    }
}
