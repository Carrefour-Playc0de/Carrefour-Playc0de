import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaPlanchas extends BasePage {

    readonly PLANCHAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PLANCHAS =this.page.locator('//a [@id="menu-item-category-planchas"]')
    }

    async clickElectroTecnologiaPlanchas(): Promise<void> {
        await this.click(this.PLANCHAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaPlanchas(): Promise<void> {
        await this.clickElectroTecnologiaPlanchas()
    }
}
